"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9967:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(9055);var s=["components"],l={id:"playwright-crawler",title:"Playwright crawler"},c=void 0,p={unversionedId:"examples/playwright-crawler",id:"examples/playwright-crawler",isDocsHomePage:!1,title:"Playwright crawler",description:"This example demonstrates how to use PlaywrightCrawler in combination with RequestQueue to",source:"@site/../docs/examples/playwright_crawler.mdx",sourceDirName:"examples",slug:"/examples/playwright-crawler",permalink:"/apify-ts/docs/next/examples/playwright-crawler",tags:[],version:"current",frontMatter:{id:"playwright-crawler",title:"Playwright crawler"},sidebar:"docs",previous:{title:"Dataset Map and Reduce methods",permalink:"/apify-ts/docs/next/examples/map-and-reduce"},next:{title:"Puppeteer crawler",permalink:"/apify-ts/docs/next/examples/puppeteer-crawler"}},u=[],h={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example demonstrates how to use ",(0,i.kt)("a",{parentName:"p",href:"../api/playwright-crawler",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawler"))," in combination with ",(0,i.kt)("a",{parentName:"p",href:"../api/request-queue",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"RequestQueue"))," to\nrecursively scrape the ",(0,i.kt)("a",{parentName:"p",href:"https://news.ycombinator.com",target:"_blank",rel:"noopener"},"Hacker News website")," using headless Chrome / Playwright."),(0,i.kt)("p",null,"The crawler starts with a single URL, finds links to next pages, enqueues them and continues until no more desired links are available. The results\nare stored to the default dataset. In local configuration, the results are stored as JSON files in ",(0,i.kt)("inlineCode",{parentName:"p"},"./apify_storage/datasets/default")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To run this example on the Apify Platform, select the ",(0,i.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile."))),(0,i.kt)(o.Z,{className:"language-js",mdxType:"CodeBlock"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Apify.openRequestQueue() creates a preconfigured RequestQueue instance.\n    // We add our first request to it - the initial page the crawler will visit.\n    const requestQueue = await Apify.openRequestQueue();\n    await requestQueue.addRequest({ url: 'https://news.ycombinator.com/' });\n\n    // Create an instance of the PlaywrightCrawler class - a crawler\n    // that automatically loads the URLs in headless Chrome / Playwright.\n    const crawler = new Apify.PlaywrightCrawler({\n        requestQueue,\n        launchContext: {\n            // Here you can set options that are passed to the playwright .launch() function.\n            launchOptions: {\n                headless: true,\n            },\n        },\n\n        // Stop crawling after several pages\n        maxRequestsPerCrawl: 50,\n\n        // This function will be called for each URL to crawl.\n        // Here you can write the Playwright scripts you are familiar with,\n        // with the exception that browsers and pages are automatically managed by the Apify SDK.\n        // The function accepts a single parameter, which is an object with a lot of properties,\n        // the most important being:\n        // - request: an instance of the Request class with information such as URL and HTTP method\n        // - page: Playwright's Page object (see https://playwright.dev/docs/api/class-page)\n        handlePageFunction: async ({ request, page }) => {\n            console.log(`Processing ${request.url}...`);\n\n            // A function to be evaluated by Playwright within the browser context.\n            const data = await page.$$eval('.athing', ($posts) => {\n                const scrapedData = [];\n\n                // We're getting the title, rank and URL of each post on Hacker News.\n                $posts.forEach(($post) => {\n                    scrapedData.push({\n                        title: $post.querySelector('.title a').innerText,\n                        rank: $post.querySelector('.rank').innerText,\n                        href: $post.querySelector('.title a').href,\n                    });\n                });\n\n                return scrapedData;\n            });\n\n            // Store the results to the default dataset.\n            await Apify.pushData(data);\n\n            // Find a link to the next page and enqueue it if it exists.\n            const infos = await Apify.utils.enqueueLinks({\n                page,\n                requestQueue,\n                selector: '.morelink',\n            });\n\n            if (infos.length === 0) console.log(`${request.url} is the last page!`);\n        },\n\n        // This function is called if the page processing failed more than maxRequestRetries+1 times.\n        handleFailedRequestFunction: async ({ request }) => {\n            console.log(`Request ${request.url} failed too many times.`);\n        },\n    });\n\n    // Run the crawler and wait for it to finish.\n    await crawler.run();\n\n    console.log('Crawler finished.');\n});\n"))}d.isMDXComponent=!0}}]);