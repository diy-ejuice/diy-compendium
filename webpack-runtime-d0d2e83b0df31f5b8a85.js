!function(){"use strict";var e,n,t,r,o,c={},i={};function u(e){var n=i[e];if(void 0!==n)return n.exports;var t=i[e]={exports:{}};return c[e](t,t.exports,u),t.exports}u.m=c,e=[],u.O=function(n,t,r,o){if(!t){var c=1/0;for(s=0;s<e.length;s++){t=e[s][0],r=e[s][1],o=e[s][2];for(var i=!0,a=0;a<t.length;a++)(!1&o||c>=o)&&Object.keys(u.O).every((function(e){return u.O[e](t[a])}))?t.splice(a--,1):(i=!1,o<c&&(c=o));if(i){e.splice(s--,1);var f=r();void 0!==f&&(n=f)}}return n}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[t,r,o]},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,{a:n}),n},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var c={};n=n||[null,t({}),t([]),t(t)];for(var i=2&r&&e;"object"==typeof i&&!~n.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(n){c[n]=function(){return e[n]}}));return c.default=function(){return e},u.d(o,c),o},u.d=function(e,n){for(var t in n)u.o(n,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(n,t){return u.f[t](e,n),n}),[]))},u.u=function(e){return({100:"component---src-components-markdown-page-js",102:"component---src-pages-safety-nicotine-js",112:"a9a7754c",201:"b02934e9d7eb88a2ff6d6426bd4bf62ffebb3602",303:"component---src-pages-reviews-js",306:"component---cache-caches-gatsby-plugin-offline-app-shell-js",427:"component---src-components-review-js",523:"cb1608f2",678:"component---src-pages-index-js",841:"component---src-pages-noted-js",883:"component---src-pages-404-js"}[e]||e)+"-"+{100:"c70287bada9e8284de9c",102:"4e31e24f30a147598bb8",112:"b580d5257ba883b6f764",175:"6378051895163ae89bca",201:"eb5256fc4c871cd811ce",231:"2f3dabf6b74cf0eaa6a0",303:"8c8f7e76c9bf72894025",306:"251af707190ade9ba1a2",427:"be38e61743db08858161",503:"adf313d46875b0956f82",523:"f6ce17ed749f78b4f923",678:"bf43ff0f84ab3e3c0174",841:"a0d52aa51e9095a0675a",883:"c3f14fcafebc530301fc"}[e]+".js"},u.miniCssF=function(e){return"styles.27e6831f2203d49b3d82.css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r={},o="diy-compendium:",u.l=function(e,n,t,c){if(r[e])r[e].push(n);else{var i,a;if(void 0!==t)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var d=f[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+t){i=d;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",o+t),i.src=e),r[e]=[n];var l=function(n,t){i.onerror=i.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),a&&document.head.appendChild(i)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/",function(){var e={658:0,532:0};u.f.j=function(n,t){var r=u.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(532|658)$/.test(n))e[n]=0;else{var o=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=o);var c=u.p+u.u(n),i=new Error;u.l(c,(function(t){if(u.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;i.message="Loading chunk "+n+" failed.\n("+o+": "+c+")",i.name="ChunkLoadError",i.type=o,i.request=c,r[1](i)}}),"chunk-"+n,n)}},u.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,o,c=t[0],i=t[1],a=t[2],f=0;if(c.some((function(n){return 0!==e[n]}))){for(r in i)u.o(i,r)&&(u.m[r]=i[r]);if(a)var s=a(u)}for(n&&n(t);f<c.length;f++)o=c[f],u.o(e,o)&&e[o]&&e[o][0](),e[c[f]]=0;return u.O(s)},t=self.webpackChunkdiy_compendium=self.webpackChunkdiy_compendium||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}()}();
//# sourceMappingURL=webpack-runtime-d0d2e83b0df31f5b8a85.js.map