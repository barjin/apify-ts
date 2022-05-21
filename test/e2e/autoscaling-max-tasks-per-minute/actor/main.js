import { Actor } from 'apify';
import { BasicCrawler, log as defaultLog, LogLevel } from '@crawlee/basic';

const crawlerLogger = defaultLog.child({
    prefix: 'AutoscalingTest',
    // Set this to false if you want to see verbose output from the autoscaled pool
    level: true ? defaultLog.getOptions().level : LogLevel.PERF,
});

let crawlCalledAt = Date.now();

await Actor.main(async () => {
    const crawler = new BasicCrawler({
        log: crawlerLogger,
        autoscaledPoolOptions: { maxTasksPerMinute: 1 },
        requestHandler({ log }) {
            log.info(`Crawler requestHandler called after ${Date.now() - crawlCalledAt}ms`);
            crawlCalledAt = Date.now();
        },
    });

    await crawler.addRequests(['https://example.com/1', 'https://example.com/2']);
    await crawler.run();
}, { exit: false });