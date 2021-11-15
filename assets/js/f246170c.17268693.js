"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5083],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(t),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||p;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2231:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>s});var n=t(7462),a=t(3366),p=(t(7294),t(3905)),i=t(9055);var o=["components"],c={id:"puppeteer-recursive-crawl",title:"Puppeteer recursive crawl"},l=void 0,u={unversionedId:"examples/puppeteer-recursive-crawl",id:"examples/puppeteer-recursive-crawl",isDocsHomePage:!1,title:"Puppeteer recursive crawl",description:"Run the following example to perform a recursive crawl of a website using PuppeteerCrawler.",source:"@site/../docs/examples/puppeteer_recursive_crawl.mdx",sourceDirName:"examples",slug:"/examples/puppeteer-recursive-crawl",permalink:"/apify-ts/docs/next/examples/puppeteer-recursive-crawl",tags:[],version:"current",frontMatter:{id:"puppeteer-recursive-crawl",title:"Puppeteer recursive crawl"},sidebar:"docs",previous:{title:"Puppeteer crawler",permalink:"/apify-ts/docs/next/examples/puppeteer-crawler"},next:{title:"Puppeteer with proxy",permalink:"/apify-ts/docs/next/examples/puppeteer-with-proxy"}},s=[],m={toc:s};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Run the following example to perform a recursive crawl of a website using ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/puppeteer-crawler",target:null,rel:null},(0,p.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler")),"."),(0,p.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"To run this example on the Apify Platform, select the ",(0,p.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile."))),(0,p.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},"const Apify = require('apify');\n\nApify.main(async () => {\n    const requestQueue = await Apify.openRequestQueue();\n    await requestQueue.addRequest({ url: 'https://www.iana.org/' });\n\n    const crawler = new Apify.PuppeteerCrawler({\n        requestQueue,\n        handlePageFunction: async ({ request, page }) => {\n            const title = await page.title();\n            console.log(`Title of ${request.url}: ${title}`);\n            await Apify.utils.enqueueLinks({\n                page,\n                requestQueue,\n                pseudoUrls: ['https://www.iana.org/[.*]'],\n            });\n        },\n        maxRequestsPerCrawl: 10,\n    });\n\n    await crawler.run();\n});\n"))}f.isMDXComponent=!0}}]);