(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[156],{"8C7G":function(e,a,n){"use strict";n.d(a,"a",(function(){return p}));var t=n("q1tI"),s=n.n(t),c=n("98BF"),o=n("Zb5r"),i=n("AOjV"),r=s.a.createElement;function p(e){var{plugin:a,name:n}=e,t=c.defaultConfig.variants[a]||["responsive"];n=n||a.replace(/([a-z])([A-Z])/g,(e,a,n)=>"".concat(a," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!t.includes(e)).slice(0,2),p="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(n," \u529f\u80fd\u7c7b\uff0c").concat(t.length?"\u53ea\u751f\u6210 ".concat(Object(o.a)(t).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:p}}),r("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u60a8\u7684"," ",r("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",r("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",r("code",null,a)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",n," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),r("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",t.length>0?"\u4e5f":"","\u5c06\u751f\u6210"," ",Object(o.a)(s)," \u53d8\u4f53:"),r(i.a,{path:"variants.extend",before:"...",add:{[a]:s}}))}},QksO:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return(0,s.default)("transitionTimingFunction",[["ease",["transitionTimingFunction"]]],{filterDefault:!0})};var t,s=(t=n("y2+P"))&&t.__esModule?t:{default:t}},pOT7:function(e,a,n){"use strict";n.d(a,"a",(function(){return g})),n.d(a,"b",(function(){return j}));var t=n("wx14"),s=n("q1tI"),c=n.n(s),o=n("iuhU"),i=n("ZMKu"),r=c.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},b={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var a=Object(s.useRef)(),{0:n,1:c}=Object(s.useState)(!1),{0:o,1:i}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(n){var e=new window.ResizeObserver(t);return t(),e.observe(a.current.contentDocument.body),()=>{e.disconnect()}}function t(){i({height:a.current.contentDocument.body.scrollHeight})}},[n]),r("iframe",Object(t.a)({},e,{ref:a,onLoad:()=>c(!0),style:o}))}function d(e){var{color:a,snippet:n}=e;return r("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",p[a],{"bg-gray-800":!p[a]})},r("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[a]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function g(e){var{preview:a,src:n,snippet:t,previewClassName:s,color:c="gray"}=e;return r("div",{className:"relative overflow-hidden mb-8"},a?r("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):r(m,{src:n,className:Object(o.a)("w-full rounded-t-xl",l[c])}),r(d,{color:c,snippet:t}))}function j(e){var{preview:a,src:n,previewClassName:t,snippet:c,color:p="gray",min:g=!1}=e,j=Object(s.useRef)(),O=Object(i.h)(0),N=Object(s.useRef)(),{0:f,1:h}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{O.set(0)});return e.observe(j.current),()=>{e.disconnect()}},[]),r("div",{className:"relative mb-8"},r("div",{ref:j,className:"relative rounded-t-xl ".concat(u[p])},r("div",{className:g?"md:w-88":void 0},r(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(O,e=>-e)}},a?r("div",{className:Object(o.a)("rounded-t-xl",t,l[p],{"p-10":!t}),dangerouslySetInnerHTML:{__html:a}}):r(m,{src:n,className:Object(o.a)("w-full rounded-t-xl",l[p],{"pointer-events-none":f})}))),r("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(i.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(g?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),h(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),h(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(b[p]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(d,{color:p,snippet:c}))}},uKbb:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return h}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),o=n.n(c),i=n("7ljp"),r=n("YFqc"),p=n.n(r),l=n("tc9R"),u=n("pOT7"),b=n("vRWG"),m=n("I6Nb"),d=n("QksO"),g=n.n(d),j=n("8C7G"),O=n("wH44"),N=(o.a.createElement,{Layout:b.DocumentationLayout,classes:{plugin:g()},meta:{title:"\u8fc7\u6e21\u8ba1\u65f6\u51fd\u6570",description:"\u7528\u4e8e\u63a7\u5236 CSS \u8fc7\u6e21\u7f13\u548c\u7684\u529f\u80fd\u7c7b\u3002"},tableOfContents:[{title:"\u4f7f\u7528",slug:"",children:[]},{title:"\u54cd\u5e94\u5f0f",slug:"-1",children:[]},{title:"\u81ea\u5b9a\u4e49",slug:"-2",children:[{title:"Timing values",slug:"timing-values"},{title:"\u53d8\u4f53",slug:"-3"},{title:"\u7981\u7528",slug:"-4"}]}]}),f=m.ContentsLayout;function h(e){var{components:a}=e,n=Object(s.a)(e,["components"]);return Object(i.a)(f,Object(t.a)({},N,n,{components:a,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"",toc:!0},"\u4f7f\u7528"),Object(i.a)("p",null,"\u4f7f\u7528 ",Object(i.a)("inlineCode",{parentName:"p"},"ease-{timing}")," \u529f\u80fd\u6765\u63a7\u5236\u5143\u7d20\u7684\u7f13\u548c\u66f2\u7ebf\u3002")),Object(i.a)(u.a,{preview:'\n  <div class="flex justify-around items-center">\n    <button class="transition duration-700 ease-in transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">\n      Hover me\n    </button>\n    <button class="transition duration-700 ease-out transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">\n      Hover me\n    </button>\n    <button class="transition duration-700 ease-in-out transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">\n      Hover me\n    </button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">ease-in</span> duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">ease-out</span> duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">ease-in-out</span> duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"-1",toc:!0},"\u54cd\u5e94\u5f0f"),Object(i.a)("p",null,"\u8981\u5728\u7279\u5b9a\u7684\u65ad\u70b9\u5904\u63a7\u5236\u5143\u7d20\u7684\u8fc7\u6e21\u65f6\u95f4\u51fd\u6570\uff0c\u8bf7\u5728\u4efb\u4f55\u73b0\u6709\u7684\u8fc7\u6e21\u65f6\u95f4\u51fd\u6570\u529f\u80fd\u4e2d\u6dfb\u52a0 ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," \u524d\u7f00\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",Object(i.a)("inlineCode",{parentName:"p"},"md:ease-in-out")," \u6765\u5e94\u7528 ",Object(i.a)("inlineCode",{parentName:"p"},"ease-in-out")," \u529f\u80fd\uff0c\u53ea\u9002\u7528\u4e8e\u4e2d\u7b49\u5927\u5c0f\u7684\u5c4f\u5e55\u53ca\u4ee5\u4e0a\u3002"),Object(i.a)("p",null,"\u5173\u4e8e Tailwind \u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b",Object(i.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"\u54cd\u5e94\u5f0f\u8bbe\u8ba1")),"\u6587\u6863\u3002"),Object(i.a)(l.a,{level:2,id:"-2",toc:!0},"\u81ea\u5b9a\u4e49"),Object(i.a)(l.a,{level:3,id:"timing-values",toc:!0},"Timing values"),Object(i.a)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cTailwind \u63d0\u4f9b\u4e86\u56db\u4e2a\u901a\u7528\u7684\u8fc7\u6e21\u8ba1\u65f6\u529f\u80fd\u529f\u80fd\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b9a\u5236\u60a8\u7684 Tailwind \u4e3b\u9898\u914d\u7f6e\u4e2d\u7684 ",Object(i.a)("inlineCode",{parentName:"p"},"transitionTimingFunction")," \u90e8\u5206\u6765\u6539\u53d8\uff0c\u6dfb\u52a0\u6216\u5220\u9664\u8fd9\u4e9b\u529f\u80fd\u3002"),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transitionTimingFunction",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'in-expo'"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'cubic-bezier(0.95, 0.05, 0.795, 0.035)'"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'out-expo'"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'cubic-bezier(0.19, 1, 0.22, 1)'"),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(i.a)("p",null,"\u5728",Object(i.a)(p.a,{href:"/docs/theme#-5",passHref:!0},Object(i.a)("a",null,"\u4e3b\u9898\u5b9a\u5236\u6587\u6863")),"\u4e2d\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5b9a\u5236\u9ed8\u8ba4\u4e3b\u9898\u7684\u4fe1\u606f\u3002"),Object(i.a)(l.a,{level:3,id:"-3",toc:!0},"\u53d8\u4f53")),Object(i.a)(j.a,{plugin:"transitionTimingFunction",name:"transition-timing-function",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:3,id:"-4",toc:!0},"\u7981\u7528")),Object(i.a)(O.a,{plugin:"transitionTimingFunction",name:"transition-timing-function",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=N},yHg6:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-timing-function",function(){return n("uKbb")}])}},[["yHg6",0,2,6,1,3,4,5,7,8,9]]]);