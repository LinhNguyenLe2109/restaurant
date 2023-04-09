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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jotai */ \"./node_modules/jotai/esm/index.mjs\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./store.js\");\n/* harmony import */ var _styles_MainNav_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/MainNav.module.css */ \"./styles/MainNav.module.css\");\n/* harmony import */ var _styles_MainNav_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_MainNav_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction MainNav(props) {\n    _s();\n    const [searchHistory, setSearchHistory] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_4__.searchHistoryAtom);\n    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = (event)=>{\n        var _event_target, _event_target_search, _event_target1, _event_target_search1;\n        event.preventDefault();\n        setIsExpanded(false);\n        const queryString = \"title=true&q=\".concat((_event_target = event.target) === null || _event_target === void 0 ? void 0 : (_event_target_search = _event_target.search) === null || _event_target_search === void 0 ? void 0 : _event_target_search.value);\n        setSearchHistory((current)=>[\n                ...current,\n                queryString\n            ]);\n        if ((_event_target1 = event.target) === null || _event_target1 === void 0 ? void 0 : (_event_target_search1 = _event_target1.search) === null || _event_target_search1 === void 0 ? void 0 : _event_target_search1.value) {\n            router.push(\"/artwork?\".concat(queryString));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar, {\n                expanded: isExpanded,\n                expand: \"lg\",\n                // className=\"fixed-top navbar-dark bg-dark\"\n                className: \"fixed-top \".concat((_styles_MainNav_module_css__WEBPACK_IMPORTED_MODULE_7___default().mainNav), \" navbar-dark py-3\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Brand, {\n                            href: \"/\",\n                            children: \"NeoFood\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Toggle, {\n                            onClick: ()=>setIsExpanded((expand)=>!expand),\n                            \"aria-controls\": \"basic-navbar-nav\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar.Collapse, {\n                            id: \"basic-navbar-nav\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav, {\n                                    className: \"me-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            legacyBehavior: true,\n                                            passHref: true,\n                                            href: \"/\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                                                active: router.pathname === \"/\",\n                                                onClick: ()=>setIsExpanded(false),\n                                                children: \"Home\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            legacyBehavior: true,\n                                            passHref: true,\n                                            href: \"/search\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav.Link, {\n                                                active: router.pathname === \"/search\",\n                                                onClick: ()=>setIsExpanded(false),\n                                                children: \"Advanced Search\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this),\n                                \"\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                                    onSubmit: (e)=>handleSubmit(e),\n                                    className: \"d-flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Form.Control, {\n                                            type: \"search\",\n                                            placeholder: \"Search\",\n                                            className: \"me-2\",\n                                            \"aria-label\": \"Search\",\n                                            name: \"search\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                            type: \"submit\",\n                                            variant: \"outline-success\",\n                                            children: \"Search\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                \"\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Nav, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NavDropdown, {\n                                        onClick: ()=>setIsExpanded(false),\n                                        title: \"User Name\",\n                                        id: \"basic-nav-dropdown\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                legacyBehavior: true,\n                                                passHref: true,\n                                                href: \"/favourites\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NavDropdown.Item, {\n                                                    active: router.pathname === \"/favourites\",\n                                                    children: \"Favourites\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                legacyBehavior: true,\n                                                passHref: true,\n                                                href: \"/history\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NavDropdown.Item, {\n                                                    active: router.pathname === \"/history\",\n                                                    children: \"Search History\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\components\\\\MainNav.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(MainNav, \"PxytGBpXXCsv6iaiCJpF/gTz4b8=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = MainNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainNav);\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SS9ELDhEQUFDMUMsa0RBQUlBO2dEQUFDdUMsY0FBYztnREFBQ0MsUUFBUTtnREFBQ1AsTUFBSzswREFDakMsNEVBQUNoQyw2REFBZ0I7b0RBQUN3QyxRQUFReEIsT0FBT3lCLFFBQVEsS0FBSzs4REFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVN0RSw4REFBQ1c7Ozs7OzBCQUNELDhEQUFDQTs7Ozs7Ozs7Ozs7QUFHUDtHQXZGUzFDOztRQUNtQ0osMENBQU9BO1FBR2xDUixrREFBU0E7OztLQUpqQlk7QUF5RlQsK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluTmF2LmpzP2VmODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gIE5hdkRyb3Bkb3duLFxyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIE5hdixcclxuICBOYXZiYXIsXHJcbiAgQ29udGFpbmVyLFxyXG59IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlQXRvbSB9IGZyb20gXCJqb3RhaVwiO1xyXG5pbXBvcnQgeyBzZWFyY2hIaXN0b3J5QXRvbSB9IGZyb20gXCJAL3N0b3JlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL01haW5OYXYubW9kdWxlLmNzc1wiXHJcblxyXG5mdW5jdGlvbiBNYWluTmF2KHByb3BzKSB7XHJcbiAgY29uc3QgW3NlYXJjaEhpc3RvcnksIHNldFNlYXJjaEhpc3RvcnldID0gdXNlQXRvbShzZWFyY2hIaXN0b3J5QXRvbSk7XHJcbiAgY29uc3QgW2lzRXhwYW5kZWQsIHNldElzRXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNFeHBhbmRlZChmYWxzZSk7XHJcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IGB0aXRsZT10cnVlJnE9JHtldmVudC50YXJnZXQ/LnNlYXJjaD8udmFsdWV9YDtcclxuICAgIHNldFNlYXJjaEhpc3RvcnkoKGN1cnJlbnQpID0+IFsuLi5jdXJyZW50LCBxdWVyeVN0cmluZ10pO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldD8uc2VhcmNoPy52YWx1ZSkge1xyXG4gICAgICByb3V0ZXIucHVzaChgL2FydHdvcms/JHtxdWVyeVN0cmluZ31gKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxOYXZiYXJcclxuICAgICAgICBleHBhbmRlZD17aXNFeHBhbmRlZH1cclxuICAgICAgICBleHBhbmQ9XCJsZ1wiXHJcbiAgICAgICAgLy8gY2xhc3NOYW1lPVwiZml4ZWQtdG9wIG5hdmJhci1kYXJrIGJnLWRhcmtcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGZpeGVkLXRvcCAke3N0eWxlLm1haW5OYXZ9IG5hdmJhci1kYXJrIHB5LTNgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5OZW9Gb29kPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICA8TmF2YmFyLlRvZ2dsZVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0V4cGFuZGVkKChleHBhbmQpID0+ICFleHBhbmQpfVxyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgbGVnYWN5QmVoYXZpb3IgcGFzc0hyZWYgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGlua1xyXG4gICAgICAgICAgICAgICAgICBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvXCJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRXhwYW5kZWQoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBsZWdhY3lCZWhhdmlvciBwYXNzSHJlZiBocmVmPVwiL3NlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rXHJcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9zZWFyY2hcIn1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNFeHBhbmRlZChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFkdmFuY2VkIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTdWJtaXQoZSl9IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWUtMlwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgU2VhcmNoXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0V4cGFuZGVkKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiVXNlciBOYW1lXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBsZWdhY3lCZWhhdmlvciBwYXNzSHJlZiBocmVmPVwiL2Zhdm91cml0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Zhdm91cml0ZXNcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgRmF2b3VyaXRlc1xyXG4gICAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBsZWdhY3lCZWhhdmlvciBwYXNzSHJlZiBocmVmPVwiL2hpc3RvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09IFwiL2hpc3RvcnlcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoIEhpc3RvcnlcclxuICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5OYXY7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJOYXZEcm9wZG93biIsIkZvcm0iLCJCdXR0b24iLCJOYXYiLCJOYXZiYXIiLCJDb250YWluZXIiLCJ1c2VBdG9tIiwic2VhcmNoSGlzdG9yeUF0b20iLCJ1c2VTdGF0ZSIsInN0eWxlIiwiTWFpbk5hdiIsInByb3BzIiwic2VhcmNoSGlzdG9yeSIsInNldFNlYXJjaEhpc3RvcnkiLCJpc0V4cGFuZGVkIiwic2V0SXNFeHBhbmRlZCIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJxdWVyeVN0cmluZyIsInRhcmdldCIsInNlYXJjaCIsInZhbHVlIiwiY3VycmVudCIsInB1c2giLCJGcmFnbWVudCIsImV4cGFuZGVkIiwiZXhwYW5kIiwiY2xhc3NOYW1lIiwibWFpbk5hdiIsIkJyYW5kIiwiaHJlZiIsIlRvZ2dsZSIsIm9uQ2xpY2siLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCIsImxlZ2FjeUJlaGF2aW9yIiwicGFzc0hyZWYiLCJhY3RpdmUiLCJwYXRobmFtZSIsIm9uU3VibWl0IiwiZSIsIkNvbnRyb2wiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhcmlhLWxhYmVsIiwibmFtZSIsInZhcmlhbnQiLCJ0aXRsZSIsIkl0ZW0iLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MainNav.js\n"));

/***/ })

});