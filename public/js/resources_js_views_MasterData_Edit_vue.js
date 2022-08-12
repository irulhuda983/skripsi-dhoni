"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_MasterData_Edit_vue"],{

/***/ "./resources/js/views/MasterData/Edit.vue":
/*!************************************************!*\
  !*** ./resources/js/views/MasterData/Edit.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_08c0e444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=08c0e444& */ "./resources/js/views/MasterData/Edit.vue?vue&type=template&id=08c0e444&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Edit_vue_vue_type_template_id_08c0e444___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_08c0e444___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MasterData/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/MasterData/Edit.vue?vue&type=template&id=08c0e444&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/MasterData/Edit.vue?vue&type=template&id=08c0e444& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_08c0e444___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_08c0e444___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_08c0e444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=08c0e444& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MasterData/Edit.vue?vue&type=template&id=08c0e444&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MasterData/Edit.vue?vue&type=template&id=08c0e444&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MasterData/Edit.vue?vue&type=template&id=08c0e444& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "form" }, [
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c("div", { staticClass: "mb-5" }, [
        _c(
          "button",
          {
            staticClass:
              "border border-green-500 bg-green-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-green-500",
            attrs: { type: "submit" },
          },
          [_vm._v("Simpan")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "border border-red-500 bg-red-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-red-500",
            attrs: { type: "button" },
            on: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.$router.go(-1)
              },
            },
          },
          [_vm._v("Kembali")]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "w-full flex justify-between items-center mb-8 border-b py-3",
      },
      [_c("h1", { staticClass: "text-2xl" }, [_vm._v("Edit Barang")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-5" }, [
      _c(
        "label",
        { staticClass: "block mb-2", attrs: { for: "kode_barang" } },
        [_vm._v("Kode Barang")]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass:
          "w-full border bg-transparent rounded p-3 border border-gray-200",
        attrs: {
          id: "kode_barang",
          type: "text",
          placeholder: "Masukkan Kode Barang",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-5" }, [
      _c(
        "label",
        { staticClass: "block mb-2", attrs: { for: "kode_barang" } },
        [_vm._v("Nama Barang")]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass:
          "w-full border bg-transparent rounded p-3 border border-gray-200",
        attrs: {
          id: "kode_barang",
          type: "text",
          placeholder: "Masukkan Nama Barang",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-5" }, [
      _c(
        "label",
        { staticClass: "block mb-2", attrs: { for: "kode_barang" } },
        [_vm._v("Harga")]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass:
          "w-full border bg-transparent rounded p-3 border border-gray-200",
        attrs: {
          id: "kode_barang",
          type: "text",
          placeholder: "Masukkan Harga",
        },
      }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);