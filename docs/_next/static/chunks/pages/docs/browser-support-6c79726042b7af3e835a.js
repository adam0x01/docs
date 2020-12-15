_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{"8ofy":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/browser-support",function(){return t("rn5e")}])},ap0H:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),c=t.n(n),o=t("8Kt/"),s=t.n(o),r=c.a.createElement;function i(e){var a=e.suffix,t=e.children+(a?" - ".concat(a):"");return r(s.a,null,r("title",{key:"title"},t),r("meta",{key:"twitter:title",name:"twitter:title",content:t}),r("meta",{key:"og:title",property:"og:title",content:t}))}},rn5e:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var n=t("wx14"),c=t("Ff2n"),o=t("q1tI"),s=t.n(o),r=t("7ljp"),i=(t("YFqc"),t("tc9R")),p=t("vRWG"),l=t("I6Nb"),u=(s.a.createElement,{Layout:p.DocumentationLayout,meta:{title:"Browser Support",description:"Understanding which browsers Tailwind supports and how to manage vendor prefixes."},tableOfContents:[{title:"Vendor Prefixes",slug:"vendor-prefixes",children:[]}]}),m=l.ContentsLayout;function d(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(r.a)(m,Object(n.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"As of v2.0, Tailwind CSS is designed for and tested on the latest stable versions of Chrome, Firefox, Edge, and Safari. Tailwind CSS v2.0 does not support any version of IE, including IE 11."),Object(r.a)("p",null,"If you need to support IE 11, we recommend using Tailwind CSS v1.9, which is still an excellent and very productive framework."),Object(r.a)("p",null,"Certain features such as ",Object(r.a)("inlineCode",{parentName:"p"},"focus-visible")," are included but not supported natively by all modern browsers. We've included information about recommended polyfills for those features directly alongside the documentation for the features themselves."),Object(r.a)(i.a,{level:2,id:"vendor-prefixes",toc:!0},"Vendor Prefixes"),Object(r.a)("p",null,"If you're compiling your CSS using the ",Object(r.a)("inlineCode",{parentName:"p"},"tailwindcss")," CLI tool, vendor prefixes will be added automatically."),Object(r.a)("p",null,"If not, we recommend that you use ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/postcss/autoprefixer"}),"Autoprefixer"),"."),Object(r.a)("p",null,"To use it, install it via npm:"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"# Using npm"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"install")," autoprefixer\n\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"# Using Yarn"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"yarn")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"add")," autoprefixer"))),Object(r.a)("p",null,"Then add it to the very end of your plugin list in your PostCSS configuration:"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"module",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  plugins",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'tailwindcss'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'autoprefixer'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"))))))}d.isMDXComponent=!0,d.layoutProps=u},vRWG:function(e,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return d}));var n=t("wx14"),c=t("q1tI"),o=t.n(c),s=t("ekQu"),r=t("8Kt/"),i=t.n(r),p=t("nOHt"),l=t("ap0H"),u=t("1Q1k"),m=o.a.createElement;function d(e){var a=Object(p.useRouter)();return m(o.a.Fragment,null,m(l.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),m(i.a,null,m("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),m("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),m(s.b,Object(n.a)({nav:u.a},e)))}}},[["8ofy",0,2,1,3,4,5]]]);