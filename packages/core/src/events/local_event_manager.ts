// eslint-disable-next-line max-classes-per-file
import os from 'os';
import log from '@apify/log';
import { betterClearInterval, BetterIntervalID, betterSetInterval } from '@apify/utilities';
import { getMemoryInfo } from '@crawlee/utils';
import { SystemInfo } from '../autoscaling';
import { EventManager, EventType } from './event_manager';

interface Intervals {
    persistState?: BetterIntervalID;
    systemInfo?: BetterIntervalID;
}

export class LocalEventManager extends EventManager {
    private intervals: Intervals = {};
    private previousTicks = { idle: 0, total: 0 };

    /**
     * Initializes `Actor.events` event emitter by creating a connection to a websocket that provides them.
     * This is an internal function that is automatically called by `Actor.main()`.
     */
    override async init() {
        if (this.initialized) {
            return;
        }

        await super.init();

        const systemInfoIntervalMillis = this.config.get('systemInfoIntervalMillis')!;
        this.emitSystemInfoEvent = this.emitSystemInfoEvent.bind(this);
        this.intervals.systemInfo = betterSetInterval(this.emitSystemInfoEvent.bind(this), systemInfoIntervalMillis);
    }

    /**
     * Closes websocket providing events from Actor infrastructure and also stops sending internal events
     * of Apify package such as `persistState`.
     * This is automatically called at the end of `Actor.main()`.
     */
    override async close() {
        if (!this.initialized) {
            return;
        }

        await super.close();
        betterClearInterval(this.intervals.systemInfo!);
    }

    /**
     * @internal
     */
    async emitSystemInfoEvent(intervalCallback: () => unknown) {
        const info = await this.createSystemInfo({
            maxUsedCpuRatio: this.config.get('maxUsedCpuRatio'),
        });
        this.events.emit(EventType.SYSTEM_INFO, info);
        intervalCallback();
    }

    private getCurrentCpuTicks() {
        const cpus = os.cpus();
        return cpus.reduce((acc, cpu) => {
            const cpuTimes = Object.values(cpu.times);
            return {
                idle: acc.idle + cpu.times.idle,
                total: acc.total + cpuTimes.reduce((sum, num) => sum + num),
            };
        }, { idle: 0, total: 0 });
    }

    /**
     * Creates a SystemInfo object based on local metrics.
     */
    private async createSystemInfo(options: { maxUsedCpuRatio: number }) {
        return {
            createdAt: new Date(),
            ...this.createCpuInfo(options),
            ...await this.createMemoryInfo(),
        } as SystemInfo;
    }

    private createCpuInfo(options: { maxUsedCpuRatio: number }) {
        const ticks = this.getCurrentCpuTicks();
        const idleTicksDelta = ticks.idle - this.previousTicks!.idle;
        const totalTicksDelta = ticks.total - this.previousTicks!.total;
        const usedCpuRatio = totalTicksDelta ? 1 - (idleTicksDelta / totalTicksDelta) : 0;
        Object.assign(this.previousTicks, ticks);

        return {
            cpuCurrentUsage: usedCpuRatio * 100,
            isCpuOverloaded: usedCpuRatio > options.maxUsedCpuRatio,
        };
    }

    private async createMemoryInfo() {
        try {
            const memInfo = await this._getMemoryInfo();
            const { mainProcessBytes, childProcessesBytes } = memInfo;

            return {
                memCurrentBytes: mainProcessBytes + childProcessesBytes,
            };
        } catch (err) {
            log.exception(err as Error, 'Memory snapshot failed.');
            return {};
        }
    }

    /**
     * Helper method for easier mocking.
     */
    private async _getMemoryInfo() {
        return getMemoryInfo();
    }
}
