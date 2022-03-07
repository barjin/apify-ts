"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(i,".").concat(f)]||d[f]||c[f]||a;return n?r.createElement(m,p(p({ref:t},u),{},{components:n})):r.createElement(m,p({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},786:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>l,assets:()=>u,toc:()=>c,default:()=>f});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],s={id:"post-response-inputs",title:"PostResponseInputs",original_id:"post-response-inputs"},i=void 0,l={unversionedId:"typedefs/post-response-inputs",id:"version-2.0.6/typedefs/post-response-inputs",title:"PostResponseInputs",description:"Properties",source:"@site/versioned_docs/version-2.0.6/typedefs/PostResponseInputs.md",sourceDirName:"typedefs",slug:"/typedefs/post-response-inputs",permalink:"/apify-ts/docs/typedefs/post-response-inputs",tags:[],version:"2.0.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1646670973,formattedLastUpdatedAt:"3/7/2022",frontMatter:{id:"post-response-inputs",title:"PostResponseInputs",original_id:"post-response-inputs"}},u={},c=[{value:"Properties",id:"properties",level:2},{value:"<code>response</code>",id:"response",level:3},{value:"<code>request</code>",id:"request",level:3},{value:"<code>session</code>",id:"session",level:3},{value:"<code>proxyInfo</code>",id:"proxyinfo",level:3},{value:"<code>crawler</code>",id:"crawler",level:3}],d={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"postresponseinputs"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"response"},(0,a.kt)("inlineCode",{parentName:"h3"},"response")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"IncomingMessage")," | ",(0,a.kt)("inlineCode",{parentName:"p"},"Readable")),(0,a.kt)("p",null,"stream"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"request"},(0,a.kt)("inlineCode",{parentName:"h3"},"request")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../api/request",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Request"))),(0,a.kt)("p",null,"Original instance fo the {Request} object. Must be modified in-place."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"session"},(0,a.kt)("inlineCode",{parentName:"h3"},"session")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Session"))),(0,a.kt)("p",null,"The current session"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"proxyinfo"},(0,a.kt)("inlineCode",{parentName:"h3"},"proxyInfo")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/proxy-info",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"ProxyInfo"))),(0,a.kt)("p",null,"An object with information about currently used proxy by the crawler and configured by the ",(0,a.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))," class."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crawler"},(0,a.kt)("inlineCode",{parentName:"h3"},"crawler")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../api/cheerio-crawler",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"CheerioCrawler"))),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);