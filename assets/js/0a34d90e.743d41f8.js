"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[4186],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,y=s["".concat(p,".").concat(c)]||s[c]||m[c]||o;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},10895:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={},p="Error Codes",d={unversionedId:"payments-refunds/error-codes",id:"payments-refunds/error-codes",title:"Error Codes",description:"If any client errors occur, our endpoints return an error object describing the issues encountered. Each error object has the same contract. Here's an example:",source:"@site/docs/payments-refunds/error-codes.md",sourceDirName:"payments-refunds",slug:"/payments-refunds/error-codes",permalink:"/MobilePay-Payments-API/docs/payments-refunds/error-codes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Refund Payments",permalink:"/MobilePay-Payments-API/docs/payments-refunds/refund-payments"},next:{title:"Webhooks",permalink:"/MobilePay-Payments-API/docs/webhooks"}},u={},m=[{value:"Errors",id:"errors",level:2},{value:"HTTP 409 Conflict",id:"http-409-conflict",level:3},{value:"Payments API",id:"payments-api",level:4},{value:"Refunds API",id:"refunds-api",level:4},{value:"HTTP 400 Bad Request",id:"http-400-bad-request",level:3}],s={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"error-codes"},"Error Codes"),(0,o.kt)("p",null,"If any client errors occur, our endpoints return an error object describing the issues encountered. Each error object has the same contract. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response JSON example"',title:'"Response',JSON:!0,'example"':!0},'{\n  "code": "invalid_payment_state",\n  "correlationId": "8d4243bc-aa83-43c3-a55d-5da221facd9b",\n  "message": "Cannot cancel payment that is already captured.",\n  "origin": "MPY"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," are the properties you should be interested to. ",(0,o.kt)("inlineCode",{parentName:"p"},"correlationId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," properties should be provided for our support team in case you need their help with any issues. The values of those properties help to find solutions quicker."),(0,o.kt)("h2",{id:"errors"},"Errors"),(0,o.kt)("h3",{id:"http-409-conflict"},"HTTP 409 Conflict"),(0,o.kt)("h4",{id:"payments-api"},"Payments API"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"code"),(0,o.kt)("th",{parentName:"tr",align:null},"message"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"processing_error"),(0,o.kt)("td",{parentName:"tr",align:null},"We were not able to process your request. Please try again or contact our support.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount_too_large"),(0,o.kt)("td",{parentName:"tr",align:null},"Cannot capture a larger amount than is reserved.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"partial_capture_disallowed"),(0,o.kt)("td",{parentName:"tr",align:null},"Partial capture is not allowed on this payment.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"payment_not_found"),(0,o.kt)("td",{parentName:"tr",align:null},"Payment does not exist.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"invalid_payment_state"),(0,o.kt)("td",{parentName:"tr",align:null},"Cannot cancel payment that is already captured.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"invalid_payment_state"),(0,o.kt)("td",{parentName:"tr",align:null},"Only initiated payments can be cancelled by idempotency key.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"invalid_payment_state"),(0,o.kt)("td",{parentName:"tr",align:null},"Only reserved payments can be captured.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"invalid_payment_point"),(0,o.kt)("td",{parentName:"tr",align:null},"Payment point is not active.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"payment_point_not_found"),(0,o.kt)("td",{parentName:"tr",align:null},"Payment point does not exist.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"idempotency_key_reused"),(0,o.kt)("td",{parentName:"tr",align:null},"Different request parameters already used for the same idempotencyKey - {",(0,o.kt)("em",{parentName:"td"},"idempotencyKey"),"}.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"unauthorized_access"),(0,o.kt)("td",{parentName:"tr",align:null},"Authorization error occurred.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"payment_captured_with_different_amount"),(0,o.kt)("td",{parentName:"tr",align:null},"Payment has already been captured with different amount.")))),(0,o.kt)("h4",{id:"refunds-api"},"Refunds API"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"code"),(0,o.kt)("th",{parentName:"tr",align:null},"message"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"processing_error"),(0,o.kt)("td",{parentName:"tr",align:null},"We were not able to process your request. Please change idempotency key and try again or contact our support.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount_too_large"),(0,o.kt)("td",{parentName:"tr",align:null},"Cannot refund more than the remaining amount of payment - {",(0,o.kt)("em",{parentName:"td"},"remaining payment amount"),"}.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount_exceeds_available_funds"),(0,o.kt)("td",{parentName:"tr",align:null},"Refund amount exceeds available payment point funds.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"payment_not_found"),(0,o.kt)("td",{parentName:"tr",align:null},"Payment does not exist.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"invalid_payment_state"),(0,o.kt)("td",{parentName:"tr",align:null},"Payment has not been captured yet and cannot be refunded.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"idempotency_key_reused"),(0,o.kt)("td",{parentName:"tr",align:null},"Different request parameters already used for the same idempotencyKey - {",(0,o.kt)("em",{parentName:"td"},"idempotencyKey"),"}.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"unauthorized_access"),(0,o.kt)("td",{parentName:"tr",align:null},"Authorization error occurred.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"availability_duration_expired"),(0,o.kt)("td",{parentName:"tr",align:null},"It is no longer possible to refund this payment.")))),(0,o.kt)("h3",{id:"http-400-bad-request"},"HTTP 400 Bad Request"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"code"),(0,o.kt)("th",{parentName:"tr",align:null},"message"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"{",(0,o.kt)("em",{parentName:"td"},"Message indicating what is wrong with your request body."),"}")))))}c.isMDXComponent=!0}}]);