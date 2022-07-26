"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[6997],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,b=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return t?r.createElement(b,i(i({ref:n},c),{},{components:t})):r.createElement(b,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},28951:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={},u="Phone number on landing page",p={unversionedId:"online/features/phone-number",id:"online/features/phone-number",title:"Phone number on landing page",description:"When user is redirect to redirectToMobilePayUrl on a desktop they will see the MobilePay landing page where they must input their phone number. You have the option to prefill the phone number or disabled the remember me function on the page.",source:"@site/docs/online/features/phone-number.md",sourceDirName:"online/features",slug:"/online/features/phone-number",permalink:"/MobilePay-Payments-API/docs/online/features/phone-number",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"onlineSidebar",previous:{title:"Invalidation of a payment",permalink:"/MobilePay-Payments-API/docs/online/features/invalidation"},next:{title:"Checkout",permalink:"/MobilePay-Payments-API/docs/online/features/checkout"}},c={},m=[{value:"Prefilled phone number",id:"prefilled-phone-number",level:2},{value:"Disable remember-me",id:"disable-remember-me",level:2}],s={toc:m};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"phone-number-on-landing-page"},"Phone number on landing page"),(0,a.kt)("p",null,"When user is redirect to redirectToMobilePayUrl on a desktop they will see the MobilePay landing page where they must input their phone number. You have the option to prefill the phone number or disabled the remember me function on the page. "),(0,a.kt)("h2",{id:"prefilled-phone-number"},"Prefilled phone number"),(0,a.kt)("p",null,'You can provide a phone number to be prefilled in the phone number field on the MobilePay webpage.\nYou do this by adding an URI encoded "alias" parameter with the phone number to the search parameters of the "redirectToMPUrl". The phone number must be fully specified including country code. For "+45 12 34 56 78" you would add the following to the url: ',(0,a.kt)("inlineCode",{parentName:"p"},"&alias=004512345678")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"/remote-website/index.html?page=request&id=d7380749-f73c-4317-bd01-58daa249212f&alias=004512345678")),(0,a.kt)("h2",{id:"disable-remember-me"},"Disable remember-me"),(0,a.kt)("p",null,"If you, for instance, have a public terminal where MobilePay is used, you may want to disable the option to remember the current phone number.\nYou can do this by adding the query parameter key ",(0,a.kt)("inlineCode",{parentName:"p"},"disable-remember-me")," to the request page url."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"/remote-website/index.html?page=request&id=d7380749-f73c-4317-bd01-58daa249212f&disable-remember-me&alias=004512345678")))}d.isMDXComponent=!0}}]);