"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95466:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(27133);const l={sidebar_position:2},i="Merchant Sandbox Testing",s={type:"mdx",permalink:"/merchant-test",source:"@site/src/pages/merchant-test.mdx",title:"Merchant Sandbox Testing",description:"In this section, you can find information about how to download and use MobilePay sandbox test app. Before starting, please contact your MobilePay integrator to inquire what test options they offer.",frontMatter:{sidebar_position:2}},p=[{value:"Test app",id:"test-app",level:2},{value:"Test users",id:"test-users",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"merchant-sandbox-testing"},"Merchant Sandbox Testing"),(0,r.kt)("p",null,"In this section, you can find information about how to download and use MobilePay sandbox test app. Before starting, please contact your MobilePay integrator to inquire what test options they offer."),(0,r.kt)("p",null,"If you encounter an issues with the test app or users, please contact your MobilePay integrator for support."),(0,r.kt)("h2",{id:"test-app"},"Test app"),(0,r.kt)(o.ZP,{mdxType:"TestApp"}),(0,r.kt)("h2",{id:"test-users"},"Test users"),(0,r.kt)("p",null,"Only registered MobilePay test users can use the sandbox app. Please contact your MobilePay integator to get a test user. Please note that the test user may be shared with others and receipts for all test transactions are visible in the activity list."))}c.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),i=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:b,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(y,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[T,x]=(0,r.useState)(g),P=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=b){const e=k[b];null!=e&&e!==T&&y.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=P.indexOf(t),a=y[n].value;a!==T&&(O(t),x(a),null!=b&&w(b,String(a)))},N=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;n=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=P[t]??P[P.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>P.push(e),onKeyDown:N,onClick:E},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},27133:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={toc:[{value:"Log on to test app",id:"log-on-to-test-app",level:3}]};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,r.kt)("p",null,"To install, you will have to allow installation from \u201cunknown sources\u201d."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install.appcenter.ms/orgs/mobilepay-apps/apps/mobilepay-dk-android-sandbox/distribution_groups/external"},"MobilePay DK Sandbox app")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://install.appcenter.ms/orgs/mobilepay-apps/apps/mobilepay-fi-android-sandbox/distribution_groups/external"},"MobilePay FI Sandbox app"))),(0,r.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,r.kt)("p",null,"iOS MobilePay Sandbox app is available through Apple TestFlight. Therefore Apple TestFlight must be installed to the device.  Using below link on a mobile device will initiate download of and registration to TestFlight. No prior registration or invitation needed.\nPlease open below link on your mobile device:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://testflight.apple.com/join/xarydQZ4"},"MobilePay DK Sandbox app")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://testflight.apple.com/join/hP92EaBR"},"MobilePay FI Sandbox app")))),(0,r.kt)("h3",{id:"log-on-to-test-app"},"Log on to test app"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install and open the MobilePay DK/FI Vendor app"),(0,r.kt)("li",{parentName:"ol"},'Select "Log p\xe5 (Eksisterende bruger)" / "Kirjaudu sovellukseen / "Log on (existing user)"'),(0,r.kt)("li",{parentName:"ol"},"Enter a valid Sandbox phone number (see below section about test users)"),(0,r.kt)("li",{parentName:"ol"},"Enter SSN (Only relevant on fresh install)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Denmark CPR no.: 000000-0000"),(0,r.kt)("li",{parentName:"ul"},"Finland henkil\xf6tunnus: 00000000000"))),(0,r.kt)("li",{parentName:"ol"},"Enter PIN: \u201c1234\u201d"),(0,r.kt)("li",{parentName:"ol"},'Enter activation code: \u201c123456\u201d and press "OK" / "Jatka"')))}s.isMDXComponent=!0}}]);