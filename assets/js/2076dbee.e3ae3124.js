"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4218],{3905:(e,n,s)=>{s.d(n,{Zo:()=>u,kt:()=>m});var t=s(7294);function o(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function i(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function a(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?i(Object(s),!0).forEach((function(n){o(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function r(e,n){if(null==e)return{};var s,t,o=function(e,n){if(null==e)return{};var s,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||(o[s]=e[s]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)s=i[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),s=n;return e&&(s="function"==typeof e?e(n):a(a({},n),e)),s},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var s=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(s),m=o,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return s?t.createElement(k,a(a({ref:n},u),{},{components:s})):t.createElement(k,a({ref:n},u))}));function m(e,n){var s=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=s.length,a=new Array(i);a[0]=c;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var p=2;p<i;p++)a[p]=s[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,s)}c.displayName="MDXCreateElement"},8548:(e,n,s)=>{s.r(n),s.d(n,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>p,toc:()=>u,default:()=>c});var t=s(7462),o=s(3366),i=(s(7294),s(3905)),a=["components"],r={id:"session-pool",title:"SessionPool",original_id:"session-pool"},l=void 0,p={unversionedId:"api/session-pool",id:"version-2.0.6/api/session-pool",title:"SessionPool",description:"Handles the rotation, creation and persistence of user-like sessions. Creates a pool of Session instances, that are randomly",source:"@site/versioned_docs/version-2.0.6/api/SessionPool.md",sourceDirName:"api",slug:"/api/session-pool",permalink:"/apify-ts/docs/api/session-pool",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1643896253,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"session-pool",title:"SessionPool",original_id:"session-pool"},sidebar:"version-2.0.6/docs",previous:{title:"Session",permalink:"/apify-ts/docs/api/session"},next:{title:"ProxyConfiguration",permalink:"/apify-ts/docs/api/proxy-configuration"}},u=[{value:"<code>sessionPool.sessions</code>",id:"sessionpoolsessions",children:[],level:2},{value:"<code>sessionPool.usableSessionsCount</code>",id:"sessionpoolusablesessionscount",children:[],level:2},{value:"<code>sessionPool.retiredSessionsCount</code>",id:"sessionpoolretiredsessionscount",children:[],level:2},{value:"<code>sessionPool.initialize()</code>",id:"sessionpoolinitialize",children:[],level:2},{value:"<code>sessionPool.addSession([options])</code>",id:"sessionpooladdsessionoptions",children:[],level:2},{value:"<code>sessionPool.getSession([sessionId])</code>",id:"sessionpoolgetsessionsessionid",children:[],level:2},{value:"<code>sessionPool.getState()</code>",id:"sessionpoolgetstate",children:[],level:2},{value:"<code>sessionPool.persistState()</code>",id:"sessionpoolpersiststate",children:[],level:2},{value:"<code>sessionPool.teardown()</code>",id:"sessionpoolteardown",children:[],level:2}],d={toc:u};function c(e){var n=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"sessionpool"}),(0,i.kt)("p",null,"Handles the rotation, creation and persistence of user-like sessions. Creates a pool of ",(0,i.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Session"))," instances, that are randomly\nrotated. When some session is marked as blocked, it is removed and new one is created instead (the pool never returns an unusable session). Learn more\nin the ",(0,i.kt)("a",{parentName:"p",href:"../guides/session-management",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Session management guide")),"."),(0,i.kt)("p",null,"You can create one by calling the ",(0,i.kt)("a",{parentName:"p",href:"../api/apify#opensessionpool",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Apify.openSessionPool"))," function."),(0,i.kt)("p",null,"Session pool is already integrated into crawlers, and it can significantly improve your scraper performance with just 2 lines of code."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const crawler = new Apify.CheerioCrawler({\n    useSessionPool: true,\n    persistCookiesPerSession: true,\n    // ...\n});\n")),(0,i.kt)("p",null,"You can configure the pool with many options. See the ",(0,i.kt)("a",{parentName:"p",href:"../typedefs/session-pool-options",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"SessionPoolOptions")),". Session pool is by default persisted\nin default ",(0,i.kt)("a",{parentName:"p",href:"../api/key-value-store",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"KeyValueStore")),". If you want to have one pool for all runs you have to specify\n",(0,i.kt)("a",{parentName:"p",href:"../typedefs/session-pool-options#persiststatekeyvaluestoreid",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"SessionPoolOptions.persistStateKeyValueStoreId")),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Advanced usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const sessionPool = await Apify.openSessionPool({\n    maxPoolSize: 25,\n    sessionOptions: {\n        maxAgeSecs: 10,\n        maxUsageCount: 150, // for example when you know that the site blocks after 150 requests.\n    },\n    persistStateKeyValueStoreId: 'my-key-value-store-for-sessions',\n    persistStateKey: 'my-session-pool',\n});\n\n// Get random session from the pool\nconst session1 = await sessionPool.getSession();\nconst session2 = await sessionPool.getSession();\nconst session3 = await sessionPool.getSession();\n\n// Now you can mark the session either failed or successful\n\n// Marks session as bad after unsuccessful usage -> it increases error count (soft retire)\nsession1.markBad();\n\n// Marks as successful.\nsession2.markGood();\n\n// Retires session -> session is removed from the pool\nsession3.retire();\n")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"sessions"}),(0,i.kt)("h2",{id:"sessionpoolsessions"},(0,i.kt)("inlineCode",{parentName:"h2"},"sessionPool.sessions")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"usablesessionscount"}),(0,i.kt)("h2",{id:"sessionpoolusablesessionscount"},(0,i.kt)("inlineCode",{parentName:"h2"},"sessionPool.usableSessionsCount")),(0,i.kt)("p",null,"Gets count of usable sessions in the pool."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"retiredsessionscount"}),(0,i.kt)("h2",{id:"sessionpoolretiredsessionscount"},(0,i.kt)("inlineCode",{parentName:"h2"},"sessionPool.retiredSessionsCount")),(0,i.kt)("p",null,"Gets count of retired sessions in the pool."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"initialize"}),(0,i.kt)("h2",{id:"sessionpoolinitialize"},(0,i.kt)("inlineCode",{parentName:"h2"},"sessionPool.initialize()")),(0,i.kt)("p",null,"Starts periodic state persistence and potentially loads SessionPool state from ",(0,i.kt)("a",{parentName:"p",href:"../api/key-value-store",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"KeyValueStore")),". It is called automatically\nby the ",(0,i.kt)("a",{parentName:"p",href:"../api/apify#opensessionpool",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Apify.openSessionPool"))," function."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"addsession"}),(0,i.kt)("h2",{id:"sessionpooladdsessionoptions"},(0,i.kt)("inlineCode",{parentName:"h2"},"sessionPool.addSession([options])")),(0,i.kt)("p",null,"Adds a new session to the session pool. The pool automatically creates sessions up to the maximum size of the pool, but this allows you to add more\nsessions once the max pool size is reached. This also allows you to add session with overridden session options (e.g. with specific session id)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,i.kt)("a",{parentName:"li",href:"../api/session",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Session"))," | ",(0,i.kt)("a",{parentName:"li",href:"../typedefs/session-options",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"SessionOptions"))," - The configuration options for the session being\nadded to the session pool.")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"getsession"}),(0,i.kt)("h2",{id:"sessionpoolgetsessionsessionid"},(0,i.kt)("inlineCode",{parentName:"h2"},"sessionPool.getSession([sessionId])")),(0,i.kt)("p",null,"Gets session. If there is space for new session, it creates and returns new session. If the session pool is full, it picks a session from the pool, If\nthe picked session is usable it is returned, otherwise it creates and returns a new one."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[sessionId]")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," - If provided, it returns the usable session with this id, ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," otherwise.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../api/session",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Promise<Session>"))),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"getstate"}),(0,i.kt)("h2",{id:"sessionpoolgetstate"},(0,i.kt)("inlineCode",{parentName:"h2"},"sessionPool.getState()")),(0,i.kt)("p",null,"Returns an object representing the internal state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SessionPool")," instance. Note that the object's fields can change in future releases."),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"persiststate"}),(0,i.kt)("h2",{id:"sessionpoolpersiststate"},(0,i.kt)("inlineCode",{parentName:"h2"},"sessionPool.persistState()")),(0,i.kt)("p",null,"Persists the current state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"SessionPool")," into the default ",(0,i.kt)("a",{parentName:"p",href:"../api/key-value-store",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"KeyValueStore")),". The state is persisted automatically in\nregular intervals."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"teardown"}),(0,i.kt)("h2",{id:"sessionpoolteardown"},(0,i.kt)("inlineCode",{parentName:"h2"},"sessionPool.teardown()")),(0,i.kt)("p",null,"Removes listener from ",(0,i.kt)("inlineCode",{parentName:"p"},"persistState")," event. This function should be called after you are done with using the ",(0,i.kt)("inlineCode",{parentName:"p"},"SessionPool")," instance."),(0,i.kt)("hr",null))}c.isMDXComponent=!0}}]);