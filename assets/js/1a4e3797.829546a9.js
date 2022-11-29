"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[7920],{42027:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var a=n(67294),r=n(52263),l=n(63929),s=n(35742),c=n(39960),o=n(95999),u=n(60373),m=n(902);const i=["zero","one","two","few","many","other"];function h(e){return i.filter((t=>e.includes(t)))}const p={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),p}}),[e])}function g(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}var f=n(94104),y=n(16550),E=n(10412);const S=function(){const e=(0,y.k6)(),t=(0,y.TH)(),{siteConfig:{baseUrl:n}}=(0,r.Z)();return{searchValue:E.default.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}};var _=n(90022),w=n(98202),b=n(82539),I=n(10726),F=n(91073),P=n(80311),R=n(73926),k=n(61029);const v="searchQueryInput_CFBF",C="searchResultItem_U687",q="searchResultItemPath_uIbk",T="searchResultItemSummary_oZHr";function $(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),t=(0,f.gA)();let n=e;try{const{preferredVersion:e}=(0,u.J)(t?.pluginId??k.gQ);e&&!e.isLast&&(n=e.path+"/")}catch(R){if(k.l9&&!(R instanceof m.i6))throw R}const{selectMessage:l}=g(),{searchValue:c,updateSearchPath:i}=S(),[h,p]=(0,a.useState)(c),[d,y]=(0,a.useState)(),[E,b]=(0,a.useState)(),I=(0,a.useMemo)((()=>h?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,a.useEffect)((()=>{i(h),d&&(h?d(h,(e=>{b(e)})):b(void 0))}),[h,d]);const F=(0,a.useCallback)((e=>{p(e.target.value)}),[]);return(0,a.useEffect)((()=>{c&&c!==h&&p(c)}),[c]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,_.w)(n);y((()=>(0,w.v)(e,t,100)))}()}),[n]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,I)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,I),a.createElement("input",{type:"search",name:"q",className:v,"aria-label":"Search",onChange:F,value:h,autoComplete:"off",autoFocus:!0}),!d&&h&&a.createElement("div",null,a.createElement(P.Z,null)),E&&(E.length>0?a.createElement("p",null,l(E.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:E.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,E&&E.map((e=>a.createElement(x,{key:e.document.i,searchResult:e}))))))}function x(e){let{searchResult:{document:t,type:n,page:r,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:r.b).slice(),i=u?t.s:t.t;return o||m.push(r.t),a.createElement("article",{className:C},a.createElement("h2",null,a.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,b.C)(i,l):(0,I.o)(i,(0,F.m)(s,"t"),l,100)}})),m.length>0&&a.createElement("p",{className:q},(0,R.e)(m)),u&&a.createElement("p",{className:T,dangerouslySetInnerHTML:{__html:(0,I.o)(t.t,(0,F.m)(s,"t"),l,100)}}))}const M=function(){return a.createElement(l.Z,null,a.createElement($,null))}}}]);