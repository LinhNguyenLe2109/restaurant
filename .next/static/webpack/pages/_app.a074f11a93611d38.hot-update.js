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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _styles_MainNav_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/MainNav.module.css */ \"./styles/MainNav.module.css\");\n/* harmony import */ var _styles_MainNav_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_MainNav_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store */ \"./store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction MainNav(props) {\n    _s();\n    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        setIsExpanded(false);\n    };\n    let menuTitle = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faBowlFood\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            \" Menu\"\n        ]\n    }, void 0, true);\n    let totalItem = orderList.reduce((sum, item)=>sum + item.amount, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Navbar, {\n                expanded: isExpanded,\n                expand: \"lg\",\n                // className=\"fixed-top navbar-dark bg-dark\"\n                className: \"fixed-top \".concat((_styles_MainNav_module_css__WEBPACK_IMPORTED_MODULE_8___default().mainNav), \" navbar-dark py-4\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Navbar.Brand, {\n                            className: \"fs-3 fw-bold\",\n                            href: \"/\",\n                            children: \"NeoFood\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Navbar.Toggle, {\n                            onClick: ()=>setIsExpanded((expand)=>!expand),\n                            \"aria-controls\": \"basic-navbar-nav\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Navbar.Collapse, {\n                            id: \"basic-navbar-nav\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Nav, {\n                                    className: \"me-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            legacyBehavior: true,\n                                            passHref: true,\n                                            href: \"/\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Nav.Link, {\n                                                active: router.pathname === \"/\",\n                                                onClick: ()=>setIsExpanded(false),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faHouse,\n                                                        className: \"me-1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    \"Home\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NavDropdown, {\n                                            onClick: ()=>setIsExpanded(false),\n                                            title: menuTitle,\n                                            id: \"basic-nav-dropdown\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    legacyBehavior: true,\n                                                    passHref: true,\n                                                    href: \"/favourites\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NavDropdown.Item, {\n                                                        active: router.pathname === \"/favourites\",\n                                                        children: \"Japanese Food\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    legacyBehavior: true,\n                                                    passHref: true,\n                                                    href: \"/history\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NavDropdown.Item, {\n                                                        active: router.pathname === \"/history\",\n                                                        children: \"Vietnamese Food\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    legacyBehavior: true,\n                                                    passHref: true,\n                                                    href: \"/history\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NavDropdown.Item, {\n                                                        active: router.pathname === \"/history\",\n                                                        children: \"Korean Food\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                                            onSubmit: (e)=>handleSubmit(e),\n                                            className: \"d-flex\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Form.Control, {\n                                                    type: \"search\",\n                                                    placeholder: \"Search\",\n                                                    className: \"me-2\",\n                                                    \"aria-label\": \"Search\",\n                                                    name: \"search\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                                    type: \"submit\",\n                                                    variant: \"outline-success\",\n                                                    children: \"Search\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                \"\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                    href: \"#cart\",\n                                    className: \"\".concat((_styles_MainNav_module_css__WEBPACK_IMPORTED_MODULE_8___default().cartButton), \" btn btn-outline-dark mt-3 mt-lg-0\"),\n                                    type: \"button\",\n                                    onClick: props.showCart,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faCartShopping,\n                                            className: \"me-1\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"View cart \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_styles_MainNav_module_css__WEBPACK_IMPORTED_MODULE_8___default().totalItem),\n                                            children: \"0\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(MainNav, \"PAN5oR5p6A/nyyuZSuOVIDJL9cY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MainNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNav);\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUM7b0NBQy9CMkMsTUFBSztvQ0FDTGIsU0FBU3ZCLE1BQU0wQyxRQUFROztzREFFdkIsOERBQUNoRCwyRUFBZUE7NENBQUNjLE1BQU1YLDZFQUFjQTs0Q0FBRXFCLFdBQVU7Ozs7Ozt3Q0FBUztzREFDaEQsOERBQUN5Qjs0Q0FBS3pCLFdBQVd6Qiw2RUFBZTtzREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBeUJwRCw4REFBQ21EOzs7OzswQkFDRCw4REFBQ0E7Ozs7Ozs7Ozs7O0FBR1A7R0FuSFM3Qzs7UUFHUWhCLGtEQUFTQTs7O0tBSGpCZ0I7QUFxSFQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluTmF2LmpzP2VmODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gIE5hdkRyb3Bkb3duLFxyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIE5hdixcclxuICBOYXZiYXIsXHJcbiAgQ29udGFpbmVyLFxyXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlQXRvbSB9IGZyb20gXCJqb3RhaVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9NYWluTmF2Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge1xyXG4gIGZhSG91c2UsXHJcbiAgZmFCb3dsRm9vZCxcclxuICBmYUNhcnRTaG9wcGluZyxcclxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IG9yZGVyTGlzdEF0b20gfSBmcm9tIFwiQC9zdG9yZVwiO1xyXG5cclxuZnVuY3Rpb24gTWFpbk5hdihwcm9wcykge1xyXG4gIGNvbnN0IFtpc0V4cGFuZGVkLCBzZXRJc0V4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldElzRXhwYW5kZWQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGxldCBtZW51VGl0bGUgPSAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQm93bEZvb2R9IC8+IE1lbnVcclxuICAgIDwvPlxyXG4gICk7XHJcblxyXG4gIGxldCB0b3RhbEl0ZW0gPSBvcmRlckxpc3QucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0uYW1vdW50LCAwKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8TmF2YmFyXHJcbiAgICAgICAgZXhwYW5kZWQ9e2lzRXhwYW5kZWR9XHJcbiAgICAgICAgZXhwYW5kPVwibGdcIlxyXG4gICAgICAgIC8vIGNsYXNzTmFtZT1cImZpeGVkLXRvcCBuYXZiYXItZGFyayBiZy1kYXJrXCJcclxuICAgICAgICBjbGFzc05hbWU9e2BmaXhlZC10b3AgJHtzdHlsZS5tYWluTmF2fSBuYXZiYXItZGFyayBweS00YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8TmF2YmFyLkJyYW5kIGNsYXNzTmFtZT1cImZzLTMgZnctYm9sZFwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIE5lb0Zvb2RcclxuICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgICAgICAgPE5hdmJhci5Ub2dnbGVcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNFeHBhbmRlZCgoZXhwYW5kKSA9PiAhZXhwYW5kKX1cclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWUtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICAgICAgYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1wifVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0V4cGFuZGVkKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhvdXNlfSBjbGFzc05hbWU9XCJtZS0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0V4cGFuZGVkKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXttZW51VGl0bGV9XHJcbiAgICAgICAgICAgICAgICBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgbGVnYWN5QmVoYXZpb3IgcGFzc0hyZWYgaHJlZj1cIi9mYXZvdXJpdGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9mYXZvdXJpdGVzXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIEphcGFuZXNlIEZvb2RcclxuICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgbGVnYWN5QmVoYXZpb3IgcGFzc0hyZWYgaHJlZj1cIi9oaXN0b3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9oaXN0b3J5XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIFZpZXRuYW1lc2UgRm9vZFxyXG4gICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBsZWdhY3lCZWhhdmlvciBwYXNzSHJlZiBocmVmPVwiL2hpc3RvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2hpc3RvcnlcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgS29yZWFuIEZvb2RcclxuICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZS0yXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJvdXRsaW5lLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjY2FydFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZS5jYXJ0QnV0dG9ufSBidG4gYnRuLW91dGxpbmUtZGFyayBtdC0zIG10LWxnLTBgfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnNob3dDYXJ0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNhcnRTaG9wcGluZ30gY2xhc3NOYW1lPVwibWUtMVwiIC8+XHJcbiAgICAgICAgICAgICAgVmlldyBjYXJ0IDxzcGFuIGNsYXNzTmFtZT17c3R5bGUudG90YWxJdGVtfT4wPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgey8qIERvIHRoaXMgbGF0ZXIgKi99XHJcbiAgICAgICAgICAgIHsvKiAmbmJzcDtcclxuICAgICAgICAgICAgPE5hdj5cclxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRXhwYW5kZWQoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJVc2VyIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmIGhyZWY9XCIvZmF2b3VyaXRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvZmF2b3VyaXRlc1wifT5cclxuICAgICAgICAgICAgICAgICAgICBGYXZvdXJpdGVzXHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGxlZ2FjeUJlaGF2aW9yIHBhc3NIcmVmIGhyZWY9XCIvaGlzdG9yeVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvaGlzdG9yeVwifT5cclxuICAgICAgICAgICAgICAgICAgICBTZWFyY2ggSGlzdG9yeVxyXG4gICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cclxuICAgICAgICAgICAgPC9OYXY+ICovfVxyXG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5OYXY7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJOYXZEcm9wZG93biIsIkZvcm0iLCJCdXR0b24iLCJOYXYiLCJOYXZiYXIiLCJDb250YWluZXIiLCJ1c2VBdG9tIiwidXNlU3RhdGUiLCJzdHlsZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhSG91c2UiLCJmYUJvd2xGb29kIiwiZmFDYXJ0U2hvcHBpbmciLCJvcmRlckxpc3RBdG9tIiwiTWFpbk5hdiIsInByb3BzIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kZWQiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWVudVRpdGxlIiwiaWNvbiIsInRvdGFsSXRlbSIsIm9yZGVyTGlzdCIsInJlZHVjZSIsInN1bSIsIml0ZW0iLCJhbW91bnQiLCJGcmFnbWVudCIsImV4cGFuZGVkIiwiZXhwYW5kIiwiY2xhc3NOYW1lIiwibWFpbk5hdiIsIkJyYW5kIiwiaHJlZiIsIlRvZ2dsZSIsIm9uQ2xpY2siLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCIsImxlZ2FjeUJlaGF2aW9yIiwicGFzc0hyZWYiLCJhY3RpdmUiLCJwYXRobmFtZSIsInRpdGxlIiwiSXRlbSIsIm9uU3VibWl0IiwiZSIsIkNvbnRyb2wiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhcmlhLWxhYmVsIiwibmFtZSIsInZhcmlhbnQiLCJjYXJ0QnV0dG9uIiwic2hvd0NhcnQiLCJzcGFuIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MainNav.js\n"));

/***/ })

});