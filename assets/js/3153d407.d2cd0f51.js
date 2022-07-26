"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[3119],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1110:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={},s="Merchants",u={unversionedId:"online/basics/merchants",id:"online/basics/merchants",title:"Merchants",description:"As a PSP, you need to create the merchants in MobilePay in order to create payments on their behalf.",source:"@site/docs/online/basics/merchants.md",sourceDirName:"online/basics",slug:"/online/basics/merchants",permalink:"/MobilePay-Payments-API/docs/online/basics/merchants",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"onlineSidebar",previous:{title:"Basics",permalink:"/MobilePay-Payments-API/docs/category/basics"},next:{title:"Payments",permalink:"/MobilePay-Payments-API/docs/online/basics/payments"}},l={},p=[{value:"Currency and country code",id:"currency-and-country-code",level:2},{value:"Franchise and partners",id:"franchise-and-partners",level:2}],d={toc:p};function m(e){var n=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"merchants"},"Merchants"),(0,o.kt)("p",null,"As a PSP, you need to create the merchants in MobilePay in order to create payments on their behalf."),(0,o.kt)("p",null,"This can be done by invoking the Create merchant endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /merchants/"),".\nThe details supplied in the merchant onboarding will be used for invoicing purposes and ongoing support."),(0,o.kt)("p",null,"When a Merchant is no longer using the solution it must be offboarded using the Delete merchant endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE /merchants/"),"."),(0,o.kt)("p",null,"All merchants must be onboarded as individual merchants. If you have super merchants or payment facilitors you can also use them for MobilePay. However each submerchant must be onboarded instead of the super merchant and payment facilitator."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:t(30210).Z},(0,o.kt)("img",{alt:"merchant sequence diagram",src:t(45013).Z,width:"794",height:"559"}))),(0,o.kt)("h2",{id:"currency-and-country-code"},"Currency and country code"),(0,o.kt)("p",null,"When creating a merchant billingCurrency and countryCode is defined:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"countryCode: The country of the merchant. If a merchant operates in two countries you must create one merchant for each country and set the appropriate country code."),(0,o.kt)("li",{parentName:"ul"},"billingCurrency: Currency used for invoicing between MobilePay and PSP. This does not effect the currency of the payments between merchants and MobilePay users. When initiating a payment currencyCode is defined.")),(0,o.kt)("h2",{id:"franchise-and-partners"},"Franchise and partners"),(0,o.kt)("p",null,"For franchises you must create \xa0each franchisor as individual merchants. You can also choose to setup the franchisee as partner if you want to, but that is not required from our side. Please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:developer@mobilepay.dk"},"developer@mobilepay.dk")," to inquire about partner setup."))}m.isMDXComponent=!0},30210:function(e,n,t){n.Z=t.p+"assets/files/merchant-sequence-diagram-dde2c1a971e300ca6d97749ae9a5118e.svg"},45013:function(e,n,t){n.Z=t.p+"assets/images/merchant-sequence-diagram-dde2c1a971e300ca6d97749ae9a5118e.svg"}}]);