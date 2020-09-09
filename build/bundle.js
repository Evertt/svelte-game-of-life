var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function a(e){e.forEach(n)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t,n,r){if(e){const a=l(e,t,n,r);return e[0](a)}}function l(e,n,r,a){return e[1]&&a?t(r.ctx.slice(),e[1](a(n))):r.ctx}function c(e,t,n,r,a,o,s){const i=function(e,t,n,r){if(e[2]&&r){const a=e[2](r(n));if(void 0===t.dirty)return a;if("object"==typeof a){const e=[],n=Math.max(t.dirty.length,a.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|a[r];return e}return t.dirty|a}return t.dirty}(t,r,a,o);if(i){const a=l(t,n,r,s);e.p(a,i)}}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function h(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function b(e){return document.createTextNode(e)}function $(){return b(" ")}function v(){return b("")}function y(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function k(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function S(e,t,n){e.classList[n?"add":"remove"](t)}let P;function j(e){P=e}const I=[],z=[],F=[],_=[],M=Promise.resolve();let A=!1;function C(e){F.push(e)}let E=!1;const O=new Set;function q(){if(!E){E=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];j(t),B(t.$$)}for(I.length=0;z.length;)z.pop()();for(let e=0;e<F.length;e+=1){const t=F[e];O.has(t)||(O.add(t),t())}F.length=0}while(I.length);for(;_.length;)_.pop()();A=!1,E=!1,O.clear()}}function B(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const T=new Set;let R;function V(e,t){e&&e.i&&(T.delete(e),e.i(t))}function D(e,t,n,r){if(e&&e.o){if(T.has(e))return;T.add(e),R.c.push(()=>{T.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function H(e,t){const n={},r={},a={$$scope:1};let o=e.length;for(;o--;){const s=e[o],i=t[o];if(i){for(const e in s)e in i||(r[e]=1);for(const e in i)a[e]||(n[e]=i[e],a[e]=1);e[o]=i}else for(const e in s)a[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function L(e){return"object"==typeof e&&null!==e?e:{}}function N(e){e&&e.c()}function G(e,t,r){const{fragment:s,on_mount:i,on_destroy:l,after_update:c}=e.$$;s&&s.m(t,r),C(()=>{const t=i.map(n).filter(o);l?l.push(...t):a(t),e.$$.on_mount=[]}),c.forEach(C)}function W(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){-1===e.$$.dirty[0]&&(I.push(e),A||(A=!0,M.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(t,n,o,s,i,l,c=[-1]){const u=P;j(t);const f=n.props||{},p=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:c,skip_bound:!1};let h=!1;if(p.ctx=o?o(t,f,(e,n,...r)=>{const a=r.length?r[0]:n;return p.ctx&&i(p.ctx[e],p.ctx[e]=a)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](a),h&&Y(t,e)),n}):[],p.update(),h=!0,a(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);p.fragment&&p.fragment.l(e),e.forEach(d)}else p.fragment&&p.fragment.c();n.intro&&V(t.$$.fragment),G(t,n.target,n.anchor),q()}j(u)}class K{$destroy(){W(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Q(e){let t,n;return{c(){t=g("title"),n=b(e[0])},m(e,r){p(e,t,r),f(t,n)},p(e,t){1&t&&x(n,e[0])},d(e){e&&d(t)}}}function U(e){let t,n,r,a=e[0]&&Q(e);const o=e[3].default,s=i(o,e,e[2],null);return{c(){t=g("svg"),a&&a.c(),n=v(),s&&s.c(),w(t,"xmlns","http://www.w3.org/2000/svg"),w(t,"viewBox",e[1]),w(t,"class","svelte-3h8371")},m(e,o){p(e,t,o),a&&a.m(t,null),f(t,n),s&&s.m(t,null),r=!0},p(e,[i]){e[0]?a?a.p(e,i):(a=Q(e),a.c(),a.m(t,n)):a&&(a.d(1),a=null),s&&s.p&&4&i&&c(s,o,e,e[2],i,null,null),(!r||2&i)&&w(t,"viewBox",e[1])},i(e){r||(V(s,e),r=!0)},o(e){D(s,e),r=!1},d(e){e&&d(t),a&&a.d(),s&&s.d(e)}}}function X(e,t,n){let{title:r=null}=t,{viewBox:a}=t,{$$slots:o={},$$scope:s}=t;return e.$$set=e=>{"title"in e&&n(0,r=e.title),"viewBox"in e&&n(1,a=e.viewBox),"$$scope"in e&&n(2,s=e.$$scope)},[r,a,s,o]}class Z extends K{constructor(e){super(),J(this,e,X,U,s,{title:0,viewBox:1})}}function ee(e){let t;return{c(){t=g("path"),w(t,"d","M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function te(e){let n,r;const a=[{viewBox:"0 0 512 512"},e[0]];let o={$$slots:{default:[ee]},$$scope:{ctx:e}};for(let e=0;e<a.length;e+=1)o=t(o,a[e]);return n=new Z({props:o}),{c(){N(n.$$.fragment)},m(e,t){G(n,e,t),r=!0},p(e,[t]){const r=1&t?H(a,[a[0],L(e[0])]):{};2&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(V(n.$$.fragment,e),r=!0)},o(e){D(n.$$.fragment,e),r=!1},d(e){W(n,e)}}}function ne(e,n,r){return e.$$set=e=>{r(0,n=t(t({},n),u(e)))},[n=u(n)]}class re extends K{constructor(e){super(),J(this,e,ne,te,s,{})}}function ae(e){let t;return{c(){t=g("path"),w(t,"d","M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function oe(e){let n,r;const a=[{viewBox:"0 0 512 512"},e[0]];let o={$$slots:{default:[ae]},$$scope:{ctx:e}};for(let e=0;e<a.length;e+=1)o=t(o,a[e]);return n=new Z({props:o}),{c(){N(n.$$.fragment)},m(e,t){G(n,e,t),r=!0},p(e,[t]){const r=1&t?H(a,[a[0],L(e[0])]):{};2&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(V(n.$$.fragment,e),r=!0)},o(e){D(n.$$.fragment,e),r=!1},d(e){W(n,e)}}}function se(e,n,r){return e.$$set=e=>{r(0,n=t(t({},n),u(e)))},[n=u(n)]}class ie extends K{constructor(e){super(),J(this,e,se,oe,s,{})}}function le(e){let t;return{c(){t=g("path"),w(t,"d","M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function ce(e){let n,r;const a=[{viewBox:"0 0 448 512"},e[0]];let o={$$slots:{default:[le]},$$scope:{ctx:e}};for(let e=0;e<a.length;e+=1)o=t(o,a[e]);return n=new Z({props:o}),{c(){N(n.$$.fragment)},m(e,t){G(n,e,t),r=!0},p(e,[t]){const r=1&t?H(a,[a[0],L(e[0])]):{};2&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(V(n.$$.fragment,e),r=!0)},o(e){D(n.$$.fragment,e),r=!1},d(e){W(n,e)}}}function ue(e,n,r){return e.$$set=e=>{r(0,n=t(t({},n),u(e)))},[n=u(n)]}class fe extends K{constructor(e){super(),J(this,e,ue,ce,s,{})}}function pe(e){let t;return{c(){t=g("path"),w(t,"d","M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function de(e){let n,r;const a=[{viewBox:"0 0 448 512"},e[0]];let o={$$slots:{default:[pe]},$$scope:{ctx:e}};for(let e=0;e<a.length;e+=1)o=t(o,a[e]);return n=new Z({props:o}),{c(){N(n.$$.fragment)},m(e,t){G(n,e,t),r=!0},p(e,[t]){const r=1&t?H(a,[a[0],L(e[0])]):{};2&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(V(n.$$.fragment,e),r=!0)},o(e){D(n.$$.fragment,e),r=!1},d(e){W(n,e)}}}function he(e,n,r){return e.$$set=e=>{r(0,n=t(t({},n),u(e)))},[n=u(n)]}class me extends K{constructor(e){super(),J(this,e,he,de,s,{})}}function ge(e){let t;return{c(){t=g("path"),w(t,"d","M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z")},m(e,n){p(e,t,n)},d(e){e&&d(t)}}}function be(e){let n,r;const a=[{viewBox:"0 0 448 512"},e[0]];let o={$$slots:{default:[ge]},$$scope:{ctx:e}};for(let e=0;e<a.length;e+=1)o=t(o,a[e]);return n=new Z({props:o}),{c(){N(n.$$.fragment)},m(e,t){G(n,e,t),r=!0},p(e,[t]){const r=1&t?H(a,[a[0],L(e[0])]):{};2&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(V(n.$$.fragment,e),r=!0)},o(e){D(n.$$.fragment,e),r=!1},d(e){W(n,e)}}}function $e(e,n,r){return e.$$set=e=>{r(0,n=t(t({},n),u(e)))},[n=u(n)]}class ve extends K{constructor(e){super(),J(this,e,$e,be,s,{})}}const ye=e=>{return(t=e,[...new Array(t)].map((e,t)=>Boolean(t))).fill(!1).map((e,t,n)=>n.slice());var t},we=e=>ye(e).map(e=>e.map(()=>Math.random()>=.8)),xe=e=>e.map((t,n)=>t.map((t,r)=>{return a=Boolean(t),o=((e,t)=>(({y:e,x:t})=>[-1,0,1].reduce((n,r,a,o)=>o.reduce((n,a)=>a||r?[...n,[e+r,t+a]]:n,n),[]))(t).map((e=>t=>{return(([t,n])=>e[t][n])((n=e.length,t.map((e=>t=>-1===t?e-1:t===e?0:t)(n))));var n})(e)).filter(Boolean).length)(e,{y:n,x:r}),a?o>=2&&o<=3:3===o;var a,o}))
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */;function ke(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function Se(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}var Pe,je,Ie,ze;Pe=new WeakMap,je=new WeakMap,Ie=new WeakMap,ze=new WeakMap;const Fe=new class{constructor(e=100,t={lightness:.6,saturation:1}){Pe.set(this,void 0),je.set(this,void 0),Ie.set(this,void 0),ze.set(this,{}),Se(this,Pe,360/Math.sqrt(e**2*2)),Se(this,je,100*t.saturation),Se(this,Ie,100*t.lightness),Se(this,ze,{})}getColor(e,t){const n=[e,t].join("-");if(n in ke(this,ze))return ke(this,ze)[n];const r=`hsl(${Math.floor(Math.sqrt(e**2+t**2)*ke(this,Pe))},${ke(this,je)}%,${ke(this,Ie)}%)`;return ke(this,ze)[n]=r,r}}(64);function _e(e,t,n){const r=e.slice();return r[5]=t[n],r[7]=n,r}function Me(e,t,n){const r=e.slice();return r[2]=t[n],r[4]=n,r}function Ae(e){let t,n,r;return{c(){var n,r;t=m("div"),w(t,"class","cell svelte-hp5znc"),k(t,"--color",(n=e[4],r=e[7],Fe.getColor(n,r))),S(t,"alive",e[5])},m(a,o){p(a,t,o),n||(r=[y(t,"mouseover",e[1]({y:e[4],x:e[7]})),y(t,"mousedown",e[1]({y:e[4],x:e[7]}))],n=!0)},p(n,r){e=n,1&r&&S(t,"alive",e[5])},d(e){e&&d(t),n=!1,a(r)}}}function Ce(e){let t,n,r=e[2],a=[];for(let t=0;t<r.length;t+=1)a[t]=Ae(_e(e,r,t));return{c(){t=m("div");for(let e=0;e<a.length;e+=1)a[e].c();n=$(),w(t,"class","row svelte-hp5znc")},m(e,r){p(e,t,r);for(let e=0;e<a.length;e+=1)a[e].m(t,null);f(t,n)},p(e,o){if(3&o){let s;for(r=e[2],s=0;s<r.length;s+=1){const i=_e(e,r,s);a[s]?a[s].p(i,o):(a[s]=Ae(i),a[s].c(),a[s].m(t,n))}for(;s<a.length;s+=1)a[s].d(1);a.length=r.length}},d(e){e&&d(t),h(a,e)}}}function Ee(t){let n,r=t[0],a=[];for(let e=0;e<r.length;e+=1)a[e]=Ce(Me(t,r,e));return{c(){n=m("div");for(let e=0;e<a.length;e+=1)a[e].c();w(n,"class","container svelte-hp5znc")},m(e,t){p(e,n,t);for(let e=0;e<a.length;e+=1)a[e].m(n,null)},p(e,[t]){if(3&t){let o;for(r=e[0],o=0;o<r.length;o+=1){const s=Me(e,r,o);a[o]?a[o].p(s,t):(a[o]=Ce(s),a[o].c(),a[o].m(n,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=r.length}},i:e,o:e,d(e){e&&d(n),h(a,e)}}}function Oe(e,t,n){let{rows:r=[]}=t;return e.$$set=e=>{"rows"in e&&n(0,r=e.rows)},[r,({y:e,x:t})=>a=>{0===a.button&&1===a.buttons&&n(0,r[e][t]=!r[e][t],r)}]}class qe extends K{constructor(e){super(),J(this,e,Oe,Ee,s,{rows:0})}}function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Re(e){return(Re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ve(e,t){return(Ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function De(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function He(e,t,n){return(He=De()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&Ve(a,n.prototype),a}).apply(null,arguments)}function Le(e){var t="function"==typeof Map?new Map:void 0;return(Le=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return He(e,arguments,Re(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Ve(r,e)})(e)}var Ne={1:"Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",2:"Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",3:"Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",4:"Couldn't generate valid rgb string from %s, it returned %s.\n\n",5:"Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",6:"Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",7:"Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",8:"Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",9:"Please provide a number of steps to the modularScale helper.\n\n",10:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",11:'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',12:'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',13:'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',14:'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',15:'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',16:"You must provide a template to this method.\n\n",17:"You passed an unsupported selector state to this method.\n\n",18:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",19:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",20:"expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:"fontFace expects a name of a font-family.\n\n",24:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",25:"fontFace expects localFonts to be an array.\n\n",26:"fontFace expects fileFormats to be an array.\n\n",27:"radialGradient requries at least 2 color-stops to properly render.\n\n",28:"Please supply a filename to retinaImage() as the first argument.\n\n",29:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",32:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",33:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",34:"borderRadius expects a radius value as a string or number as the second argument.\n\n",35:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',36:"Property must be a string value.\n\n",37:"Syntax Error at %s.\n\n",38:"Formula contains a function that needs parentheses at %s.\n\n",39:"Formula is missing closing parenthesis at %s.\n\n",40:"Formula has too many closing parentheses at %s.\n\n",41:"All values in a formula must have the same unit or be unitless.\n\n",42:"Please provide a number of steps to the modularScale helper.\n\n",43:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",44:"Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",45:"Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",46:"Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",47:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",48:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",49:"Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",50:"Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",51:"Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",52:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",53:"fontFace expects localFonts to be an array.\n\n",54:"fontFace expects fileFormats to be an array.\n\n",55:"fontFace expects a name of a font-family.\n\n",56:"linearGradient requries at least 2 color-stops to properly render.\n\n",57:"radialGradient requries at least 2 color-stops to properly render.\n\n",58:"Please supply a filename to retinaImage() as the first argument.\n\n",59:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:"Property must be a string value.\n\n",62:"borderRadius expects a radius value as a string or number as the second argument.\n\n",63:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',64:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",65:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",66:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",67:"You must provide a template to this method.\n\n",68:"You passed an unsupported selector state to this method.\n\n",69:'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',70:'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',71:'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',72:'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',73:"Please provide a valid CSS variable.\n\n",74:"CSS variable not found.\n"};function Ge(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,a=t[0],o=[];for(r=1;r<t.length;r+=1)o.push(t[r]);return o.forEach((function(e){a=a.replace(/%[a-z]/,e)})),a}var We=function(e){var t,n;function r(t){var n;if("production"===process.env.NODE_ENV)n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this;else{for(var r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];n=e.call(this,Ge.apply(void 0,[Ne[t]].concat(a)))||this}return Te(n)}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r}(Le(Error));function Ye(e){return Math.round(255*e)}function Je(e,t,n){return Ye(e)+","+Ye(t)+","+Ye(n)}function Ke(e,t,n,r){if(void 0===r&&(r=Je),0===t)return r(n,n,n);var a=(e%360+360)%360/60,o=(1-Math.abs(2*n-1))*t,s=o*(1-Math.abs(a%2-1)),i=0,l=0,c=0;a>=0&&a<1?(i=o,l=s):a>=1&&a<2?(i=s,l=o):a>=2&&a<3?(l=o,c=s):a>=3&&a<4?(l=s,c=o):a>=4&&a<5?(i=s,c=o):a>=5&&a<6&&(i=o,c=s);var u=n-o/2;return r(i+u,l+u,c+u)}var Qe={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var Ue=/^#[a-fA-F0-9]{6}$/,Xe=/^#[a-fA-F0-9]{8}$/,Ze=/^#[a-fA-F0-9]{3}$/,et=/^#[a-fA-F0-9]{4}$/,tt=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,nt=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,rt=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,at=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function ot(e){if("string"!=typeof e)throw new We(3);var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return Qe[t]?"#"+Qe[t]:e}(e);if(t.match(Ue))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(Xe)){var n=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:n}}if(t.match(Ze))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(et)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var a=tt.exec(t);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var o=nt.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])};var s=rt.exec(t);if(s){var i="rgb("+Ke(parseInt(""+s[1],10),parseInt(""+s[2],10)/100,parseInt(""+s[3],10)/100)+")",l=tt.exec(i);if(!l)throw new We(4,t,i);return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var c=at.exec(t);if(c){var u="rgb("+Ke(parseInt(""+c[1],10),parseInt(""+c[2],10)/100,parseInt(""+c[3],10)/100)+")",f=tt.exec(u);if(!f)throw new We(4,t,u);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+c[4])}}throw new We(5)}function st(e){return function(e){var t,n=e.red/255,r=e.green/255,a=e.blue/255,o=Math.max(n,r,a),s=Math.min(n,r,a),i=(o+s)/2;if(o===s)return void 0!==e.alpha?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var l=o-s,c=i>.5?l/(2-o-s):l/(o+s);switch(o){case n:t=(r-a)/l+(r<a?6:0);break;case r:t=(a-n)/l+2;break;default:t=(n-r)/l+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:c,lightness:i,alpha:e.alpha}:{hue:t,saturation:c,lightness:i}}(ot(e))}var it=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function lt(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function ct(e){return lt(Math.round(255*e))}function ut(e,t,n){return it("#"+ct(e)+ct(t)+ct(n))}function ft(e,t,n){return Ke(e,t,n,ut)}function pt(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return it("#"+lt(e)+lt(t)+lt(n));if("object"==typeof e&&void 0===t&&void 0===n)return it("#"+lt(e.red)+lt(e.green)+lt(e.blue));throw new We(6)}function dt(e,t,n,r){if("string"==typeof e&&"number"==typeof t){var a=ot(e);return"rgba("+a.red+","+a.green+","+a.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof r)return r>=1?pt(e,t,n):"rgba("+e+","+t+","+n+","+r+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===r)return e.alpha>=1?pt(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new We(7)}function ht(e){if("object"!=typeof e)throw new We(8);if(function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha}(e))return dt(e);if(function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return pt(e);if(function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha}(e))return function(e,t,n,r){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof r)return r>=1?ft(e,t,n):"rgba("+Ke(e,t,n)+","+r+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===r)return e.alpha>=1?ft(e.hue,e.saturation,e.lightness):"rgba("+Ke(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new We(2)}(e);if(function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return function(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return ft(e,t,n);if("object"==typeof e&&void 0===t&&void 0===n)return ft(e.hue,e.saturation,e.lightness);throw new We(1)}(e);throw new We(8)}function mt(e){return function e(t,n,r){return function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=n?t.apply(this,a):e(t,n,a)}}(e,e.length,[])}function gt(e,t,n){return Math.max(e,Math.min(t,n))}function bt(e,t){if("transparent"===t)return t;var n=st(t);return ht(Be({},n,{lightness:gt(0,1,n.lightness+parseFloat(e))}))}var $t=mt(bt);function vt(e,t){if("transparent"===t)return t;var n=ot(t);return dt(Be({},n,{alpha:gt(0,1,(100*("number"==typeof n.alpha?n.alpha:1)+100*parseFloat(e))/100)}))}var yt=mt(vt);function wt(e){let t,n,r,a;const o=e[6].default,s=i(o,e,e[5],null),l=s||function(e){let t;return{c(){t=b(e[0])},m(e,n){p(e,t,n)},p(e,n){1&n&&x(t,e[0])},d(e){e&&d(t)}}}(e);return{c(){t=m("button"),l&&l.c(),t.disabled=e[1],k(t,"--color",e[2]),k(t,"--border-color",e[3]),w(t,"class","svelte-q1ju3a")},m(o,s){p(o,t,s),l&&l.m(t,null),n=!0,r||(a=y(t,"click",e[7]),r=!0)},p(e,[r]){s?s.p&&32&r&&c(s,o,e,e[5],r,null,null):l&&l.p&&1&r&&l.p(e,r),(!n||2&r)&&(t.disabled=e[1])},i(e){n||(V(l,e),n=!0)},o(e){D(l,e),n=!1},d(e){e&&d(t),l&&l.d(e),r=!1,a()}}}function xt(e,t,n){let{text:r}=t,{color:a="#333"}=t,{disabled:o}=t;const s=$t(.05,a),i=yt(-.6,a);let{$$slots:l={},$$scope:c}=t;return e.$$set=e=>{"text"in e&&n(0,r=e.text),"color"in e&&n(4,a=e.color),"disabled"in e&&n(1,o=e.disabled),"$$scope"in e&&n(5,c=e.$$scope)},[r,o,s,i,a,c,l,function(t){!function(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(e=>e(t))}(e,t)}]}class kt extends K{constructor(e){super(),J(this,e,xt,wt,s,{text:0,color:4,disabled:1})}}function St(t){let n,r,a;return{c(){n=m("div"),r=b(t[0]),a=b("fps"),k(n,"--color",t[1]),k(n,"--opacity",t[2]),w(n,"class","svelte-o7a12x")},m(e,t){p(e,n,t),f(n,r),f(n,a)},p(e,[t]){1&t&&x(r,e[0]),2&t&&k(n,"--color",e[1]),4&t&&k(n,"--opacity",e[2])},i:e,o:e,d(e){e&&d(n)}}}function Pt(e,t,n){let r,a,o,{frames:s=0}=t,{startedPlayingAt:i=Date.now()}=t;return e.$$set=e=>{"frames"in e&&n(3,s=e.frames),"startedPlayingAt"in e&&n(4,i=e.startedPlayingAt)},e.$$.update=()=>{24&e.$$.dirty&&n(0,r=((e=0,t=Date.now(),n=Date.now())=>t?Math.ceil(e/((n-t)/1e3)):null)(s,i,Date.now())),1&e.$$.dirty&&n(1,a=r<24?"crimson":r<48?"orange":"darkgreen"),1&e.$$.dirty&&n(2,o=Number(Boolean(r&&!isNaN(r))))},[r,a,o,s,i]}class jt extends K{constructor(e){super(),J(this,e,Pt,St,s,{frames:3,startedPlayingAt:4})}}function It(e){let t,n;return t=new re({}),{c(){N(t.$$.fragment)},m(e,r){G(t,e,r),n=!0},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function zt(e){let t,n;return t=new ie({}),{c(){N(t.$$.fragment)},m(e,r){G(t,e,r),n=!0},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function Ft(e){let t,n;return t=new ve({}),{c(){N(t.$$.fragment)},m(e,r){G(t,e,r),n=!0},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){D(t.$$.fragment,e),n=!1},d(e){W(t,e)}}}function _t(e){let t,n,r;var o=e[1]?me:fe;return o&&(t=new o({})),{c(){t&&N(t.$$.fragment),n=v()},m(e,a){t&&G(t,e,a),p(e,n,a),r=!0},p(e,r){if(o!==(o=e[1]?me:fe)){if(t){R={r:0,c:[],p:R};const e=t;D(e.$$.fragment,1,0,()=>{W(e,1)}),R.r||a(R.c),R=R.p}o?(t=new o({}),N(t.$$.fragment),V(t.$$.fragment,1),G(t,n.parentNode,n)):t=null}},i(e){r||(t&&V(t.$$.fragment,e),r=!0)},o(e){t&&D(t.$$.fragment,e),r=!1},d(e){e&&d(n),t&&W(t,e)}}}function Mt(e){let t,n,r,a,o,s,i,l,c,u,h,g,b,v,y,x;return o=new kt({props:{color:"darkslateblue",text:"reset",$$slots:{default:[It]},$$scope:{ctx:e}}}),o.$on("click",e[4]),i=new kt({props:{color:"darkslategray",text:"random",$$slots:{default:[zt]},$$scope:{ctx:e}}}),i.$on("click",e[5]),c=new kt({props:{color:"teal",disabled:e[1],text:"next",$$slots:{default:[Ft]},$$scope:{ctx:e}}}),c.$on("click",e[6]),h=new kt({props:{color:e[1]?"darkred":"darkgreen",text:e[1]?"pause":"play",$$slots:{default:[_t]},$$scope:{ctx:e}}}),h.$on("click",e[7]),b=new qe({props:{rows:e[0]}}),y=new jt({props:{frames:e[2],startedPlayingAt:e[3]}}),{c(){t=m("main"),n=m("h1"),n.textContent="Svelte Game of Life",r=$(),a=m("div"),N(o.$$.fragment),s=$(),N(i.$$.fragment),l=$(),N(c.$$.fragment),u=$(),N(h.$$.fragment),g=$(),N(b.$$.fragment),v=$(),N(y.$$.fragment),w(n,"class","svelte-1vtmcy5"),w(a,"class","controls svelte-1vtmcy5"),w(t,"class","svelte-1vtmcy5")},m(e,d){p(e,t,d),f(t,n),f(t,r),f(t,a),G(o,a,null),f(a,s),G(i,a,null),f(a,l),G(c,a,null),f(a,u),G(h,a,null),f(t,g),G(b,t,null),f(t,v),G(y,t,null),x=!0},p(e,[t]){const n={};2048&t&&(n.$$scope={dirty:t,ctx:e}),o.$set(n);const r={};2048&t&&(r.$$scope={dirty:t,ctx:e}),i.$set(r);const a={};2&t&&(a.disabled=e[1]),2048&t&&(a.$$scope={dirty:t,ctx:e}),c.$set(a);const s={};2&t&&(s.color=e[1]?"darkred":"darkgreen"),2&t&&(s.text=e[1]?"pause":"play"),2050&t&&(s.$$scope={dirty:t,ctx:e}),h.$set(s);const l={};1&t&&(l.rows=e[0]),b.$set(l);const u={};4&t&&(u.frames=e[2]),8&t&&(u.startedPlayingAt=e[3]),y.$set(u)},i(e){x||(V(o.$$.fragment,e),V(i.$$.fragment,e),V(c.$$.fragment,e),V(h.$$.fragment,e),V(b.$$.fragment,e),V(y.$$.fragment,e),x=!0)},o(e){D(o.$$.fragment,e),D(i.$$.fragment,e),D(c.$$.fragment,e),D(h.$$.fragment,e),D(b.$$.fragment,e),D(y.$$.fragment,e),x=!1},d(e){e&&d(t),W(o),W(i),W(c),W(h),W(b),W(y)}}}function At(e,t,n){let r,a,{gridSize:o=0}=t,s=we(o),i=!1,l=0;function c(){n(0,s=xe(s)),i&&(n(2,l++,l),r=requestAnimationFrame(c))}return e.$$set=e=>{"gridSize"in e&&n(8,o=e.gridSize)},[s,i,l,a,function(){n(0,s=ye(64))},function(){n(0,s=we(64))},function(){n(0,s=xe(s))},function(){if(i)return cancelAnimationFrame(r),n(1,i=!1),n(2,l=0),void n(3,a=void 0);n(1,i=!0),n(3,a=Date.now()),c()},o]}return new class extends K{constructor(e){super(),J(this,e,At,Mt,s,{gridSize:8})}}({target:document.body,props:{gridSize:64}})}();
//# sourceMappingURL=bundle.js.map
