"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1824],{4633:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(7294),s=t(3725),n=t(2263);const i=function(e){var a=e.apiPath,t=e.children,i=(0,s.useDocsVersion)(),l=(0,n.default)().siteConfig;return r.createElement("a",{href:l.baseUrl+"api/"+("current"===i.version?"next":i.version)+"/"+a},t)}},1925:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>w,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var r=t(7462),s=t(3366),n=(t(7294),t(3905)),i=t(1736),l=t(4633);var o=["components"],c={id:"basic-crawler",title:"Basic crawler"},w=void 0,d={unversionedId:"examples/crawlers/basic/basic-crawler",id:"examples/crawlers/basic/basic-crawler",title:"Basic crawler",description:"This is the most bare-bones example of the Apify SDK, which demonstrates some of its building blocks such as the BasicCrawler.",source:"@site/../docs/examples/crawlers/basic/basic_crawler.mdx",sourceDirName:"examples/crawlers/basic",slug:"/examples/crawlers/basic/basic-crawler",permalink:"/apify-ts/docs/next/examples/crawlers/basic/basic-crawler",tags:[],version:"current",lastUpdatedBy:"Vlad Frangu",lastUpdatedAt:1646670973,formattedLastUpdatedAt:"3/7/2022",frontMatter:{id:"basic-crawler",title:"Basic crawler"},sidebar:"docs",previous:{title:"Add data to dataset",permalink:"/apify-ts/docs/next/examples/basics/add-data-to-dataset"},next:{title:"Cheerio crawler",permalink:"/apify-ts/docs/next/examples/crawlers/cheerio/cheerio-crawler"}},p={},u=[],h={toc:u};function m(e){var a=e.components,t=(0,s.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is the most bare-bones example of the Apify SDK, which demonstrates some of its building blocks such as the ",(0,n.kt)(l.Z,{apiPath:"basic-crawler",mdxType:"VersionedApiLink"},(0,n.kt)("inlineCode",{parentName:"p"},"BasicCrawler")),".\nYou probably don't need to go this deep though, and it would be better to start with one of the full featured crawlers\nlike ",(0,n.kt)("a",{parentName:"p",href:"../cheerio/cheerio-crawler",target:null,rel:null},(0,n.kt)("inlineCode",{parentName:"a"},"CheerioCrawler"))," or ",(0,n.kt)("a",{parentName:"p",href:"../playwright/playwright-crawler",target:null,rel:null},(0,n.kt)("inlineCode",{parentName:"a"},"PlaywrightCrawler")),"."),(0,n.kt)("p",null,"The script simply downloads several web pages with plain HTTP requests using the ",(0,n.kt)(l.Z,{apiPath:"utils/function/requestAsBrowser",mdxType:"VersionedApiLink"},(0,n.kt)("inlineCode",{parentName:"p"},"requestAsBrowser()")),"\nconvenience function and stores their raw HTML and URL in the default dataset. In local configuration, the data will be stored as JSON files in\n",(0,n.kt)("inlineCode",{parentName:"p"},"./apify_storage/datasets/default"),"."),(0,n.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},"import { BasicCrawler, Dataset } from '@crawlers/basic';\nimport { requestAsBrowser } from '@crawlers/utils';\n\n// Create a dataset where we will store the results.\nconst dataset = await Dataset.open();\n\n// Create a BasicCrawler - the simplest crawler that enables\n// users to implement the crawling logic themselves.\nconst crawler = new BasicCrawler({\n    // This function will be called for each URL to crawl.\n    async requestHandler({ request }) {\n        const { url } = request;\n        console.log(`Processing ${url}...`);\n\n        // Fetch the page HTML via Apify utils requestAsBrowser\n        const { body } = await requestAsBrowser({ url });\n\n        // Store the HTML and URL to the default dataset.\n        await dataset.pushData({\n            url: request.url,\n            html: body,\n        });\n    },\n});\n\n// The initial list of URLs to crawl. Here we use just a few hard-coded URLs.\nawait crawler.addRequests([\n    { url: 'http://www.google.com/' },\n    { url: 'http://www.example.com/' },\n    { url: 'http://www.bing.com/' },\n    { url: 'http://www.wikipedia.com/' },\n]);\n\n// Run the crawler and wait for it to finish.\nawait crawler.run();\n\nconsole.log('Crawler finished.');\n"))}m.isMDXComponent=!0}}]);