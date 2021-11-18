"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=p,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:p,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3885:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>s,toc:()=>u,default:()=>d});var r=n(7462),p=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"puppeteer-launch-context",title:"PuppeteerLaunchContext",original_id:"puppeteer-launch-context"},i=void 0,s={unversionedId:"typedefs/puppeteer-launch-context",id:"version-2.0.6/typedefs/puppeteer-launch-context",isDocsHomePage:!1,title:"PuppeteerLaunchContext",description:"Apify extends the launch options of Puppeteer. You can use any of the Puppeteer compatible",source:"@site/versioned_docs/version-2.0.6/typedefs/PuppeteerLaunchContext.md",sourceDirName:"typedefs",slug:"/typedefs/puppeteer-launch-context",permalink:"/apify-ts/docs/typedefs/puppeteer-launch-context",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637255450,formattedLastUpdatedAt:"11/18/2021",frontMatter:{id:"puppeteer-launch-context",title:"PuppeteerLaunchContext",original_id:"puppeteer-launch-context"},sidebar:"version-2.0.6/docs",previous:{title:"PuppeteerCrawlerOptions",permalink:"/apify-ts/docs/typedefs/puppeteer-crawler-options"},next:{title:"ProxyConfigurationOptions",permalink:"/apify-ts/docs/typedefs/proxy-configuration-options"}},u=[{value:"Properties",id:"properties",children:[{value:"<code>launchOptions</code>",id:"launchoptions",children:[],level:3},{value:"<code>proxyUrl</code>",id:"proxyurl",children:[],level:3},{value:"<code>userAgent</code>",id:"useragent",children:[],level:3},{value:"<code>useChrome</code>",id:"usechrome",children:[],level:3},{value:"<code>launcher</code>",id:"launcher",children:[],level:3},{value:"<code>stealth</code>",id:"stealth",children:[],level:3},{value:"<code>stealthOptions</code>",id:"stealthoptions",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"puppeteerlaunchcontext"}),(0,o.kt)("p",null,"Apify extends the launch options of Puppeteer. You can use any of the Puppeteer compatible\n",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&show=api-puppeteerlaunchoptions",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"LaunchOptions"))," options by providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"launchOptions")," property."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// launch a headless Chrome (not Chromium)\nconst launchContext = {\n    // Apify helpers\n    useChrome: true,\n    proxyUrl: 'http://user:password@some.proxy.com'\n    // Native Puppeteer options\n    launchOptions: {\n        headless: true,\n        args: ['--some-flag'],\n    }\n}\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"launchoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"launchOptions")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"LaunchOptions")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"puppeteer.launch")," ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v5.5.0&show=api-puppeteerlaunchoptions",target:"_blank",rel:"noopener"},"options")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"proxyurl"},(0,o.kt)("inlineCode",{parentName:"h3"},"proxyUrl")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"URL to a HTTP proxy server. It must define the port number, and it may also contain proxy username and password."),(0,o.kt)("p",null,"Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://bob:pass123@proxy.example.com:1234"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"useragent"},(0,o.kt)("inlineCode",{parentName:"h3"},"userAgent")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"User-Agent")," HTTP header used by the browser. If not provided, the function sets ",(0,o.kt)("inlineCode",{parentName:"p"},"User-Agent")," to a reasonable default to reduce the chance of\ndetection of the crawler."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usechrome"},(0,o.kt)("inlineCode",{parentName:"h3"},"useChrome")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,o.kt)("code",null," = false")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"executablePath")," is not set, Puppeteer will launch full Google Chrome browser available on the machine rather than the bundled Chromium.\nThe path to Chrome executable is taken from the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_CHROME_EXECUTABLE_PATH")," environment variable if provided, or defaults to the typical Google\nChrome executable location specific for the operating system. By default, this option is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"launcher"},(0,o.kt)("inlineCode",{parentName:"h3"},"launcher")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"*")),(0,o.kt)("p",null,"Already required module (",(0,o.kt)("inlineCode",{parentName:"p"},"Object"),"). This enables usage of various Puppeteer wrappers such as ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteer-extra"),"."),(0,o.kt)("p",null,"Take caution, because it can cause all kinds of unexpected errors and weird behavior. Apify SDK is not tested with any other library besides\n",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteer")," itself."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stealth"},(0,o.kt)("inlineCode",{parentName:"h3"},"stealth")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"This setting hides most of the known properties that identify headless Chrome and makes it nearly undetectable. It is recommended to use it together\nwith the ",(0,o.kt)("inlineCode",{parentName:"p"},"useChrome")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"stealthoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"stealthOptions")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("a",{parentName:"p",href:"../typedefs/stealth-options",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"StealthOptions"))),(0,o.kt)("p",null,"Using this configuration, you can disable some of the hiding tricks. For these settings to take effect ",(0,o.kt)("inlineCode",{parentName:"p"},"stealth")," must be set to true"),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);