"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(r),f=a,y=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1053:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>d,toc:()=>s,default:()=>c});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={id:"handle-failed-request-input",title:"HandleFailedRequestInput",original_id:"handle-failed-request-input"},p=void 0,d={unversionedId:"typedefs/handle-failed-request-input",id:"version-2.0.6/typedefs/handle-failed-request-input",title:"HandleFailedRequestInput",description:"Properties",source:"@site/versioned_docs/version-2.0.6/typedefs/HandleFailedRequestInput.md",sourceDirName:"typedefs",slug:"/typedefs/handle-failed-request-input",permalink:"/apify-ts/docs/typedefs/handle-failed-request-input",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1645098016,formattedLastUpdatedAt:"2/17/2022",frontMatter:{id:"handle-failed-request-input",title:"HandleFailedRequestInput",original_id:"handle-failed-request-input"},sidebar:"version-2.0.6/docs",previous:{title:"HandleFailedRequest",permalink:"/apify-ts/docs/typedefs/handle-failed-request"},next:{title:"HandleRequest",permalink:"/apify-ts/docs/typedefs/handle-request"}},s=[{value:"Properties",id:"properties",children:[{value:"<code>error</code>",id:"error",children:[],level:3},{value:"<code>request</code>",id:"request",children:[],level:3},{value:"<code>session</code>",id:"session",children:[],level:3},{value:"<code>proxyInfo</code>",id:"proxyinfo",children:[],level:3}],level:2}],u={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"handlefailedrequestinput"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"error"},(0,i.kt)("inlineCode",{parentName:"h3"},"error")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")),(0,i.kt)("p",null,"The Error thrown by ",(0,i.kt)("inlineCode",{parentName:"p"},"handleRequestFunction"),"."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"request"},(0,i.kt)("inlineCode",{parentName:"h3"},"request")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Request"))),(0,i.kt)("p",null,"The original {Request} object."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"session"},(0,i.kt)("inlineCode",{parentName:"h3"},"session")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Session"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"proxyinfo"},(0,i.kt)("inlineCode",{parentName:"h3"},"proxyInfo")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("a",{parentName:"p",href:"../typedefs/proxy-info",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"ProxyInfo"))),(0,i.kt)("hr",null))}c.isMDXComponent=!0}}]);