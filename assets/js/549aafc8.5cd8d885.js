"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[4639],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},97625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:3},s="Build Basics",o={unversionedId:"build-basics",id:"build-basics",title:"Build Basics",description:"To build great applications with MobilePay APIs, you should learn about the basic design principles that form the foundation of MobilePay APIs. These principles include base elements of the data model, secured access, error handling, and more.",source:"@site/docs/build-basics.md",sourceDirName:".",slug:"/build-basics",permalink:"/MobilePay-Payments-API/docs/build-basics",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Authentication",permalink:"/MobilePay-Payments-API/docs/authentication"},next:{title:"Testing",permalink:"/MobilePay-Payments-API/docs/testing"}},l={},u=[{value:"Using the REST API",id:"using-the-rest-api",level:2},{value:"Handling Errors",id:"handling-errors",level:2},{value:"Network and Server Errors",id:"network-and-server-errors",level:3},{value:"Retry policy",id:"retry-policy",level:3},{value:"Working with Dates",id:"working-with-dates",level:2},{value:"Working with Monetary Amounts",id:"working-with-monetary-amounts",level:2},{value:"Idempotency",id:"idempotency",level:2},{value:"Correlation IDs",id:"correlation-ids",level:2},{value:"Design Guidelines",id:"design-guidelines",level:2},{value:"Valid characters",id:"valid-characters",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-basics"},"Build Basics"),(0,i.kt)("p",null,"To build great applications with MobilePay APIs, you should learn about the basic design principles that form the foundation of MobilePay APIs. These principles include base elements of the data model, secured access, error handling, and more."),(0,i.kt)("h2",{id:"using-the-rest-api"},"Using the REST API"),(0,i.kt)("p",null,"The MobilePay API is organized around ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST"),". You manage the resources of a MobilePay account (such as payments, refunds, webhooks) by making HTTPS requests to URLs that represent those resources."),(0,i.kt)("h2",{id:"handling-errors"},"Handling Errors"),(0,i.kt)("p",null,"Clients integrating against the MobilePay API should expect intermittent errors and must implement suitable error handling. Errors can generally be classified into three categories: network errors, server errors, and client errors. Network and server errors should be handled by retrying requests, while client errors should be handled by fixing the client request."),(0,i.kt)("h3",{id:"network-and-server-errors"},"Network and Server Errors"),(0,i.kt)("p",null,"Network errors typically present themselves as timeouts or connections that are closed prematurely. Network errors and server errors (HTTP 5XX responses) should initially be handled by retrying requests. If errors persist despite retries, the flow should be cleaned up e.g. by canceling. The MobilePay API uses ",(0,i.kt)("a",{parentName:"p",href:"#idempotency"},"idempotency")," to ensure that requests can always be safely retried. Idempotency ensures that performing the same call multiple times will not cause additional state changes beyond those caused by the first call."),(0,i.kt)("p",null,"For instance, if a capture call on a payment is successful on the backend, but the connection to the client is closed before the client receives the response, then it is safe for the client to retry the capture call. The second capture call will immediately return with a 200 OK response as the capture was already completed on the first capture call."),(0,i.kt)("h3",{id:"retry-policy"},"Retry policy"),(0,i.kt)("p",null,"We recommend retrying failed requests due to network and server errors using one of these strategies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Retrying requests up to a fixed number of times with a constant delay between each call.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Retrying requests up to a fixed number of times using an exponential backoff with jitter strategy (i.e. doubling the delay between each retried call and adding some randomness to the delay to avoid overloading the backend)."))),(0,i.kt)("p",null,"We suggest retrying a failed request ",(0,i.kt)("strong",{parentName:"p"},"2")," times (which results in 3 requests including the first one)."),(0,i.kt)("p",null,"You may retry ",(0,i.kt)("strong",{parentName:"p"},"max 5")," times (which results in 6 requests)."),(0,i.kt)("h2",{id:"working-with-dates"},"Working with Dates"),(0,i.kt)("p",null,'All MobilePay endpoints expect dates and timestamps as strings in UTC (such as, "2013-01-15T00:00:00Z"). ',(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO 8601")),(0,i.kt)("h2",{id:"working-with-monetary-amounts"},"Working with Monetary Amounts"),(0,i.kt)("p",null,"The amounts should be specified as positive integers representing how much to charge in the smallest currency unit (e.g., 100 cents to charge \u20ac1.00 or 100 \xf8re to charge 1.00 kr.)."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Input: 'Amount: 2000' equals 20 DKK or 20 EUR.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Input: 'Amount: 52050' equals 520,50 DKK or 520,50 EUR."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The minimum amount is 1. The maximum amount is defined by user's daily/yearly limits. These rules apply for all countries (Denmark, Finland).")),(0,i.kt)("h2",{id:"idempotency"},"Idempotency"),(0,i.kt)("p",null,"By definition ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Idempotence"},"idempotence")," is a property of operations whereby they can be applied multiple times without changing the result beyond the initial application. As per HTTP spec all DELETE and PUT endpoints are idempotent in MobilePay. For certain POST requests we also ensure idempotency by using IdempotencyKey. After receiving the same key the endpoint returns the previous response and does not invoke any side effects. We require IdempotencyKey to be a valid ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"UUID"),". It must be regenerated for each request unless the request is being retried."),(0,i.kt)("h2",{id:"correlation-ids"},"Correlation IDs"),(0,i.kt)("p",null,"A correlation ID is a unique ID assigned to every transaction. When a transaction becomes distributed across multiple services, we can follow it using the logging information. The correlation ID is passed from service to service. All services that process that specific transaction receive the correlation ID and pass it to the next service and so on so that they can log any events associated with that transaction to our centralized logs. This helps us hugely when we have to visualize and understand what has happened with this transaction across different microservices."),(0,i.kt)("p",null,"Using MobilePay APIs you can provide your own Correlation ID in request header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'-H "CorrelationId: 22a38d79-2ec2-4d90-8375-460a1erwrwee5b"\n')),(0,i.kt)("p",null,"If none is provided then our systems will generate it. You will be made aware of it only during errors.\n",(0,i.kt)("strong",{parentName:"p"},"If you need to contact us about a specific request, providing the correlation ID will ensure the fastest-possible resolution.")),(0,i.kt)("h2",{id:"design-guidelines"},"Design Guidelines"),(0,i.kt)("p",null,"Our logo acts as a unique signature - a symbol and identifier for MobilePay. It\u2019s a constant reminder of the joyful exchanges and wonders we are offering."),(0,i.kt)("p",null,"Consistent use of our logo helps build trust and recognition across markets, and in all situations. Use it with care. And respect.\nYou can find resources and guidelines ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/design"},"here"),"."),(0,i.kt)("h2",{id:"valid-characters"},"Valid characters"),(0,i.kt)("p",null,"Valid characters for string type request fields are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 - 9"),(0,i.kt)("li",{parentName:"ul"},"a-zA-Z"),(0,i.kt)("li",{parentName:"ul"},"\xe6\xc6\xf8\xd8\xe5\xc5"),(0,i.kt)("li",{parentName:"ul"},"\xe4\xc4\xf6\xd6\u0161\u0160\u017e\u017d\xe2\xc2\xe0\xc0\xe1\xc1\xe3\xc3\xe9\xc9\xea\xca\xeb\xcb\xe8\xc8\xed\xcd\xee\xce\xef\xcf\xec\xcc\xfc\xdc\xfb\xdb\xf9\xd9\xfa\xda\xf4\xd4\xf2\xd2\xf3\xd3\xf5\xd5\xff\xfd\xdd\xf1\xd1"),(0,i.kt)("li",{parentName:"ul"},"!#$%&'()*+,-./:;<=>?@[]^_`{|}~\xa6\xaf\xa8\xb4"),(0,i.kt)("li",{parentName:"ul"},"\xab\xbb\xf0\xfe\xe7\xdf\xa4\xc7\xb5\xd0\xde\xb1\xb0\xaa\xba\xa9\xa7\xb6\xbc\xbd\xbe\xac\xae\xa2\xa3\xa5\xa1\xbf\xb9\xb2\xb3"),(0,i.kt)("li",{parentName:"ul"},"(space)")))}d.isMDXComponent=!0}}]);