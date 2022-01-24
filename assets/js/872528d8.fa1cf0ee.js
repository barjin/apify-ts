"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,y=h["".concat(i,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4379:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>i,metadata:()=>c,toc:()=>s,default:()=>h});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],p={id:"playwright-launch-context",title:"PlaywrightLaunchContext",original_id:"playwright-launch-context"},i=void 0,c={unversionedId:"typedefs/playwright-launch-context",id:"version-2.0.6/typedefs/playwright-launch-context",title:"PlaywrightLaunchContext",description:"Apify extends the launch options of Playwright. You can use any of the Playwright compatible",source:"@site/versioned_docs/version-2.0.6/typedefs/PlaywrightLaunchContext.md",sourceDirName:"typedefs",slug:"/typedefs/playwright-launch-context",permalink:"/apify-ts/docs/typedefs/playwright-launch-context",tags:[],version:"2.0.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1643037525,formattedLastUpdatedAt:"1/24/2022",frontMatter:{id:"playwright-launch-context",title:"PlaywrightLaunchContext",original_id:"playwright-launch-context"},sidebar:"version-2.0.6/docs",previous:{title:"PlaywrightCrawlerOptions",permalink:"/apify-ts/docs/typedefs/playwright-crawler-options"},next:{title:"PuppeteerCrawlerOptions",permalink:"/apify-ts/docs/typedefs/puppeteer-crawler-options"}},s=[{value:"Properties",id:"properties",children:[{value:"<code>launchOptions</code>",id:"launchoptions",children:[],level:3},{value:"<code>proxyUrl</code>",id:"proxyurl",children:[],level:3},{value:"<code>useChrome</code>",id:"usechrome",children:[],level:3},{value:"<code>launcher</code>",id:"launcher",children:[],level:3}],level:2}],u={toc:s};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"playwrightlaunchcontext"}),(0,o.kt)("p",null,"Apify extends the launch options of Playwright. You can use any of the Playwright compatible\n",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsertype#browsertypelaunchoptions",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"LaunchOptions"))," options by providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"launchOptions")," property."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// launch a headless Chrome (not Chromium)\nconst launchContext = {\n    // Apify helpers\n    useChrome: true,\n    proxyUrl: 'http://user:password@some.proxy.com'\n    // Native Playwright options\n    launchOptions: {\n        headless: true,\n        args: ['--some-flag'],\n    }\n}\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"launchoptions"},(0,o.kt)("inlineCode",{parentName:"h3"},"launchOptions")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"LaunchOptions")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"browserType.launch")," ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-browsertype?_highlight=launch#browsertypelaunchoptions",target:"_blank",rel:"noopener"},"options")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"proxyurl"},(0,o.kt)("inlineCode",{parentName:"h3"},"proxyUrl")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"URL to a HTTP proxy server. It must define the port number, and it may also contain proxy username and password."),(0,o.kt)("p",null,"Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://bob:pass123@proxy.example.com:1234"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usechrome"},(0,o.kt)("inlineCode",{parentName:"h3"},"useChrome")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,o.kt)("code",null," = false")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"executablePath")," is not set, Playwright will launch full Google Chrome browser available on the machine rather than the bundled\nChromium. The path to Chrome executable is taken from the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_CHROME_EXECUTABLE_PATH")," environment variable if provided, or defaults to the typical\nGoogle Chrome executable location specific for the operating system. By default, this option is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"launcher"},(0,o.kt)("inlineCode",{parentName:"h3"},"launcher")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"*")),(0,o.kt)("p",null,"By default this function uses ",(0,o.kt)("inlineCode",{parentName:"p"},'require("playwright").chromium'),". If you want to use a different browser you can pass it by this property as e.g.\n",(0,o.kt)("inlineCode",{parentName:"p"},'require("playwright").firefox')),(0,o.kt)("hr",null))}h.isMDXComponent=!0}}]);