"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6472],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),y=l(r),f=o,m=y["".concat(s,".").concat(f)]||y[f]||c[f]||a;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},386:(e,n,r)=>{r.r(n),r.d(n,{frontMatter:()=>p,contentTitle:()=>s,metadata:()=>l,toc:()=>u,default:()=>y});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={id:"proxy-management",title:"Proxy Management",original_id:"proxy-management"},s=void 0,l={unversionedId:"guides/proxy-management",id:"version-2.0.6/guides/proxy-management",isDocsHomePage:!1,title:"Proxy Management",description:"IP address blocking is one of the oldest",source:"@site/versioned_docs/version-2.0.6/guides/proxy_management.md",sourceDirName:"guides",slug:"/guides/proxy-management",permalink:"/apify-ts/docs/guides/proxy-management",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637255450,formattedLastUpdatedAt:"11/18/2021",frontMatter:{id:"proxy-management",title:"Proxy Management",original_id:"proxy-management"},sidebar:"version-2.0.6/docs",previous:{title:"Environment Variables",permalink:"/apify-ts/docs/guides/environment-variables"},next:{title:"Session Management",permalink:"/apify-ts/docs/guides/session-management"}},u=[{value:"Quick start",id:"quick-start",children:[],level:2},{value:"Proxy Configuration",id:"proxy-configuration",children:[{value:"Crawler integration",id:"crawler-integration",children:[],level:3},{value:"IP Rotation and session management",id:"ip-rotation-and-session-management",children:[],level:3}],level:2},{value:"Apify Proxy vs. Your own proxies",id:"apify-proxy-vs-your-own-proxies",children:[],level:2},{value:"Apify Proxy Configuration",id:"apify-proxy-configuration",children:[],level:2},{value:"Inspecting current proxy in Crawlers",id:"inspecting-current-proxy-in-crawlers",children:[],level:2}],c={toc:u};function y(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IP_address_blocking",target:"_blank",rel:"noopener"},"IP address blocking")," is one of the oldest\nand most effective ways of preventing access to a website. It is therefore paramount for\na good web scraping library to provide easy to use but powerful tools which can work around\nIP blocking. The most powerful weapon in your anti IP blocking arsenal is a\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Proxy_server",target:"_blank",rel:"noopener"},"proxy server"),"."),(0,a.kt)("p",null,"With Apify SDK you can use your own proxy servers, proxy servers acquired from\nthird-party providers, or you can rely on ",(0,a.kt)("a",{parentName:"p",href:"https://apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy"),"\nfor your scraping needs."),(0,a.kt)("h2",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"If you already subscribed to Apify Proxy or have proxy URLs of your own, you can start using\nthem immediately in only a few lines of code."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you want to use Apify Proxy, make sure that your ",(0,a.kt)("a",{parentName:"p",href:"../guides/apify-platform",target:null,rel:null},"scraper is logged in"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Apify.createProxyConfiguration();\nconst proxyUrl = proxyConfiguration.newUrl();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Apify.createProxyConfiguration({\n    proxyUrls: [\n        'http://proxy-1.com',\n        'http://proxy-2.com',\n    ]\n});\nconst proxyUrl = proxyConfiguration.newUrl();\n")),(0,a.kt)("h2",{id:"proxy-configuration"},"Proxy Configuration"),(0,a.kt)("p",null,"All your proxy needs are managed by the ",(0,a.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))," class.\nYou create an instance using the ",(0,a.kt)("a",{parentName:"p",href:"../api/apify#createproxyconfiguration",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Apify.createProxyConfiguration()")),"\nfunction. See the ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/proxy-configuration-options",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"ProxyConfigurationOptions"))," for all\nthe possible constructor options."),(0,a.kt)("h3",{id:"crawler-integration"},"Crawler integration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration")," integrates seamlessly into ",(0,a.kt)("a",{parentName:"p",href:"../api/cheerio-crawler",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"CheerioCrawler")),"\nand ",(0,a.kt)("a",{parentName:"p",href:"../api/puppeteer-crawler",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"PuppeteerCrawler")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Apify.createProxyConfiguration({ /* your proxy opts */ });\nconst crawler = new Apify.CheerioCrawler({\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Apify.createProxyConfiguration({ /* your proxy opts */ });\nconst crawler = new Apify.PuppeteerCrawler({\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)("p",null,"Your crawlers will now use the selected proxies for all connections."),(0,a.kt)("h3",{id:"ip-rotation-and-session-management"},"IP Rotation and session management"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../api/proxy-configuration#newurl",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"proxyConfiguration.newUrl()"))," allows you to pass\na ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId")," parameter. It will then be used to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId"),"-",(0,a.kt)("inlineCode",{parentName:"p"},"proxyUrl")," pair,\nand subsequent ",(0,a.kt)("inlineCode",{parentName:"p"},"newUrl()")," calls with the same ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId")," will always return the same\n",(0,a.kt)("inlineCode",{parentName:"p"},"proxyUrl"),". This is extremely useful in scraping, because you want to create the impression\nof a real user. See the ",(0,a.kt)("a",{parentName:"p",href:"../guides/session-management",target:null,rel:null},"session management guide")," and\n",(0,a.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"SessionPool"))," class for more information on how keeping\na real session helps you avoid blocking."),(0,a.kt)("p",null,"When no ",(0,a.kt)("inlineCode",{parentName:"p"},"sessionId")," is provided, your proxy URLs are rotated round-robin, whereas\nApify Proxy manages their rotation using black magic to get the best performance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Apify.createProxyConfiguration({ /* opts */ });\nconst sessionPool = await Apify.openSessionPool({ /* opts */ });\nconst session = await sessionPool.getSession();\nconst proxyUrl = proxyConfiguration.newUrl(session.id);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Apify.createProxyConfiguration({ /* opts */ });\nconst crawler = new Apify.PuppeteerCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    proxyConfiguration,\n    // ...\n});\n")),(0,a.kt)("h2",{id:"apify-proxy-vs-your-own-proxies"},"Apify Proxy vs. Your own proxies"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ProxyConfiguration")," class covers both Apify Proxy and custom proxy URLs so that\nyou can easily switch between proxy providers, however, some features of the class\nare available only to Apify Proxy users, mainly because Apify Proxy is what\none would call a super-proxy. It's not a single proxy server, but an API endpoint\nthat allows connection through millions of different IP addresses. So the class\nessentially has two modes: Apify Proxy or Your proxy."),(0,a.kt)("p",null,"The difference is easy to remember.\n",(0,a.kt)("a",{parentName:"p",href:"../typedefs/proxy-configuration-options#proxyurls",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"ProxyConfigurationOptions.proxyUrls"))," and\n",(0,a.kt)("a",{parentName:"p",href:"../typedefs/proxy-configuration-options#newurlfunction",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"ProxyConfigurationOptions.newUrlFunction")),"\nenable use of your custom proxy URLs, whereas all the other options are there to configure Apify Proxy.\nVisit the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy docs")," for more info on how these parameters work."),(0,a.kt)("h2",{id:"apify-proxy-configuration"},"Apify Proxy Configuration"),(0,a.kt)("p",null,"With Apify Proxy, you can select specific proxy groups to use, or countries to connect from.\nThis allows you to get better proxy performance after some initial research."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const proxyConfiguration = await Apify.createProxyConfiguration({\n    groups: ['RESIDENTIAL'],\n    countryCode: 'US',\n});\nconst proxyUrl = proxyConfiguration.newUrl();\n")),(0,a.kt)("p",null,"Now your crawlers will use only Residential proxies from the US. Note that you must first get access\nto a proxy group before you are able to use it. You can find your available proxy groups\nin the ",(0,a.kt)("a",{parentName:"p",href:"https://my.apify.com/proxy",target:"_blank",rel:"noopener"},"proxy dashboard"),"."),(0,a.kt)("h2",{id:"inspecting-current-proxy-in-crawlers"},"Inspecting current proxy in Crawlers"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CheerioCrawler")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler")," grant access to information about the currently used proxy\nin their ",(0,a.kt)("inlineCode",{parentName:"p"},"handlePageFunction")," using a ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/proxy-info",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"proxyInfo"))," object.\nWith the  object, you can easily access the proxy URL. If you're using Apify Proxy, the other\nconfiguration parameters will also be available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyInfo")," object."))}y.isMDXComponent=!0}}]);