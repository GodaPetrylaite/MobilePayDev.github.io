"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[4843],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=i(a),y=r,u=d["".concat(l,".").concat(y)]||d[y]||c[y]||o;return a?n.createElement(u,p(p({ref:t},m),{},{components:a})):n.createElement(u,p({ref:t},m))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},32745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:2},p="Prepared Payment Flow",s={unversionedId:"pos/payment-flows/prepared-payment-flow",id:"pos/payment-flows/prepared-payment-flow",title:"Prepared Payment Flow",description:"The prepared payment flow makes the payment accessible to the customer on creation, pending an amount. Only when the payment is readied will the customer be able to make the approval.",source:"@site/docs/pos/payment-flows/prepared-payment-flow.md",sourceDirName:"pos/payment-flows",slug:"/pos/payment-flows/prepared-payment-flow",permalink:"/docs/pos/payment-flows/prepared-payment-flow",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Payment Flow",permalink:"/docs/pos/payment-flows/payment-flow"},next:{title:"Payment Flow Error Handling",permalink:"/docs/pos/payment-flows/payment-flow-error-handling"}},l={},i=[{value:"Payment States for the Prepared Payment Flow",id:"payment-states-for-the-prepared-payment-flow",level:2}],m={toc:i};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prepared-payment-flow"},"Prepared Payment Flow"),(0,r.kt)("p",null,"The prepared payment flow makes the payment accessible to the customer on creation, pending an amount. Only when the payment is readied will the customer be able to make the approval."),(0,r.kt)("p",null,"As an example, this flow could be used to start a payment before the payment amount is known. This could for instance be because goods are still being scanned at a cash register or to support loyalty flows."),(0,r.kt)("p",null,"The sequence diagram below illustrates a sunshine scenario for a prepared payment flow."),(0,r.kt)("p",null,"A prepared payment starts out in state ",(0,r.kt)("em",{parentName:"p"},"Prepared")," and remains in this state until the payment is paired with a customer through a check-in. Once paired, the state transitions to ",(0,r.kt)("em",{parentName:"p"},"Paired"),". Subsequently, polling of the payment can be done to retrieve a potential loyalty token. Once the payment is ready for customer approval, the client marks the payment as ",(0,r.kt)("em",{parentName:"p"},"Ready")," and provides the payment amount. The payment is then issued to the customer and the payment state changes to ",(0,r.kt)("em",{parentName:"p"},"IssuedToUser"),". Once the customer accepts the payment request and the payment amount has been reserved, the payment state transitions to the ",(0,r.kt)("em",{parentName:"p"},"Reserved")," state. In this state, the payment can be cancelled or captured by the client resulting in the payment state transitioning to either the ",(0,r.kt)("em",{parentName:"p"},"CancelledByClient")," or ",(0,r.kt)("em",{parentName:"p"},"Captured")," state, respectively."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(79930).Z},(0,r.kt)("img",{alt:"ReservationPrepareFlow",src:a(65817).Z,width:"1847",height:"1908"}))),(0,r.kt)("h2",{id:"payment-states-for-the-prepared-payment-flow"},"Payment States for the Prepared Payment Flow"),(0,r.kt)("p",null,'The diagram below shows all the possible states and transitions for a prepared payment flow. The "Prepared Payment Flow" state diagram expands upon the ',(0,r.kt)("a",{parentName:"p",href:"/docs/pos/payment-flows#payment-states-for-the-payment-flow"},'"Payment Flow" state diagram')," by adding two additional states, ",(0,r.kt)("em",{parentName:"p"},"Prepared")," and ",(0,r.kt)("em",{parentName:"p"},"Paired"),". The client and MobilePay can cancel a prepared payment. The customer can cancel a paired payment. The Payment states ",(0,r.kt)("em",{parentName:"p"},"Initiated"),", ",(0,r.kt)("em",{parentName:"p"},"Prepared"),", ",(0,r.kt)("em",{parentName:"p"},"Paired")," and ",(0,r.kt)("em",{parentName:"p"},"IssuedToUser")," are called ",(0,r.kt)("em",{parentName:"p"},"active")," states and will block further payments on the same Point-of-Sale."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(73556).Z},(0,r.kt)("img",{src:a(58354).Z,alt:"PoS confirmation screen",width:"800"}))))}c.isMDXComponent=!0},79930:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/pos-ReservationPrepareFlow-3e83e0678f2b6e624daa485c26e75ef6.png"},73556:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/pos-prepared-payment-states-2891cae6fd7637448e153c0d7a0e9a32.png"},58354:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pos-prepared-payment-states-2891cae6fd7637448e153c0d7a0e9a32.png"},65817:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pos-ReservationPrepareFlow-3e83e0678f2b6e624daa485c26e75ef6.png"}}]);