"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),g=a,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9551:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>d});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"playwright",title:"utils.playwright",original_id:"playwright"},p=void 0,s={unversionedId:"api/playwright",id:"version-2.0.6/api/playwright",title:"utils.playwright",description:"A namespace that contains various utilities for Playwright - the headless Chrome Node API.",source:"@site/versioned_docs/version-2.0.6/api/playwright.md",sourceDirName:"api",slug:"/api/playwright",permalink:"/apify-ts/docs/api/playwright",tags:[],version:"2.0.6",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1645803484,formattedLastUpdatedAt:"2/25/2022",frontMatter:{id:"playwright",title:"utils.playwright",original_id:"playwright"},sidebar:"version-2.0.6/docs",previous:{title:"utils.log",permalink:"/apify-ts/docs/api/log"},next:{title:"utils.puppeteer",permalink:"/apify-ts/docs/api/puppeteer"}},u=[{value:"<code>playwright.gotoExtended</code>",id:"playwrightgotoextended",children:[],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"playwright"}),(0,i.kt)("p",null,"A namespace that contains various utilities for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener"},"Playwright")," - the headless Chrome Node API."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\nconst { playwright } = Apify.utils;\n\n// Navigate to https://www.example.com in Playwright with a POST request\nconst browser = await Apify.launchPlaywright();\nconst page = await browser.newPage();\nawait playwright.gotoExtended(page, {\n    url: 'https://example.com,\n    method: 'POST',\n});\n")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"gotoextended"}),(0,i.kt)("h2",{id:"playwrightgotoextended"},(0,i.kt)("inlineCode",{parentName:"h2"},"playwright.gotoExtended")),(0,i.kt)("p",null,"Extended version of Playwright's ",(0,i.kt)("inlineCode",{parentName:"p"},"page.goto()")," allowing to perform requests with HTTP method other than GET, with custom headers and POST payload.\nURL, method, headers and payload are taken from request parameter that must be an instance of Apify.Request class."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE:")," In recent versions of Playwright using requests other than GET, overriding headers and adding payloads disables browser cache which degrades\nperformance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"page")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Page")," - Puppeteer ",(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/api/class-page",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"Page"))," object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"request")),": ",(0,i.kt)("a",{parentName:"li",href:"../api/request",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Request"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[gotoOptions]")),": ",(0,i.kt)("a",{parentName:"li",href:"../typedefs/direct-navigation-options",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"DirectNavigationOptions"))," - Custom options for ",(0,i.kt)("inlineCode",{parentName:"li"},"page.goto()"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise<(Response|null)>")),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);