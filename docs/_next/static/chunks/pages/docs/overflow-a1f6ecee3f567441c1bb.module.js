(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[115],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),s=a.n(n),l=a("98BF"),i=a("Zb5r"),o=a("AOjV"),r=s.a.createElement;function c(e){var{plugin:t,name:a}=e,n=l.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),c="\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c \u9488\u5bf9 ".concat(a," \u529f\u80fd\u7c7b\uff0c").concat(n.length?"\u53ea\u751f\u6210 ".concat(Object(i.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"\u4e0d\u751f\u6210\u4efb\u4f55"," \u53d8\u4f53\u3002");return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:c}}),r("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u4f60\u7684"," ",r("code",null,"tailwind.config.js")," \u6587\u4ef6\u4e2d\u7684 ",r("code",null,"variants")," \u90e8\u5206\u4e2d\u7684"," ",r("code",null,t)," \u5c5e\u6027\u6765\u63a7\u5236\u4e3a ",a," \u529f\u80fd\u751f\u6210\u54ea\u4e9b\u53d8\u4f53\u3002"),r("p",null,"\u4f8b\u5982\uff0c\u8fd9\u4e2a\u914d\u7f6e",n.length>0?"also ":"","\u5c06\u751f\u6210"," ",Object(i.a)(s)," \u53d8\u4f53:"),r(o.a,{path:"variants.extend",before:"...",add:{[t]:s}}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),s=a.n(n),l=(a("Btb4"),a("AI3G")),i=a("iuhU"),o=s.a.createElement;function r(e){var{value:t}=e;return"string"===typeof t?o("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),t.map((e,a)=>o(n.Fragment,{key:a},o(r,{value:e}),a===t.length-1?null:o("span",{className:"token punctuation"},", "))),o("span",{className:"token punctuation"},"]")):"boolean"===typeof t?o("span",{className:"token boolean"},t.toString()):t.toString()}function c(e){var{edits:t,indent:a="",type:s="inserted"}=e;return o("span",{className:Object(i.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((e,l)=>{return o(n.Fragment,{key:l},o("span",{className:Object(i.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(c=e)?c:"'".concat(c,"'"),o("span",{className:"token operator"},":")," ",o(r,{value:t[e]}),o("span",{className:"token punctuation"},","),"\n");var c}))}function u(e){var{path:t,add:a,remove:s,before:i,after:r}=e;return t="string"===typeof t?t.split("."):t,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",t.map((e,t)=>o(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")),i&&Object(l.a)(i).map((e,a)=>o(n.Fragment,{key:a},"  ".repeat(t.length+2),o("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&o(c,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&o(c,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),o("span",{className:"token unchanged"},r&&Object(l.a)(r).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,a)=>o(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),s=a("p+I8"),l=a("GAX2").default;e.exports=(e,t,a)=>{const i=[];return function e(t,a,o){let r;(a=a||{}).indent=a.indent||"\t",o=o||"",r=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const c=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),o).replace(new RegExp(r.indent,"g"),o+a.indent)};if(-1!==i.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";i.push(t);const n="["+r.newLine+t.map((n,s)=>{const l=t.length-1===s?r.newLine:","+r.newLineOrSpace;let i=e(n,a,o+a.indent);return a.transform&&(i=a.transform(t,s,i)),r.indent+i+l}).join("")+r.pad+"]";return i.pop(),c(n)}if(s(t)){let n=Object.keys(t).concat(l(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";i.push(t);const s="{"+r.newLine+n.map((s,l)=>{const i=n.length-1===l?r.newLine:","+r.newLineOrSpace,c="symbol"===typeof s,u=!c&&/^[a-z$_][a-z$_0-9]*$/i.test(s),p=c||u?s:e(s,a);let d=e(t[s],a,o+a.indent);return a.transform&&(d=a.transform(t,s,d)),r.indent+String(p)+": "+d+i}).join("")+r.pad+"}";return i.pop(),c(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((t,a,n)=>0===n?a:n===e.length-1?"".concat(t," and ").concat(a):"".concat(t,", ").concat(a),"")}a.d(t,"a",(function(){return n}))},a6DA:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a("wx14"),s=a("Ff2n"),l=a("q1tI"),i=a.n(l),o=a("7ljp"),r=a("YFqc"),c=a.n(r),u=a("tc9R"),p=a("pOT7"),d=a("vRWG"),m=a("I6Nb"),g=a("vCUu"),b=a.n(g),v=a("8C7G"),f=a("wH44"),h=(i.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:b()},meta:{title:"Overflow",description:"Utilities for controlling how an element handles content that is too large for the container.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Visible",slug:"visible",children:[]},{title:"Auto",slug:"auto",children:[]},{title:"Hidden",slug:"hidden",children:[]},{title:"Scroll horizontally if needed",slug:"scroll-horizontally-if-needed",children:[]},{title:"Scroll vertically if needed",slug:"scroll-vertically-if-needed",children:[]},{title:"Scroll horizontally always",slug:"scroll-horizontally-always",children:[]},{title:"Scroll vertically always",slug:"scroll-vertically-always",children:[]},{title:"Scroll in all directions",slug:"scroll-in-all-directions",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),w=m.ContentsLayout;function O(e){var{components:t}=e,a=Object(s.a)(e,["components"]);return Object(o.a)(w,Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"visible",toc:!0},"Visible"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-visible")," to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.")),Object(o.a)(p.a,{preview:'\n  <div class="h-32 overflow-hidden">\n    <div class="overflow-visible h-24 px-6 py-2 rounded-md bg-light-blue-200">\n      <p class="md:w-2/3 lg:w-1/2 font-flow leading-5 text-light-blue-700">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget\n      </p>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-visible</span> h-24 h- ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"auto",toc:!0},"Auto"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-auto")," to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike ",Object(o.a)("inlineCode",{parentName:"p"},".overflow-scroll"),", which always shows scrollbars, this utility will only show them if scrolling is necessary.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-auto h-32 rounded-md bg-rose-200">\n    <p class="font-flow leading-5 text-rose-700 px-6 py-4">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.\n    </p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-auto</span> h-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"hidden",toc:!0},"Hidden"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-hidden")," to clip any content within an element that overflows the bounds of that element.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-hidden h-32 rounded-md bg-purple-200">\n    <p class="font-flow leading-5 text-purple-700 px-6 py-4">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.\n    </p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-hidden</span> h-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"scroll-horizontally-if-needed",toc:!0},"Scroll horizontally if needed"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-x-auto")," to allow horizontal scrolling if needed.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-x-auto rounded-md bg-fuchsia-200">\n    <p class="inline-block text-fuchsia-500 font-medium px-6 py-4">\n      QrLmmW69vMQDtCOg48jidqvvWD2FzDt7I7bBoDc98SRP5OwvOScVYbRzFdfp540eF5v1pjogYkyI8NXqu4wY8chgsXIV0LU7XQKWJ98wLaBSHWiBhvkEU1T3sd6KEFo53CLjVjIz8UvZajb8sbsu62xTsF9cRtFdwEvusq6zJHvedymDCUkY6qXHsuL6fOmHo4KKMurZuJZrK3plRPUaI8XVciz8dVq5CEUXjMrTcB76H1w90CnkRER3nYjs3suTa3223xs8aL97m0peQfjlvKbF8HcmQG5mHEitCn1QZnbMZUK3zE9AIjwcVXP7R9V4fw2A93cZD7wj333X6aaiHZdkkTPtst0u05KSob5c0ZuKQi4D3V395NfFKKr8cR27jmpB7dqK2GiWXeOQUFcjmFVwlHWSlH8ZdUoVJpXf1xL6CRUxwZP4EhBbqQZaJm26ijWII6LRxJ5eVU9Y7KKvQsUeX5BawtgeMWRmjeCwQadTLTQG8gLpi2DvGpMtPWCdqHgEglVSB1ZlDrjEEsXYrNx1IOY0053K3pWNaR1ezyz8kahRfNs3byaHcIQu9tWTrcMpBWhZ45DzLjVV1N8Zt96uLnNWK5DvbKW8GgMuwY7fHkZFz85MN4d2gL0j85HmXGx9oPTFRkPWsmMOHUvm5IhB7QqGSAwT1uL7HgBrNX9a1BAWrp9zV1IWAd1q65sKOOCxTZrXJDpxBxYE4rJAGU6pcri9mUf4g49ZiIAwfu9njtZyYimmImCa6TFhk2jQcSmFDHacExxqC2BfYATHFrKSy94dbw6uWT52nM7MSM9JDu4cs9cbfnaf6amt4hTUotCTONg604b8JKPI1sfd4CG36fBNcnErhpllfRlXkY1xFwmwZT7IJV8okPGNQdTKpdPJOBGw3LHMKojPJl1nPiQB5C9bdePFMNLejSXY5DDvO70ehOCJpBtKZY2quoFJJjGfXe8T4DuGYGmM6JYd5DNinWZuUWXGvfIlJRHgf8BQNQvtmEzqGXIeQZitiq9F\n    </p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-x-auto</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>QrLmmW69vMQD...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"scroll-vertically-if-needed",toc:!0},"Scroll vertically if needed"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-y-auto")," to allow vertical scrolling if needed.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-y-auto h-32 rounded-md bg-amber-200">\n    <p class="font-flow leading-5 text-amber-700 px-6 py-4">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.\n    </p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-y-auto</span> h-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"scroll-horizontally-always",toc:!0},"Scroll horizontally always"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-x-scroll")," to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-x-scroll rounded-md bg-emerald-200">\n    <p class="font-flow text-emerald-500 px-6 py-4">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    </p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-x-scroll</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>QrLmmW69vMQD...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"scroll-vertically-always",toc:!0},"Scroll vertically always"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-y-scroll")," to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-y-scroll h-32 rounded-md bg-light-blue-200">\n    <p class="font-flow leading-5 text-light-blue-700 px-6 py-4">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    </p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-y-scroll</span> h-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"scroll-in-all-directions",toc:!0},"Scroll in all directions"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-scroll")," to add scrollbars to an element. Unlike ",Object(o.a)("inlineCode",{parentName:"p"},".overflow-auto"),", which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.")),Object(o.a)(p.a,{preview:'\n  <div class="overflow-scroll h-32 rounded-md bg-fuchsia-200">\n    <p class="inline-block font-flow leading-5 text-fuchsia-700 px-6 py-4">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. QrLmmW69vMQDtCOg48jidqvvWD2FzDt7I7bBoDc98SRP5OwvOScVYbRzFdfp540eF5v1pjogYkyI8NXqu4wY8chgsXIV0LU7XQKWJ98wLaBSHWiBhvkEU1T3sd6KEFo53CLjVjIz8UvZajb8sbsu62xTsF9cRtFdwEvusq6zJHvedymDCUkY6. Mauris eleifend rutrum auctor. Phasellus convallis sagittis augue ut ornare. Vestibulum et gravida lectus, sed ultrices sapien. Nullam aliquet elit dui, vitae hendrerit lectus volutpat eget. In porttitor tincidunt egestas. Pellentesque laoreet ligula at est vulputate facilisis. Etiam tristique justo ut odio placerat ornare. Cras bibendum, orci at ornare tincidunt, lacus nunc gravida enim, sit amet euismod nunc lectus in lectus. Ut dictum nulla et arcu aliquet ornare. Aliquam et dapibus lectus. Aenean mattis elit mi, sed ultricies augue consectetur id. Sed id magna malesuada, luctus urna a, bibendum tortor. Cras cursus cursus ex. Nulla fringilla elit vitae imperdiet scelerisque. Donec ac sem eu diam convallis mollis a sed leo. Proin congue augue turpis, eget rutrum dolor ultricies non. Nulla blandit venenatis dapibus. Sed tincidunt mollis elit, quis suscipit nibh eleifend quis. Donec ex lorem, auctor eu rutrum in, blandit id dolor. Nulla molestie arcu turpis. In id felis vulputate, tempor massa eget, malesuada mauris. Quisque fringilla consequat metus, luctus scelerisque leo fringilla vel.\n    </p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">overflow-scroll</span> h-32 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum dolor sit amet...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To apply an overflow utility only at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to the existing class name. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:overflow-scroll")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"overflow-scroll")," utility at medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"overflow-auto ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:overflow-scroll")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  Lorem ipsum dolor sit amet...\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(c.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(u.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(u.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(v.a,{plugin:"overflow",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(f.a,{plugin:"overflow",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=h},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),s=a.n(n),l=a("8Kt/"),i=a.n(l),o=s.a.createElement;function r(e){var{suffix:t,children:a}=e,n=a+(t?" - ".concat(t):"");return o(i.a,null,o("title",{key:"title"},n),o("meta",{key:"twitter:title",name:"twitter:title",content:n}),o("meta",{key:"og:title",property:"og:title",content:n}))}},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return v}));var n=a("wx14"),s=a("q1tI"),l=a.n(s),i=a("iuhU"),o=a("ZMKu"),r=l.a.createElement,c={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},u={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},p={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var t=Object(s.useRef)(),{0:a,1:l}=Object(s.useState)(!1),{0:i,1:o}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(a){var e=new window.ResizeObserver(n);return n(),e.observe(t.current.contentDocument.body),()=>{e.disconnect()}}function n(){o({height:t.current.contentDocument.body.scrollHeight})}},[a]),r("iframe",Object(n.a)({},e,{ref:t,onLoad:()=>l(!0),style:i}))}function g(e){var{color:t,snippet:a}=e;return r("div",{className:Object(i.a)("overflow-hidden rounded-b-xl",c[t],{"bg-gray-800":!c[t]})},r("pre",{className:Object(i.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":c[t]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function b(e){var{preview:t,src:a,snippet:n,previewClassName:s,color:l="gray"}=e;return r("div",{className:"relative overflow-hidden mb-8"},t?r("div",{className:Object(i.a)("rounded-t-xl overflow-hidden",u[l],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):r(m,{src:a,className:Object(i.a)("w-full rounded-t-xl",u[l])}),r(g,{color:l,snippet:n}))}function v(e){var{preview:t,src:a,previewClassName:n,snippet:l,color:c="gray",min:b=!1}=e,v=Object(s.useRef)(),f=Object(o.h)(0),h=Object(s.useRef)(),{0:w,1:O}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{f.set(0)});return e.observe(v.current),()=>{e.disconnect()}},[]),r("div",{className:"relative mb-8"},r("div",{ref:v,className:"relative rounded-t-xl ".concat(p[c])},r("div",{className:b?"md:w-88":void 0},r(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(f,e=>-e)}},t?r("div",{className:Object(i.a)("rounded-t-xl",n,u[c],{"p-10":!n}),dangerouslySetInnerHTML:{__html:t}}):r(m,{src:a,className:Object(i.a)("w-full rounded-t-xl",u[c],{"pointer-events-none":w})}))),r("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(o.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(b?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),O(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),O(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[c]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(g,{color:c,snippet:l}))}},vCUu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".overflow-auto":{overflow:"auto"},".overflow-hidden":{overflow:"hidden"},".overflow-visible":{overflow:"visible"},".overflow-scroll":{overflow:"scroll"},".overflow-x-auto":{"overflow-x":"auto"},".overflow-y-auto":{"overflow-y":"auto"},".overflow-x-hidden":{"overflow-x":"hidden"},".overflow-y-hidden":{"overflow-y":"hidden"},".overflow-x-visible":{"overflow-x":"visible"},".overflow-y-visible":{"overflow-y":"visible"},".overflow-x-scroll":{"overflow-x":"scroll"},".overflow-y-scroll":{"overflow-y":"scroll"}},t("overflow"))}}},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return m}));var n=a("wx14"),s=a("q1tI"),l=a.n(s),i=a("ekQu"),o=a("8Kt/"),r=a.n(o),c=a("nOHt"),u=a("ap0H"),p=a("1Q1k"),d=l.a.createElement;function m(e){var t=Object(c.useRouter)();return d(l.a.Fragment,null,d(u.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(r.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(i.b,Object(n.a)({nav:p.a},e)))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("rePB"),s=a("q1tI"),l=a.n(s),i=a("AOjV"),o=a("AI3G"),r=a("Zb5r"),c=l.a.createElement;function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e){var{plugin:t,name:a}=e,n=Object(o.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase())),c("div",{className:"prose"},c("p",null,"\u5982\u679c\u4f60\u4e0d\u6253\u7b97\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u4f7f\u7528 ",a," \u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u914d\u7f6e\u6587\u4ef6\u7684"," ",c("code",null,"corePlugins")," \u90e8\u5206\u5c06"," ",c("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(n.map(e=>"<code>".concat(e,"</code>")))}})," "," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",c("code",null,"false")," \u6765\u5b8c\u5168\u7981\u7528\u5b83\u4eec\uff1a"),c(i.a,{path:"corePlugins",before:"...",add:n.reduce((e,t)=>p(p({},e),{},{[t]:!1}),{})}))}},z34y:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/overflow",function(){return a("a6DA")}])}},[["z34y",0,2,6,1,3,4,5,7]]]);