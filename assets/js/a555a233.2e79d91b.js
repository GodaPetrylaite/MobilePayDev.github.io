"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[8632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:10},i="Release notes",s={unversionedId:"release-notes",id:"release-notes",title:"Release notes",description:"2022-07-18",source:"@site/docs/release-notes.md",sourceDirName:".",slug:"/release-notes",permalink:"/MobilePay-Payments-API/docs/release-notes",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Webhooks",permalink:"/MobilePay-Payments-API/docs/webhooks"}},c={},l=[{value:"2022-07-18",id:"2022-07-18",level:3},{value:"2022-04-28",id:"2022-04-28",level:3},{value:"2022-04-19",id:"2022-04-19",level:3},{value:"2022-04-12",id:"2022-04-12",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"release-notes"},"Release notes"),(0,o.kt)("h3",{id:"2022-07-18"},"2022-07-18"),(0,o.kt)("p",null,'New webhook event "transfer.succeeded" introduced. Notifications for this event are sent when payment point balance is successfully transferred to merchant account. More information can be found here ',(0,o.kt)("a",{parentName:"p",href:"/docs/webhooks#transfers"},"Webhooks API"),"."),(0,o.kt)("h3",{id:"2022-04-28"},"2022-04-28"),(0,o.kt)("p",null,"New ",(0,o.kt)("a",{parentName:"p",href:"/docs/payments-refunds/error-codes#refunds"},"Refunds API"),' error code introduced. Code "amount_exceeds_available_funds" is returned when payment point does not have enough available funds to refund the payment.'),(0,o.kt)("h3",{id:"2022-04-19"},"2022-04-19"),(0,o.kt)("p",null,"Failed webhook notifications are now retried with an exponential backoff. After all retries are exchausted the notification is never sent again. This applies to both new and previously created webhooks. More information can be found here ",(0,o.kt)("a",{parentName:"p",href:"/docs/webhooks#requirements-and-limitations"},"Webhooks API"),"."),(0,o.kt)("h3",{id:"2022-04-12"},"2022-04-12"),(0,o.kt)("p",null,"Webhooks can now be associated with a specific payment point. This is possible when both creating new ones and updating old ones. More information in ",(0,o.kt)("a",{parentName:"p",href:"/docs/webhooks#webhooks-for-specific-payment-points"},"Webhooks API")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/product/"},"API reference for Webhooks"),"."))}u.isMDXComponent=!0}}]);