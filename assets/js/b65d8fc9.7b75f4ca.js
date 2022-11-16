"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={},i="MobilePay Reporting API",p={unversionedId:"reporting/reporting",id:"reporting/reporting",title:"MobilePay Reporting API",description:"Reporting API allows you to query all transactions taking place at any of your MobilePay payment locations (payment points).",source:"@site/docs/reporting/reporting.md",sourceDirName:"reporting",slug:"/reporting/",permalink:"/docs/reporting/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Resources",permalink:"/docs/subscriptions/resources"},next:{title:"Getting started",permalink:"/docs/reporting/getting-started"}},l={},s=[{value:"Migration from transaction reporting API",id:"migration-from-transaction-reporting-api",level:2},{value:"How does it work",id:"how-does-it-work",level:2},{value:"General notes",id:"general-notes",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mobilepay-reporting-api"},"MobilePay Reporting API"),(0,r.kt)("p",null,"Reporting API allows you to query all transactions taking place at any of your MobilePay payment locations (payment points)."),(0,r.kt)("p",null,"The main objective is to make it easier for you to do reconciliation on your side. We at MobilePay will provide you a detailed list of transactions (payments, fees, refunds) to help with that."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Reporting API lets you fetch transactions from these products offered by MobilePay:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"App payments"),(0,r.kt)("li",{parentName:"ul"},"Subscriptions"),(0,r.kt)("li",{parentName:"ul"},"Invoice"),(0,r.kt)("li",{parentName:"ul"},"MyShop"),(0,r.kt)("li",{parentName:"ul"},"PoS"))),(0,r.kt)("h2",{id:"migration-from-transaction-reporting-api"},"Migration from transaction reporting API"),(0,r.kt)("p",null,"Reporting API is a newer version of Transaction Reporting API, more about the old API you can find ",(0,r.kt)("a",{parentName:"p",href:"https://mobilepaydev.github.io/MobilePay-TransactionReporting-API/"},"here"),"."),(0,r.kt)("p",null,"Also, you can use this guide on ",(0,r.kt)("a",{parentName:"p",href:"/docs/reporting/migrate-from-v1v2"},"how to migrate")," from the old API."),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,r.kt)("p",null,"A settlement payout includes all your sales transactions from the previous day, net refunds and fees.\nBy using the API, you get a full list of all sales transactions and corresponding fees, totalling the settlement on your bank account.\nYou can reconcile your accounts with a high degree of data and transparency, moving your business towards always having up-to-date financial overviews."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you chose to have fees invoiced, then fees will not be deducted directly by MobilePay, and instead you will need to reconcile against the invoices you receive.\n",(0,r.kt)("strong",{parentName:"p"},"Invoiced fees are not visible in the API."))),(0,r.kt)("h2",{id:"general-notes"},"General notes"),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"This document does not represent all of the technical information about Reporting API.\nThis information can be found ",(0,r.kt)("a",{parentName:"p",href:"/api/reporting"},"here"),".")),(0,r.kt)("admonition",{title:"Payment Point Id",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When using the Reporting API, you will be introduced to the term ",(0,r.kt)("inlineCode",{parentName:"p"},"paymentPointId")," - uuid assigned to every payment point.\nMobilePay has different API products and each product has their own payment points. ",(0,r.kt)("inlineCode",{parentName:"p"},"paymentPointId")," might be named differently across products:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Subscriptions, ",(0,r.kt)("inlineCode",{parentName:"p"},"paymentPointId")," is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"subscriptionProviderId"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In Invoices, ",(0,r.kt)("inlineCode",{parentName:"p"},"paymentPointId")," is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"invoiceIssuerId"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In other products, it is the same.")))))}u.isMDXComponent=!0}}]);