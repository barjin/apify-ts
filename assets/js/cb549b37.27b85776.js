"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,y=d["".concat(p,".").concat(f)]||d[f]||c[f]||l;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7383:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>d});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={id:"handle-request-inputs",title:"HandleRequestInputs",original_id:"handle-request-inputs"},p=void 0,s={unversionedId:"typedefs/handle-request-inputs",id:"version-2.0.6/typedefs/handle-request-inputs",title:"HandleRequestInputs",description:"Properties",source:"@site/versioned_docs/version-2.0.6/typedefs/HandleRequestInputs.md",sourceDirName:"typedefs",slug:"/typedefs/handle-request-inputs",permalink:"/apify-ts/docs/typedefs/handle-request-inputs",tags:[],version:"2.0.6",lastUpdatedBy:"Andrey Bykov",lastUpdatedAt:1644340556,formattedLastUpdatedAt:"2/8/2022",frontMatter:{id:"handle-request-inputs",title:"HandleRequestInputs",original_id:"handle-request-inputs"},sidebar:"version-2.0.6/docs",previous:{title:"HandleRequest",permalink:"/apify-ts/docs/typedefs/handle-request"},next:{title:"PrepareRequest",permalink:"/apify-ts/docs/typedefs/prepare-request"}},u=[{value:"Properties",id:"properties",children:[{value:"<code>request</code>",id:"request",children:[],level:3},{value:"<code>session</code>",id:"session",children:[],level:3},{value:"<code>crawler</code>",id:"crawler",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"handlerequestinputs"}),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"request"},(0,l.kt)("inlineCode",{parentName:"h3"},"request")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Request"))),(0,l.kt)("p",null,"The original {Request} object. A reference to the underlying ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool"))," class that manages the concurrency of the\ncrawler. Note that this property is only initialized after calling the ",(0,l.kt)("a",{parentName:"p",href:"../api/basic-crawler#run",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"BasicCrawler.run()"))," function. You can use it to\nchange the concurrency settings on the fly, to pause the crawler by calling ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#pause",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.pause()"))," or to abort it by\ncalling ",(0,l.kt)("a",{parentName:"p",href:"../api/autoscaled-pool#abort",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"AutoscaledPool.abort()")),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"session"},(0,l.kt)("inlineCode",{parentName:"h3"},"session")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"Session"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"crawler"},(0,l.kt)("inlineCode",{parentName:"h3"},"crawler")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"../api/basic-crawler",target:null,rel:null},(0,l.kt)("inlineCode",{parentName:"a"},"BasicCrawler"))),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);