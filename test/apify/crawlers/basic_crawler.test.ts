import log from '@apify/log';
import {
    CrawlingContext,
    FailedRequestHandler,
    RequestHandler,
    Request,
    RequestQueue,
    RequestList,
    Configuration,
    BasicCrawler,
    KeyValueStore,
    EventType,
} from '@crawlee/basic';
import { Dictionary, sleep } from '@crawlee/utils';
import { LocalStorageDirEmulator } from '../local_storage_dir_emulator';

describe('BasicCrawler', () => {
    let logLevel: number;
    let localStorageEmulator: LocalStorageDirEmulator;
    const events = Configuration.getGlobalConfig().getEventManager();

    beforeAll(async () => {
        logLevel = log.getLevel();
        log.setLevel(log.LEVELS.OFF);
        localStorageEmulator = new LocalStorageDirEmulator();
    });

    beforeEach(async () => {
        const storageDir = await localStorageEmulator.init();
        Configuration.getGlobalConfig().set('storageClientOptions', { storageDir });
    });

    afterAll(async () => {
        await localStorageEmulator.destroy();
        log.setLevel(logLevel);
    });

    test('should run in parallel thru all the requests', async () => {
        const sources = [...Array(500).keys()].map((index) => ({ url: `https://example.com/${index}` }));
        const sourcesCopy = JSON.parse(JSON.stringify(sources));

        const processed: { url: string }[] = [];
        const requestList = new RequestList({ sources });
        const requestHandler: RequestHandler = async ({ request }) => {
            await sleep(10);
            processed.push({ url: request.url });
        };

        const basicCrawler = new BasicCrawler({
            requestList,
            minConcurrency: 25,
            maxConcurrency: 25,
            requestHandler,
        });

        await requestList.initialize();
        await basicCrawler.run();

        expect(basicCrawler.autoscaledPool.minConcurrency).toBe(25);
        expect(processed).toEqual(sourcesCopy);
        expect(await requestList.isFinished()).toBe(true);
        expect(await requestList.isEmpty()).toBe(true);
    });

    test.each([EventType.MIGRATING, EventType.ABORTING])('should pause on %s event and persist RequestList state', async (event) => {
        const sources = [...Array(500).keys()].map((index) => ({ url: `https://example.com/${index + 1}` }));

        let persistResolve: (value?: unknown) => void;
        const persistPromise = new Promise((res) => { persistResolve = res; });

        // Mock the calls to persist sources.
        const getValueSpy = jest.spyOn(KeyValueStore.prototype, 'getValue');
        const setValueSpy = jest.spyOn(KeyValueStore.prototype, 'setValue');
        getValueSpy.mockResolvedValue(null);

        const processed: { url: string }[] = [];
        const requestList = await RequestList.open('reqList', sources);
        const requestHandler: RequestHandler = async ({ request }) => {
            if (request.url.endsWith('200')) events.emit(event);
            processed.push({ url: request.url });
        };

        const basicCrawler = new BasicCrawler({
            requestList,
            minConcurrency: 25,
            maxConcurrency: 25,
            requestHandler,
        });

        let finished = false;
        // Mock the call to persist state.
        setValueSpy.mockImplementationOnce(persistResolve as any);
        // The crawler will pause after 200 requests
        const runPromise = basicCrawler.run();
        void runPromise.then(() => { finished = true; });

        // need to monkeypatch the stats class, otherwise it will never finish
        basicCrawler.stats.persistState = () => Promise.resolve();
        await persistPromise;

        expect(finished).toBe(false);
        expect(await requestList.isFinished()).toBe(false);
        expect(await requestList.isEmpty()).toBe(false);
        expect(processed.length).toBe(200);

        expect(getValueSpy).toBeCalled();
        expect(setValueSpy).toBeCalled();

        // clean up
        // @ts-expect-error Accessing private method
        await basicCrawler.autoscaledPool._destroy(); // eslint-disable-line no-underscore-dangle
        getValueSpy.mockRestore();
        setValueSpy.mockRestore();
    });

    test('should retry failed requests', async () => {
        const sources = [
            { url: 'http://example.com/1' },
            { url: 'http://example.com/2' },
            { url: 'http://example.com/3' },
        ];
        const processed: Dictionary<Request> = {};
        const requestList = new RequestList({ sources });

        const requestHandler: RequestHandler = async ({ request }) => {
            await sleep(10);
            processed[request.url] = request;

            if (request.url === 'http://example.com/2') {
                throw Error(`This is ${request.retryCount}th error!`);
            }

            request.userData.foo = 'bar';
        };

        const basicCrawler = new BasicCrawler({
            requestList,
            maxRequestRetries: 10,
            minConcurrency: 3,
            maxConcurrency: 3,
            requestHandler,
        });

        await requestList.initialize();
        await basicCrawler.run();

        expect(processed['http://example.com/1'].userData.foo).toBe('bar');
        expect(processed['http://example.com/1'].errorMessages).toEqual([]);
        expect(processed['http://example.com/1'].retryCount).toBe(0);
        expect(processed['http://example.com/3'].userData.foo).toBe('bar');
        expect(processed['http://example.com/3'].errorMessages).toEqual([]);
        expect(processed['http://example.com/3'].retryCount).toBe(0);

        expect(processed['http://example.com/2'].userData.foo).toBeUndefined();
        expect(processed['http://example.com/2'].errorMessages).toHaveLength(11);
        expect(processed['http://example.com/2'].retryCount).toBe(10);

        expect(await requestList.isFinished()).toBe(true);
        expect(await requestList.isEmpty()).toBe(true);
    });

    test('should not retry requests with noRetry set to true ', async () => {
        const noRetryRequest = new Request({ url: 'http://example.com/3' });
        noRetryRequest.noRetry = true;

        const sources = [
            { url: 'http://example.com/1', noRetry: true },
            { url: 'http://example.com/2' },
            noRetryRequest,
        ];
        const processed: Dictionary<Request> = {};
        const requestList = new RequestList({ sources });

        const requestHandler: RequestHandler = async ({ request }) => {
            await sleep(10);
            processed[request.url] = request;
            request.userData.foo = 'bar';
            throw Error(`This is ${request.retryCount}th error!`);
        };

        let failedRequestHandlerCalls = 0;
        const failedRequestHandler = async () => {
            failedRequestHandlerCalls++;
        };

        const basicCrawler = new BasicCrawler({
            requestList,
            maxRequestRetries: 10,
            minConcurrency: 3,
            maxConcurrency: 3,
            requestHandler,
            failedRequestHandler,
        });

        await requestList.initialize();
        await basicCrawler.run();

        expect(processed['http://example.com/1'].userData.foo).toBe('bar');
        expect(processed['http://example.com/1'].errorMessages).toHaveLength(1);
        expect(processed['http://example.com/1'].retryCount).toBe(0);
        expect(processed['http://example.com/3'].userData.foo).toBe('bar');
        expect(processed['http://example.com/3'].errorMessages).toHaveLength(1);
        expect(processed['http://example.com/3'].retryCount).toBe(0);

        expect(processed['http://example.com/2'].userData.foo).toBe('bar');
        expect(processed['http://example.com/2'].errorMessages).toHaveLength(11);
        expect(processed['http://example.com/2'].retryCount).toBe(10);

        expect(failedRequestHandlerCalls).toBe(3);

        expect(await requestList.isFinished()).toBe(true);
        expect(await requestList.isEmpty()).toBe(true);
    });

    test('should allow to handle failed requests', async () => {
        const sources = [
            { url: 'http://example.com/1' },
            { url: 'http://example.com/2' },
            { url: 'http://example.com/3' },
        ];
        const processed: Dictionary<Request> = {};
        const failed: Dictionary<Request> = {};
        const errors: Error[] = [];
        const requestList = new RequestList({ sources });

        const requestHandler: RequestHandler = async ({ request }) => {
            await Promise.reject(new Error('some-error'));
            processed[request.url] = request;
        };

        const failedRequestHandler: FailedRequestHandler = async ({ request, error }) => {
            failed[request.url] = request;
            errors.push(error);
        };

        const basicCrawler = new BasicCrawler({
            requestList,
            requestHandler,
            failedRequestHandler,
        });

        await requestList.initialize();
        await basicCrawler.run();

        expect(failed['http://example.com/1'].errorMessages).toHaveLength(4);
        expect(failed['http://example.com/1'].retryCount).toBe(3);
        expect(failed['http://example.com/2'].errorMessages).toHaveLength(4);
        expect(failed['http://example.com/2'].retryCount).toBe(3);
        expect(failed['http://example.com/3'].errorMessages).toHaveLength(4);
        expect(failed['http://example.com/3'].retryCount).toBe(3);
        expect(Object.values(failed)).toHaveLength(3);
        expect(Object.values(processed)).toHaveLength(0);
        expect(await requestList.isFinished()).toBe(true);
        expect(await requestList.isEmpty()).toBe(true);
        errors.forEach((error) => expect(error).toBeInstanceOf(Error));
    });

    test('should correctly combine RequestList and RequestQueue', async () => {
        const sources = [
            { url: 'http://example.com/0' },
            { url: 'http://example.com/1' },
            { url: 'http://example.com/2' },
        ];
        const processed: Dictionary<Request> = {};
        const requestList = new RequestList({ sources });
        const requestQueue = new RequestQueue({ id: 'xxx', client: Configuration.getStorageClient() });

        const requestHandler: RequestHandler = async ({ request }) => {
            await sleep(10);
            processed[request.url] = request;

            if (request.url === 'http://example.com/1') {
                throw Error(`This is ${request.retryCount}th error!`);
            }

            request.userData.foo = 'bar';
        };

        const basicCrawler = new BasicCrawler({
            requestList,
            requestQueue,
            maxRequestRetries: 3,
            minConcurrency: 1,
            maxConcurrency: 1,
            requestHandler,
        });

        jest.spyOn(requestQueue, 'handledCount').mockResolvedValueOnce(0);

        jest.spyOn(requestQueue, 'addRequest')
            .mockResolvedValueOnce({ requestId: 'id-0' } as any)
            .mockResolvedValueOnce({ requestId: 'id-1' } as any)
            .mockResolvedValueOnce({ requestId: 'id-2' } as any);

        const request0 = new Request({ id: 'id-0', ...sources[0] });
        const request1 = new Request({ id: 'id-1', ...sources[1] });
        const request2 = new Request({ id: 'id-2', ...sources[2] });

        jest.spyOn(requestQueue, 'fetchNextRequest')
            .mockResolvedValueOnce(request0)
            .mockResolvedValueOnce(request1)
            .mockResolvedValueOnce(request2)
            .mockResolvedValueOnce(request1)
            .mockResolvedValueOnce(request1)
            .mockResolvedValueOnce(request1);

        const markReqHandled = jest.spyOn(requestQueue, 'markRequestHandled').mockReturnValue(Promise.resolve() as any);
        const reclaimReq = jest.spyOn(requestQueue, 'reclaimRequest').mockReturnValue(Promise.resolve() as any);

        jest.spyOn(requestQueue, 'isEmpty')
            .mockResolvedValueOnce(false)
            .mockResolvedValueOnce(false)
            .mockResolvedValueOnce(false)
            .mockResolvedValueOnce(true);

        jest.spyOn(requestQueue, 'isFinished')
            .mockResolvedValueOnce(true);

        await requestList.initialize();
        await basicCrawler.run();

        // 1st try

        expect(reclaimReq).toBeCalledWith(request1);
        expect(reclaimReq).toBeCalledTimes(3);

        expect(processed['http://example.com/0'].userData.foo).toBe('bar');
        expect(processed['http://example.com/0'].errorMessages).toEqual([]);
        expect(processed['http://example.com/0'].retryCount).toBe(0);
        expect(processed['http://example.com/2'].userData.foo).toBe('bar');
        expect(processed['http://example.com/2'].errorMessages).toEqual([]);
        expect(processed['http://example.com/2'].retryCount).toBe(0);

        expect(processed['http://example.com/1'].userData.foo).toBeUndefined();
        expect(processed['http://example.com/1'].errorMessages).toHaveLength(4);
        expect(processed['http://example.com/1'].retryCount).toBe(3);

        expect(await requestList.isFinished()).toBe(true);
        expect(await requestList.isEmpty()).toBe(true);

        jest.restoreAllMocks();
    });

    test('should say that task is not ready requestList is not set and requestQueue is empty', async () => {
        const requestQueue = new RequestQueue({ id: 'xxx', client: Configuration.getStorageClient() });
        requestQueue.isEmpty = () => Promise.resolve(true);

        const crawler = new BasicCrawler({
            requestQueue,
            requestHandler: async () => {},
        });

        // @ts-expect-error Accessing private prop
        expect(await crawler._isTaskReadyFunction()).toBe(false); // eslint-disable-line no-underscore-dangle
    });

    test('should be possible to override isFinishedFunction of underlying AutoscaledPool', async () => {
        const requestQueue = new RequestQueue({ id: 'xxx', client: Configuration.getStorageClient() });
        const processed: Request[] = [];
        const queue: Request[] = [];
        let isFinished = false;

        const basicCrawler = new BasicCrawler({
            requestQueue,
            autoscaledPoolOptions: {
                minConcurrency: 1,
                maxConcurrency: 1,
                isFinishedFunction: () => {
                    return Promise.resolve(isFinished);
                },
            },
            requestHandler: async ({ request }) => {
                await sleep(10);
                processed.push(request);
            },
        });

        // Speed up the test
        // @ts-expect-error Accessing private prop
        basicCrawler.autoscaledPoolOptions.maybeRunIntervalSecs = 0.05;

        const request0 = new Request({ url: 'http://example.com/0' });
        const request1 = new Request({ url: 'http://example.com/1' });

        jest.spyOn(requestQueue, 'handledCount').mockReturnValue(Promise.resolve() as any);
        const markRequestHandled = jest.spyOn(requestQueue, 'markRequestHandled')
            .mockReturnValue(Promise.resolve() as any);

        const isFinishedOrig = jest.spyOn(requestQueue, 'isFinished').mockImplementation();

        requestQueue.fetchNextRequest = () => Promise.resolve(queue.pop());
        requestQueue.isEmpty = () => Promise.resolve(!queue.length);

        setTimeout(() => queue.push(request0), 10);
        setTimeout(() => queue.push(request1), 100);
        setTimeout(() => { isFinished = true; }, 150);

        await basicCrawler.run();

        expect(markRequestHandled).toBeCalledWith(request0);
        expect(markRequestHandled).toBeCalledWith(request1);
        expect(isFinishedOrig).not.toBeCalled();

        // TODO: see why the request1 was passed as a second parameter to includes
        expect(processed.includes(request0)).toBe(true);

        jest.restoreAllMocks();
    });

    test('should support maxRequestsPerCrawl parameter', async () => {
        const sources = [
            { url: 'http://example.com/1' },
            { url: 'http://example.com/2' },
            { url: 'http://example.com/3' },
            { url: 'http://example.com/4' },
            { url: 'http://example.com/5' },
        ];
        const processed: Dictionary<Request> = {};
        const requestList = new RequestList({ sources });

        const requestHandler: RequestHandler = async ({ request }) => {
            await sleep(10);
            processed[request.url] = request;
            if (request.url === 'http://example.com/2') throw Error();
            request.userData.foo = 'bar';
        };

        let failedRequestHandlerCalls = 0;
        const failedRequestHandler = async () => {
            failedRequestHandlerCalls++;
        };

        const basicCrawler = new BasicCrawler({
            requestList,
            maxRequestRetries: 3,
            maxRequestsPerCrawl: 3,
            maxConcurrency: 1,
            requestHandler,
            failedRequestHandler,
        });

        await requestList.initialize();
        await basicCrawler.run();

        expect(processed['http://example.com/1'].userData.foo).toBe('bar');
        expect(processed['http://example.com/1'].errorMessages).toEqual([]);
        expect(processed['http://example.com/1'].retryCount).toBe(0);
        expect(processed['http://example.com/3'].userData.foo).toBe('bar');
        expect(processed['http://example.com/3'].errorMessages).toEqual([]);
        expect(processed['http://example.com/3'].retryCount).toBe(0);

        expect(processed['http://example.com/2'].userData.foo).toEqual(undefined);
        expect(processed['http://example.com/2'].errorMessages).toHaveLength(4);
        expect(processed['http://example.com/2'].retryCount).toBe(3);

        expect(failedRequestHandlerCalls).toBe(1);

        expect(await requestList.isFinished()).toBe(false);
        expect(await requestList.isEmpty()).toBe(false);
    });

    test('should load handledRequestCount from storages', async () => {
        const requestQueue = new RequestQueue({ id: 'id', client: Configuration.getStorageClient() });
        requestQueue.isEmpty = async () => false;
        requestQueue.isFinished = async () => false;

        requestQueue.fetchNextRequest = async () => (new Request({ id: 'id', url: 'http://example.com' }));
        // @ts-expect-error Overriding the method for testing purposes
        requestQueue.markRequestHandled = async () => {};

        const requestQueueStub = jest.spyOn(requestQueue, 'handledCount').mockResolvedValue(33);

        let count = 0;
        let crawler = new BasicCrawler({
            requestQueue,
            maxConcurrency: 1,
            requestHandler: async () => {
                await sleep(1);
                count++;
            },
            maxRequestsPerCrawl: 40,
        });

        await crawler.run();
        expect(requestQueueStub).toBeCalled();
        expect(count).toBe(7);
        jest.restoreAllMocks();

        const sources = Array.from(Array(10).keys(), (x) => x + 1).map((i) => ({ url: `http://example.com/${i}` }));
        const sourcesCopy = JSON.parse(JSON.stringify(sources));
        let requestList = new RequestList({ sources });
        await requestList.initialize();
        const requestListStub = jest.spyOn(requestList, 'handledCount').mockReturnValue(33);

        count = 0;
        crawler = new BasicCrawler({
            requestList,
            maxConcurrency: 1,
            requestHandler: async () => {
                await sleep(1);
                count++;
            },
            maxRequestsPerCrawl: 40,
        });

        await crawler.run();
        expect(requestListStub).toBeCalled();
        expect(count).toBe(7);
        jest.restoreAllMocks();

        requestList = new RequestList({ sources: sourcesCopy });
        await requestList.initialize();
        const listStub = jest.spyOn(requestList, 'handledCount').mockReturnValue(20);
        const queueStub = jest.spyOn(requestQueue, 'handledCount').mockResolvedValue(33);
        const addRequestStub = jest.spyOn(requestQueue, 'addRequest').mockReturnValue(Promise.resolve() as any);

        count = 0;
        crawler = new BasicCrawler({
            requestList,
            requestQueue,
            maxConcurrency: 1,
            requestHandler: async () => {
                await sleep(1);
                count++;
            },
            maxRequestsPerCrawl: 40,
        });

        await crawler.run();

        expect(queueStub).toBeCalled();
        expect(listStub).not.toBeCalled();
        expect(addRequestStub).toBeCalledTimes(7);
        expect(count).toBe(7);

        jest.restoreAllMocks();
    });

    test('should timeout after handleRequestTimeoutSecs', async () => {
        const url = 'https://example.com';
        const requestList = new RequestList({ sources: [{ url }] });
        await requestList.initialize();

        const results: Request[] = [];
        const crawler = new BasicCrawler({
            requestList,
            handleRequestTimeoutSecs: 0.01,
            maxRequestRetries: 1,
            requestHandler: () => sleep(1000),
            failedRequestHandler: async ({ request }) => {
                results.push(request);
            },
        });

        await crawler.run();
        expect(results).toHaveLength(1);
        expect(results[0].url).toEqual(url);
        results[0].errorMessages.forEach((msg) => expect(msg).toMatch('handleRequestFunction timed out'));
    });

    test('limits handleRequestTimeoutSecs to a valid value', async () => {
        const url = 'https://example.com';
        const requestList = new RequestList({ sources: [{ url }] });
        await requestList.initialize();

        const results = [];
        const crawler = new BasicCrawler({
            requestList,
            requestHandlerTimeoutSecs: Infinity,
            maxRequestRetries: 1,
            requestHandler: () => sleep(1000),
            failedRequestHandler: async ({ request }) => {
                results.push(request);
            },
        });

        const maxSignedInteger = 2 ** 31 - 1;
        // @ts-expect-error Accessing private prop
        expect(crawler.requestHandlerTimeoutMillis).toBe(maxSignedInteger);
    });

    describe('Uses SessionPool', () => {
        it('should use SessionPool when useSessionPool is true ', async () => {
            const url = 'https://example.com';
            const requestList = new RequestList({ sources: [{ url }] });
            await requestList.initialize();
            const results: Request[] = [];

            const crawler = new BasicCrawler({
                requestList,
                handleRequestTimeoutSecs: 0.01,
                maxRequestRetries: 1,
                useSessionPool: true,
                sessionPoolOptions: {
                    maxPoolSize: 10,
                    persistStateKey: 'POOL',
                },
                requestHandler: async ({ session }) => {
                    expect(session.constructor.name).toEqual('Session');
                    expect(session.id).toBeDefined();
                },
                failedRequestHandler: async ({ request }) => {
                    results.push(request);
                },
            });

            await crawler.run();
            expect(crawler.sessionPool).toBeDefined();
            expect(results).toHaveLength(0);
        });

        it('should use pass options to sessionPool', async () => {
            const url = 'https://example.com';
            const requestList = new RequestList({ sources: [{ url }] });
            await requestList.initialize();

            const crawler = new BasicCrawler({
                requestList,
                handleRequestTimeoutSecs: 0.01,
                maxRequestRetries: 1,
                useSessionPool: true,
                sessionPoolOptions: {
                    maxPoolSize: 10,
                    persistStateKey: 'POOL',
                },
                requestHandler: async () => {},
                failedRequestHandler: async () => {},
            });
            await crawler.run();

            expect(crawler.sessionPool.maxPoolSize).toEqual(10);
        });

        it('should destroy Session pool after it is finished', async () => {
            const url = 'https://example.com';
            const requestList = new RequestList({ sources: [{ url }] });
            await requestList.initialize();
            events.off(EventType.PERSIST_STATE);

            const crawler = new BasicCrawler({
                requestList,
                handleRequestTimeoutSecs: 0.01,
                maxRequestRetries: 1,
                useSessionPool: true,
                sessionPoolOptions: {
                    maxPoolSize: 10,
                },
                requestHandler: async () => {},
                failedRequestHandler: async () => {},
            });

            // @ts-expect-error Accessing private prop
            crawler._loadHandledRequestCount = () => { // eslint-disable-line
                expect(crawler.sessionPool).toBeDefined();
                expect(events.listenerCount(EventType.PERSIST_STATE)).toEqual(1);
            };

            await crawler.run();
            expect(events.listenerCount(EventType.PERSIST_STATE)).toEqual(0);
            expect(crawler.sessionPool.maxPoolSize).toEqual(10);
        });
    });

    describe('CrawlingContext', () => {
        test('should be kept and later deleted', async () => {
            const urls = [
                'https://example.com/0',
                'https://example.com/1',
                'https://example.com/2',
                'https://example.com/3',
            ];
            const requestList = await RequestList.open(null, urls);
            let counter = 0;
            let finish: (value?: unknown) => void;
            const allFinishedPromise = new Promise((resolve) => {
                finish = resolve;
            });
            const mainContexts: CrawlingContext[] = [];
            const otherContexts: CrawlingContext[][] = [];
            const crawler = new BasicCrawler({
                requestList,
                minConcurrency: 4,
                async requestHandler(crawlingContext) {
                    // @ts-expect-error Accessing private prop
                    mainContexts[counter] = crawler.crawlingContexts.get(crawlingContext.id);
                    // @ts-expect-error Accessing private prop
                    otherContexts[counter] = Array.from(crawler.crawlingContexts).map(([, v]) => v);
                    counter++;
                    if (counter === 4) finish();
                    await allFinishedPromise;
                },
            });
            await crawler.run();

            expect(counter).toBe(4);
            expect(mainContexts).toHaveLength(4);
            expect(otherContexts).toHaveLength(4);
            // @ts-expect-error Accessing private prop
            expect(crawler.crawlingContexts.size).toBe(0);
            mainContexts.forEach((ctx, idx) => {
                expect(typeof ctx.id).toBe('string');
                expect(otherContexts[idx]).toContain(ctx);
            });
            otherContexts.forEach((list, idx) => {
                expect(list).toHaveLength(idx + 1);
            });
        });
    });
});
