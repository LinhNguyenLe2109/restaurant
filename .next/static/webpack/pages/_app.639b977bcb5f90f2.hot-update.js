"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/MainNav.js":
/*!*******************************!*\
  !*** ./components/MainNav.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jotai */ \"./node_modules/jotai/esm/index.mjs\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MainNav(props) {\n    _s();\n    const [searchHistory, setSearchHistory] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_4__.searchHistoryAtom);\n    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = (event)=>{\n        var _event_target, _event_target_search, _event_target1, _event_target_search1;\n        event.preventDefault();\n        setIsExpanded(false);\n        const queryString = \"title=true&q=\".concat((_event_target = event.target) === null || _event_target === void 0 ? void 0 : (_event_target_search = _event_target.search) === null || _event_target_search === void 0 ? void 0 : _event_target_search.value);\n        setSearchHistory((current)=>[\n                ...current,\n                queryString\n            ]);\n        if ((_event_target1 = event.target) === null || _event_target1 === void 0 ? void 0 : (_event_target_search1 = _event_target1.search) === null || _event_target_search1 === void 0 ? void 0 : _event_target_search1.value) {\n            router.push(\"/artwork?\".concat(queryString));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                expanded: isExpanded,\n                expand: \"lg\",\n                className: \"fixed-top navbar-dark bg-dark\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Brand, {\n                            href: \"/\",\n                            children: \"NeoFood\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Toggle, {\n                            onClick: ()=>setIsExpanded((expand)=>!expand),\n                            \"aria-controls\": \"basic-navbar-nav\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Collapse, {\n                            id: \"basic-navbar-nav\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    className: \"me-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            legacyBehavior: true,\n                                            passHref: true,\n                                            href: \"/\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Link, {\n                                                active: router.pathname === \"/\",\n                                                onClick: ()=>setIsExpanded(false),\n                                                children: \"Home\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            legacyBehavior: true,\n                                            passHref: true,\n                                            href: \"/search\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Link, {\n                                                active: router.pathname === \"/search\",\n                                                onClick: ()=>setIsExpanded(false),\n                                                children: \"Advanced Search\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                \"\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    onSubmit: (e)=>handleSubmit(e),\n                                    className: \"d-flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Control, {\n                                            type: \"search\",\n                                            placeholder: \"Search\",\n                                            className: \"me-2\",\n                                            \"aria-label\": \"Search\",\n                                            name: \"search\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            type: \"submit\",\n                                            variant: \"outline-success\",\n                                            children: \"Search\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                \"\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NavDropdown, {\n                                        onClick: ()=>setIsExpanded(false),\n                                        title: \"User Name\",\n                                        id: \"basic-nav-dropdown\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                legacyBehavior: true,\n                                                passHref: true,\n                                                href: \"/favourites\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NavDropdown.Item, {\n                                                    active: router.pathname === \"/favourites\",\n                                                    children: \"Favourites\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                legacyBehavior: true,\n                                                passHref: true,\n                                                href: \"/history\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NavDropdown.Item, {\n                                                    active: router.pathname === \"/history\",\n                                                    children: \"Search History\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(MainNav, \"PxytGBpXXCsv6iaiCJpF/gTz4b8=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MainNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNav);\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUE7Z0RBQUNnQyxjQUFjO2dEQUFDQyxRQUFRO2dEQUFDUCxNQUFLOzBEQUNqQyw0RUFBQ3pCLDhEQUFnQjtvREFBQ2lDLFFBQVF2QixPQUFPd0IsUUFBUSxLQUFLOzhEQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBU3RFLDhEQUFDVzs7Ozs7MEJBQ0QsOERBQUNBOzs7Ozs7Ozs7OztBQUdQO0dBdEZTekM7O1FBQ21DSCwwQ0FBT0E7UUFHbENILGtEQUFTQTs7O0tBSmpCTTtBQXdGVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW5OYXYuanM/ZWY4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IE5hdkRyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSBcImpvdGFpXCI7XHJcbmltcG9ydCB7IHNlYXJjaEhpc3RvcnlBdG9tIH0gZnJvbSBcIkAvc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIE1haW5OYXYocHJvcHMpIHtcclxuICBjb25zdCBbc2VhcmNoSGlzdG9yeSwgc2V0U2VhcmNoSGlzdG9yeV0gPSB1c2VBdG9tKHNlYXJjaEhpc3RvcnlBdG9tKTtcclxuICBjb25zdCBbaXNFeHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc0V4cGFuZGVkKGZhbHNlKTtcclxuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYHRpdGxlPXRydWUmcT0ke2V2ZW50LnRhcmdldD8uc2VhcmNoPy52YWx1ZX1gO1xyXG4gICAgc2V0U2VhcmNoSGlzdG9yeSgoY3VycmVudCkgPT4gWy4uLmN1cnJlbnQsIHF1ZXJ5U3RyaW5nXSk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0Py5zZWFyY2g/LnZhbHVlKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvYXJ0d29yaz8ke3F1ZXJ5U3RyaW5nfWApO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPE5hdmJhclxyXG4gICAgICAgIGV4cGFuZGVkPXtpc0V4cGFuZGVkfVxyXG4gICAgICAgIGV4cGFuZD1cImxnXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZC10b3AgbmF2YmFyLWRhcmsgYmctZGFya1wiXHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiPk5lb0Zvb2Q8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRXhwYW5kZWQoKGV4cGFuZCkgPT4gIWV4cGFuZCl9XHJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cclxuICAgICAgICAgICAgICA8TGluayBsZWdhY3lCZWhhdmlvciBwYXNzSHJlZiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rXHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9cIn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNFeHBhbmRlZChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmIGhyZWY9XCIvc2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL3NlYXJjaFwifVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0V4cGFuZGVkKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQWR2YW5jZWQgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZS0yXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwib3V0bGluZS1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgPE5hdj5cclxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRXhwYW5kZWQoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJVc2VyIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmIGhyZWY9XCIvZmF2b3VyaXRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvZmF2b3VyaXRlc1wifT5cclxuICAgICAgICAgICAgICAgICAgICBGYXZvdXJpdGVzXHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmIGhyZWY9XCIvaGlzdG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvaGlzdG9yeVwifT5cclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2ggSGlzdG9yeVxyXG4gICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiTmF2IiwiTmF2YmFyIiwiQnV0dG9uIiwiRm9ybSIsInVzZVJvdXRlciIsIkxpbmsiLCJOYXZEcm9wZG93biIsInVzZUF0b20iLCJzZWFyY2hIaXN0b3J5QXRvbSIsInVzZVN0YXRlIiwiTWFpbk5hdiIsInByb3BzIiwic2VhcmNoSGlzdG9yeSIsInNldFNlYXJjaEhpc3RvcnkiLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmRlZCIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJxdWVyeVN0cmluZyIsInRhcmdldCIsInNlYXJjaCIsInZhbHVlIiwiY3VycmVudCIsInB1c2giLCJGcmFnbWVudCIsImV4cGFuZGVkIiwiZXhwYW5kIiwiY2xhc3NOYW1lIiwiQnJhbmQiLCJocmVmIiwiVG9nZ2xlIiwib25DbGljayIsImFyaWEtY29udHJvbHMiLCJDb2xsYXBzZSIsImlkIiwibGVnYWN5QmVoYXZpb3IiLCJwYXNzSHJlZiIsImFjdGl2ZSIsInBhdGhuYW1lIiwib25TdWJtaXQiLCJlIiwiQ29udHJvbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJuYW1lIiwidmFyaWFudCIsInRpdGxlIiwiSXRlbSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MainNav.js\n"));

/***/ })

});