(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{"5xSE":function(n,a,t){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,a,t){"use strict";t.d(a,"a",(function(){return r}));var s=t("q1tI"),e=t.n(s),p=t("98BF"),o=t("Zb5r"),c=t("AOjV"),l=e.a.createElement;function r(n){var{plugin:a,name:t}=n,s=p.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(n,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var e=["responsive","hover","focus","active","group-hover"].filter(n=>!s.includes(n)).slice(0,2),r="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(t," \u529f\u80fd\u7c7b\uff0c").concat(s.length?"\u53ea\u751f\u6210 ".concat(Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:r}}),l("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u4f60\u7684"," ",l("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",l("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",l("code",null,a)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",t," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),l("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",s.length>0?"also ":"","\u5c06\u751f\u6210"," ",Object(o.a)(e)," \u53d8\u4f53:"),l(c.a,{path:"variants.extend",before:"...",add:{[a]:e}}))}},AOjV:function(n,a,t){"use strict";t.d(a,"a",(function(){return i}));var s=t("q1tI"),e=t.n(s),p=(t("Btb4"),t("AI3G")),o=t("iuhU"),c=e.a.createElement;function l(n){var{value:a}=n;return"string"===typeof a?c("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?c(e.a.Fragment,null,c("span",{className:"token punctuation"},"["),a.map((n,t)=>c(s.Fragment,{key:t},c(l,{value:n}),t===a.length-1?null:c("span",{className:"token punctuation"},", "))),c("span",{className:"token punctuation"},"]")):"boolean"===typeof a?c("span",{className:"token boolean"},a.toString()):a.toString()}function r(n){var{edits:a,indent:t="",type:e="inserted"}=n;return c("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===e,"deleted-sign deleted":"inserted"!==e})},Object.keys(a).map((n,p)=>{return c(s.Fragment,{key:p},c("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===e,deleted:"inserted"!==e})},"inserted"===e?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(r=n)?r:"'".concat(r,"'"),c("span",{className:"token operator"},":")," ",c(l,{value:a[n]}),c("span",{className:"token punctuation"},","),"\n");var r}))}function i(n){var{path:a,add:t,remove:e,before:o,after:l}=n;return a="string"===typeof a?a.split("."):a,c("div",{className:"prose"},c("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  ",c("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",c("span",{className:"token punctuation"},"."),c("span",{className:"token property-access"},"exports")," ",c("span",{className:"token operator"},"=")," ",c("span",{className:"token punctuation"},"{"),"\n",a.map((n,a)=>c(s.Fragment,{key:a},"  ","  ".repeat(a+1),n,c("span",{className:"token operator"},":")," ",c("span",{className:"token punctuation"},"{"),"\n")),o&&Object(p.a)(o).map((n,t)=>c(s.Fragment,{key:t},"  ".repeat(a.length+2),c("span",{className:"token comment"},"// ".concat(n)),"\n"))),e&&c(r,{edits:e,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&c(r,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),c("span",{className:"token unchanged"},l&&Object(p.a)(l).map(n=>"".concat("  ".repeat(a.length+2)).concat(n,"\n")),a.map((n,t)=>c(s.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")),"  }")))))}},Btb4:function(n,a,t){"use strict";const s=t("5xSE"),e=t("p+I8"),p=t("GAX2").default;n.exports=(n,a,t)=>{const o=[];return function n(a,t,c){let l;(t=t||{}).indent=t.indent||"\t",c=c||"",l=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=n=>{if(void 0===t.inlineCharacterLimit)return n;const a=n.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:n.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),c).replace(new RegExp(l.indent,"g"),c+t.indent)};if(-1!==o.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||s(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";o.push(a);const s="["+l.newLine+a.map((s,e)=>{const p=a.length-1===e?l.newLine:","+l.newLineOrSpace;let o=n(s,t,c+t.indent);return t.transform&&(o=t.transform(a,e,o)),l.indent+o+p}).join("")+l.pad+"]";return o.pop(),r(s)}if(e(a)){let s=Object.keys(a).concat(p(a));if(t.filter&&(s=s.filter(n=>t.filter(a,n))),0===s.length)return"{}";o.push(a);const e="{"+l.newLine+s.map((e,p)=>{const o=s.length-1===p?l.newLine:","+l.newLineOrSpace,r="symbol"===typeof e,i=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(e),u=r||i?e:n(e,t);let d=n(a[e],t,c+t.indent);return t.transform&&(d=t.transform(a,e,d)),l.indent+String(u)+": "+d+o}).join("")+l.pad+"}";return o.pop(),r(e)}return a=String(a).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(n,a,t)}},GAX2:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n=>Object.getOwnPropertySymbols(n).filter(a=>Object.prototype.propertyIsEnumerable.call(n,a))},Vhtw:function(n,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var s=t("wx14"),e=t("Ff2n"),p=t("q1tI"),o=t.n(p),c=t("7ljp"),l=(t("YFqc"),t("tc9R")),r=t("pOT7"),i=t("vRWG"),u=t("I6Nb"),d=t("sEq3"),k=t.n(d),g=t("8C7G"),b=t("wH44"),m=(o.a.createElement,{Layout:i.DocumentationLayout,classes:{plugin:k()},meta:{title:"Border Collapse",description:"Utilities for controlling whether table borders should collapse or be separated."},tableOfContents:[{title:"Separate",slug:"separate",children:[]},{title:"Collapse",slug:"collapse",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=u.ContentsLayout;function h(n){var{components:a}=n,t=Object(e.a)(n,["components"]);return Object(c.a)(f,Object(s.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"separate",toc:!0},"Separate"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},"border-separate")," to force each cell to display its own separate borders.")),Object(c.a)(r.a,{preview:'\n  <table class="border-separate w-full border-2 border-emerald-800">\n    <thead class="bg-emerald-200">\n      <tr>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">State</th>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">City</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indiana</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indianapolis</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Ohio</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Columbus</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Michigan</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Detroit</td>\n      </tr>\n    </tbody>\n  </table>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-separate</span> border border-green-800 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>State<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>City<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indiana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indianapolis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Ohio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Columbus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Michigan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Detroit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"collapse",toc:!0},"Collapse"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},"border-collapse")," to combine adjacent cell borders into a single border when possible. Note that this includes collapsing borders on the top-level ",Object(c.a)("inlineCode",{parentName:"p"},"<table>")," tag.")),Object(c.a)(r.a,{preview:'\n  <table class="border-collapse w-full border-2 border-emerald-800">\n    <thead class="bg-emerald-200">\n      <tr>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">State</th>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">City</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indiana</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indianapolis</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Ohio</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Columbus</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Michigan</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Detroit</td>\n      </tr>\n    </tbody>\n  </table>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-collapse</span> border border-green-800 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>State<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>City<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indiana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indianapolis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Ohio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Columbus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Michigan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Detroit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(c.a)(g.a,{plugin:"borderCollapse",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(c.a)(b.a,{plugin:"borderCollapse",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=m},Zb5r:function(n,a,t){"use strict";function s(n){return n.reduce((a,t,s)=>0===s?t:s===n.length-1?"".concat(a," and ").concat(t):"".concat(a,", ").concat(t),"")}t.d(a,"a",(function(){return s}))},ap0H:function(n,a,t){"use strict";t.d(a,"a",(function(){return l}));var s=t("q1tI"),e=t.n(s),p=t("8Kt/"),o=t.n(p),c=e.a.createElement;function l(n){var{suffix:a,children:t}=n,s=t+(a?" - ".concat(a):"");return c(o.a,null,c("title",{key:"title"},s),c("meta",{key:"twitter:title",name:"twitter:title",content:s}),c("meta",{key:"og:title",property:"og:title",content:s}))}},dam5:function(n,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-collapse",function(){return t("Vhtw")}])},"p+I8":function(n,a,t){"use strict";n.exports=function(n){var a=typeof n;return null!==n&&("object"===a||"function"===a)}},pOT7:function(n,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var s=t("wx14"),e=t("q1tI"),p=t.n(e),o=t("iuhU"),c=t("ZMKu"),l=p.a.createElement,r={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function k(n){var a=Object(e.useRef)(),{0:t,1:p}=Object(e.useState)(!1),{0:o,1:c}=Object(e.useState)({});return Object(e.useEffect)(()=>{if(t){var n=new window.ResizeObserver(s);return s(),n.observe(a.current.contentDocument.body),()=>{n.disconnect()}}function s(){c({height:a.current.contentDocument.body.scrollHeight})}},[t]),l("iframe",Object(s.a)({},n,{ref:a,onLoad:()=>p(!0),style:o}))}function g(n){var{color:a,snippet:t}=n;return l("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",r[a],{"bg-gray-800":!r[a]})},l("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":r[a]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function b(n){var{preview:a,src:t,snippet:s,previewClassName:e,color:p="gray"}=n;return l("div",{className:"relative overflow-hidden mb-8"},a?l("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",i[p],e,{"p-10":!e}),dangerouslySetInnerHTML:{__html:a}}):l(k,{src:t,className:Object(o.a)("w-full rounded-t-xl",i[p])}),l(g,{color:p,snippet:s}))}function m(n){var{preview:a,src:t,previewClassName:s,snippet:p,color:r="gray",min:b=!1}=n,m=Object(e.useRef)(),f=Object(c.h)(0),h=Object(e.useRef)(),{0:v,1:y}=Object(e.useState)(!1);return Object(e.useEffect)(()=>{var n=new window.ResizeObserver(()=>{f.set(0)});return n.observe(m.current),()=>{n.disconnect()}},[]),l("div",{className:"relative mb-8"},l("div",{ref:m,className:"relative rounded-t-xl ".concat(u[r])},l("div",{className:b?"md:w-88":void 0},l(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(f,n=>-n)}},a?l("div",{className:Object(o.a)("rounded-t-xl",s,i[r],{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):l(k,{src:t,className:Object(o.a)("w-full rounded-t-xl",i[r],{"pointer-events-none":v})}))),l("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(c.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(b?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),y(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),y(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[r]),style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(g,{color:r,snippet:p}))}},sEq3:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:n,variants:a}){n({".border-collapse":{"border-collapse":"collapse"},".border-separate":{"border-collapse":"separate"}},a("borderCollapse"))}}},vRWG:function(n,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return k}));var s=t("wx14"),e=t("q1tI"),p=t.n(e),o=t("ekQu"),c=t("8Kt/"),l=t.n(c),r=t("nOHt"),i=t("ap0H"),u=t("1Q1k"),d=p.a.createElement;function k(n){var a=Object(r.useRouter)();return d(p.a.Fragment,null,d(i.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},n.layoutProps.meta.metaTitle||n.layoutProps.meta.title),d(l.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(s.a)({nav:u.a},n)))}},wH44:function(n,a,t){"use strict";t.d(a,"a",(function(){return d}));var s=t("rePB"),e=t("q1tI"),p=t.n(e),o=t("AOjV"),c=t("AI3G"),l=t("Zb5r"),r=p.a.createElement;function i(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,s)}return t}function u(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){Object(s.a)(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}function d(n){var{plugin:a,name:t}=n,s=Object(c.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(n,a,t)=>"".concat(a," ").concat(t.toLowerCase())),r("div",{className:"prose"},r("p",null,"\u5982\u679c\u4f60\u4e0d\u6253\u7b97\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",t," \u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",r("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",r("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(s.map(n=>"<code>".concat(n,"</code>")))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",r("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),r(o.a,{path:"corePlugins",before:"...",add:s.reduce((n,a)=>u(u({},n),{},{[a]:!1}),{})}))}}},[["dam5",0,2,6,1,3,4,5,7]]]);