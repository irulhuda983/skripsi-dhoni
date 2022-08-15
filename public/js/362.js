/*! For license information please see 362.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[362],{5362:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function n(){n=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,a){var n=e&&e.prototype instanceof f?e:f,o=Object.create(n.prototype),i=new L(a||[]);return o._invoke=function(t,e,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return j()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=d(t,e,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var p={};function f(){}function v(){}function h(){}var y={};u(y,i,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(E([])));b&&b!==e&&r.call(b,i)&&(y=b);var g=h.prototype=f.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,i,s,l){var u=d(t[o],t,i);if("throw"!==u.type){var c=u.arg,p=c.value;return p&&"object"==a(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,s,l)}),(function(t){n("throw",t,s,l)})):e.resolve(p).then((function(t){c.value=t,s(c)}),(function(t){return n("throw",t,s,l)}))}l(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return o=o?o.then(a,a):a()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=d(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,p;var n=a.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,n=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=h,u(g,"constructor",h),u(h,"constructor",v),v.displayName=u(h,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,l,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(_.prototype),u(_.prototype,s,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new _(c(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),u(g,l,"Generator"),u(g,i,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return i.type="throw",i.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;C(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function o(t,e,r,a,n,o,i){try{var s=t[o](i),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(a,n)}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const s={data:function(){var t;return{payload:(t={barang_id:"",tahun:""},i(t,"tahun",""),i(t,"stok",""),i(t,"terjual",""),i(t,"sisa",""),i(t,"kondisi",""),t)}},methods:{simpanData:function(){var t,e=this;return(t=n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,axios.post("aktual/store",e.payload);case 3:200==t.sent.status&&e.$router.push({name:"dataAktual"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,r=arguments;return new Promise((function(a,n){var i=t.apply(e,r);function s(t){o(i,a,n,s,l,"next",t)}function l(t){o(i,a,n,s,l,"throw",t)}s(void 0)}))})()}}};const l=(0,r(1900).Z)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.simpanData.apply(null,arguments)}}},[r("div",{staticClass:"form"},[r("div",{staticClass:"mb-5"},[r("label",{staticClass:"block mb-2",attrs:{for:"kode_barang"}},[t._v("Barang")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.barang_id,expression:"payload.barang_id"}],staticClass:"w-full border bg-transparent rounded p-3 border border-gray-200",attrs:{id:"kode_barang",type:"text",placeholder:"Masukkan Kode Barang"},domProps:{value:t.payload.barang_id},on:{input:function(e){e.target.composing||t.$set(t.payload,"barang_id",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-5"},[r("label",{staticClass:"block mb-2",attrs:{for:"kode_barang"}},[t._v("Tahun")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.tahun,expression:"payload.tahun"}],staticClass:"w-full border bg-transparent rounded p-3 border border-gray-200",attrs:{id:"kode_barang",type:"text",placeholder:"Masukkan Nama Barang"},domProps:{value:t.payload.tahun},on:{input:function(e){e.target.composing||t.$set(t.payload,"tahun",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-5"},[r("label",{staticClass:"block mb-2",attrs:{for:"kode_barang"}},[t._v("Bulan")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.bulan,expression:"payload.bulan"}],staticClass:"w-full border bg-transparent rounded p-3 border border-gray-200",attrs:{id:"kode_barang",type:"text",placeholder:"Masukkan Harga"},domProps:{value:t.payload.bulan},on:{input:function(e){e.target.composing||t.$set(t.payload,"bulan",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-5"},[r("label",{staticClass:"block mb-2",attrs:{for:"kode_barang"}},[t._v("Stok")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.stok,expression:"payload.stok"}],staticClass:"w-full border bg-transparent rounded p-3 border border-gray-200",attrs:{id:"kode_barang",type:"text",placeholder:"Masukkan Harga"},domProps:{value:t.payload.stok},on:{input:function(e){e.target.composing||t.$set(t.payload,"stok",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-5"},[r("label",{staticClass:"block mb-2",attrs:{for:"kode_barang"}},[t._v("Terjual")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.terjual,expression:"payload.terjual"}],staticClass:"w-full border bg-transparent rounded p-3 border border-gray-200",attrs:{id:"kode_barang",type:"text",placeholder:"Masukkan Harga"},domProps:{value:t.payload.terjual},on:{input:function(e){e.target.composing||t.$set(t.payload,"terjual",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-5"},[r("label",{staticClass:"block mb-2",attrs:{for:"kode_barang"}},[t._v("Sisa")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.sisa,expression:"payload.sisa"}],staticClass:"w-full border bg-transparent rounded p-3 border border-gray-200",attrs:{id:"kode_barang",type:"text",placeholder:"Masukkan Harga"},domProps:{value:t.payload.sisa},on:{input:function(e){e.target.composing||t.$set(t.payload,"sisa",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-5"},[r("label",{staticClass:"block mb-2",attrs:{for:"kode_barang"}},[t._v("Kondisi")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.kondisi,expression:"payload.kondisi"}],staticClass:"w-full border bg-transparent rounded p-3 border border-gray-200",attrs:{id:"kode_barang",type:"text",placeholder:"Masukkan Harga"},domProps:{value:t.payload.kondisi},on:{input:function(e){e.target.composing||t.$set(t.payload,"kondisi",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-5"},[r("button",{staticClass:"border border-green-500 bg-green-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-green-500",attrs:{type:"submit"}},[t._v("Simpan")]),t._v(" "),r("button",{staticClass:"border border-red-500 bg-red-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-red-500",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$router.go(-1)}}},[t._v("Kembali")])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full flex justify-between items-center mb-8 border-b py-3"},[r("h1",{staticClass:"text-2xl"},[t._v("Tambah Data")])])}],!1,null,null,null).exports}}]);