"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,y=d["".concat(s,".").concat(f)]||d[f]||c[f]||p;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<p;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},786:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>l,toc:()=>u,default:()=>d});var r=n(7462),o=n(3366),p=(n(7294),n(3905)),a=["components"],i={id:"post-response-inputs",title:"PostResponseInputs",original_id:"post-response-inputs"},s=void 0,l={unversionedId:"typedefs/post-response-inputs",id:"version-2.0.6/typedefs/post-response-inputs",title:"PostResponseInputs",description:"Properties",source:"@site/versioned_docs/version-2.0.6/typedefs/PostResponseInputs.md",sourceDirName:"typedefs",slug:"/typedefs/post-response-inputs",permalink:"/apify-ts/docs/typedefs/post-response-inputs",tags:[],version:"2.0.6",lastUpdatedBy:"Andrey Bykov",lastUpdatedAt:1645094615,formattedLastUpdatedAt:"2/17/2022",frontMatter:{id:"post-response-inputs",title:"PostResponseInputs",original_id:"post-response-inputs"}},u=[{value:"Properties",id:"properties",children:[{value:"<code>response</code>",id:"response",children:[],level:3},{value:"<code>request</code>",id:"request",children:[],level:3},{value:"<code>session</code>",id:"session",children:[],level:3},{value:"<code>proxyInfo</code>",id:"proxyinfo",children:[],level:3},{value:"<code>crawler</code>",id:"crawler",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("a",{name:"postresponseinputs"}),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("h3",{id:"response"},(0,p.kt)("inlineCode",{parentName:"h3"},"response")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("inlineCode",{parentName:"p"},"IncomingMessage")," | ",(0,p.kt)("inlineCode",{parentName:"p"},"Readable")),(0,p.kt)("p",null,"stream"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"request"},(0,p.kt)("inlineCode",{parentName:"h3"},"request")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"Request"))),(0,p.kt)("p",null,"Original instance fo the {Request} object. Must be modified in-place."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"session"},(0,p.kt)("inlineCode",{parentName:"h3"},"session")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"Session"))),(0,p.kt)("p",null,"The current session"),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"proxyinfo"},(0,p.kt)("inlineCode",{parentName:"h3"},"proxyInfo")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../typedefs/proxy-info",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"ProxyInfo"))),(0,p.kt)("p",null,"An object with information about currently used proxy by the crawler and configured by the ",(0,p.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))," class."),(0,p.kt)("hr",null),(0,p.kt)("h3",{id:"crawler"},(0,p.kt)("inlineCode",{parentName:"h3"},"crawler")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Type"),": ",(0,p.kt)("a",{parentName:"p",href:"../api/cheerio-crawler",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"CheerioCrawler"))),(0,p.kt)("hr",null))}d.isMDXComponent=!0}}]);