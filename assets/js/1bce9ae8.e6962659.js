"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,k=d["".concat(p,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8117:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>d});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"playwright-crawler-options",title:"PlaywrightCrawlerOptions",original_id:"playwright-crawler-options"},p=void 0,s={unversionedId:"typedefs/playwright-crawler-options",id:"version-2.0.6/typedefs/playwright-crawler-options",isDocsHomePage:!1,title:"PlaywrightCrawlerOptions",description:"Properties",source:"@site/versioned_docs/version-2.0.6/typedefs/PlaywrightCrawlerOptions.md",sourceDirName:"typedefs",slug:"/typedefs/playwright-crawler-options",permalink:"/apify-ts/docs/typedefs/playwright-crawler-options",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1636030411,formattedLastUpdatedAt:"11/4/2021",frontMatter:{id:"playwright-crawler-options",title:"PlaywrightCrawlerOptions",original_id:"playwright-crawler-options"},sidebar:"version-2.0.6/docs",previous:{title:"CheerioCrawlerOptions",permalink:"/apify-ts/docs/typedefs/cheerio-crawler-options"},next:{title:"PlaywrightLaunchContext",permalink:"/apify-ts/docs/typedefs/playwright-launch-context"}},u=[{value:"Properties",id:"properties",children:[{value:"<code>handlePageFunction</code>",id:"handlepagefunction",children:[],level:3},{value:"<code>navigationTimeoutSecs</code>",id:"navigationtimeoutsecs",children:[],level:3},{value:"<code>handleFailedRequestFunction</code>",id:"handlefailedrequestfunction",children:[],level:3},{value:"<code>preNavigationHooks</code>",id:"prenavigationhooks",children:[],level:3},{value:"<code>postNavigationHooks</code>",id:"postnavigationhooks",children:[],level:3},{value:"<code>launchContext</code>",id:"launchcontext",children:[],level:3},{value:"<code>handlePageTimeoutSecs</code>",id:"handlepagetimeoutsecs",children:[],level:3},{value:"<code>browserPoolOptions</code>",id:"browserpooloptions",children:[],level:3},{value:"<code>persistCookiesPerSession</code>",id:"persistcookiespersession",children:[],level:3},{value:"<code>proxyConfiguration</code>",id:"proxyconfiguration",children:[],level:3},{value:"<code>requestList</code>",id:"requestlist",children:[],level:3},{value:"<code>requestQueue</code>",id:"requestqueue",children:[],level:3},{value:"<code>maxRequestRetries</code>",id:"maxrequestretries",children:[],level:3},{value:"<code>maxRequestsPerCrawl</code>",id:"maxrequestspercrawl",children:[],level:3},{value:"<code>autoscaledPoolOptions</code>",id:"autoscaledpooloptions",children:[],level:3},{value:"<code>minConcurrency</code>",id:"minconcurrency",children:[],level:3},{value:"<code>maxConcurrency</code>",id:"maxconcurrency",children:[],level:3},{value:"<code>useSessionPool</code>",id:"usesessionpool",children:[],level:3},{value:"<code>sessionPoolOptions</code>",id:"sessionpooloptions",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"playwrightcrawleroptions"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"handlepagefunction"},(0,o.kt)("inlineCode",{parentName:"h3"},"handlePageFunction")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../typedefs/playwright-handle-page-function",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"PlaywrightHandlePageFunction"))),(0,o.kt)("p",null,"Function that is called to process each request. It is passed an object with the following fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  request: Request,\n  response: Response,\n  page: Page,\n  session: Session,\n  browserController: BrowserController,\n  proxyInfo: ProxyInfo,\n  crawler: PlaywrightCrawler,\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"request")," is an instance of the ",(0,o.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Request"))," object with details about the URL to open, HTTP method etc. ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," is an instance of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Playwright")," ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Page"))," ",(0,o.kt)("inlineCode",{parentName:"p"},"browserController")," is an instance of the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/browser-pool#browsercontroller",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"BrowserController")),", ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," is an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Playwright"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-response",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"Response")),", which is the main resource response as returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"page.goto(request.url)"),". The\nfunction must return a promise, which is then awaited by the crawler."),(0,o.kt)("p",null,"If the function throws an exception, the crawler will try to re-crawl the request later, up to ",(0,o.kt)("inlineCode",{parentName:"p"},"option.maxRequestRetries")," times. If all the retries\nfail, the crawler calls the function provided to the ",(0,o.kt)("inlineCode",{parentName:"p"},"handleFailedRequestFunction")," parameter. To make this work, you should ",(0,o.kt)("strong",{parentName:"p"},"always")," let your\nfunction throw exceptions rather than catch them. The exceptions are logged to the request using the\n",(0,o.kt)("a",{parentName:"p",href:"../api/request#pusherrormessage",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Request.pushErrorMessage()"))," function."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"navigationtimeoutsecs"},(0,o.kt)("inlineCode",{parentName:"h3"},"navigationTimeoutSecs")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," ",(0,o.kt)("code",null," = 60")),(0,o.kt)("p",null,"Timeout in which page navigation needs to finish, in seconds."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"handlefailedrequestfunction"},(0,o.kt)("inlineCode",{parentName:"h3"},"handleFailedRequestFunction")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../typedefs/handle-failed-request",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"HandleFailedRequest"))),(0,o.kt)("p",null,"A function to handle requests that failed more than ",(0,o.kt)("inlineCode",{parentName:"p"},"option.maxRequestRetries")," times."),(0,o.kt)("p",null,"The function receives the following object as an argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  request: Request,\n  response: Response,\n  page: Page,\n  session: Session,\n  browserController: BrowserController,\n  proxyInfo: ProxyInfo,\n  crawler: PlaywrightCrawler,\n}\n")),(0,o.kt)("p",null,"Where the ",(0,o.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Request"))," instance corresponds to the failed request, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," instance represents the last error thrown during\nprocessing of the request."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"prenavigationhooks"},(0,o.kt)("inlineCode",{parentName:"h3"},"preNavigationHooks")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../typedefs/playwright-hook",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Array<PlaywrightHook>"))),(0,o.kt)("p",null,"Async functions that are sequentially evaluated before the navigation. Good for setting additional cookies or browser properties before navigation.\nThe function accepts two parameters, ",(0,o.kt)("inlineCode",{parentName:"p"},"crawlingContext")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gotoOptions"),", which are passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"page.goto()")," function the crawler calls to\nnavigate. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"preNavigationHooks: [\n    async (crawlingContext, gotoOptions) => {\n        await page.evaluate((attr) => { window.foo = attr; }, 'bar');\n    },\n]\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"postnavigationhooks"},(0,o.kt)("inlineCode",{parentName:"h3"},"postNavigationHooks")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../typedefs/playwright-hook",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Array<PlaywrightHook>"))),(0,o.kt)("p",null,"Async functions that are sequentially evaluated after the navigation. Good for checking if the navigation was successful. The function accepts\n",(0,o.kt)("inlineCode",{parentName:"p"},"crawlingContext")," as the only parameter. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"postNavigationHooks: [\n    async (crawlingContext) => {\n        const { page } = crawlingContext;\n        if (hasCaptcha(page)) {\n            await solveCaptcha (page);\n        }\n    },\n]\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"launchcontext"},(0,o.kt)("inlineCode",{parentName:"h3"},"launchContext")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../typedefs/playwright-launch-context",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"PlaywrightLaunchContext"))),(0,o.kt)("p",null,"The same options as used by ",(0,o.kt)("a",{parentName:"p",href:"../api/apify#launchplaywright",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"Apify.launchPlaywright()")),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"handlepagetimeoutsecs"},(0,o.kt)("inlineCode",{parentName:"h3"},"handlePageTimeoutSecs")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," ",(0,o.kt)("code",null," = 60")),(0,o.kt)("p",null,"Timeout in which the function passed as ",(0,o.kt)("inlineCode",{parentName:"p"},"handlePageFunction")," needs to finish, in seconds."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"browserpooloptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"browserPoolOptions")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserPoolOptions")),(0,o.kt)("p",null,"Custom options passed to the underlying ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/browser-pool#BrowserPool",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"BrowserPool"))," constructor. You can tweak those to\nfine-tune browser management."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"persistcookiespersession"},(0,o.kt)("inlineCode",{parentName:"h3"},"persistCookiesPerSession")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,o.kt)("code",null," = true")),(0,o.kt)("p",null,"Automatically saves cookies to Session. Works only if Session Pool is used."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"proxyconfiguration"},(0,o.kt)("inlineCode",{parentName:"h3"},"proxyConfiguration")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))),(0,o.kt)("p",null,"If set, ",(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")," will be configured for all connections to use ",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," or your own Proxy URLs provided\nand rotated according to the configuration. For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"documentation"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"requestlist"},(0,o.kt)("inlineCode",{parentName:"h3"},"requestList")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"RequestList"))),(0,o.kt)("p",null,"Static list of URLs to be processed. Either ",(0,o.kt)("inlineCode",{parentName:"p"},"requestList")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"requestQueue")," option must be provided (or both)."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"requestqueue"},(0,o.kt)("inlineCode",{parentName:"h3"},"requestQueue")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"RequestQueue"))),(0,o.kt)("p",null,"Dynamic queue of URLs to be processed. This is useful for recursive crawling of websites. Either ",(0,o.kt)("inlineCode",{parentName:"p"},"requestList")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"requestQueue")," option must be\nprovided (or both)."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"maxrequestretries"},(0,o.kt)("inlineCode",{parentName:"h3"},"maxRequestRetries")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," ",(0,o.kt)("code",null," = 3")),(0,o.kt)("p",null,"Indicates how many times the request is retried if\n",(0,o.kt)("a",{parentName:"p",href:"../typedefs/playwright-crawler-options#handlepagefunction",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawlerOptions.handlePageFunction"))," fails."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"maxrequestspercrawl"},(0,o.kt)("inlineCode",{parentName:"h3"},"maxRequestsPerCrawl")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Maximum number of pages that the crawler will open. The crawl will stop when this limit is reached. Always set this value in order to prevent infinite\nloops in misconfigured crawlers. Note that in cases of parallel crawling, the actual number of pages visited might be slightly higher than this value."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"autoscaledpooloptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"autoscaledPoolOptions")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../typedefs/autoscaled-pool-options",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"AutoscaledPoolOptions"))),(0,o.kt)("p",null,"Custom options passed to the underlying ",(0,o.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," constructor. Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"runTaskFunction")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"isTaskReadyFunction")," options are provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"BasicCrawler")," and cannot be overridden. However, you can provide a custom implementation of\n",(0,o.kt)("inlineCode",{parentName:"p"},"isFinishedFunction"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"minconcurrency"},(0,o.kt)("inlineCode",{parentName:"h3"},"minConcurrency")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," ",(0,o.kt)("code",null," = 1")),(0,o.kt)("p",null,"Sets the minimum concurrency (parallelism) for the crawl. Shortcut to the corresponding ",(0,o.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," option."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"WARNING:")," If you set this value too high with respect to the available system memory and CPU, your crawler will run extremely slow or crash. If\nyou're not sure, just keep the default value and the concurrency will scale up automatically."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"maxconcurrency"},(0,o.kt)("inlineCode",{parentName:"h3"},"maxConcurrency")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," ",(0,o.kt)("code",null," = 1000")),(0,o.kt)("p",null,"Sets the maximum concurrency (parallelism) for the crawl. Shortcut to the corresponding ",(0,o.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," option."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usesessionpool"},(0,o.kt)("inlineCode",{parentName:"h3"},"useSessionPool")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,o.kt)("code",null," = true")),(0,o.kt)("p",null,"Playwright crawler will initialize the ",(0,o.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"SessionPool"))," with the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"sessionPoolOptions"),". The session instance will be\nthan available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"handleRequestFunction"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sessionpooloptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"sessionPoolOptions")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../typedefs/session-pool-options",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"SessionPoolOptions"))),(0,o.kt)("p",null,"The configuration options for ",(0,o.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"SessionPool"))," to use."),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);