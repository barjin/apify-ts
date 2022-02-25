"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3706],{3905:(t,e,i)=>{i.d(e,{Zo:()=>p,kt:()=>k});var a=i(7294);function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if(null==t)return{};var i,a,r=function(t,e){if(null==t)return{};var i,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)i=s[a],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)i=s[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}var c=a.createContext({}),o=function(t){var e=a.useContext(c),i=e;return t&&(i="function"==typeof t?t(e):n(n({},e),t)),i},p=function(t){var e=o(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var i=t.components,r=t.mdxType,s=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=o(i),k=r,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||s;return i?a.createElement(m,n(n({ref:e},p),{},{components:i})):a.createElement(m,n({ref:e},p))}));function k(t,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=i.length,n=new Array(s);n[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,n[1]=l;for(var o=2;o<s;o++)n[o]=i[o];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},5219:(t,e,i)=>{i.r(e),i.d(e,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>o,toc:()=>p,default:()=>d});var a=i(7462),r=i(3366),s=(i(7294),i(3905)),n=["components"],l={id:"statistics",title:"Statistics",original_id:"statistics"},c=void 0,o={unversionedId:"api/statistics",id:"version-2.0.6/api/statistics",title:"Statistics",description:"The statistics class provides an interface to collecting and logging run statistics for requests.",source:"@site/versioned_docs/version-2.0.6/api/Statistics.md",sourceDirName:"api",slug:"/api/statistics",permalink:"/apify-ts/docs/api/statistics",tags:[],version:"2.0.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1645809251,formattedLastUpdatedAt:"2/25/2022",frontMatter:{id:"statistics",title:"Statistics",original_id:"statistics"},sidebar:"version-2.0.6/docs",previous:{title:"PuppeteerCrawler",permalink:"/apify-ts/docs/api/puppeteer-crawler"},next:{title:"Dataset",permalink:"/apify-ts/docs/api/dataset"}},p=[{value:"Properties",id:"properties",children:[{value:"<code>state</code>",id:"state",children:[],level:3},{value:"<code>id</code>",id:"id",children:[],level:3},{value:"<code>requestRetryHistogram</code>",id:"requestretryhistogram",children:[],level:3}],level:2},{value:"<code>statistics.reset()</code>",id:"statisticsreset",children:[],level:2},{value:"<code>statistics.calculate()</code>",id:"statisticscalculate",children:[],level:2},{value:"<code>statistics.startCapturing()</code>",id:"statisticsstartcapturing",children:[],level:2},{value:"<code>statistics.stopCapturing()</code>",id:"statisticsstopcapturing",children:[],level:2},{value:"<code>statistics.persistState()</code>",id:"statisticspersiststate",children:[],level:2},{value:"<code>statistics.toJSON()</code>",id:"statisticstojson",children:[],level:2}],u={toc:p};function d(t){var e=t.components,i=(0,r.Z)(t,n);return(0,s.kt)("wrapper",(0,a.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("a",{name:"statistics"}),(0,s.kt)("p",null,"The statistics class provides an interface to collecting and logging run statistics for requests."),(0,s.kt)("p",null,"All statistic information is saved on key value store under the key SDK",(0,s.kt)("em",{parentName:"p"},"CRAWLER_STATISTICS"),"*",", persists between migrations and abort/resurrect"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"state"},(0,s.kt)("inlineCode",{parentName:"h3"},"state")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("a",{parentName:"p",href:"../typedefs/statistic-state",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"StatisticState"))),(0,s.kt)("p",null,"Current statistic state used for doing calculations on ",(0,s.kt)("a",{parentName:"p",href:"../api/statistics#calculate",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"Statistics.calculate()"))," calls"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"id"},(0,s.kt)("inlineCode",{parentName:"h3"},"id")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,"Statistic instance id"),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"requestretryhistogram"},(0,s.kt)("inlineCode",{parentName:"h3"},"requestRetryHistogram")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Type"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Array<number>")),(0,s.kt)("p",null,"Contains the current retries histogram. Index 0 means 0 retries, index 2, 2 retries, and so on"),(0,s.kt)("hr",null),(0,s.kt)("a",{name:"reset"}),(0,s.kt)("h2",{id:"statisticsreset"},(0,s.kt)("inlineCode",{parentName:"h2"},"statistics.reset()")),(0,s.kt)("p",null,"Set the current statistic instance to pristine values"),(0,s.kt)("hr",null),(0,s.kt)("a",{name:"calculate"}),(0,s.kt)("h2",{id:"statisticscalculate"},(0,s.kt)("inlineCode",{parentName:"h2"},"statistics.calculate()")),(0,s.kt)("p",null,"Calculate the current statistics"),(0,s.kt)("hr",null),(0,s.kt)("a",{name:"startcapturing"}),(0,s.kt)("h2",{id:"statisticsstartcapturing"},(0,s.kt)("inlineCode",{parentName:"h2"},"statistics.startCapturing()")),(0,s.kt)("p",null,"Initializes the key value store for persisting the statistics, displaying the current state in predefined intervals"),(0,s.kt)("hr",null),(0,s.kt)("a",{name:"stopcapturing"}),(0,s.kt)("h2",{id:"statisticsstopcapturing"},(0,s.kt)("inlineCode",{parentName:"h2"},"statistics.stopCapturing()")),(0,s.kt)("p",null,"Stops logging and remove event listeners, then persist"),(0,s.kt)("hr",null),(0,s.kt)("a",{name:"persiststate"}),(0,s.kt)("h2",{id:"statisticspersiststate"},(0,s.kt)("inlineCode",{parentName:"h2"},"statistics.persistState()")),(0,s.kt)("p",null,"Persist internal state to the key value store"),(0,s.kt)("hr",null),(0,s.kt)("a",{name:"tojson"}),(0,s.kt)("h2",{id:"statisticstojson"},(0,s.kt)("inlineCode",{parentName:"h2"},"statistics.toJSON()")),(0,s.kt)("p",null,"Make this class serializable when called with ",(0,s.kt)("inlineCode",{parentName:"p"},"JSON.stringify(statsInstance)")," directly or through ",(0,s.kt)("inlineCode",{parentName:"p"},"keyValueStore.setValue('KEY', statsInstance)")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Returns"),":"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"../typedefs/statistic-persisted-state",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"StatisticPersistedState"))," ","|"," ",(0,s.kt)("a",{parentName:"p",href:"../typedefs/statistic-state",target:null,rel:null},(0,s.kt)("inlineCode",{parentName:"a"},"StatisticState"))),(0,s.kt)("hr",null))}d.isMDXComponent=!0}}]);