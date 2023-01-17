"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[7890],{3905:(t,l,n)=>{n.d(l,{Zo:()=>i,kt:()=>b});var e=n(67294);function r(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function a(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function u(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?a(Object(n),!0).forEach((function(l){r(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function d(t,l){if(null==t)return{};var n,e,r=function(t,l){if(null==t)return{};var n,e,r={},a=Object.keys(t);for(e=0;e<a.length;e++)n=a[e],l.indexOf(n)>=0||(r[n]=t[n]);return r}(t,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(e=0;e<a.length;e++)n=a[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=e.createContext({}),k=function(t){var l=e.useContext(o),n=l;return t&&(n="function"==typeof t?t(l):u(u({},l),t)),n},i=function(t){var l=k(t.components);return e.createElement(o.Provider,{value:l},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},p=e.forwardRef((function(t,l){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,i=d(t,["components","mdxType","originalType","parentName"]),s=k(n),p=r,b=s["".concat(o,".").concat(p)]||s[p]||c[p]||a;return n?e.createElement(b,u(u({ref:l},i),{},{components:n})):e.createElement(b,u({ref:l},i))}));function b(t,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var a=n.length,u=new Array(a);u[0]=p;var d={};for(var o in l)hasOwnProperty.call(l,o)&&(d[o]=l[o]);d.originalType=t,d[s]="string"==typeof t?t:r,u[1]=d;for(var k=2;k<a;k++)u[k]=n[k];return e.createElement.apply(null,u)}return e.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39544:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>o,contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>d,toc:()=>k});var e=n(87462),r=(n(67294),n(3905));const a={sidebar_position:10},u="API Errors",d={unversionedId:"pos/api-errors",id:"pos/api-errors",title:"API Errors",description:"This page contains information regarding all the non-successful status-codes and different error-codes that can occur in the V10 API. The first section contains all combinations of StatusCodes and ErrorCodes that can occur in all endpoints, and then follows sections for the individual endpoints.",source:"@site/docs/pos/api-errors.mdx",sourceDirName:"pos",slug:"/pos/api-errors",permalink:"/docs/pos/api-errors",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"API Principles",permalink:"/docs/pos/api-principles"},next:{title:"Input and Output Formats",permalink:"/docs/pos/input-and-output-formats"}},o={},k=[{value:"Common for all endpoints",id:"common-for-all-endpoints",level:2},{value:"Payments",id:"payments",level:2},{value:"Point of Sales",id:"point-of-sales",level:2},{value:"Refunds",id:"refunds",level:2},{value:"Stores",id:"stores",level:2}],i={toc:k};function s(t){let{components:l,...n}=t;return(0,r.kt)("wrapper",(0,e.Z)({},i,n,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-errors"},"API Errors"),(0,r.kt)("p",null,"This page contains information regarding all the non-successful status-codes and different error-codes that can occur in the V10 API. The first section contains all combinations of StatusCodes and ErrorCodes that can occur in all endpoints, and then follows sections for the individual endpoints."),(0,r.kt)("h2",{id:"common-for-all-endpoints"},"Common for all endpoints"),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"ALL endpoints"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"400"),(0,r.kt)("td",null,"1099 ",(0,r.kt)("br",null)," 1151",(0,r.kt)("br",null)," 1152",(0,r.kt)("br",null)," 1153",(0,r.kt)("br",null)," 1155",(0,r.kt)("br",null)," 1156",(0,r.kt)("br",null)," 1157",(0,r.kt)("br",null)," 1159",(0,r.kt)("br",null)," 1160",(0,r.kt)("br",null)," 1161",(0,r.kt)("br",null)," 1182"),(0,r.kt)("td",null,"Unknown BadRequest error ",(0,r.kt)("br",null)," Missing x-mobilepay-merchant-vat-number header ",(0,r.kt)("br",null)," Missing x-mobilepay-client-system-name header ",(0,r.kt)("br",null)," Missing x-mobilepay-client-system-version header ",(0,r.kt)("br",null)," Duplicated x-mobilepay-merchant-vat-number header ",(0,r.kt)("br",null)," Duplicated x-mobilepay-client-system-name header ",(0,r.kt)("br",null)," Duplicated x-mobilepay-client-system-version header ",(0,r.kt)("br",null)," Invalid x-mobilepay-merchant-vat-number header ",(0,r.kt)("br",null)," Invalid x-mobilepay-client-system-name header ",(0,r.kt)("br",null)," Invalid x-mobilepay-client-system-version header ",(0,r.kt)("br",null)," Invalid merchant_vat claim in access token")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"401"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Unauthorized")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"500"),(0,r.kt)("td",null,"2000 - 2999"),(0,r.kt)("td",null,"Internal server error - Please attach error code when communicating with MobilePay for quicker support"))))),(0,r.kt)("h2",{id:"payments"},"Payments"),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"GET /v10/payments/paymentid - Query a Payment"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1401",(0,r.kt)("br",null),"1411"),(0,r.kt)("td",null,"Cannot query payments created by a different integrator",(0,r.kt)("br",null),"Cannot query payments created on behalf of a different merchant")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"404"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Payment not found"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"GET /v10/payments - Query Payments by a filter"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"400"),(0,r.kt)("td",null,"1109"),(0,r.kt)("td",null,"Payment filter not specific enough"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"POST /v10/payments - Initiate a Payment"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"400"),(0,r.kt)("td",null,"1102",(0,r.kt)("br",null),"1113",(0,r.kt)("br",null),"1117",(0,r.kt)("br",null),"1162",(0,r.kt)("br",null),"1163",(0,r.kt)("br",null),"1164"),(0,r.kt)("td",null,"Invalid Amount",(0,r.kt)("br",null),"Invalid OrderId",(0,r.kt)("br",null),"Invalid MerchantPaymentLabel",(0,r.kt)("br",null),"Invalid x-mobilepay-idempotency-key header",(0,r.kt)("br",null),"Duplicated x-mobilepay-idempotency-key header",(0,r.kt)("br",null),"Missing x-mobilepay-idempotency-key header")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1400"),(0,r.kt)("td",null,"Cannot initiate payments on a point of sale created by a different integrator")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"409"),(0,r.kt)("td",null,"1000",(0,r.kt)("br",null),"1204",(0,r.kt)("br",null),"1301",(0,r.kt)("br",null),"1306"),(0,r.kt)("td",null,"Point of Sale not found ",(0,r.kt)("br",null),"The store for the given point of sale is not activated. Please activate the store before starting a payment ",(0,r.kt)("br",null)," A payment is already active. Cancel it before starting a new one ",(0,r.kt)("br",null),"x-mobilepay-idempotency-key header has to be unique per request unless the request is a retry of a previous request"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"POST /v10/payments/prepare - Prepare a Payment"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"400"),(0,r.kt)("td",null,"1113",(0,r.kt)("br",null),"1162",(0,r.kt)("br",null),"1163",(0,r.kt)("br",null),"1164"),(0,r.kt)("td",null,"Invalid OrderId",(0,r.kt)("br",null),"Invalid x-mobilepay-idempotency-key header",(0,r.kt)("br",null),"Duplicated x-mobilepay-idempotency-key header",(0,r.kt)("br",null),"Missing x-mobilepay-idempotency-key header")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1400"),(0,r.kt)("td",null,"Cannot prepare payments on a point of sale created by a different integrator")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"409"),(0,r.kt)("td",null,"1000",(0,r.kt)("br",null),"1204",(0,r.kt)("br",null),"1301",(0,r.kt)("br",null),"1306"),(0,r.kt)("td",null,"Point of sale not found ",(0,r.kt)("br",null)," The store for the given point of sale is not activated. Please activate the store before starting a payment ",(0,r.kt)("br",null)," A payment is already active. Cancel it before starting a new one ",(0,r.kt)("br",null),"x-mobilepay-idempotency-key header has to be unique per request unless the request is a retry of a previous request"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"POST /v10/payments/paymentid/ready - Ready a Payment"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"400"),(0,r.kt)("td",null,"1102",(0,r.kt)("br",null),"1117"),(0,r.kt)("td",null,"Invalid Amount",(0,r.kt)("br",null),"Invalid MerchantPaymentLabel")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1401",(0,r.kt)("br",null),"1406"),(0,r.kt)("td",null,"Cannot ready payments prepared by a different integrator",(0,r.kt)("br",null),"Cannot ready payments prepared on behalf of a different merchant")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"404"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Payment not found")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"409"),(0,r.kt)("td",null,"1303"),(0,r.kt)("td",null,"Payment needs to be prepared before it can be marked as ready"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"POST /v10/payments/paymentid/capture - Capture a Payment"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"400"),(0,r.kt)("td",null,"1102"),(0,r.kt)("td",null,"Invalid Amount")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1401",(0,r.kt)("br",null),"1407"),(0,r.kt)("td",null,"Cannot capture payments created by a different integrator",(0,r.kt)("br",null),"Cannot capture payments created on behalf of a different merchant")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"404"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Payment not found")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"409"),(0,r.kt)("td",null,"1304 ",(0,r.kt)("br",null)," 1305 ",(0,r.kt)("br",null)," 1307 ",(0,r.kt)("br",null)," 1308"),(0,r.kt)("td",null,"Cannot capture payment when payment is not reserved ",(0,r.kt)("br",null)," Capture Amount cannot exceed the reserved amount ",(0,r.kt)("br",null),"Payment has already been captured with a different amount ",(0,r.kt)("br",null)," Partial capture not possible on this payment"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"POST /v10/payments/paymentid/cancel - Cancel a Payment"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1401",(0,r.kt)("br",null),"1408"),(0,r.kt)("td",null,"Cannot cancel payments created by a different integrator",(0,r.kt)("br",null),"Cannot cancel payments created on behalf of a different merchant")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"404"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Payment not found")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"409"),(0,r.kt)("td",null,"1300"),(0,r.kt)("td",null,"The payment cannot be cancelled in the current state"))))),(0,r.kt)("h2",{id:"point-of-sales"},"Point of Sales"),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"GET /v10/pointofsales/posid - Query a Point of Sale"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1400",(0,r.kt)("br",null),"1410"),(0,r.kt)("td",null,"Cannot query point of sales created by a different integrator",(0,r.kt)("br",null),"Cannot query point of sales created on behalf of a different merchant")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"404"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Point of sale not found"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"GET /v10/pointofsales - Query Point of Sales by a filter"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"400"),(0,r.kt)("td",null,"1121"),(0,r.kt)("td",null,"Point of sale filter not specific enough"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"GET /v10/pointofsales/posid/checkin - Query a checkin on a Point of Sale"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1400"),(0,r.kt)("td",null,"Cannot query checkin on a point of sale created by a different integrator")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"404"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Point of sale not found"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"POST /v10/pointofsales - Create a Point of Sale"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"400"),(0,r.kt)("td",null,"1100",(0,r.kt)("br",null),"1111",(0,r.kt)("br",null),"1112",(0,r.kt)("br",null),"1116",(0,r.kt)("br",null),"1118",(0,r.kt)("br",null),"1162",(0,r.kt)("br",null),"1163",(0,r.kt)("br",null),"1164"),(0,r.kt)("td",null,"Invalid BeaconId ",(0,r.kt)("br",null),"Invalid MerchantPosId ",(0,r.kt)("br",null),"Invalid PosName ",(0,r.kt)("br",null),"Invalid CallbackAlias ",(0,r.kt)("br",null),"Invalid CalibrationType ",(0,r.kt)("br",null),"Invalid x-mobilepay-idempotency-key header",(0,r.kt)("br",null),"Duplicated x-mobilepay-idempotency-key header",(0,r.kt)("br",null),"Missing x-mobilepay-idempotency-key header")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1403"),(0,r.kt)("td",null,"Cannot create point of sale on store that does not belong to the merchant")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"409"),(0,r.kt)("td",null,"1002",(0,r.kt)("br",null),"1200",(0,r.kt)("br",null),"1202",(0,r.kt)("br",null),"1306"),(0,r.kt)("td",null,"Store not found ",(0,r.kt)("br",null)," A point of sale with that MerchantPosId already exist ",(0,r.kt)("br",null)," A point of sale with that BeaconId already exist ",(0,r.kt)("br",null)," x-mobilepay-idempotency-key header has to be unique per request unless the request is a retry of a previous request"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"DELETE /v10/pointofsales/posid - Delete a Point of Sale"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1400",(0,r.kt)("br",null),"1409"),(0,r.kt)("td",null,"Cannot delete point of sales created by a different integrator",(0,r.kt)("br",null),"Cannot delete point of sales created on behalf of a different merchant")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"404"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Point of sale not found"))))),(0,r.kt)("h2",{id:"refunds"},"Refunds"),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"GET /v10/refunds/refundid - Query a Refund"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1402"),(0,r.kt)("td",null,"Cannot query refunds created by a different integrator")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"404"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Refund not found"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"GET /v10/refunds - Query Refunds by a filter"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"400"),(0,r.kt)("td",null,"1110"),(0,r.kt)("td",null,"Refund filter not specific enough"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"POST /v10/refunds - Create a Refund"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"400"),(0,r.kt)("td",null,"1102",(0,r.kt)("br",null),"1114",(0,r.kt)("br",null),"1162",(0,r.kt)("br",null),"1163",(0,r.kt)("br",null),"1164"),(0,r.kt)("td",null,"Invalid Amount",(0,r.kt)("br",null),"Invalid RefundOrderId ",(0,r.kt)("br",null)," Invalid x-mobilepay-idempotency-key header ",(0,r.kt)("br",null)," Duplicated x-mobilepay-idempotency-key header ",(0,r.kt)("br",null)," Missing x-mobilepay-idempotency-key header")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1401"),(0,r.kt)("td",null,"Cannot refund payments created by a different integrator")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"409"),(0,r.kt)("td",null,"1001",(0,r.kt)("br",null),"1306",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," 1354",(0,r.kt)("br",null),"1365 ",(0,r.kt)("br",null),"1366 ",(0,r.kt)("br",null),"1367 ",(0,r.kt)("br",null),"1368"),(0,r.kt)("td",null,"Payment not found ",(0,r.kt)("br",null)," x-mobilepay-idempotency-key header has to be unique per request unless the request is a retry of a previous request ",(0,r.kt)("br",null)," Refund of payment not possible when payment is not captured ",(0,r.kt)("br",null)," Refund CurrencyCode is different than payment CurrencyCode ",(0,r.kt)("br",null)," Payment is too old ",(0,r.kt)("br",null)," Refund Amount is too high ",(0,r.kt)("br",null)," Cannot refund Amount as it exceeds the available balance on the store"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"POST /v10/refunds/refundid/capture - Capture a reserved Refund"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1402"),(0,r.kt)("td",null,"Cannot capture refunds created by a different integrator")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"404"),(0,r.kt)("td",null,"1004"),(0,r.kt)("td",null,"Refund not found")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"409"),(0,r.kt)("td",null,"1351"),(0,r.kt)("td",null,"Cannot capture refund when refund is not reserved"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"POST /v10/refunds/refundid/cancel - Cancel a reserved Refund"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"403"),(0,r.kt)("td",null,"1402"),(0,r.kt)("td",null,"Cannot cancel refunds created by a different integrator")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"404"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Refund not found")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"409"),(0,r.kt)("td",null,"1352"),(0,r.kt)("td",null,"The refund cannot be cancelled in the current state"))))),(0,r.kt)("h2",{id:"stores"},"Stores"),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"GET /v10/stores/storeid - Query a Store"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"404"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Store not found"))))),(0,r.kt)("details",{className:"plain-details"},(0,r.kt)("summary",null,"GET /v10/stores - Query a Store by MerchantBrandId and MerchantLocationId"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"StatusCode"),(0,r.kt)("td",null,"ErrorCodes"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"400"),(0,r.kt)("td",null,"1122",(0,r.kt)("br",null),"1119",(0,r.kt)("br",null)," 1120"),(0,r.kt)("td",null,"Store filter not specific enough ",(0,r.kt)("br",null)," Invalid MerchantBrandId",(0,r.kt)("br",null)," Invalid MerchantLocationId")),(0,r.kt)("tr",null,(0,r.kt)("td",null),(0,r.kt)("td",null),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null),(0,r.kt)("td",null),(0,r.kt)("td",null))))))}s.isMDXComponent=!0}}]);