"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1951],{3788:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>m,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var n=t(7462),r=t(3366),s=(t(7294),t(3905)),i=t(6396),o=t(8215),l=t(9055);var p=["components"],c={id:"crawl-sitemap",title:"Crawl a sitemap"},m=void 0,u={unversionedId:"examples/crawl-sitemap",id:"examples/crawl-sitemap",title:"Crawl a sitemap",description:"PlaywrightSource from '!!raw-loader!./crawlsitemapplaywright.js';",source:"@site/../docs/examples/crawl_sitemap.mdx",sourceDirName:"examples",slug:"/examples/crawl-sitemap",permalink:"/apify-ts/docs/next/examples/crawl-sitemap",tags:[],version:"current",frontMatter:{id:"crawl-sitemap",title:"Crawl a sitemap"},sidebar:"docs",previous:{title:"Crawl a single URL",permalink:"/apify-ts/docs/next/examples/crawl-single-url"},next:{title:"Crawl some links on a website",permalink:"/apify-ts/docs/next/examples/crawl-some-links"}},d=[],w={toc:d};function h(e){var a=e.components,t=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,n.Z)({},w,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This example downloads and crawls the URLs from a sitemap."),(0,s.kt)(i.Z,{groupId:"crawler-type",mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"cheerio_crawler",label:"CheerioCrawler",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,"Using ",(0,s.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"),":"),(0,s.kt)(l.Z,{className:"language-js",mdxType:"CodeBlock"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Add URLs to a RequestList from a sitemap\n    const sources = [{ requestsFromUrl: 'https://apify.com/sitemap.xml' }];\n    const requestList = await Apify.openRequestList('start-urls', sources);\n\n    // Function called for each URL\n    const handlePageFunction = async ({ request }) => {\n        console.log(request.url);\n    };\n\n    // Create a crawler that uses Cheerio\n    const crawler = new Apify.CheerioCrawler({\n        requestList,\n        handlePageFunction,\n        maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n    });\n\n    // Run the crawler\n    await crawler.run();\n});\n")),(0,s.kt)(o.Z,{value:"puppeteer_crawler",label:"PuppeteerCrawler",mdxType:"TabItem"},(0,s.kt)("p",null,"Using ",(0,s.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"To run this example on the Apify Platform, select the ",(0,s.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile."))),(0,s.kt)(l.Z,{className:"language-js",mdxType:"CodeBlock"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Add URLs to a RequestList from a sitemap\n    const sources = [{ requestsFromUrl: 'https://apify.com/sitemap.xml' }];\n    const requestList = await Apify.openRequestList('start-urls', sources);\n\n    // Function called for each URL\n    const handlePageFunction = async ({ request }) => {\n        console.log(request.url);\n    };\n\n    // Create a crawler that runs Puppeteer\n    const crawler = new Apify.PuppeteerCrawler({\n        requestList,\n        handlePageFunction,\n        maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n    });\n\n    // Run the crawler\n    await crawler.run();\n});\n")),(0,s.kt)(o.Z,{value:"playwright_crawler",label:"PlaywrightCrawler",mdxType:"TabItem"},(0,s.kt)("p",null,"Using ",(0,s.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler"),":"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"To run this example on the Apify Platform, select the ",(0,s.kt)("inlineCode",{parentName:"p"},"apify/actor-node-playwright-chrome")," image for your Dockerfile."))),(0,s.kt)(l.Z,{className:"language-js",mdxType:"CodeBlock"},"const Apify = require('apify');\n\nApify.main(async () => {\n    // Add URLs to a RequestList from a sitemap\n    const sources = [{ requestsFromUrl: 'https://apify.com/sitemap.xml' }];\n    const requestList = await Apify.openRequestList('start-urls', sources);\n\n    // Function called for each URL\n    const handlePageFunction = async ({ request }) => {\n        console.log(request.url);\n    };\n\n    // Create a crawler that runs Playwright\n    const crawler = new Apify.PlaywrightCrawler({\n        requestList,\n        handlePageFunction,\n        maxRequestsPerCrawl: 10, // Limitation for only 10 requests (do not use if you want to crawl a sitemap)\n    });\n\n    // Run the crawler\n    await crawler.run();\n});\n"))))}h.isMDXComponent=!0}}]);