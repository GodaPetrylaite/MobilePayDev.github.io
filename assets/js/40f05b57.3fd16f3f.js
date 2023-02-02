"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[5965],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,y=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(y,s(s({ref:t},c),{},{components:a})):n.createElement(y,s({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>P});var n=a(87462),r=a(67294),o=a(86010),s=a(12466),i=a(16550),l=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=y({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",v,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function P(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},97217:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),s=a(85162);const i={sidebar_position:1},l="How It Works",u={unversionedId:"app-payments/guides/how-it-works",id:"app-payments/guides/how-it-works",title:"How It Works",description:"This page details how app payments flow works. It allows you to accept MobilePay payments within your application while re-directing to the MobilePay app for user approval. It assumes that you already have credentials to successfully call MobilePay APIs and have subscribed to notifications using Webhooks API.",source:"@site/docs/app-payments/guides/how-it-works.mdx",sourceDirName:"app-payments/guides",slug:"/app-payments/guides/how-it-works",permalink:"/docs/app-payments/guides/how-it-works",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Build Basics",permalink:"/docs/app-payments/build-basics"},next:{title:"Build on Mobile",permalink:"/docs/app-payments/guides/build-on-mobile"}},c={},p=[{value:"Process Flow",id:"process-flow",level:2}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-it-works"},"How It Works"),(0,r.kt)("p",null,"This page details how app payments flow works. It allows you to accept MobilePay payments within your application while re-directing to the MobilePay app for user approval. It assumes that you already have credentials to successfully call MobilePay APIs and have subscribed to notifications using ",(0,r.kt)("a",{parentName:"p",href:"/docs/app-payments/webhooks"},"Webhooks API"),"."),(0,r.kt)("h2",{id:"process-flow"},"Process Flow"),(0,r.kt)(o.Z,{defaultValue:"sunshine",values:[{label:"Sunshine Scenario",value:"sunshine"},{label:"No Webhook Received Scenario",value:"no-webhook"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sunshine",mdxType:"TabItem"},(0,r.kt)("p",null,"Sunshine scenario is expected for the majority of the time."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When a user wants to pay with MobilePay in your application, request your backend services to ",(0,r.kt)("a",{parentName:"li",href:"/docs/app-payments/payments-refunds/create-payments#create-payment"},"create payment")," using Payments API."),(0,r.kt)("li",{parentName:"ol"},"Re-direct user to MobilePay app using deep link."),(0,r.kt)("li",{parentName:"ol"},"User confirms payment in the MobilePay app."),(0,r.kt)("li",{parentName:"ol"},"Your backend services receives notification ",(0,r.kt)("inlineCode",{parentName:"li"},"payment.reserved")," and proceeds with ",(0,r.kt)("a",{parentName:"li",href:"/docs/app-payments/payments-refunds/create-payments#capture-payment"},"capturing payment"),"."),(0,r.kt)("li",{parentName:"ol"},"Meanwhile user returns to your application (using re-direct or switching apps) and sees the success screen.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(99124).Z,width:"1063",height:"940"}))),(0,r.kt)(s.Z,{value:"no-webhook",mdxType:"TabItem"},(0,r.kt)("p",null,"This scenario details what should happen if a user returned to your application and during that period backend services haven't got any updates on the payment state."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When a user wants to pay with MobilePay in your application, request your backend services to ",(0,r.kt)("a",{parentName:"li",href:"/docs/app-payments/payments-refunds/create-payments#create-payment"},"create payment")," using ",(0,r.kt)("a",{parentName:"li",href:"/docs/app-payments/payments-refunds/create-payments"},"Payments API"),"."),(0,r.kt)("li",{parentName:"ol"},"Re-direct user to MobilePay app using deep link."),(0,r.kt)("li",{parentName:"ol"},"User confirms/cancel payment or leaves MobilePay app"),(0,r.kt)("li",{parentName:"ol"},"User returns to your application (using re-direct or switching apps)."),(0,r.kt)("li",{parentName:"ol"},"Invoke backend services to check payment status."),(0,r.kt)("li",{parentName:"ol"},"Backend services haven't received a notification and should invoke ",(0,r.kt)("a",{parentName:"li",href:"/docs/app-payments/payments-refunds/create-payments#get-single-payment-details"},"Get Single Payments Details")," to retrieve the latest payment state and decide what to do next.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is technically possible to use polling instead of webhooks to monitor for payment state\u2014but this is markedly less reliable and may pose challenges if used at scale. MobilePay may enforce rate limiting on API requests, so exercise caution if you decide to use polling. If you decide to go that route, then you should start no sooner than 5 seconds after payment creation and poll every 2 seconds.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(39428).Z,width:"881",height:"1134"})))))}m.isMDXComponent=!0},99124:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/WithWebhooks-50f9c61f9cdc6c47449940c6ecae0693.jpeg"},39428:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/WithoutWebhooks-e2b33492eea6f4b47e1c45ad22ab199c.jpeg"}}]);