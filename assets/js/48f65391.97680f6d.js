"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[886],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),i=a(86010),l=a(12466),o=a(16550),s=a(91980),u=a(67392),p=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=c(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=s??d;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var g=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==o&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},l,{className:(0,i.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},23091:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),i=a(74866),l=a(85162);const o={sidebar_position:2},s="Test",u={unversionedId:"subscriptions/development-guide/test",id:"subscriptions/development-guide/test",title:"Test",description:"In this section, you can find information on testing in sandbox, as well as how to get test data. The Sandbox is a special environment designed just for testing, and an application that targets the Sandbox can perform all the operations it can in the Production environment. However, all users, items, and payment involved in Sandbox transactions are fictitious. To ensure a good user experience, we recommend you to test your solution thoroughly before launching.",source:"@site/docs/subscriptions/development-guide/test.mdx",sourceDirName:"subscriptions/development-guide",slug:"/subscriptions/development-guide/test",permalink:"/docs/subscriptions/development-guide/test",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/docs/subscriptions/development-guide/getting-started"},next:{title:"Verification",permalink:"/docs/subscriptions/development-guide/verification"}},p={},d=[{value:"Testing API",id:"testing-api",level:2},{value:"Sandbox testing",id:"sandbox-testing",level:2},{value:"Difference between sandbox and production",id:"difference-between-sandbox-and-production",level:3},{value:"Test data",id:"test-data",level:2},{value:"Making the first calls",id:"making-the-first-calls",level:2},{value:"Testing example - Accept Agreement - 3rd party",id:"testing-example---accept-agreement---3rd-party",level:2}],c={toc:d},m="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test"},"Test"),(0,r.kt)("p",null,"In this section, you can find information on testing in sandbox, as well as how to get test data. The Sandbox is a special environment designed just for testing, and an application that targets the Sandbox can perform all the operations it can in the Production environment. However, all users, items, and payment involved in Sandbox transactions are fictitious. To ensure a good user experience, we recommend you to test your solution thoroughly before launching."),(0,r.kt)("h2",{id:"testing-api"},"Testing API"),(0,r.kt)("p",null,"We supply a testing API, that simulates user actions in the app. With the API you can do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Accept and reject agreement"),(0,r.kt)("li",{parentName:"ul"},"Cancel agreement"),(0,r.kt)("li",{parentName:"ul"},"Reject subscriptions payment"),(0,r.kt)("li",{parentName:"ul"},"Accept and reject OneOff payment")),(0,r.kt)("p",null,"You must subscribe to the testing API, before you can use it. When calling the testing API, you must always supply an authenticated user id. You can find a list of user ids below in the section about test data. The Subscriptions User Simulation API is available from the Sandbox APIs."),(0,r.kt)("h2",{id:"sandbox-testing"},"Sandbox testing"),(0,r.kt)("p",null,"Sandbox testing\nYou are able to test all the Subscriptions features, just as they are in the production environment, and you will receive callbacks. However it is not possible to interact with the MobilePay app. Instead you have access to a testing API: Subscriptions User Simulation which makes it possible to imitate user actions. In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/subscriptions/agreement"},"technical documentation")," you can find flow diagrams, where you can see the app flow."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Access Token"),"\nWhen you are calling the API, and when you've been through the OpenID Connect flow, then you should remember to add the access token. All calls to Subscriptions endpoints require access tokens. The content of the header should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Header examples"',title:'"Header','examples"':!0},"accept: application/json\ncontent-type: application/json\nauthorization::  REPLACE_THIS_VALUE\n")),(0,r.kt)("p",null,"When you make a payment request, then we validate the request itself, but not the individual payments. So it only validates if you have the required parameters with the correct types. So the response you get for the payment request, does not say if the payment is pending, but if the payment creation is pending. Then the payments are processed in our system, and they will either be requested (valid) or declined (invalid). Moreover, you will receive a callback to inform whether payments are requested or declined. This will be sent to your payment status callback."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Recurring payment states",src:a(35866).Z,width:"750",height:"1007"})),(0,r.kt)("h3",{id:"difference-between-sandbox-and-production"},"Difference between sandbox and production"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Sandbox"),(0,r.kt)("th",{parentName:"tr",align:null},'"Hidden" production'),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Production")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Purpose")),(0,r.kt)("td",{parentName:"tr",align:null},"To test all functionality in a shielded environment"),(0,r.kt)("td",{parentName:"tr",align:null},"To verify the UX experience and usage patterns. To test checkout flow. To see how transactions appear on the bank account"),(0,r.kt)("td",{parentName:"tr",align:null},"To offer MobilePay Subscriptions as a payment method for customers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Receive callbacks")),(0,r.kt)("td",{parentName:"tr",align:null},"You receive callbacks in sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},'You receive callbacks in "hidden production"'),(0,r.kt)("td",{parentName:"tr",align:null},"You receive callbacks in production")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"User")),(0,r.kt)("td",{parentName:"tr",align:null},"MobilePay provides you with a test user below under 'Test data'. The testsuer can be used in sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},'A real MobilePay user, that has downloaded the MobilePay app on their smartphone. In "hidden production" it is usually the employees that are conducting the testing that are testers'),(0,r.kt)("td",{parentName:"tr",align:null},"A real MobilePay user, that has downloaded the MobilePay app on their smartphone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Payment limit")),(0,r.kt)("td",{parentName:"tr",align:null},"Same as in production. Read ",(0,r.kt)("a",{parentName:"td",href:"https://www.mobilepay.dk/hjaelp/mobilepay-til-private/fakta/hvor-meget-kan-jeg-overfoere-med-mobilepay"},"here")),(0,r.kt)("td",{parentName:"tr",align:null},"Read  ",(0,r.kt)("a",{parentName:"td",href:"https://www.mobilepay.dk/hjaelp/mobilepay-til-private/fakta/hvor-meget-kan-jeg-overfoere-med-mobilepay%20%20"},"here")),(0,r.kt)("td",{parentName:"tr",align:null},"Read ",(0,r.kt)("a",{parentName:"td",href:"https://www.mobilepay.dk/hjaelp/mobilepay-til-private/fakta/hvor-meget-kan-jeg-overfoere-med-mobilepay"},"here"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"User simulation")),(0,r.kt)("td",{parentName:"tr",align:null},"There isn't a sandbox app for MobilePay. Instead, use the following API's to simulate user interaction: Subscriptions User Simulation"),(0,r.kt)("td",{parentName:"tr",align:null},"A real MobilePay user, that has downloaded the MobilePay app on their smartphone. The flow can be experienced from a customer point of view."),(0,r.kt)("td",{parentName:"tr",align:null},"A real MobilePay user, that has downloaded the MobilePay app on their smartphone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Functionality")),(0,r.kt)("td",{parentName:"tr",align:null},"Same functionality but fake transactions"),(0,r.kt)("td",{parentName:"tr",align:null},"Same functionality but real transactions."),(0,r.kt)("td",{parentName:"tr",align:null},"Same functionality but real transactions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Transaction fee")),(0,r.kt)("td",{parentName:"tr",align:null},"Free in sandbox"),(0,r.kt)("td",{parentName:"tr",align:null},"Transactions in production are not free"),(0,r.kt)("td",{parentName:"tr",align:null},"Transactions in production are not free")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Endpoint")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.sandbox.mobilepay.dk/"},"https://api.sandbox.mobilepay.dk")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.mobilepay.dk/"},"https://api.mobilepay.dk")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.mobilepay.dk/"},"https://api.mobilepay.dk"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Subscriptions/Payment Validation")),(0,r.kt)("td",{parentName:"tr",align:null},"1 day"),(0,r.kt)("td",{parentName:"tr",align:null},"1 day"),(0,r.kt)("td",{parentName:"tr",align:null},"1 day")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Subscriptions API/Visible in the app")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Reconciliation")),(0,r.kt)("td",{parentName:"tr",align:null},"You cannot test reconciliation in sandbox, as you will have a fake testuser and fake account. You will not see how the money apears on the bank account."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes. The Transaction Reporting Api is available in production"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes. The Transaction Reporting API is available in production")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"As far as possible, automate your tests")),(0,r.kt)("h2",{id:"test-data"},"Test data"),(0,r.kt)("p",null,"When using the Subscriptions User Simulation API, you must always supply an authenticated user id. Below you can find a list of user ids for Denmark and Finland. If there is an issue with a test user, please try a different user, or contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:developer@mobilepay.dk"},"developer@mobilepay.dk")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When testing Subscription payments and one-offs in Sandbox remember to use the same authenticated user id for both creating and approving the payments.\nThese are only valid on our test platform, and will not result in a real transaction or transfer of funds.\nYou can test how your integration handles responses from the MobilePay platform by forcing specific result codes.")),(0,r.kt)(i.Z,{defaultValue:"dk",values:[{label:"DK test users",value:"dk"},{label:"FI test users",value:"fi"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"dk",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Authenticated user id"),(0,r.kt)("th",{parentName:"tr",align:null},"Phone number"),(0,r.kt)("th",{parentName:"tr",align:null},"Consumer name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"f1a75bb4-c8a6-41f8-8603-4cf9278cd5ba"),(0,r.kt)("td",{parentName:"tr",align:null},"+4557373259"),(0,r.kt)("td",{parentName:"tr",align:null},"Test name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4f474aa2-6161-4094-97fd-62616ff3d21e"),(0,r.kt)("td",{parentName:"tr",align:null},"+4599592431"),(0,r.kt)("td",{parentName:"tr",align:null},"Test name*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d5e4e229-b482-4304-80f1-237d2a3abc48"),(0,r.kt)("td",{parentName:"tr",align:null},"+4522509895"),(0,r.kt)("td",{parentName:"tr",align:null},"Test name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"40b881f7-ac3d-43bb-81e6-2ac9ef279d89"),(0,r.kt)("td",{parentName:"tr",align:null},"+4554048573"),(0,r.kt)("td",{parentName:"tr",align:null},"Test name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"147a8bbd-6a87-40e7-9980-937d1b8d0de4"),(0,r.kt)("td",{parentName:"tr",align:null},"+4585155935"),(0,r.kt)("td",{parentName:"tr",align:null},"Test name")))),(0,r.kt)("p",null,"*",(0,r.kt)("em",{parentName:"p"},"Card is expired. Use this testuser to test error handling for failed card scenarios"))),(0,r.kt)(l.Z,{value:"fi",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Authenticated user id"),(0,r.kt)("th",{parentName:"tr",align:null},"Phone number"),(0,r.kt)("th",{parentName:"tr",align:null},"Consumer name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"439d1721-0a36-499f-b236-8bfc61c6cbb7"),(0,r.kt)("td",{parentName:"tr",align:null},"+358121161343"),(0,r.kt)("td",{parentName:"tr",align:null},"FI Test name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"f5588bb0-d90d-419f-9ec5-7ef138c23f83"),(0,r.kt)("td",{parentName:"tr",align:null},"+358121161892"),(0,r.kt)("td",{parentName:"tr",align:null},"FI Test name")))))),(0,r.kt)("p",null,"Also, familiarize yourself to the steps described in the testing section to find out in which order you should perform these calls. For Subscriptions, we recommend you create an agreement, so you can request a subscriptions payment on the agreement."),(0,r.kt)("h2",{id:"making-the-first-calls"},"Making the first calls"),(0,r.kt)("p",null,"Once you have completed the OpenID Connect flow, you are ready to make the first call to our API.  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"GET /api/merchants/me")," which will return you a list of subscription providers for that merchant, with their IDs and basic information which you will need in th other api calls.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note: If you are an integrator  managing the solution for a Merchant, this will be your first task when onboarding them to your platform. The Merchant does not know their SubscriptionsProviderId.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Request body example"',title:'"Request',body:!0,'example"':!0},'{\n  "Id": "5911127561076736",\n  "SubscriptionProviders": [\n    {\n      "SubscriptionProviderId": "00000000-0000-0000-0000-000000000000",\n      "Name": "Netflix",\n      "HomepageUrl": "http://netflix.com",\n      "CustomerServiceEmail": "customerservice@netflix.com",\n      "SelfServicePortalUrl": "http://netflix.com/mylogin",\n      "FaqUrl": "http://netflix.com/faq",\n      "Status": "active",\n      "Address": "R\xe5dhuspladsen 1",\n      "ZipCode": "1550",\n      "City": "Copenhagen"\n    }\n  ]\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You can then continue by creating your first MobilePay Subscriptions agreement. To create an agreement use ",(0,r.kt)("inlineCode",{parentName:"li"},"POST /api/providers/{providerId}/agreements"),".")),(0,r.kt)("p",null,"Make a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," to the endpoint\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.sandbox.mobilepay.dk/subscriptions/api/providers/{providerId}/agreements")," (remember to insert your own URLs)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Request example"',title:'"Request','example"':!0},' accept: application/json\n content-type: application/json\n authorization::  REPLACE_THIS_VALUE\n\n{\n "external_id":"OrderNumber1",\n "amount":10,\n "currency":"DKK",\n "description":"Home and Car Insurance",\n "next_payment_date":"2021-12-16",\n "frequency":12,\n "links":[\n   {"rel":"user-redirect","href":"https://example.com/"},\n   {"rel":"success-callback","href":"https://example.com/"},\n   {"rel":"cancel-callback","href":"https://example.com/"}],\n "country_code":"DK",\n "plan":"Insurance",\n "expiration_timeout_minutes":5,\n "mobile_phone_number": "4511100118",\n "retention_period_hours": 0,\n "disable_notification_management": false,\n}\n')),(0,r.kt)("p",null,"If successfull, you will recieve a http ",(0,r.kt)("inlineCode",{parentName:"p"},"201 created")," response including an agreement id for the pending agreement, and a link to redirect the user to the pending agreement.\nIn the sandbox, the link will not be working, instead you need to use the Subscriptions User Simulation API and the test data we have provided you with, to accept the agreement. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH /api/agreements/v1/{id}")," to accept the agreement.\nCongratulation, you have created your first agreement!"),(0,r.kt)("h2",{id:"testing-example---accept-agreement---3rd-party"},"Testing example - Accept Agreement - 3rd party"),(0,r.kt)("p",null,"When you have created an agreement in sandbox, you can use the testing API to simulate that a user accepts the agreement.\nTo accept an agreement you must use ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH /api/agreements/v1/{id}")," and replace ",(0,r.kt)("inlineCode",{parentName:"p"},"{id}")," with an agreement id."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"\nMake a ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," to endpoint\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.sandbox.mobilepay.dk/recurringpayments-restapi/api/agreements/v1/REPLACE_ID")," with following headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Request example"',title:'"Request','example"':!0},'accept: application/json\ncontent-type: application/json\nauthenticateduser: REPLACE_THIS_KEY\n\n{"status":"Accepted"}\n')),(0,r.kt)("p",null,"If successfull, you will recieve a http ",(0,r.kt)("inlineCode",{parentName:"p"},"204 No Content")," response. We will then send a callback to the success-callback you have set, when the agreement was created, to inform that the agreement has been accepted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Header example"',title:'"Header','example"':!0},'{\n   "agreement_id" : "AGREEMENT_ID",\n   "status" : "Accepted",\n   "status_text" : "The agreement has been accepted.",\n   "status_code" : "0",\n   "external_id" : "EXTERNAL_ID",\n   "timestamp" : "2016-08-24T11:42:27+00:00"\n}\n')),(0,r.kt)("p",null,"And then you are ready to start requesting payments for the new agreement."))}h.isMDXComponent=!0},35866:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subs-payment_states-8d887e8bb25fc9ab22b7a7025c1f3b3e.jpg"}}]);