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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Cart */ \"./components/Cart.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jotai */ \"./node_modules/jotai/esm/index.mjs\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store */ \"./store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const [cartIsShown, setCartIsShown] = (0,jotai__WEBPACK_IMPORTED_MODULE_8__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_7__.cartIsShownAtom);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_4__.SWRConfig, {\n            value: {\n                fetcher: async (url)=>{\n                    const res = await fetch(url);\n                    // If the status code is not in the range 200-299,\n                    // we still try to parse and throw it.\n                    if (!res.ok) {\n                        const error = new Error(\"An error occurred while fetching the data.\");\n                        // Attach extra info to the error object.\n                        error.info = await res.json();\n                        error.status = res.status;\n                        throw error;\n                    }\n                    return res.json();\n                }\n            },\n            children: [\n                cartIsShown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\_app.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\_app.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\_app.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\_app.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"flGuFvmD3f0+iWWW86/0fSBxdqE=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_8__.useAtom\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDZ0I7QUFDTDtBQUNUO0FBQ0M7QUFDSTtBQUNMO0FBQ1U7QUFFM0IsU0FBU00sSUFBSSxLQUF3QixFQUFFO1FBQTFCLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQXhCOztJQUMxQixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR04sOENBQU9BLENBQUNDLG1EQUFlQTtJQUU3RCxxQkFDRSw4REFBQ0wsMERBQU1BO2tCQUNMLDRFQUFDQywwQ0FBU0E7WUFDUlUsT0FBTztnQkFDTEMsU0FBUyxPQUFPQyxNQUFRO29CQUN0QixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GO29CQUN4QixrREFBa0Q7b0JBQ2xELHNDQUFzQztvQkFDdEMsSUFBSSxDQUFDQyxJQUFJRSxFQUFFLEVBQUU7d0JBQ1gsTUFBTUMsUUFBUSxJQUFJQyxNQUNoQjt3QkFFRix5Q0FBeUM7d0JBQ3pDRCxNQUFNRSxJQUFJLEdBQUcsTUFBTUwsSUFBSU0sSUFBSTt3QkFDM0JILE1BQU1JLE1BQU0sR0FBR1AsSUFBSU8sTUFBTTt3QkFDekIsTUFBTUosTUFBTTtvQkFDZCxDQUFDO29CQUNELE9BQU9ILElBQUlNLElBQUk7Z0JBQ2pCO1lBQ0Y7O2dCQUVDWCw2QkFDQyw4REFBQ04sd0RBQUlBOzs7Ozs4QkFFUCw4REFBQ0k7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztHQS9CdUJGOztRQUNnQkYsMENBQU9BOzs7S0FEdkJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBTV1JDb25maWcgfSBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIkAvY29tcG9uZW50cy9DYXJ0XCI7XG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSBcImpvdGFpXCI7XG5pbXBvcnQgeyBjYXJ0SXNTaG93bkF0b20gfSBmcm9tIFwiQC9zdG9yZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFtjYXJ0SXNTaG93biwgc2V0Q2FydElzU2hvd25dID0gdXNlQXRvbShjYXJ0SXNTaG93bkF0b20pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxTV1JDb25maWdcbiAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICBmZXRjaGVyOiBhc3luYyAodXJsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHN0YXR1cyBjb2RlIGlzIG5vdCBpbiB0aGUgcmFuZ2UgMjAwLTI5OSxcbiAgICAgICAgICAgIC8vIHdlIHN0aWxsIHRyeSB0byBwYXJzZSBhbmQgdGhyb3cgaXQuXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIHRoZSBkYXRhLlwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIC8vIEF0dGFjaCBleHRyYSBpbmZvIHRvIHRoZSBlcnJvciBvYmplY3QuXG4gICAgICAgICAgICAgIGVycm9yLmluZm8gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgICBlcnJvci5zdGF0dXMgPSByZXMuc3RhdHVzO1xuICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjYXJ0SXNTaG93biAmJiAoXG4gICAgICAgICAgPENhcnQgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9TV1JDb25maWc+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiU1dSQ29uZmlnIiwidXNlU3RhdGUiLCJDYXJ0IiwidXNlQXRvbSIsImNhcnRJc1Nob3duQXRvbSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNhcnRJc1Nob3duIiwic2V0Q2FydElzU2hvd24iLCJ2YWx1ZSIsImZldGNoZXIiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsIm9rIiwiZXJyb3IiLCJFcnJvciIsImluZm8iLCJqc29uIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});