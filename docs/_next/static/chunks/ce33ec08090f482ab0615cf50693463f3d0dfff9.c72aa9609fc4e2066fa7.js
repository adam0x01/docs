(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"3o5W":function(e,t){e.exports={tailwindVersion:"2.0.2"}},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("q1tI"),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,b=d["".concat(o,".").concat(p)]||d[p]||f[p]||l;return n?a.a.createElement(b,i(i({ref:t},s),{},{components:n})):a.a.createElement(b,i({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"===typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},AI3G:function(e,t,n){"use strict";function r(e){return Array.isArray(e)?e:[e]}n.d(t,"a",(function(){return r}))},"As+U":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),l=n("iuhU"),o=a.a.createElement;function i(e){var t=e.title,n=e.description,r=e.badge,a=void 0===r?{}:r,i=e.border,c=void 0===i||i;return t||n?o("div",{className:Object(l.a)("pb-10",{"border-b border-gray-200 mb-10":c})},o("div",{className:"flex items-center"},o("h1",{className:"text-3xl font-extrabold text-gray-900 tracking-tight"},t),a.key&&a.value&&o("dl",{className:"mt-0 mb-1 ml-3 flex-none inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-4 bg-green-150 text-green-900 tracking-tight"},o("dt",{className:"sr-only"},a.key),o("dd",null,a.value))),n&&o("p",{className:"mt-1 text-lg text-gray-500"},n)):null}},I6Nb:function(e,t,n){"use strict";n.r(t),n.d(t,"ContentsContext",(function(){return N})),n.d(t,"ContentsLayoutOuter",(function(){return F})),n.d(t,"ContentsLayout",(function(){return E}));var r=n("wx14"),a=n("Ff2n"),l=n("KQm4"),o=n("q1tI"),i=n.n(o),c=n("Nr79"),s=n.n(c),u=n("98BF");function f(e){return"[object Object]"===Object.prototype.toString.call(e)}var d=n("AI3G"),p=n("iuhU"),b=n("tc9R"),m=i.a.createElement,v=function e(t){return"object"!==typeof t?t:Array.isArray(t)?t.map(e):Object.keys(t).reduce((function(n,r){var a=t[r],l="object"===typeof a?e(a):a;return n[r.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t,"-").concat(n.toLowerCase())}))]=l,n}),{})};var g=Object(o.memo)((function(e){var t=e.plugin,n=e.filterProperties,r=e.preview,a=e.sort,l=void 0===a?function(e){return e}:a,o=e.transformSelector,i=void 0===o?function(e){return 1===e.length?e:e.slice(1).replace(/\\/g,"")}:o,c=e.transformProperties,g=void 0===c?function(e){return e.properties}:c,h=e.transformValue,y=e.custom,O={};return Object(d.a)(t).forEach((function(e){Object.assign(O,function(e){if(!e)return{};var t={};return e()({addUtilities:function(e){e=Array.isArray(e)?e:[e];for(var n=0;n<e.length;n++)for(var r in e[n])t[r]=v(e[n][r])},config:function(){return{future:"all"}},theme:function(e,t){return s()(u.defaultConfig.theme,e,t)},variants:function(){return[]},e:function(e){return e.replace(/([:.])/g,"\\$1")},corePlugins:function(){return!0}}),t}(e))})),m("div",{className:"border-b border-gray-200 overflow-hidden relative"},m(b.a,{level:2,id:"class-reference",toc:!0,className:"relative"},m("span",{className:"sr-only"},"Default class reference")),m("div",{className:Object(p.a)("overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch",{"lg:max-h-sm":Object.keys(O).length>12})},y||m("table",{className:"w-full text-left border-collapse"},m("thead",null,m("tr",null,m("th",{className:"z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0"},m("div",{className:"pb-2 pr-2 border-b border-gray-200"},"Class")),m("th",{className:Object(p.a)("z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0",{"hidden sm:table-cell":r})},m("div",{className:Object(p.a)("pb-2 pl-2 border-b border-gray-200",{"pr-2":r})},"Properties")),r&&m("th",{className:"z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0"},m("div",{className:"pb-2 pl-2 border-b border-gray-200"},m("span",{className:"sr-only"},"Preview"),"\xa0")))),m("tbody",{className:"align-baseline"},l(Object.keys(O)).map((function(e,t){var a=e,l=O[a];return m("tr",{key:e},m("td",{className:Object(p.a)("py-2 pr-2 font-mono text-xs text-violet-600 whitespace-nowrap",{"border-t border-gray-200":0!==t})},i(a)),m("td",{className:Object(p.a)("py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre",{"border-t border-gray-200":0!==t,"hidden sm:table-cell sm:pr-2":r})},function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.filter,a=void 0===r?function(){return!0}:r,l=n.transformValue,o=void 0===l?function(e){return e}:l,i=n.indent,c=void 0===i?0:i,s=[];return Object.keys(t).forEach((function(n){f(t[n])?(s.push("".concat(n," {")),s.push(e(t[n],{filter:a,transformValue:o,indent:c+1})),s.push("}")):Object(d.a)(t[n]).forEach((function(e,r){a(n,e,t)&&s.push("".concat("  ".repeat(c)).concat(n,": ").concat(o(e),";"))}))})),s.join("\n")}(g({selector:a,properties:l}),{filter:n,transformValue:h})),r&&r(l,{className:0===t?"":"border-t border-gray-200"}))}))))))})),h=n("ekQu"),y=n("nOHt");var O=n("YFqc"),x=n.n(O),w=n("As+U"),j=i.a.createElement,N=Object(o.createContext)();function k(e){var t=e.tableOfContents,n=e.currentSection,r=Object(o.useContext)(h.a),a=Boolean(r);function l(){a&&r.setNavIsOpen(!1)}return j(i.a.Fragment,null,j("h5",{className:"text-gray-900 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-xs"},"\u672c\u9875\u76ee\u5f55"),j("ul",{className:"overflow-x-hidden text-gray-500 font-medium"},t.map((function(e){var t=n===e.slug||e.children.findIndex((function(e){return e.slug===n}))>-1;return j(o.Fragment,{key:e.slug},j("li",null,j("a",{href:"#".concat(e.slug),onClick:l,className:Object(p.a)("block transform transition-colors duration-200 py-2 hover:text-gray-900",{"text-gray-900":t})},e.title)),e.children.map((function(e){var t=n===e.slug;return j("li",{className:Object(p.a)({"ml-4":a,"ml-2":!a}),key:e.slug},j("a",{href:"#".concat(e.slug),onClick:l,className:Object(p.a)("block py-2 transition-colors duration-200 hover:text-gray-900 font-medium",{"text-gray-900":t})},e.title))})))}))))}function C(e){var t,n=Object(o.useState)(null===(t=e[0])||void 0===t?void 0:t.slug),r=n[0],a=n[1],i=Object(o.useState)([]),c=i[0],s=i[1],u=Object(o.useCallback)((function(e,t){s((function(n){return[].concat(Object(l.a)(n.filter((function(t){return e!==t.id}))),[{id:e,top:t}])}))}),[]),f=Object(o.useCallback)((function(e){s((function(t){return t.filter((function(t){return e!==t.id}))}))}),[]);return Object(o.useEffect)((function(){if(0!==e.length&&0!==c.length)return window.addEventListener("scroll",t,{capture:!0,passive:!0}),t(),function(){return window.removeEventListener("scroll",t,!0)};function t(){var e=window.pageYOffset,t=window.innerHeight,n=c.concat([]).sort((function(e,t){return e.top-t.top}));if(e<=0)a(n[0].id);else if(e+t>=document.body.scrollHeight)a(n[n.length-1].id);else{for(var r=e+t/2,l=n[0].id,o=0;o<n.length;o++)r>=n[o].top&&(l=n[o].id);a(l)}}}),[c,e]),{currentSection:r,registerHeading:u,unregisterHeading:f}}function F(e){var t=e.children,n=e.layoutProps,l=Object(a.a)(e,["children","layoutProps"]),o=C(n.tableOfContents),i=o.currentSection,c=o.registerHeading,s=o.unregisterHeading;return j(h.b,Object(r.a)({sidebar:j("div",{className:"mb-8"},j(k,{tableOfContents:n.tableOfContents,currentSection:i}))},l),j(N.Provider,{value:{registerHeading:c,unregisterHeading:s}},t))}function E(e){var t=e.children,n=e.meta,r=e.classes,a=e.tableOfContents,c=[].concat(Object(l.a)(r?[{title:"Default class reference",slug:"class-reference",children:[]}]:[]),Object(l.a)(a)),s=C(c),u=s.currentSection,f=s.registerHeading,d=s.unregisterHeading,p=function(){var e=Object(y.useRouter)(),t=Object(o.useContext)(h.a).nav,n=Object.keys(t).flatMap((function(e){return t[e]})),r=n.findIndex((function(t){return t.href===e.pathname}));return{prev:r>-1?n[r-1]:void 0,next:r>-1?n[r+1]:void 0}}(),b=p.prev,m=p.next;return j("div",{id:n.containerId,className:"pt-10 pb-24 lg:pb-16 w-full flex"},j("div",{className:"min-w-0 flex-auto px-4 sm:px-6 xl:px-8"},j(w.a,{title:n.title,description:n.description,badge:{key:"Tailwind CSS version",value:n.featureVersion},border:!r&&!1!==n.headerSeparator}),j(N.Provider,{value:{registerHeading:f,unregisterHeading:d}},j("div",null,r&&j(g,Object(o.isValidElement)(r)?{custom:r}:r),t)),(b||m)&&j(i.a.Fragment,null,j("hr",{className:"border-gray-200 mt-10 mb-4"}),j("div",{className:"flex justify-between leading-7 font-medium"},b&&j(x.a,{href:b.href},j("a",null,"\u2190 ",b.shortTitle||b.title)),m&&j(x.a,{href:m.href},j("a",null,m.shortTitle||m.title," \u2192"))))),j("div",{className:"hidden xl:text-sm xl:block flex-none w-64 pl-8 mr-8"},j("div",{className:"flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) -mt-10 pt-10 pb-4 top-18"},c.length>0&&j("div",{className:"mb-8"},j(k,{tableOfContents:c,currentSection:u})))))}},ekQu:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return x}));var r=n("wx14"),a=n("Ff2n"),l=n("q1tI"),o=n.n(l),i=n("YFqc"),c=n.n(i),s=n("nOHt"),u=n("fhQF"),f=n("8rel"),d=n("iuhU"),p=n("8IrU"),b=o.a.createElement,m=Object(l.createContext)(),v=Object(l.forwardRef)((function(e,t){var n=e.href,r=e.children,a=e.isActive,l=e.isPublished,o=e.fallbackHref;return b("li",{ref:t},b(c.a,{href:l?n:o},b("a",{className:Object(d.a)("px-3 py-2 transition-colors duration-200 relative block",{"text-cyan-700":a,"hover:text-gray-900 text-gray-500":!a&&l,"text-gray-400":!a&&!l})},b("span",{className:Object(d.a)("rounded-md absolute inset-0 bg-cyan-50",{"opacity-50":a,"opacity-0":!a})}),b("span",{className:"relative"},r))))}));function g(e){var t=e.nav,n=e.children,r=e.fallbackHref,a=Object(s.useRouter)(),o=Object(l.useRef)(),i=Object(l.useRef)();return Object(f.a)((function(){if(o.current){var e=i.current.getBoundingClientRect(),t=o.current.getBoundingClientRect(),n=o.current.offsetTop,r=n-e.height+t.height;(i.current.scrollTop>n||i.current.scrollTop<r)&&(i.current.scrollTop=o.current.offsetTop-e.height/2+t.height/2)}}),[a.pathname]),b("nav",{id:"nav",ref:i,className:"px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-16 sticky?lg:h-(screen-18)"},b("div",{className:"relative flex mb-8 px-3 lg:hidden"},b(u.a,null)),b("ul",null,b(O,null),n,t&&Object.keys(t).map((function(e){var n=t[e].filter((function(e){return!1!==e.published}));return 0!==n.length||r?b("li",{key:e,className:"mt-8"},b("h5",{className:Object(d.a)("px-3 mb-3 lg:mb-3 uppercase tracking-wide font-semibold text-sm lg:text-xs",{"text-gray-900":n.length>0,"text-gray-400":0===n.length})},e),b("ul",null,(r?t[e]:n).map((function(e,t){return b(v,{key:t,href:e.href,isActive:e.href===a.pathname,ref:e.href===a.pathname?o:void 0,isPublished:!1!==e.published,fallbackHref:r},e.shortTitle||e.title)})))):null})).filter(Boolean)))}var h=Object(l.forwardRef)((function(e,t){var n=e.children,r=e.href,a=e.className,l=e.icon,o=e.isActive,i=e.onClick,c=e.color;return b("li",null,b("a",{ref:t,href:r,onClick:i,className:Object(d.a)("flex items-center px-3 hover:text-gray-900 transition-colors duration-200",a,{"text-gray-900":o})},b("div",{className:"mr-3 rounded-md bg-gradient-to-br ".concat(p.a[c][0])},b("svg",{className:"h-6 w-6",viewBox:"0 0 24 24"},l)),n))}));function y(e){var t=e.href,n=e.as,l=Object(a.a)(e,["href","as"]);return/^https?:\/\//.test(t)?b(h,Object(r.a)({href:t},l)):b(c.a,{href:t,as:n,passHref:!0},b(h,l))}function O(){var e=Object(s.useRouter)().pathname.split("/")[1];return b(o.a.Fragment,null,b(y,{href:"/docs",isActive:""===e||"docs"===e,color:"pink",className:"mb-4",icon:b(o.a.Fragment,null,b("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 6C10.0929 6 11.1175 6.29218 12 6.80269V16.8027C11.1175 16.2922 10.0929 16 9 16C7.90714 16 6.88252 16.2922 6 16.8027V6.80269C6.88252 6.29218 7.90714 6 9 6Z",fill:"#FFF1F2"}),b("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 6C16.0929 6 17.1175 6.29218 18 6.80269V16.8027C17.1175 16.2922 16.0929 16 15 16C13.9071 16 12.8825 16.2922 12 16.8027V6.80269C12.8825 6.29218 13.9071 6 15 6Z",fill:"#FECDD3"}))},"Documentation"),b(y,{href:"https://tailwindui.com/components?utm_source=tailwindcss&utm_medium=navigation",color:"violet",className:"mb-4",icon:b(o.a.Fragment,null,b("path",{d:"M6 9l6-3 6 3v6l-6 3-6-3V9z",fill:"#F5F3FF"}),b("path",{d:"M6 9l6 3v6l-6-3V9z",fill:"#DDD6FE"}),b("path",{d:"M18 9l-6 3v6l6-3V9z",fill:"#C4B5FD"}))},"Components"),b(y,{href:"https://play.tailwindcss.com",color:"amber",className:"mb-4",icon:b(o.a.Fragment,null,b("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.196 6.02a1 1 0 01.785 1.176l-2 10a1 1 0 01-1.961-.392l2-10a1 1 0 011.176-.784z",fill:"#FDE68A"}),b("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.293 9.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L16.586 12l-1.293-1.293a1 1 0 010-1.414zM8.707 9.293a1 1 0 010 1.414L7.414 12l1.293 1.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z",fill:"#FDF4FF"}))},"Playground"),b(y,{href:"https://blog.tailwindcss.com",color:"teal",className:"mb-4",icon:b(o.a.Fragment,null,b("path",{d:"M8 9a1 1 0 011-1h8a1 1 0 011 1v7.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 018 16.5V9z",fill:"#6EE7B7"}),b("path",{d:"M15 7a1 1 0 00-1-1H7a1 1 0 00-1 1v9.5A1.5 1.5 0 007.5 18H16v-.085a1.5 1.5 0 01-1-1.415V7z",fill:"#ECFDF5"}),b("path",{fill:"#A7F3D0",d:"M8 8h5v4H8zM8 14h5v2H8z"}))},"News"),b(y,{href:"/resources",isActive:"resources"===e,color:"blue",className:"mb-4",icon:b(o.a.Fragment,null,b("path",{d:"M17 13a1 1 0 011 1v3a1 1 0 01-1 1H8.5a2.5 2.5 0 010-5H17z",fill:"#93C5FD"}),b("path",{d:"M12.743 7.722a1 1 0 011.414 0l2.122 2.121a1 1 0 010 1.414l-6.01 6.01a2.5 2.5 0 11-3.536-3.536l6.01-6.01z",fill:"#BFDBFE"}),b("path",{d:"M6 7a1 1 0 011-1h3a1 1 0 011 1v8.5a2.5 2.5 0 01-5 0V7z",fill:"#EFF6FF"}),b("path",{d:"M9.5 15.5a1 1 0 11-2 0 1 1 0 012 0z",fill:"#60A5FA"}))},"Resources"),b(y,{href:"https://www.youtube.com/tailwindlabs",color:"purple",className:"mb-10",icon:b(o.a.Fragment,null,b("circle",{cx:"12",cy:"12",r:"7",fill:"#F3E8FF"}),b("path",{d:"M14.52 11.136a1 1 0 010 1.728l-3.016 1.759A1 1 0 0110 13.759v-3.518a1 1 0 011.504-.864l3.015 1.76z",fill:"#C084FC"}))},"Screencasts"))}function x(e){var t=e.children,n=e.navIsOpen,r=e.setNavIsOpen,a=e.nav,l=e.sidebar,o=e.fallbackHref;return b(m.Provider,{value:{nav:a,navIsOpen:n,setNavIsOpen:r}},b("div",{className:"w-full max-w-8xl mx-auto"},b("div",{className:"lg:flex"},b("div",{id:"sidebar",onClick:function(){return r(!1)},className:Object(d.a)("fixed z-40 inset-0 flex-none h-full bg-black bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72 lg:block",{hidden:!n})},b("div",{id:"navWrapper",onClick:function(e){return e.stopPropagation()},className:"h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0"},b("div",{className:"hidden lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-gradient-to-b from-white"}),b(g,{nav:a,fallbackHref:o},l))),b("div",{id:"content-wrapper",className:Object(d.a)("min-w-0 w-full flex-auto lg:static lg:max-h-full lg:overflow-visible",{"overflow-hidden max-h-screen fixed":n})},t))))}},fhQF:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),l=n("3o5W"),o=n("iuhU"),i=a.a.createElement;function c(e){var t=e.className,n=Object(r.useRef)();function a(e){e.preventDefault(),"v0"===n.current.value&&(window.location="https://tailwindcss-v0.netlify.app/"),"v1"===n.current.value&&(window.location="https://v1.tailwindcss.com/")}return i("form",{onSubmit:a,className:Object(o.a)("relative",t)},i("label",null,i("span",{className:"sr-only"},"Tailwind CSS Version"),i("select",{ref:n,className:"appearance-none block bg-transparent pr-7 py-1 text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors duration-200",onChange:a},i("option",{value:"v2"},"v",l.tailwindVersion),i("option",{value:"v1"},"v1.9.6"),i("option",{value:"v0"},"v0.7.4"))),i("svg",{className:"w-5 h-5 text-gray-400 absolute top-1/2 right-0 -mt-2.5 pointer-events-none",fill:"currentColor"},i("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"})))}},tc9R:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r,a=n("wx14"),l=n("rePB"),o=n("Ff2n"),i=n("q1tI"),c=n.n(i),s=n("I6Nb"),u=(n("17x9"),["bottom","height","left","right","top","width"]),f=new Map,d=function e(){var t=[];f.forEach((function(e,n){var r,a,l=n.getBoundingClientRect();r=l,a=e.rect,void 0===r&&(r={}),void 0===a&&(a={}),u.some((function(e){return r[e]!==a[e]}))&&(e.rect=l,t.push(e))})),t.forEach((function(e){e.callbacks.forEach((function(t){return t(e.rect)}))})),r=window.requestAnimationFrame(e)};var p=function(e,t){return{observe:function(){var n=0===f.size;f.has(e)?f.get(e).callbacks.push(t):f.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[t]}),n&&d()},unobserve:function(){var n=f.get(e);if(n){var a=n.callbacks.indexOf(t);a>=0&&n.callbacks.splice(a,1),n.callbacks.length||f.delete(e),f.size||cancelAnimationFrame(r)}}}},b=(n("2W6z"),m()?c.a.useLayoutEffect:c.a.useEffect);"undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math&&self;function m(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}function v(e,t,n){void 0===t&&(t=!0);var r=Object(i.useState)(e.current),a=r[0],l=r[1],o=Object(i.useRef)(!1),c=Object(i.useRef)(!1),s=Object(i.useState)(null),u=s[0],f=s[1],d=Object(i.useRef)();return b((function(){d.current=n,e.current!==a&&l(e.current)})),b((function(){a&&!o.current&&(o.current=!0,f(a.getBoundingClientRect()))}),[a]),b((function(){var n,r=a;return c.current||(c.current=!0,r=e.current),r?(n=p(r,(function(e){d.current&&d.current(e),f(e)})),t&&n.observe(),l):l;function l(){n&&n.unobserve()}}),[t,a]),u}var g=n("iuhU"),h=c.a.createElement;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){var t=e.level,n=e.id,r=e.children,l=e.number,c=e.badge,u=e.className,f=void 0===u?"":u,d=e.hidden,p=void 0!==d&&d,b=e.toc,m=void 0!==b&&b,y=e.style,x=void 0===y?{}:y,w=Object(o.a)(e,["level","id","children","number","badge","className","hidden","toc","style"]),j="h".concat(t),N=Object(i.useContext)(s.ContentsContext),k=N.registerHeading,C=N.unregisterHeading,F=Object(i.useRef)(),E=function(e){var t=Object(i.useState)(),n=t[0],r=t[1],a=v(e),l=a?a.top:void 0;return Object(i.useEffect)((function(){if("undefined"!==typeof l){var e=l+window.pageYOffset;e!==n&&r(e)}}),[l,n]),n}(F);return Object(i.useEffect)((function(){return m&&"undefined"!==typeof E&&k(n,E),function(){C(n)}}),[m,E,n,k,C]),h(j,Object(a.a)({className:Object(g.a)("group flex whitespace-pre-wrap",f),id:n,ref:F,style:O(O({},p?{marginBottom:0}:{}),x)},w),!p&&h("a",{href:"#".concat(n),className:"absolute after:hash opacity-0 group-hover:opacity-100",style:{marginLeft:"-1em",paddingRight:"0.5em",boxShadow:"none",color:"#a1a1aa"},"aria-label":"Anchor"}),l&&h("span",{className:"bg-cyan-100 w-8 h-8 inline-flex items-center justify-center rounded-full text-cyan-700 text-xl mr-3 flex-none"},l),h("span",{className:p?"sr-only":void 0},r),c&&h("span",{className:"ml-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-4 bg-green-150 text-green-900"},c))}}}]);