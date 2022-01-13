"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5841],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>c});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],o={id:"request",title:"Request",original_id:"request"},s=void 0,p={unversionedId:"api/request",id:"version-2.0.6/api/request",title:"Request",description:"Represents a URL to be crawled, optionally including HTTP method, headers, payload and other metadata. The Request object also stores information",source:"@site/versioned_docs/version-2.0.6/api/Request.md",sourceDirName:"api",slug:"/api/request",permalink:"/apify-ts/docs/api/request",tags:[],version:"2.0.6",lastUpdatedBy:"Andrey Bykov",lastUpdatedAt:1642074737,formattedLastUpdatedAt:"1/13/2022",frontMatter:{id:"request",title:"Request",original_id:"request"},sidebar:"version-2.0.6/docs",previous:{title:"SystemStatus",permalink:"/apify-ts/docs/api/system-status"},next:{title:"RequestList",permalink:"/apify-ts/docs/api/request-list"}},u=[{value:"Properties",id:"properties",children:[{value:"<code>id</code>",id:"id",children:[],level:3},{value:"<code>url</code>",id:"url",children:[],level:3},{value:"<code>loadedUrl</code>",id:"loadedurl",children:[],level:3},{value:"<code>uniqueKey</code>",id:"uniquekey",children:[],level:3},{value:"<code>method</code>",id:"method",children:[],level:3},{value:"<code>payload</code>",id:"payload",children:[],level:3},{value:"<code>noRetry</code>",id:"noretry",children:[],level:3},{value:"<code>retryCount</code>",id:"retrycount",children:[],level:3},{value:"<code>errorMessages</code>",id:"errormessages",children:[],level:3},{value:"<code>headers</code>",id:"headers",children:[],level:3},{value:"<code>userData</code>",id:"userdata",children:[],level:3},{value:"<code>handledAt</code>",id:"handledat",children:[],level:3}],level:2},{value:"<code>new Request(options)</code>",id:"new-requestoptions",children:[],level:2},{value:"<code>request.headers</code>",id:"requestheaders",children:[],level:2},{value:"<code>request.userData</code>",id:"requestuserdata",children:[],level:2},{value:"<code>request.pushErrorMessage(errorOrMessage, [options])</code>",id:"requestpusherrormessageerrorormessage-options",children:[],level:2}],d={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"request"}),(0,l.kt)("p",null,"Represents a URL to be crawled, optionally including HTTP method, headers, payload and other metadata. The ",(0,l.kt)("inlineCode",{parentName:"p"},"Request")," object also stores information\nabout errors that occurred during processing of the request."),(0,l.kt)("p",null,"Each ",(0,l.kt)("inlineCode",{parentName:"p"},"Request")," instance has the ",(0,l.kt)("inlineCode",{parentName:"p"},"uniqueKey")," property, which can be either specified manually in the constructor or generated automatically from the\nURL. Two requests with the same ",(0,l.kt)("inlineCode",{parentName:"p"},"uniqueKey")," are considered as pointing to the same web resource. This behavior applies to all Apify SDK classes, such\nas ",(0,l.kt)("a",{parentName:"p",href:"../api/request-list",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestList")),", ",(0,l.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestQueue")),", ",(0,l.kt)("a",{parentName:"p",href:"../api/puppeteer-crawler",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler"))," or\n",(0,l.kt)("a",{parentName:"p",href:"../api/playwright-crawler",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawler")),"."),(0,l.kt)("p",null,"Example use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const request = new Apify.Request({\n    url: 'http://www.example.com',\n    headers: { Accept: 'application/json' },\n});\n\n...\n\nrequest.userData.foo = 'bar';\nrequest.pushErrorMessage(new Error('Request failed!'));\n\n...\n\nconst foo = request.userData.foo;\n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"id"},(0,l.kt)("inlineCode",{parentName:"h3"},"id")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Request ID"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"url"},(0,l.kt)("inlineCode",{parentName:"h3"},"url")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"URL of the web page to crawl."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"loadedurl"},(0,l.kt)("inlineCode",{parentName:"h3"},"loadedUrl")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"An actually loaded URL after redirects, if present. HTTP redirects are guaranteed to be included."),(0,l.kt)("p",null,"When using ",(0,l.kt)("a",{parentName:"p",href:"../api/puppeteer-crawler",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler"))," or ",(0,l.kt)("a",{parentName:"p",href:"../api/playwright-crawler",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawler")),", meta tag and JavaScript redirects may,\nor may not be included, depending on their nature. This generally means that redirects, which happen immediately will most likely be included, but\ndelayed redirects will not."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"uniquekey"},(0,l.kt)("inlineCode",{parentName:"h3"},"uniqueKey")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"A unique key identifying the request. Two requests with the same ",(0,l.kt)("inlineCode",{parentName:"p"},"uniqueKey")," are considered as pointing to the same URL."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"method"},(0,l.kt)("inlineCode",{parentName:"h3"},"method")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"HTTP method, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"POST"),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"payload"},(0,l.kt)("inlineCode",{parentName:"h3"},"payload")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,l.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,l.kt)("p",null,"HTTP request payload, e.g. for POST requests."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"noretry"},(0,l.kt)("inlineCode",{parentName:"h3"},"noRetry")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," value indicates that the request will not be automatically retried on error."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"retrycount"},(0,l.kt)("inlineCode",{parentName:"h3"},"retryCount")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Indicates the number of times the crawling of the request has been retried on error."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"errormessages"},(0,l.kt)("inlineCode",{parentName:"h3"},"errorMessages")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Array<string>")),(0,l.kt)("p",null,"An array of error messages from request processing."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"headers"},(0,l.kt)("inlineCode",{parentName:"h3"},"headers")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Object<string, string>")),(0,l.kt)("p",null,"Object with HTTP headers. Key is header name, value is the value."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"userdata"},(0,l.kt)("inlineCode",{parentName:"h3"},"userData")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Object<string, *>")),(0,l.kt)("p",null,"Custom user data assigned to the request."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"handledat"},(0,l.kt)("inlineCode",{parentName:"h3"},"handledAt")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Date")),(0,l.kt)("p",null,"Indicates the time when the request has been processed. Is ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if the request has not been crawled yet."),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"request"}),(0,l.kt)("h2",{id:"new-requestoptions"},(0,l.kt)("inlineCode",{parentName:"h2"},"new Request(options)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"options")),": ",(0,l.kt)("a",{parentName:"li",href:"../typedefs/request-options",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"RequestOptions"))," - ",(0,l.kt)("inlineCode",{parentName:"li"},"Request")," parameters including the URL, HTTP method and headers, and others.")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"headers"}),(0,l.kt)("h2",{id:"requestheaders"},(0,l.kt)("inlineCode",{parentName:"h2"},"request.headers")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"userdata"}),(0,l.kt)("h2",{id:"requestuserdata"},(0,l.kt)("inlineCode",{parentName:"h2"},"request.userData")),(0,l.kt)("hr",null),(0,l.kt)("a",{name:"pusherrormessage"}),(0,l.kt)("h2",{id:"requestpusherrormessageerrorormessage-options"},(0,l.kt)("inlineCode",{parentName:"h2"},"request.pushErrorMessage(errorOrMessage, [options])")),(0,l.kt)("p",null,"Stores information about an error that occurred during processing of this request."),(0,l.kt)("p",null,"You should always use Error instances when throwing errors in JavaScript."),(0,l.kt)("p",null,"Nevertheless, to improve the debugging experience when using third party libraries that may not always throw an Error instance, the function performs\na type inspection of the passed argument and attempts to extract as much information as possible, since just throwing a bad type error makes any\ndebugging rather difficult."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"errorOrMessage")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"Error")," | ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," - Error object or error message to be stored in the request."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"object"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"[omitStack]")),": ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")," ",(0,l.kt)("code",null," = false")," - Only push the error message without stack trace when true.")))),(0,l.kt)("hr",null))}c.isMDXComponent=!0}}]);