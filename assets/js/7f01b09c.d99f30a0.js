"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[9929],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],l={},c="Dual device and single device flow",s={unversionedId:"online/basics/flow",id:"online/basics/flow",title:"Dual device and single device flow",description:"MobilePay Online supports both dual device and single device flows. It depends on which device the user uses when you redirect to redirectToMobilePayUrl. Our landing page will detect if the redirect happens on a mobile device or not. Only the user experience will be affected by type of flow. The payment flow and API requests are the same regardless of flow type.",source:"@site/docs/online/basics/flow.md",sourceDirName:"online/basics",slug:"/online/basics/flow",permalink:"/MobilePay-Payments-API/docs/online/basics/flow",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"onlineSidebar",previous:{title:"Payments",permalink:"/MobilePay-Payments-API/docs/online/basics/payments"},next:{title:"Retry policy",permalink:"/MobilePay-Payments-API/docs/online/basics/retry-policy"}},p={},d=[{value:"Single device flow",id:"single-device-flow",level:2},{value:"Dual device flow",id:"dual-device-flow",level:2},{value:"Landing page",id:"landing-page",level:3},{value:"Redirect to redirectFromMobilePayurl",id:"redirect-to-redirectfrommobilepayurl",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dual-device-and-single-device-flow"},"Dual device and single device flow"),(0,o.kt)("p",null,"MobilePay Online supports both dual device and single device flows. It depends on which device the user uses when you redirect to redirectToMobilePayUrl. Our landing page will detect if the redirect happens on a mobile device or not. Only the user experience will be affected by type of flow. The payment flow and API requests are the same regardless of flow type."),(0,o.kt)("h2",{id:"single-device-flow"},"Single device flow"),(0,o.kt)("p",null,"If the redirect happens on a mobile device the MobilePay app will be launched. The user can then accept or reject the payment and we will redirect the user to redirectFromMobilePayUrl afterwards. This url will always open in the default browser (determined by the operating system) of the mobile device."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the MobilePay app is not installed and therefore cannot be opened our landing page will open in the browser instead and the flow will continue as a dual device flow."),(0,o.kt)("li",{parentName:"ul"},"It is also possible to pop the app directly instead of using the universal link. To do this you will need to use the redirectToMobilePayAppUrl given in the response from initiating a payment. This can be useful when using frames. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/online/appendix#manually-engaging-the-app-from-the-parent-page"},"Manually engaging the App")," for a guide on this.")),(0,o.kt)("h2",{id:"dual-device-flow"},"Dual device flow"),(0,o.kt)("p",null," If the redirect happens on a desktop device our landing page will open in the browser. The user can then insert the phone number or it can be ",(0,o.kt)("a",{parentName:"p",href:"/docs/online/features/phone-number#prefilled-phone-number"},"pre-filled")," for more convenience. We will then send a push notification to the user's mobile device and the user can then accept or reject the payment in the MobilePay app. Afterwards the landing page in the desktop browser will redirect to redirectFromMobilePayUrl."),(0,o.kt)("h3",{id:"landing-page"},"Landing page"),(0,o.kt)("p",null,"The link to MobilePay landing page is received in response to payment initiation as: redirectToMobilePayUrl. On the landing page the user must insert their phone number and click continue. A timer will then be shown to indicate how long time the user have to accept the payment in the MobilePay app."),(0,o.kt)("p",null,"The language of the page is initialy defined by the countryCode of the merchant the payment is initiated on behalf of. Merchant countryCode is defined when creating a merchant with ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/v1/merchants"),". This setting can be overulled by setting the customerLanguageCode on payment initiation. Code can be either DK or FI. If DK the laungage on landing page will be Danish. If FI the language on landing page will be Finnish."),(0,o.kt)("p",null,"The first time a user visits the landing page a functional cookie will be saved. This cookie defines the language of the page. Next time the user visits our landing page the language will be determined by cookie. Regardless of customerLanguageCode or countryCode."),(0,o.kt)("p",null,"Hierarchy:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Functional cookie in browser"),(0,o.kt)("li",{parentName:"ol"},"customerLanguageCode on payment"),(0,o.kt)("li",{parentName:"ol"},"countryCode on merchant")),(0,o.kt)("h2",{id:"redirect-to-redirectfrommobilepayurl"},"Redirect to redirectFromMobilePayurl"),(0,o.kt)("p",null,"User is redirect to\xa0redirectFromMobilePayUrl\xa0when payment is either completed or rejected. This means that user is not redirected right after they swipe in the MobilePay app, but when you either patch the authorization or user rejects the payment."),(0,o.kt)("p",null,"In single device flow the app switches to the default browser and opens the to\xa0redirectFromMobilePayUrl. If an app link is supplied the OS will open the app instead. For dual device flow the browser will redirect to to\xa0redirectFromMobilePayUrl."),(0,o.kt)("p",null,"In the following scenario you will always see two redirects by design:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Complete a single device flow > The MobilePay app automatically opens redirectFromMobilePayURL in the browser."),(0,o.kt)("li",{parentName:"ol"},'Now access\xa0the browser tab with the landing page that "popped" the app in step 1.\xa0> The tab will redirect to redirectFromMobilePayURL.')))}h.isMDXComponent=!0}}]);