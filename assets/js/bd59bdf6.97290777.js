"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6721],{4633:(e,r,a)=>{a.d(r,{Z:()=>i});var s=a(7294),t=a(3725),n=a(2263);const i=function(e){var r=e.apiPath,a=e.children,i=(0,t.useDocsVersion)(),l=(0,n.default)().siteConfig;return s.createElement("a",{href:l.baseUrl+"api/"+("current"===i.version?"next":i.version)+"/"+r},a)}},18:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var s=a(7462),t=a(3366),n=(a(7294),a(3905)),i=a(1736),l=a(4633);var o=["components"],c={id:"crawl-some-links",title:"Crawl some links on a website"},p=void 0,u={unversionedId:"examples/crawlers/cheerio/crawl-some-links",id:"examples/crawlers/cheerio/crawl-some-links",title:"Crawl some links on a website",description:"This CheerioCrawler example uses",source:"@site/../docs/examples/crawlers/cheerio/crawl_some_links.mdx",sourceDirName:"examples/crawlers/cheerio",slug:"/examples/crawlers/cheerio/crawl-some-links",permalink:"/apify-ts/docs/next/examples/crawlers/cheerio/crawl-some-links",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1646758386,formattedLastUpdatedAt:"3/8/2022",frontMatter:{id:"crawl-some-links",title:"Crawl some links on a website"},sidebar:"docs",previous:{title:"Crawl a website with relative links",permalink:"/apify-ts/docs/next/examples/crawlers/cheerio/crawl-relative-links"},next:{title:"Crawl all links on a website",permalink:"/apify-ts/docs/next/examples/crawlers/crawl-all-links"}},d={},m=[],w={toc:m};function k(e){var r=e.components,a=(0,t.Z)(e,o);return(0,n.kt)("wrapper",(0,s.Z)({},w,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This ",(0,n.kt)(l.Z,{apiPath:"cheerio-crawler",mdxType:"VersionedApiLink"},(0,n.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," example uses\nthe ",(0,n.kt)(l.Z,{apiPath:"core/class/PseudoUrl",mdxType:"VersionedApiLink"},(0,n.kt)("inlineCode",{parentName:"p"},"pseudoUrls"))," property in\nthe ",(0,n.kt)(l.Z,{apiPath:"cheerio-crawler/interface/CheerioHandlePageInputs#enqueueLinks",mdxType:"VersionedApiLink"},(0,n.kt)("inlineCode",{parentName:"p"},"enqueueLinks()"))," method\nto only add links to the ",(0,n.kt)(l.Z,{apiPath:"core/class/RequestQueue",mdxType:"VersionedApiLink"},(0,n.kt)("inlineCode",{parentName:"p"},"RequestQueue"))," queue if they match the specified regular expression."),(0,n.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},"import { CheerioCrawler } from '@crawlers/cheerio';\n\n// Create a CheerioCrawler\nconst crawler = new CheerioCrawler({\n    // Limits the crawler to only 10 requests (do not use if you want to crawl all links)\n    maxRequestsPerCrawl: 10,\n    // Function called for each URL\n    async requestHandler({ request, enqueueLinks }) {\n        console.log(request.url);\n        // Add some links from page to the crawler's RequestQueue\n        await enqueueLinks({\n            pseudoUrls: ['http[s?]://apify.com/[.+]/[.+]'],\n        });\n    },\n});\n\n// Define the starting URL\nawait crawler.addRequests(['https://apify.com/store']);\n\n// Run the crawler\nawait crawler.run();\n"))}k.isMDXComponent=!0}}]);