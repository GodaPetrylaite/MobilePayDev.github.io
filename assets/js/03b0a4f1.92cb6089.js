"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[9106],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27373:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={},p="Development Guide",s={unversionedId:"online/development-guide",id:"online/development-guide",title:"Development Guide",description:"In order to implement MobilePay Online you must first obtain an agreement by contacting partnership_online@mobilepay.dk. If you have already signed an agreement with MobilePay for the use of MobilePay Online, you can skip this step.",source:"@site/docs/online/development-guide.md",sourceDirName:"online",slug:"/online/development-guide",permalink:"/MobilePay-Payments-API/docs/online/development-guide",draft:!1,tags:[],version:"current",frontMatter:{}},u={},d=[{value:"Sandbox environment",id:"sandbox-environment",level:2},{value:"Automated integration tests in Sandbox",id:"automated-integration-tests-in-sandbox",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"development-guide"},"Development Guide"),(0,a.kt)("p",null,"In order to implement MobilePay Online you must first obtain an agreement by contacting ",(0,a.kt)("a",{parentName:"p",href:"mailto:partnership_online@mobilepay.dk."},"partnership_online@mobilepay.dk.")," If you have already signed an agreement with MobilePay for the use of MobilePay Online, you can skip this step."),(0,a.kt)("p",null,"When your agreement is signed, please visit our Developer Portal to start the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/products/online/getting-started"},"technical onboarding"),".\nYou will also find the API on the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/product"},"Developer Portal"),": click 'Online'."),(0,a.kt)("p",null,"On the developer portal you will find information about ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/products/online/test"},"test")," and ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/products/online/verification"},"how to move to production"),"."),(0,a.kt)("h2",{id:"sandbox-environment"},"Sandbox environment"),(0,a.kt)("p",null,"The MobilePay Sandbox is a self-contained, testing environment that mimics the live MobilePay production environment. It provides you the space to play around and test your implementation and the requests you make to the MobilePay API. Find information about test app and sandbox test on the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/products/online/test"},"developer portal"),"."),(0,a.kt)("h3",{id:"automated-integration-tests-in-sandbox"},"Automated integration tests in Sandbox"),(0,a.kt)("p",null,"The API supports automated integration tests running in Sandbox and can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://sandbox-developer.mobilepay.dk/product"},"sandbox-developer")," under 'Online User Simulation' and then 'Cardpassthrough RegressionTester For Product'. The API support simulation of the required user actions from payment request to capture. For more information on the general payment flow, please see ",(0,a.kt)("a",{parentName:"p",href:"#Diagrams"},"the diagram section"),"."),(0,a.kt)("p",null,"Please refrain from any overly aggressive testing strategies, we expect any continously running tests to call at most once per second."))}m.isMDXComponent=!0}}]);