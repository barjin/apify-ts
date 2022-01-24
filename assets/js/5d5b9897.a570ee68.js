"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||p;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<p;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8530:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>u,toc:()=>s,default:()=>c});var r=n(7462),a=n(3366),p=(n(7294),n(3905)),l=["components"],o={id:"puppeteer-handle-page-inputs",title:"PuppeteerHandlePageInputs",original_id:"puppeteer-handle-page-inputs"},i=void 0,u={unversionedId:"typedefs/puppeteer-handle-page-inputs",id:"version-2.0.6/typedefs/puppeteer-handle-page-inputs",title:"PuppeteerHandlePageInputs",description:"Properties",source:"@site/versioned_docs/version-2.0.6/typedefs/PuppeteerHandlePageInputs.md",sourceDirName:"typedefs",slug:"/typedefs/puppeteer-handle-page-inputs",permalink:"/apify-ts/docs/typedefs/puppeteer-handle-page-inputs",tags:[],version:"2.0.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1643037525,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"puppeteer-handle-page-inputs",title:"PuppeteerHandlePageInputs",original_id:"puppeteer-handle-page-inputs"},sidebar:"version-2.0.6/docs",previous:{title:"PuppeteerHandlePage",permalink:"/apify-ts/docs/typedefs/puppeteer-handle-page"},next:{title:"DatasetConsumer",permalink:"/apify-ts/docs/typedefs/dataset-consumer"}},s=[{value:"Properties",id:"properties",children:[{value:"<code>request</code>",id:"request",children:[],level:3},{value:"<code>response</code>",id:"response",children:[],level:3},{value:"<code>page</code>",id:"page",children:[],level:3},{value:"<code>puppeteerPool</code>",id:"puppeteerpool",children:[],level:3},{value:"<code>autoscaledPool</code>",id:"autoscaledpool",children:[],level:3},{value:"<code>session</code>",id:"session",children:[],level:3},{value:"<code>proxyInfo</code>",id:"proxyinfo",children:[],level:3}],level:2}],d={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("a",{name:"puppeteerhandlepageinputs"}),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"request"},(0,p.kt)("inlineCode",{parentName:"h3"},"request")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"Request"))),(0,p.kt)("p",null,"An instance of the ",(0,p.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"Request"))," object with details about the URL to open, HTTP method etc."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"response"},(0,p.kt)("inlineCode",{parentName:"h3"},"response")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"PuppeteerResponse")),(0,p.kt)("p",null,"An instance of the Puppeteer ",(0,p.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&show=api-class-response",target:"_blank",rel:"noopener"},(0,p.kt)("inlineCode",{parentName:"a"},"Response")),", which is the main resource response as\nreturned by ",(0,p.kt)("inlineCode",{parentName:"p"},"page.goto(request.url)"),"."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"page"},(0,p.kt)("inlineCode",{parentName:"h3"},"page")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"PuppeteerPage")),(0,p.kt)("p",null,"is an instance of the Puppeteer ",(0,p.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&show=api-class-page",target:"_blank",rel:"noopener"},(0,p.kt)("inlineCode",{parentName:"a"},"Page"))),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"puppeteerpool"},(0,p.kt)("inlineCode",{parentName:"h3"},"puppeteerPool")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../api/puppeteer-pool",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"PuppeteerPool"))),(0,p.kt)("p",null,"An instance of the ",(0,p.kt)("a",{parentName:"p",href:"../api/puppeteer-pool",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"PuppeteerPool"))," used by this ",(0,p.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),"."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"autoscaledpool"},(0,p.kt)("inlineCode",{parentName:"h3"},"autoscaledPool")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))),(0,p.kt)("p",null,"A reference to the underlying ",(0,p.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," class that manages the concurrency of the crawler. Note that this property is\nonly initialized after calling the ",(0,p.kt)("a",{parentName:"p",href:"../api/puppeteer-crawler#run",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler.run()"))," function. You can use it to change the concurrency\nsettings on the fly, to pause the crawler by calling ",(0,p.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#pause",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.pause()"))," or to abort it by calling\n",(0,p.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#abort",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.abort()")),"."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"session"},(0,p.kt)("inlineCode",{parentName:"h3"},"session")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"Session"))),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"proxyinfo"},(0,p.kt)("inlineCode",{parentName:"h3"},"proxyInfo")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../typedefs/proxy-info",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"ProxyInfo"))),(0,p.kt)("hr",null))}c.isMDXComponent=!0}}]);