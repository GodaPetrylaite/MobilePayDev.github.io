"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[127],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(r),b=i,m=d["".concat(p,".").concat(b)]||d[b]||u[b]||s;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80847:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const s={sidebar_position:4},o="Subscriptions Providers",a={unversionedId:"subscriptions/subscriptions-providers",id:"subscriptions/subscriptions-providers",title:"Subscriptions Providers",description:"Order MobilePay Subscriptions",source:"@site/docs/subscriptions/subscriptions-providers.md",sourceDirName:"subscriptions",slug:"/subscriptions/subscriptions-providers",permalink:"/docs/subscriptions/subscriptions-providers",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"General notes",permalink:"/docs/subscriptions/general-notes"},next:{title:"Agreements",permalink:"/docs/subscriptions/agreement"}},p={},c=[{value:"Order MobilePay Subscriptions",id:"order-mobilepay-subscriptions",level:2},{value:"Getting a list of subscription providers",id:"getting-a-list-of-subscription-providers",level:2},{value:"Updating subscription provider",id:"updating-subscription-provider",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"subscriptions-providers"},"Subscriptions Providers"),(0,i.kt)("h2",{id:"order-mobilepay-subscriptions"},"Order MobilePay Subscriptions"),(0,i.kt)("p",null,"Before using MobilePay Subscriptions, the merchant must have at least one Subscriptions provider which can be created via ",(0,i.kt)("a",{parentName:"p",href:"https://admin.mobilepay.dk/"},"MobilePay Portal - Denmark")," or  ",(0,i.kt)("a",{parentName:"p",href:"https://admin.mobilepay.fi/"},"MobilePay Portal - Finland")," by clicking 'Opret nyt betalingssted'. The merchant can have multiple providers, which is why the integrator must support having more than one providers, since merchants might have multiple brands with different product offerings."),(0,i.kt)("h2",{id:"getting-a-list-of-subscription-providers"},"Getting a list of subscription providers"),(0,i.kt)("p",null,"After getting an access token, you will be able to list subscription providers associated with that merchant by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/merchants/me"),", which will return a list of all subscription providers, associated with that merchant. Each subscriptions provider contains its own address information, homepage url and etc. The merchant is the customer company and the SubscriptionsProvider ID is the actual service provider name under which they send subscriptions payments  "),(0,i.kt)("p",null,"Providers represents your customer (which is a MobilePay Merchant).\n",(0,i.kt)("inlineCode",{parentName:"p"},"providerId")," represents a particular subscription provider."),(0,i.kt)("p",null,"For example, if a single merchant has several brands, then each brand would be a subscription provider. Currently, a merchant grants you permission to all their subscription providers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",200:!0,className:"language-json",metastring:'title="HTTP 200 Response body example"',title:'"HTTP',Response:!0,body:!0,'example"':!0},'[\n  {\n    "Id": "a863d62e-d53b-4651-9b7b-c80792ee1343",\n    "SubscriptionProviders": [\n      {\n        "SubscriptionProviderId": "b45afee5-703c-4136-8f60-162fc01709df",\n        "Name": "Name of your subscription product",\n        "HomepageUrl": "https://merchant.dk",\n        "CustomerServiceEmail": "customerservice@merchant.dk",\n        "SelfServicePortalUrl": "https://merchant.dk/self-service",\n        "FaqUrl": "https://merchant.dk/faq",\n        "Status": "Enabled" || "Pending",\n        "Address": "Your address line",\n        "ZipCode": "1234",\n        "City": "City"\n      }\n    ]\n  }\n]\n')),(0,i.kt)("h2",{id:"updating-subscription-provider"},"Updating subscription provider"),(0,i.kt)("p",null,"Before requesting payments a status callback URL must be set by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH /api/providers/{providerId}"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="ayment status callback URL"',title:'"ayment',status:!0,callback:!0,'URL"':!0},'[\n    {\n        "value": "https://merchant.dk/notifications_from_mobilepay/payments",\n        "path": "/payment_status_callback_url",\n        "op": "replace"\n    }\n]\n')))}u.isMDXComponent=!0}}]);