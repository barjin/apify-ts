"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4359],{4633:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),s=a(3725),r=a(2263);const o=function(e){var t=e.apiPath,a=e.children,o=(0,s.useDocsVersion)(),i=(0,r.default)().siteConfig;return n.createElement("a",{href:i.baseUrl+"api/"+("current"===o.version?"next":o.version)+"/"+t},a)}},3190:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var n=a(7462),s=a(3366),r=(a(7294),a(3905)),o=a(1736),i=a(4633);var p=["components"],l={id:"forms",title:"Forms"},d=void 0,m={unversionedId:"examples/forms",id:"examples/forms",title:"Forms",description:"This example demonstrates how to use PuppeteerCrawler to",source:"@site/../docs/examples/forms.mdx",sourceDirName:"examples",slug:"/examples/forms",permalink:"/apify-ts/docs/next/examples/forms",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1646758386,formattedLastUpdatedAt:"3/8/2022",frontMatter:{id:"forms",title:"Forms"},sidebar:"docs",previous:{title:"Use stealth mode",permalink:"/apify-ts/docs/next/examples/crawlers/puppeteer/use-stealth-mode"},next:{title:"Dataset Map and Reduce methods",permalink:"/apify-ts/docs/next/examples/map-and-reduce"}},c={},u=[],h={toc:u};function f(e){var t=e.components,a=(0,s.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example demonstrates how to use ",(0,r.kt)(i.Z,{apiPath:"puppeteer-crawler/class/PuppeteerCrawler",mdxType:"VersionedApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"))," to\nautomatically fill and submit a search form to look up repositories on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com",target:"_blank",rel:"noopener"},"GitHub")," using headless Chrome / Puppeteer.\nThe actor first fills in the search term, repository owner, start date and language of the repository, then submits the form\nand prints out the results. Finally, the results are saved either on the Apify platform to the\ndefault ",(0,r.kt)(i.Z,{apiPath:"core/class/Dataset",mdxType:"VersionedApiLink"},(0,r.kt)("inlineCode",{parentName:"p"},"dataset"))," or on the local machine as JSON files in ",(0,r.kt)("inlineCode",{parentName:"p"},"./apify_storage/datasets/default"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To run this example on the Apify Platform, select the ",(0,r.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile."))),(0,r.kt)(o.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Dataset, launchPuppeteer } from '@crawlers/puppeteer';\n\nconst dataset = await Dataset.open();\n\n// Launch the web browser.\nconst browser = await launchPuppeteer();\n\n// Create and navigate new page\nconsole.log('Open target page');\nconst page = await browser.newPage();\nawait page.goto('https://github.com/search/advanced');\n\n// Fill form fields and select desired search options\nconsole.log('Fill in search form');\nawait page.type('#adv_code_search input.js-advanced-search-input', 'apify-js');\nawait page.type('#search_from', 'apify');\nawait page.type('#search_date', '>2015');\nawait page.select('select#search_language', 'JavaScript');\n\n// Submit the form and wait for full load of next page\nconsole.log('Submit search form');\nawait Promise.all([\n    page.waitForNavigation(),\n    page.click('#adv_code_search button[type=\"submit\"]'),\n]);\n\n// Obtain and print list of search results\nconst results = await page.$$eval('div.f4.text-normal a', (nodes) => nodes.map((node) => ({\n    url: node.href,\n    name: node.innerText,\n})));\n\nconsole.log('Results:', results);\n\n// Store data in default dataset\nawait dataset.pushData(results);\n\n// Close browser\nawait browser.close();\n"))}f.isMDXComponent=!0}}]);