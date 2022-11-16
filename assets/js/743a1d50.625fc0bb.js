"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[7925],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(d,".").concat(c)]||u[c]||s[c]||l;return a?n.createElement(k,i(i({ref:e},m),{},{components:a})):n.createElement(k,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12734:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:11},i="Input and Output Formats",o={unversionedId:"pos/input-and-output-formats",id:"pos/input-and-output-formats",title:"Input and Output Formats",description:"This page gives an overview of the format and length restrictions for all input parameters used in the PoS V10 API.",source:"@site/docs/pos/input-and-output-formats.md",sourceDirName:"pos",slug:"/pos/input-and-output-formats",permalink:"/docs/pos/input-and-output-formats",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"docsSidebar",previous:{title:"API Errors",permalink:"/docs/pos/api-errors"},next:{title:"Create QR codes",permalink:"/docs/pos/create-qr-codes"}},d={},p=[{value:"HTTP Headers",id:"http-headers",level:2},{value:"Brands",id:"brands",level:2},{value:"Stores",id:"stores",level:2},{value:"Point-of-Sales",id:"point-of-sales",level:2},{value:"Payments",id:"payments",level:2},{value:"Payment Restrictions",id:"payment-restrictions",level:3},{value:"Valid characters",id:"valid-characters",level:2}],m={toc:p};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"input-and-output-formats"},"Input and Output Formats"),(0,r.kt)("p",null,"This page gives an overview of the format and length restrictions for all input parameters used in the PoS V10 API."),(0,r.kt)("h2",{id:"http-headers"},"HTTP Headers"),(0,r.kt)("p",null,"For more information about the http headers, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/pos/api-principles"},"API principles"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x-ibm-client-id")),(0,r.kt)("td",{parentName:"tr",align:null},"Guid"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifies an application created through MobilePay Developer Portal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x-mobilepay-merchant-vat-number")),(0,r.kt)("td",{parentName:"tr",align:null},"Valid VAT number: IsoCountryCodeVATNumber - Example: DK12345678"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifies the merchant the integrator is calling on behalf of")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x-mobilepay-client-system-version")),(0,r.kt)("td",{parentName:"tr",align:null},"Valid Client-Version: Major.Minor.Build - Example: 1.2.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifies the ",(0,r.kt)("a",{parentName:"td",href:"/docs/pos/api-principles#client-versioning"},"version of the integrator system")," calling the API.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"x-mobilepay-idempotency-key")),(0,r.kt)("td",{parentName:"tr",align:null},"String with at most 36 valid characters"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to allow calls to be ",(0,r.kt)("a",{parentName:"td",href:"/docs/pos/api-principles#error-handling"},"safely retried")," in case of errors.")))),(0,r.kt)("h2",{id:"brands"},"Brands"),(0,r.kt)("p",null,"For more information about brands, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/pos/pos-management"},"PoS Management"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"merchantBrandId")),(0,r.kt)("td",{parentName:"tr",align:null},"MPPOSXXXXX ",(0,r.kt)("br",null)," POSDKXXXXX ",(0,r.kt)("br",null)," POSFIXXXXX"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifies a Brand in MobilePay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"brandName")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the brand.")))),(0,r.kt)("h2",{id:"stores"},"Stores"),(0,r.kt)("p",null,"For more information about stores, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/pos/pos-management"},"PoS Management"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"storeId")),(0,r.kt)("td",{parentName:"tr",align:null},"Guid"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifies a Store in MobilePay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"merchantLocationId")),(0,r.kt)("td",{parentName:"tr",align:null},"String with exactly 5 valid characters"),(0,r.kt)("td",{parentName:"tr",align:null},"MobilePay location ID. Together with a ",(0,r.kt)("inlineCode",{parentName:"td"},"merchantBrandId"),", this identifies a Store in MobilePay.")))),(0,r.kt)("h2",{id:"point-of-sales"},"Point-of-Sales"),(0,r.kt)("p",null,"For more information about a PoS, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/pos/pos-management"},"PoS Management"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"posId")),(0,r.kt)("td",{parentName:"tr",align:null},"Guid"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifies a PoS in MobilePay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"merchantPosId")),(0,r.kt)("td",{parentName:"tr",align:null},"String with at most 36 valid characters"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant defined PoS ID. There can be at most one active PoS with a given ",(0,r.kt)("inlineCode",{parentName:"td"},"merchantPosId")," for a given integrator and merchant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"posName")),(0,r.kt)("td",{parentName:"tr",align:null},"String with at most 36 valid characters"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant defined PoS name.< The name is visible in the app, after the customer has checked in on the PoS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"callbackAlias")),(0,r.kt)("td",{parentName:"tr",align:null},"String with at most 36 valid characters"),(0,r.kt)("td",{parentName:"tr",align:null},"Only for clients that use the ",(0,r.kt)("a",{parentName:"td",href:"/docs/pos/notification-service"},"notification service")," to detect MobilePay payments. The ",(0,r.kt)("inlineCode",{parentName:"td"},"callbackAlias")," is a key that identifies which notification endpoint to call for the given PoS.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"beaconId")),(0,r.kt)("td",{parentName:"tr",align:null},"A GUID or 15 digits"),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the Beacon. In case of physical device such as the MobilePay WhiteBox or a terminal the ",(0,r.kt)("inlineCode",{parentName:"td"},"beaconId")," is a 15 digit string. In case of no physical device (QR) the ",(0,r.kt)("inlineCode",{parentName:"td"},"beaconId")," is not provided during PoS creation. MobilePay will generate a string containing a random GUID as the ",(0,r.kt)("inlineCode",{parentName:"td"},"beaconId"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"requirePaymentBeforeCheckin")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", a user will not be allowed to check-in before a payment is created on this PoS. See ",(0,r.kt)("a",{parentName:"td",href:"/docs/pos/pos-management#preventing-checkin-before-payment"},"Preventing checkin before payment"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"supportedBeaconTypes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"QR")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"NFC")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"Bluetooth")),(0,r.kt)("td",{parentName:"tr",align:null},"Beacon broadcast type. Identifies an option for how a customer can check in on a PoS. During the creation of a PoS, a list of Beacon Types has to be provided.")))),(0,r.kt)("h2",{id:"payments"},"Payments"),(0,r.kt)("p",null,"For more information about payments, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/pos/payment-flows"},"Payment Flows"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"paymentId")),(0,r.kt)("td",{parentName:"tr",align:null},"GUID"),(0,r.kt)("td",{parentName:"tr",align:null},"MobilePay defined Payment ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"orderId")),(0,r.kt)("td",{parentName:"tr",align:null},"String with at most 36 valid characters"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant defined payment order ID. There is no uniqueness requirement for the ",(0,r.kt)("inlineCode",{parentName:"td"},"orderId"),", but it is highly recommended to use unique order IDs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:null},"Valid positive amount"),(0,r.kt)("td",{parentName:"tr",align:null},"Total amount of the payment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"currencyCode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DKK")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"EUR")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency code for the currency of the payment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"merchantPaymentLabel")),(0,r.kt)("td",{parentName:"tr",align:null},"String with at most 36 valid characters"),(0,r.kt)("td",{parentName:"tr",align:null},"Label for the payment. This is a way for the merchant to tag a payment with a label that will be visible in the transaction reporting section on the MobilePay Portal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"plannedCaptureDelay")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"None")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"LessThan24Hours")," / ",(0,r.kt)("inlineCode",{parentName:"td"},"LessThan14Days")),(0,r.kt)("td",{parentName:"tr",align:null},"How long time the client expects to wait after receiving a reservation before capturing. See ",(0,r.kt)("a",{parentName:"td",href:"/docs/pos/best-practices#specify-planned-capture-delay"},"Specify planned capture delay"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"restrictions")),(0,r.kt)("td",{parentName:"tr",align:null},"Json object with one or more parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"A way to define restrictions on how a payment can be completed. See ",(0,r.kt)("a",{parentName:"td",href:"/docs/pos/input-and-output-formats#payment-restrictions"},"Payment Restrictions")," for possible restriction parameters")))),(0,r.kt)("h3",{id:"payment-restrictions"},"Payment Restrictions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"debitCardDisallowed")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("inlineCode",{parentName:"td"},"debitCardDisallowed")," is set to true, debit cards cannot be used for this payment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"creditCardDisallowed")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("inlineCode",{parentName:"td"},"creditCardDisallowed")," is set to true, credit cards cannot be used for this payment")))),(0,r.kt)("h2",{id:"valid-characters"},"Valid characters"),(0,r.kt)("p",null,"Valid characters for PoS V10 API request fields are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0 - 9"),(0,r.kt)("li",{parentName:"ul"},"a-zA-Z"),(0,r.kt)("li",{parentName:"ul"},"\xe6\xc6\xf8\xd8\xe5\xc5"),(0,r.kt)("li",{parentName:"ul"},"\xe4\xc4\xf6\xd6\u0161\u0160\u017e\u017d\xe2\xc2\xe0\xc0\xe1\xc1\xe3\xc3\xe9\xc9\xea\xca\xeb\xcb\xe8\xc8\xed\xcd\xee\xce\xef\xcf\xec\xcc\xfc\xdc\xfb\xdb\xf9\xd9\xfa\xda\xf4\xd4\xf2\xd2\xf3\xd3\xf5\xd5\xff\xfd\xdd\xf1\xd1"),(0,r.kt)("li",{parentName:"ul"},'!"#$%&\'()*+,-./":;<=>?@[',"]","^_","`","{","|","}~\xa6\xaf\xa8\xb4\xd7"),(0,r.kt)("li",{parentName:"ul"},"\xab\xbb\xf0\xfe\xe7\xdf\xa4\xc7\xb5\xd0\xde\xb1\xb0\xaa\xba\xa9\xa7\xb6\xbc\xbd\xbe\xac\xae\xa2\xa3\xa5\xa1\xbf\xb9\xb2\xb3"),(0,r.kt)("li",{parentName:"ul"},"(space)")))}s.isMDXComponent=!0}}]);