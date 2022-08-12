"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_MasterData_ShowAll_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MasterData/ShowAll.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MasterData/ShowAll.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      barang: [],
      modalDelete: false,
      id_barang: null
    };
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      this.barang = [];
    },
    openModalDelete: function openModalDelete(id) {
      this.id_barang = id;
      this.modalDelete = true;
    },
    closeModalDelete: function closeModalDelete() {
      this.id_barang = null;
      this.modalDelete = false;
    },
    deleteData: function deleteData() {
      this.id_barang = null;
      this.modalDelete = false;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/MasterData/ShowAll.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/MasterData/ShowAll.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowAll_vue_vue_type_template_id_2ed3ce40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowAll.vue?vue&type=template&id=2ed3ce40& */ "./resources/js/views/MasterData/ShowAll.vue?vue&type=template&id=2ed3ce40&");
/* harmony import */ var _ShowAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowAll.vue?vue&type=script&lang=js& */ "./resources/js/views/MasterData/ShowAll.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowAll_vue_vue_type_template_id_2ed3ce40___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowAll_vue_vue_type_template_id_2ed3ce40___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MasterData/ShowAll.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/MasterData/ShowAll.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/MasterData/ShowAll.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowAll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MasterData/ShowAll.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/MasterData/ShowAll.vue?vue&type=template&id=2ed3ce40&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/MasterData/ShowAll.vue?vue&type=template&id=2ed3ce40& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAll_vue_vue_type_template_id_2ed3ce40___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAll_vue_vue_type_template_id_2ed3ce40___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowAll_vue_vue_type_template_id_2ed3ce40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowAll.vue?vue&type=template&id=2ed3ce40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MasterData/ShowAll.vue?vue&type=template&id=2ed3ce40&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MasterData/ShowAll.vue?vue&type=template&id=2ed3ce40&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MasterData/ShowAll.vue?vue&type=template&id=2ed3ce40& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "w-full box-border" }, [
    _c(
      "div",
      {
        staticClass: "w-full box-border flex justify-between items-center mb-8",
      },
      [
        _c("div", { staticClass: "text-xs" }, [_vm._v("Showing 10 data")]),
        _vm._v(" "),
        _c("div", { staticClass: "flex items-center justify-center" }, [
          _c(
            "button",
            {
              staticClass:
                "border border-green-500 bg-green-500 text-xs font-semibold px-4 py-2 rounded hover:bg-transparent hover:text-green-500",
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.$router.push({ name: "tambahMasterData" })
                },
              },
            },
            [_vm._v("Tambah Barang")]
          ),
        ]),
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "w-full box-border" }, [
      _c(
        "table",
        { staticClass: "w-full box-border table-auto border-collapse" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c(
                "td",
                {
                  staticClass:
                    "px-4 py-2 border-b border-t border-slate-600 text-left",
                },
                [_vm._v("1")]
              ),
              _vm._v(" "),
              _c(
                "td",
                {
                  staticClass:
                    "px-4 py-2 border-b border-t border-slate-600 text-left",
                },
                [_vm._v("B01")]
              ),
              _vm._v(" "),
              _c(
                "td",
                {
                  staticClass:
                    "px-4 py-2 border-b border-t border-slate-600 text-left",
                },
                [_vm._v("Acer-200")]
              ),
              _vm._v(" "),
              _c(
                "td",
                {
                  staticClass:
                    "px-4 py-2 border-b border-t border-slate-600 text-left",
                },
                [_vm._v("Rp 500.000")]
              ),
              _vm._v(" "),
              _c(
                "td",
                { staticClass: "px-4 py-2 border-b border-t border-slate-600" },
                [
                  _c(
                    "button",
                    {
                      staticClass:
                        "p-1 hover:bg-slate-200 rounded hover:text-slate-900",
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.$router.push({
                            name: "editMasterData",
                            params: { id: 1 },
                          })
                        },
                      },
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-4 w-4",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                          },
                        },
                        [
                          _c("path", {
                            attrs: {
                              d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "p-1 hover:bg-slate-200 rounded hover:text-slate-900",
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.openModalDelete(1)
                        },
                      },
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "h-4 w-4",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                          },
                        },
                        [
                          _c("path", {
                            attrs: {
                              "fill-rule": "evenodd",
                              d: "M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",
                              "clip-rule": "evenodd",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]),
          ]),
        ]
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.modalDelete,
            expression: "modalDelete",
          },
        ],
        staticClass:
          "w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-slate-800/10 backdrop-blur-md flex items-center justify-center",
      },
      [
        _c(
          "div",
          { staticClass: "w-[550px] box-border bg-slate-900 rounded-lg p-6" },
          [
            _c("div", { staticClass: "flex space-x-8" }, [
              _c(
                "div",
                {
                  staticClass:
                    "flex-none w-24 h-24 rounded bg-red-700 text-white flex items-center justify-center",
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "h-16 w-16",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "stroke-width": "2",
                      },
                    },
                    [
                      _c("path", {
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                        },
                      }),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "flex-1" }, [
                _c("div", { staticClass: "mb-5 text-base font-semibold" }, [
                  _vm._v("Apakah Anda yakin ingin menghapus data ?"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-5" }, [
                  _vm._v(
                    "\n                        Data yang dihapus tidak bisa akan hilang secara permanen, apa anda ingin melanjutkan ?\n                    "
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex justify-end items-center space-x-5" },
                  [
                    _c(
                      "button",
                      {
                        staticClass:
                          "px-4 py-2 rounded bg-green-500 text-white text-xs font-semibold border border-green-500 hover:bg-transparent hover:text-green-500",
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.deleteData()
                          },
                        },
                      },
                      [_vm._v("Ya, hapus")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "px-4 py-2 rounded bg-red-500 text-white text-xs font-semibold border border-red-500 hover:bg-transparent hover:text-red-500",
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.closeModalDelete()
                          },
                        },
                      },
                      [_vm._v("Batal")]
                    ),
                  ]
                ),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "bg-slate-800" }, [
        _c(
          "th",
          {
            staticClass:
              "px-4 py-2 border-b border-t border-slate-600 text-left",
          },
          [_vm._v("No")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-2 border-b border-t border-slate-600 text-left",
          },
          [_vm._v("Kode Barang")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-2 border-b border-t border-slate-600 text-left",
          },
          [_vm._v("Nama Barang")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-2 border-b border-t border-slate-600 text-left",
          },
          [_vm._v("Harga")]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "px-4 py-2 border-b border-t border-slate-600 text-left",
          },
          [_vm._v("Aksi")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);