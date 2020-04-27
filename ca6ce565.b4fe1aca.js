(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var o=a(1),n=a(6),r=(a(0),a(168)),c={id:"cloud-application-model",title:"CAP - Cloud Application Model",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"CAP (Cloud Application Model)",description:null},i={id:"related-projects/cloud-application-model",title:"CAP - Cloud Application Model",description:"## Relation to SAP Cloud SDK ##",source:"@site/docs/related-projects/cap.md",permalink:"/cloud-sdk/docs/related-projects/cloud-application-model",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1587327922,sidebar_label:"CAP (Cloud Application Model)",sidebar:"someSidebar",previous:{title:"Community calls 2020",permalink:"/cloud-sdk/docs/community-calls/community-calls-2020"}},l=[{value:"Relation to SAP Cloud SDK",id:"relation-to-sap-cloud-sdk",children:[]},{value:"About CAP",id:"about-cap",children:[]},{value:"CAP is recommended for",id:"cap-is-recommended-for",children:[]},{value:"Documentation",id:"documentation",children:[]}],p={rightToc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"relation-to-sap-cloud-sdk"},"Relation to SAP Cloud SDK"),Object(r.b)("p",null,"[SAP Cloud Application Programming Model]"," is widely used to build cloud services within SAP."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CAP uses some of Cloud SDK features to deliver best user experience out of the box"),Object(r.b)("li",{parentName:"ul"},"Pipeline"),Object(r.b)("li",{parentName:"ul"},"Resilience"),Object(r.b)("li",{parentName:"ul"},"OData V4 helpers"),Object(r.b)("li",{parentName:"ul"},"Cloud Foundry abstractions"),Object(r.b)("li",{parentName:"ul"},"Un-typed Odata client"),Object(r.b)("li",{parentName:"ul"},"You can consume CAP based services with SAP Cloud SDK by generating a compatible client"),Object(r.b)("li",{parentName:"ul"},"CAP and Cloud SDK can be used together to leverage benefits from both platforms"),Object(r.b)("li",{parentName:"ul"},"CAP and Cloud SDK have many features in common, complementary features as well as unique ones. Feel free to approach\nus to get recommendation for you specific project.")),Object(r.b)("h2",{id:"about-cap"},"About CAP"),Object(r.b)("p",null,"The SAP Cloud Application Programming Model is an ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/#design-principles"}),"open and opinionated"),", ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/#design-principles"}),"framework of languages, libraries, and tools")," for building enterprise-grade services and applications. It guides developers through proven ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/#best-practices"}),"best practices")," and a great wealth of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/features"}),"out-of-the-box solutions")," for recurring tasks."),Object(r.b)("p",null,"CAP-based projects benefit from a primary ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/#domain-models"}),"focus on domain"),". Instead of delving into overly technical disciplines, we focus on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/#grow-as-you-go"}),"accelerated development"),", and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/about/#platform-agnostic"}),"safeguarding investments")," in a world of rapidly changing cloud technologies."),Object(r.b)("p",null,Object(r.b)("img",Object(o.a)({parentName:"p"},{src:"https://cap.cloud.sap/docs/assets/overview.png",alt:"CAP project diagram"}))),Object(r.b)("h2",{id:"cap-is-recommended-for"},"CAP is recommended for"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Building APIs (OData, REST, Messaging)"),Object(r.b)("li",{parentName:"ul"},"Consuming and emitting Enterprise Messages for S/4HANA")),Object(r.b)("h2",{id:"documentation"},"Documentation"),Object(r.b)("p",null,"Learn more about CAP from the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://cap.cloud.sap/docs/"}),"official documentation")))}u.isMDXComponent=!0},168:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(a),b=o,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||r;return a?n.a.createElement(m,i({ref:t},p,{components:a})):n.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<r;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);