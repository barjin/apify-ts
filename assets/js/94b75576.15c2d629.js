"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3610],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7539:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>d});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"quick-start",title:"Quick Start"},p=void 0,s={unversionedId:"guides/quick-start",id:"guides/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"This short tutorial will set you up to start using Apify SDK in a minute or two.",source:"@site/../docs/guides/quick_start.md",sourceDirName:"guides",slug:"/guides/quick-start",permalink:"/apify-ts/docs/next/guides/quick-start",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1636977603,formattedLastUpdatedAt:"11/15/2021",frontMatter:{id:"quick-start",title:"Quick Start"},sidebar:"docs",previous:{title:"Motivation",permalink:"/apify-ts/docs/next/"},next:{title:"Apify Platform",permalink:"/apify-ts/docs/next/guides/apify-platform"}},u=[{value:"Local stand-alone usage",id:"local-stand-alone-usage",children:[],level:2},{value:"Local usage with Apify command-line interface (CLI)",id:"local-usage-with-apify-command-line-interface-cli",children:[],level:2},{value:"Usage on the Apify platform",id:"usage-on-the-apify-platform",children:[],level:2}],c={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This short tutorial will set you up to start using Apify SDK in a minute or two.\nIf you want to learn more, proceed to the ",(0,o.kt)("a",{parentName:"p",href:"../guides/getting-started",target:null,rel:null},"Getting Started"),"\ntutorial that will take you step by step through creating your first scraper."),(0,o.kt)("h2",{id:"local-stand-alone-usage"},"Local stand-alone usage"),(0,o.kt)("p",null,"Apify SDK requires ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/",target:"_blank",rel:"noopener"},"Node.js")," 10.17 or later, with the exception of Node.js 11.\nAdd Apify SDK to any Node.js project by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install apify playwright\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Neither ",(0,o.kt)("inlineCode",{parentName:"p"},"playwright")," nor ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteer")," are bundled with the SDK to reduce install size and allow greater\nflexibility. That's why we install it with NPM. You can choose one, both, or neither."))),(0,o.kt)("p",null,"Run the following example to perform a recursive crawl of a website using Playwright. For more examples showcasing various features of the Apify SDK,\n",(0,o.kt)("a",{parentName:"p",href:"../examples/crawl-multiple-urls",target:null,rel:null},"see the Examples section of the documentation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="src/main.js"',title:'"src/main.js"'},"const Apify = require('apify');\n\n// Apify.main is a helper function, you don't need to use it.\nApify.main(async () => {\n    const requestQueue = await Apify.openRequestQueue();\n    // Choose the first URL to open.\n    await requestQueue.addRequest({ url: 'https://www.iana.org/' });\n\n    const crawler = new Apify.PlaywrightCrawler({\n        requestQueue,\n        handlePageFunction: async ({ request, page }) => {\n            // Extract HTML title of the page.\n            const title = await page.title();\n            console.log(`Title of ${request.url}: ${title}`);\n\n            // Add URLs that match the provided pattern.\n            await Apify.utils.enqueueLinks({\n                page,\n                requestQueue,\n                pseudoUrls: ['https://www.iana.org/[.*]'],\n            });\n        },\n    });\n\n    await crawler.run();\n});\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To read more about what pseudo-URL is, check the ",(0,o.kt)("a",{parentName:"p",href:"getting-started#introduction-to-pseudo-urls",target:null,rel:null},"getting-started"),"."))),(0,o.kt)("p",null,"When you run the example, you should see Apify SDK automating a Chrome browser."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Chrome Scrape",src:a(8621).Z})),(0,o.kt)("p",null,"By default, Apify SDK stores data to ",(0,o.kt)("inlineCode",{parentName:"p"},"./apify_storage")," in the current working directory. You can override this behavior by setting either the\n",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," environment variable. For details, see ",(0,o.kt)("a",{parentName:"p",href:"../guides/environment-variables",target:null,rel:null},"Environment variables"),", ",(0,o.kt)("a",{parentName:"p",href:"../guides/request-storage",target:null,rel:null},"Request storage")," and ",(0,o.kt)("a",{parentName:"p",href:"../guides/result-storage",target:null,rel:null},"Result storage"),"."),(0,o.kt)("h2",{id:"local-usage-with-apify-command-line-interface-cli"},"Local usage with Apify command-line interface (CLI)"),(0,o.kt)("p",null,"To avoid the need to set the environment variables manually, to create a boilerplate of your project, and to enable pushing and running your code on\nthe ",(0,o.kt)("a",{parentName:"p",href:"../guides/apify-platform",target:null,rel:null},"Apify platform"),", you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-cli",target:"_blank",rel:"noopener"},"Apify command-line interface (CLI)")," tool."),(0,o.kt)("p",null,"Install the CLI by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm -g install apify-cli\n")),(0,o.kt)("p",null,"Now create a boilerplate of your new web crawling project by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apify create my-hello-world\n")),(0,o.kt)("p",null,'The CLI will prompt you to select a project boilerplate template - just pick "Hello world". The tool will create a directory called ',(0,o.kt)("inlineCode",{parentName:"p"},"my-hello-world"),"\nwith a Node.js project files. You can run the project as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-hello-world\napify run\n")),(0,o.kt)("p",null,"By default, the crawling data will be stored in a local directory at ",(0,o.kt)("inlineCode",{parentName:"p"},"./apify_storage"),". For example, the input JSON file for the actor is expected to\nbe in the default key-value store in ",(0,o.kt)("inlineCode",{parentName:"p"},"./apify_storage/key_value_stores/default/INPUT.json"),"."),(0,o.kt)("p",null,"Now you can easily deploy your code to the Apify platform by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apify login\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apify push\n")),(0,o.kt)("p",null,"Your script will be uploaded to the Apify platform and built there so that it can be run. For more information, view the\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/cli",target:"_blank",rel:"noopener"},"Apify Actor")," documentation."),(0,o.kt)("h2",{id:"usage-on-the-apify-platform"},"Usage on the Apify platform"),(0,o.kt)("p",null,"You can also develop your web scraping project in an online code editor directly on the ",(0,o.kt)("a",{parentName:"p",href:"../guides/apify-platform",target:null,rel:null},"Apify platform"),".\nYou'll need to have an Apify Account. Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://my.apify.com/actors",target:"_blank",rel:"noopener"},"Actors")," page in the app, click ",(0,o.kt)("i",null,"Create new"),"\nand then go to the ",(0,o.kt)("i",null,"Source")," tab and start writing your code or paste one of the examples from the Examples section."),(0,o.kt)("p",null,"For more information, view the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.apify.com/actor/quick-start",target:"_blank",rel:"noopener"},"Apify actors quick start guide"),"."))}d.isMDXComponent=!0},8621:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/chrome_scrape-a64af551de8be5fe1ced2182dc0a8dcc.gif"}}]);