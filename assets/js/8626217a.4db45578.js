"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9081],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,y=d["".concat(l,".").concat(f)]||d[f]||c[f]||p;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8167:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>s,toc:()=>u,default:()=>d});var n=r(7462),a=r(3366),p=(r(7294),r(3905)),o=["components"],i={id:"prepare-request-inputs",title:"PrepareRequestInputs",original_id:"prepare-request-inputs"},l=void 0,s={unversionedId:"typedefs/prepare-request-inputs",id:"version-2.0.6/typedefs/prepare-request-inputs",title:"PrepareRequestInputs",description:"Properties",source:"@site/versioned_docs/version-2.0.6/typedefs/PrepareRequestInputs.md",sourceDirName:"typedefs",slug:"/typedefs/prepare-request-inputs",permalink:"/apify-ts/docs/typedefs/prepare-request-inputs",tags:[],version:"2.0.6",lastUpdatedBy:"Szymon Marczak",lastUpdatedAt:1643021870,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"prepare-request-inputs",title:"PrepareRequestInputs",original_id:"prepare-request-inputs"},sidebar:"version-2.0.6/docs",previous:{title:"PrepareRequest",permalink:"/apify-ts/docs/typedefs/prepare-request"},next:{title:"PlaywrightHandlePageFunction",permalink:"/apify-ts/docs/typedefs/playwright-handle-page-function"}},u=[{value:"Properties",id:"properties",children:[{value:"<code>request</code>",id:"request",children:[],level:3},{value:"<code>session</code>",id:"session",children:[],level:3},{value:"<code>proxyInfo</code>",id:"proxyinfo",children:[],level:3},{value:"<code>crawler</code>",id:"crawler",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("a",{name:"preparerequestinputs"}),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"request"},(0,p.kt)("inlineCode",{parentName:"h3"},"request")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"Request"))),(0,p.kt)("p",null,"Original instance fo the {Request} object. Must be modified in-place."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"session"},(0,p.kt)("inlineCode",{parentName:"h3"},"session")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"Session"))),(0,p.kt)("p",null,"The current session"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"proxyinfo"},(0,p.kt)("inlineCode",{parentName:"h3"},"proxyInfo")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../typedefs/proxy-info",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"ProxyInfo"))),(0,p.kt)("p",null,"An object with information about currently used proxy by the crawler and configured by the ",(0,p.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))," class."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"crawler"},(0,p.kt)("inlineCode",{parentName:"h3"},"crawler")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../api/cheerio-crawler",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"CheerioCrawler"))),(0,p.kt)("hr",null))}d.isMDXComponent=!0}}]);