"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5330:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>d});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"basic-crawler-options",title:"BasicCrawlerOptions",original_id:"basic-crawler-options"},s=void 0,p={unversionedId:"typedefs/basic-crawler-options",id:"version-2.0.6/typedefs/basic-crawler-options",isDocsHomePage:!1,title:"BasicCrawlerOptions",description:"Properties",source:"@site/versioned_docs/version-2.0.6/typedefs/BasicCrawlerOptions.md",sourceDirName:"typedefs",slug:"/typedefs/basic-crawler-options",permalink:"/apify-ts/docs/typedefs/basic-crawler-options",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637255450,formattedLastUpdatedAt:"11/18/2021",frontMatter:{id:"basic-crawler-options",title:"BasicCrawlerOptions",original_id:"basic-crawler-options"},sidebar:"version-2.0.6/docs",previous:{title:"AutoscaledPoolOptions",permalink:"/apify-ts/docs/typedefs/autoscaled-pool-options"},next:{title:"CheerioCrawlerOptions",permalink:"/apify-ts/docs/typedefs/cheerio-crawler-options"}},u=[{value:"Properties",id:"properties",children:[{value:"<code>handleRequestFunction</code>",id:"handlerequestfunction",children:[],level:3},{value:"<code>requestList</code>",id:"requestlist",children:[],level:3},{value:"<code>requestQueue</code>",id:"requestqueue",children:[],level:3},{value:"<code>handleRequestTimeoutSecs</code>",id:"handlerequesttimeoutsecs",children:[],level:3},{value:"<code>handleFailedRequestFunction</code>",id:"handlefailedrequestfunction",children:[],level:3},{value:"<code>maxRequestRetries</code>",id:"maxrequestretries",children:[],level:3},{value:"<code>maxRequestsPerCrawl</code>",id:"maxrequestspercrawl",children:[],level:3},{value:"<code>autoscaledPoolOptions</code>",id:"autoscaledpooloptions",children:[],level:3},{value:"<code>minConcurrency</code>",id:"minconcurrency",children:[],level:3},{value:"<code>maxConcurrency</code>",id:"maxconcurrency",children:[],level:3},{value:"<code>useSessionPool</code>",id:"usesessionpool",children:[],level:3},{value:"<code>sessionPoolOptions</code>",id:"sessionpooloptions",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"basiccrawleroptions"}),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"handlerequestfunction"},(0,l.kt)("inlineCode",{parentName:"h3"},"handleRequestFunction")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../typedefs/handle-request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"HandleRequest"))),(0,l.kt)("p",null,"User-provided function that performs the logic of the crawler. It is called for each URL to crawl."),(0,l.kt)("p",null,"The function receives the following object as an argument:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{\n  request: Request,\n  session: Session,\n  crawler: BasicCrawler,\n}\n")),(0,l.kt)("p",null,"where the ",(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request"))," instance represents the URL to crawl."),(0,l.kt)("p",null,"The function must return a promise, which is then awaited by the crawler."),(0,l.kt)("p",null,"If the function throws an exception, the crawler will try to re-crawl the request later, up to ",(0,l.kt)("inlineCode",{parentName:"p"},"option.maxRequestRetries")," times. If all the retries\nfail, the crawler calls the function provided to the ",(0,l.kt)("inlineCode",{parentName:"p"},"handleFailedRequestFunction")," parameter. To make this work, you should ",(0,l.kt)("strong",{parentName:"p"},"always")," let your\nfunction throw exceptions rather than catch them. The exceptions are logged to the request using the\n",(0,l.kt)("a",{parentName:"p",href:"../api/request#pusherrormessage",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request.pushErrorMessage()"))," function."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"requestlist"},(0,l.kt)("inlineCode",{parentName:"h3"},"requestList")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestList"))),(0,l.kt)("p",null,"Static list of URLs to be processed. Either ",(0,l.kt)("inlineCode",{parentName:"p"},"requestList")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"requestQueue")," option must be provided (or both)."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"requestqueue"},(0,l.kt)("inlineCode",{parentName:"h3"},"requestQueue")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestQueue"))),(0,l.kt)("p",null,"Dynamic queue of URLs to be processed. This is useful for recursive crawling of websites. Either ",(0,l.kt)("inlineCode",{parentName:"p"},"requestList")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"requestQueue")," option must be\nprovided (or both)."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"handlerequesttimeoutsecs"},(0,l.kt)("inlineCode",{parentName:"h3"},"handleRequestTimeoutSecs")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," ",(0,l.kt)("code",null," = 60")),(0,l.kt)("p",null,"Timeout in which the function passed as ",(0,l.kt)("inlineCode",{parentName:"p"},"handleRequestFunction")," needs to finish, in seconds."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"handlefailedrequestfunction"},(0,l.kt)("inlineCode",{parentName:"h3"},"handleFailedRequestFunction")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../typedefs/handle-failed-request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"HandleFailedRequest"))),(0,l.kt)("p",null,"A function to handle requests that failed more than ",(0,l.kt)("inlineCode",{parentName:"p"},"option.maxRequestRetries")," times."),(0,l.kt)("p",null,"The function receives the following object as an argument:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"{\n  request: Request,\n  error: Error,\n  session: Session,\n  crawler: BasicCrawler,\n}\n")),(0,l.kt)("p",null,"where the ",(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request"))," instance corresponds to the failed request, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"Error")," instance represents the last error thrown during\nprocessing of the request."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-js/blob/master/src/crawlers/basic_crawler.js#L11",target:"_blank",rel:"noopener"},"source code")," for the default implementation of this function."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maxrequestretries"},(0,l.kt)("inlineCode",{parentName:"h3"},"maxRequestRetries")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," ",(0,l.kt)("code",null," = 3")),(0,l.kt)("p",null,"Indicates how many times the request is retried if\n",(0,l.kt)("a",{parentName:"p",href:"../typedefs/basic-crawler-options#handlerequestfunction",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"BasicCrawlerOptions.handleRequestFunction"))," fails."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maxrequestspercrawl"},(0,l.kt)("inlineCode",{parentName:"h3"},"maxRequestsPerCrawl")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Maximum number of pages that the crawler will open. The crawl will stop when this limit is reached. Always set this value in order to prevent infinite\nloops in misconfigured crawlers. Note that in cases of parallel crawling, the actual number of pages visited might be slightly higher than this value."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"autoscaledpooloptions"},(0,l.kt)("inlineCode",{parentName:"h3"},"autoscaledPoolOptions")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../typedefs/autoscaled-pool-options",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPoolOptions"))),(0,l.kt)("p",null,"Custom options passed to the underlying ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," constructor. Note that the ",(0,l.kt)("inlineCode",{parentName:"p"},"runTaskFunction")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"isTaskReadyFunction")," options are provided by ",(0,l.kt)("inlineCode",{parentName:"p"},"BasicCrawler")," and cannot be overridden. However, you can provide a custom implementation of\n",(0,l.kt)("inlineCode",{parentName:"p"},"isFinishedFunction"),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"minconcurrency"},(0,l.kt)("inlineCode",{parentName:"h3"},"minConcurrency")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," ",(0,l.kt)("code",null," = 1")),(0,l.kt)("p",null,"Sets the minimum concurrency (parallelism) for the crawl. Shortcut to the corresponding ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," option."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"WARNING:")," If you set this value too high with respect to the available system memory and CPU, your crawler will run extremely slow or crash. If\nyou're not sure, just keep the default value and the concurrency will scale up automatically."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maxconcurrency"},(0,l.kt)("inlineCode",{parentName:"h3"},"maxConcurrency")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," ",(0,l.kt)("code",null," = 1000")),(0,l.kt)("p",null,"Sets the maximum concurrency (parallelism) for the crawl. Shortcut to the corresponding ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," option."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"usesessionpool"},(0,l.kt)("inlineCode",{parentName:"h3"},"useSessionPool")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,l.kt)("code",null," = true")),(0,l.kt)("p",null,"Basic crawler will initialize the ",(0,l.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"SessionPool"))," with the corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"sessionPoolOptions"),". The session instance will be than\navailable in the ",(0,l.kt)("inlineCode",{parentName:"p"},"handleRequestFunction"),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sessionpooloptions"},(0,l.kt)("inlineCode",{parentName:"h3"},"sessionPoolOptions")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../typedefs/session-pool-options",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"SessionPoolOptions"))),(0,l.kt)("p",null,"The configuration options for ",(0,l.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"SessionPool"))," to use."),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);