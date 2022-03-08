"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=p,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:p,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2834:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>u,assets:()=>c,toc:()=>s,default:()=>f});var n=r(7462),p=r(3366),a=(r(7294),r(3905)),o=["components"],l={id:"launch-puppeteer",title:"LaunchPuppeteer",original_id:"launch-puppeteer"},i=void 0,u={unversionedId:"typedefs/launch-puppeteer",id:"version-2.0.6/typedefs/launch-puppeteer",title:"LaunchPuppeteer",description:"Parameters:",source:"@site/versioned_docs/version-2.0.6/typedefs/LaunchPuppeteer.md",sourceDirName:"typedefs",slug:"/typedefs/launch-puppeteer",permalink:"/apify-ts/docs/typedefs/launch-puppeteer",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1646757267,formattedLastUpdatedAt:"3/8/2022",frontMatter:{id:"launch-puppeteer",title:"LaunchPuppeteer",original_id:"launch-puppeteer"}},c={},s=[],d={toc:s};function f(e){var t=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"launchpuppeteer"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"inputs")),": ",(0,a.kt)("a",{parentName:"li",href:"../typedefs/launch-puppeteer-options",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"LaunchPuppeteerOptions"))," - Arguments passed to this callback.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise<Browser>")," - Promise that resolves to Puppeteer's ",(0,a.kt)("inlineCode",{parentName:"p"},"Browser")," instance. This might be obtained by calling\n",(0,a.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v2.0.0&show=api-puppeteerlaunchoptions",target:"_blank",rel:"noopener"},"puppeteer.launch()")," directly, or by delegating to\n",(0,a.kt)("a",{parentName:"p",href:"../api/apify#launchpuppeteer",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Apify.launchPuppeteer()")),"."),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);