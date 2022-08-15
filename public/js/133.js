/*! For license information please see 133.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[133],{5133:(t,r,e)=>{e.r(r),e.d(r,{default:()=>s});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var s=x(i,e);if(s){if(s===p)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=f(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,i),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p={};function d(){}function h(){}function v(){}var y={};u(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(C([])));m&&m!==r&&e.call(m,i)&&(y=m);var b=v.prototype=d.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function o(a,i,s,c){var u=f(t[a],t,i);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==n(p)&&e.call(p,"__await")?r.resolve(p.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):r.resolve(p).then((function(t){l.value=t,s(l)}),(function(t){return o("throw",t,s,c)}))}c(u.arg)}var a;this._invoke=function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return a=a?a.then(n,n):n()}}function x(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function C(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=v,u(b,"constructor",v),u(v,"constructor",h),h.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===h||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(_.prototype),u(_.prototype,s,(function(){return this})),t.AsyncIterator=_,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new _(l(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),c=e.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:C(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},t}function a(t,r,e,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void e(t)}s.done?r(c):Promise.resolve(c).then(n,o)}const i={data:function(){return{payload:{kode_barang:"",nama_barang:"",harga:""}}},methods:{simpanData:function(){var t,r=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.post("/barang/store",r.payload);case 3:200==t.sent.status&&r.$router.push({name:"masterData"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),401==t.t0.response.status&&console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))})()}}};const s=(0,e(1900).Z)(i,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[t._m(0),t._v(" "),e("form",{on:{submit:function(r){return r.preventDefault(),t.simpanData.apply(null,arguments)}}},[e("div",{staticClass:"form"},[e("div",{staticClass:"mb-5"},[e("label",{staticClass:"block mb-2",attrs:{for:"kode_barang"}},[t._v("Kode Barang")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.kode_barang,expression:"payload.kode_barang"}],staticClass:"w-full border bg-transparent rounded p-3 border border-gray-200",attrs:{id:"kode_barang",type:"text",placeholder:"Masukkan Kode Barang"},domProps:{value:t.payload.kode_barang},on:{input:function(r){r.target.composing||t.$set(t.payload,"kode_barang",r.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-5"},[e("label",{staticClass:"block mb-2",attrs:{for:"kode_barang"}},[t._v("Nama Barang")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.nama_barang,expression:"payload.nama_barang"}],staticClass:"w-full border bg-transparent rounded p-3 border border-gray-200",attrs:{id:"kode_barang",type:"text",placeholder:"Masukkan Nama Barang"},domProps:{value:t.payload.nama_barang},on:{input:function(r){r.target.composing||t.$set(t.payload,"nama_barang",r.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-5"},[e("label",{staticClass:"block mb-2",attrs:{for:"kode_barang"}},[t._v("Harga")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.harga,expression:"payload.harga"}],staticClass:"w-full border bg-transparent rounded p-3 border border-gray-200",attrs:{id:"kode_barang",type:"text",placeholder:"Masukkan Harga"},domProps:{value:t.payload.harga},on:{input:function(r){r.target.composing||t.$set(t.payload,"harga",r.target.value)}}})]),t._v(" "),e("div",{staticClass:"mb-5"},[e("button",{staticClass:"border border-green-500 bg-green-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-green-500",attrs:{type:"submit"}},[t._v("Simpan")]),t._v(" "),e("button",{staticClass:"border border-red-500 bg-red-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-red-500",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),t.$router.go(-1)}}},[t._v("Kembali")])])])])])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"w-full flex justify-between items-center mb-8 border-b py-3"},[e("h1",{staticClass:"text-2xl"},[t._v("Tambah Barang")])])}],!1,null,null,null).exports}}]);