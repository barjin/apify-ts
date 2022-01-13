"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(p,".").concat(h)]||d[h]||s[h]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7317:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>u,default:()=>d});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"browser-launch-context",title:"BrowserLaunchContext",original_id:"browser-launch-context"},p=void 0,c={unversionedId:"typedefs/browser-launch-context",id:"version-2.0.6/typedefs/browser-launch-context",title:"BrowserLaunchContext",description:"Properties",source:"@site/versioned_docs/version-2.0.6/typedefs/BrowserLaunchContext.md",sourceDirName:"typedefs",slug:"/typedefs/browser-launch-context",permalink:"/apify-ts/docs/typedefs/browser-launch-context",tags:[],version:"2.0.6",lastUpdatedBy:"Andrey Bykov",lastUpdatedAt:1642074737,formattedLastUpdatedAt:"1/13/2022",frontMatter:{id:"browser-launch-context",title:"BrowserLaunchContext",original_id:"browser-launch-context"}},u=[{value:"Properties",id:"properties",children:[{value:"<code>launchOptions</code>",id:"launchoptions",children:[],level:3},{value:"<code>proxyUrl</code>",id:"proxyurl",children:[],level:3},{value:"<code>useChrome</code>",id:"usechrome",children:[],level:3},{value:"<code>launcher</code>",id:"launcher",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"browserlaunchcontext"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"launchoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"launchOptions")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object<string, *>")),(0,a.kt)("p",null,"`Options passed to the browser launcher function. Options are based on underlying library."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"proxyurl"},(0,a.kt)("inlineCode",{parentName:"h3"},"proxyUrl")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"URL to a HTTP proxy server. It must define the port number, and it may also contain proxy username and password."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://bob:pass123@proxy.example.com:1234"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usechrome"},(0,a.kt)("inlineCode",{parentName:"h3"},"useChrome")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = false")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"executablePath")," is not set, Playwright will launch full Google Chrome browser available on the machine rather than the bundled\nChromium. The path to Chrome executable is taken from the ",(0,a.kt)("inlineCode",{parentName:"p"},"APIFY_CHROME_EXECUTABLE_PATH")," environment variable if provided, or defaults to the typical\nGoogle Chrome executable location specific for the operating system. By default, this option is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"launcher"},(0,a.kt)("inlineCode",{parentName:"h3"},"launcher")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"*")),(0,a.kt)("p",null,'By default this function uses\nrequire("playwright").chromium',(0,a.kt)("inlineCode",{parentName:"p"},". If you want to use a different browser you can pass it by this property as"),'require("playwright").firefox'),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);