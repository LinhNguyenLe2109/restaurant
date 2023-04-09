"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ \"./node_modules/@fortawesome/fontawesome-svg-core/styles.css\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.mjs\");\n/* harmony import */ var _components_Introduction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Introduction */ \"./components/Introduction.js\");\n/* harmony import */ var _components_FoodMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FoodMenu */ \"./components/FoodMenu.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// prevent font awesome icon from being extremely large\n\n// Prevent fontawesome from adding its CSS since we did it manually above:\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__.config.autoAddCss = false; /* eslint-disable import/first */ \nfunction Home() {\n    _s();\n    const [cartIsShown, setCartIsShown] = useState(false);\n    const [orderList, setOrderList] = useState([]);\n    // add an item to the order list\n    const addAnItem = (itemDetails)=>{\n        //todo\n        setOrderList((curArray)=>{\n            // create an empty array\n            let newArray = [];\n            let found = 0;\n            if (curArray.length > 0) {\n                for (const dish of curArray){\n                    if (dish.id === itemDetails.id) {\n                        // if the dish is found in the order => update the total amount\n                        newArray.push({\n                            ...dish,\n                            amount: dish.amount + 1\n                        });\n                        found = 1;\n                    } else {\n                        newArray.push({\n                            ...dish\n                        });\n                    }\n                }\n            }\n            return found === 1 ? newArray : [\n                ...newArray,\n                {\n                    ...itemDetails,\n                    amount: 1\n                }\n            ];\n        });\n    };\n    // show modal\n    const showCartHandler = ()=>{\n        setCartIsShown(true);\n    };\n    // remove modal\n    const hideCartHandler = ()=>{\n        setCartIsShown(false);\n    };\n    let totalItem = orderList.reduce((sum, item)=>sum + item.amount, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"NeoFood\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Introduction__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\index.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FoodMenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\index.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Anwyll\\\\Documents\\\\Project and Test\\\\Programming Project\\\\CHONK PROJECT\\\\restaurant\\\\pages\\\\index.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IBFuoAZRrTy6SY9UvqV0ODcmEvg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQWFNQTtBQWJ1QjtBQUVxQjtBQUN4QjtBQUUxQix1REFBdUQ7QUFDRDtBQUN0RCwwRUFBMEU7QUFDZjtBQUNOO0FBQ1I7QUFDN0NNLGdGQUFpQixHQUFHLEtBQUssRUFBRSwrQkFBK0I7QUFJM0MsU0FBU0ksT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdDLFNBQVMsS0FBSztJQUNwRCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0YsU0FBUyxFQUFFO0lBQzdDLGdDQUFnQztJQUNoQyxNQUFNRyxZQUFZLENBQUNDLGNBQWdCO1FBQ2pDLE1BQU07UUFDTkYsYUFBYSxDQUFDRyxXQUFhO1lBQ3pCLHdCQUF3QjtZQUN4QixJQUFJQyxXQUFXLEVBQUU7WUFDakIsSUFBSUMsUUFBUTtZQUNaLElBQUlGLFNBQVNHLE1BQU0sR0FBRyxHQUFHO2dCQUN2QixLQUFLLE1BQU1DLFFBQVFKLFNBQVU7b0JBQzNCLElBQUlJLEtBQUtDLEVBQUUsS0FBS04sWUFBWU0sRUFBRSxFQUFFO3dCQUM5QiwrREFBK0Q7d0JBQy9ESixTQUFTSyxJQUFJLENBQUM7NEJBQUUsR0FBR0YsSUFBSTs0QkFBRUcsUUFBUUgsS0FBS0csTUFBTSxHQUFDO3dCQUFFO3dCQUMvQ0wsUUFBUTtvQkFDVixPQUVLO3dCQUNIRCxTQUFTSyxJQUFJLENBQUM7NEJBQUUsR0FBR0YsSUFBSTt3QkFBQztvQkFDMUIsQ0FBQztnQkFDSDtZQUNGLENBQUM7WUFDRCxPQUFPRixVQUFVLElBQ2JELFdBQ0E7bUJBQUlBO2dCQUFVO29CQUFFLEdBQUdGLFdBQVc7b0JBQUVRLFFBQVE7Z0JBQUU7YUFBRTtRQUNsRDtJQUNGO0lBQ0EsYUFBYTtJQUNiLE1BQU1DLGtCQUFrQixJQUFNO1FBQzVCZCxlQUFlLElBQUk7SUFDckI7SUFDQSxlQUFlO0lBQ2YsTUFBTWUsa0JBQWtCLElBQU07UUFDNUJmLGVBQWUsS0FBSztJQUN0QjtJQUNBLElBQUlnQixZQUFZZCxVQUFVZSxNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsT0FBU0QsTUFBS0MsS0FBS04sTUFBTSxFQUFFO0lBQ2xFLHFCQUNFLDhEQUFDcEIsdURBQWM7OzBCQUNiLDhEQUFDSixrREFBSUE7O2tDQUNILDhEQUFDZ0M7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7MEJBQ0MsNEVBQUNuQyx1REFBYzs7c0NBQ2IsOERBQUNFLGdFQUFZQTs7Ozs7c0NBQ2IsOERBQUNDLDREQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQixDQUFDO0dBckR1QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgeyBSb3csIENvbCwgSW1hZ2UgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8vIHByZXZlbnQgZm9udCBhd2Vzb21lIGljb24gZnJvbSBiZWluZyBleHRyZW1lbHkgbGFyZ2VcbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzXCI7XG4vLyBQcmV2ZW50IGZvbnRhd2Vzb21lIGZyb20gYWRkaW5nIGl0cyBDU1Mgc2luY2Ugd2UgZGlkIGl0IG1hbnVhbGx5IGFib3ZlOlxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL0ludHJvZHVjdGlvblwiO1xuaW1wb3J0IEZvb2RNZW51IGZyb20gXCJAL2NvbXBvbmVudHMvRm9vZE1lbnVcIjtcbmNvbmZpZy5hdXRvQWRkQ3NzID0gZmFsc2U7IC8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9maXJzdCAqL1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjYXJ0SXNTaG93biwgc2V0Q2FydElzU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbb3JkZXJMaXN0LCBzZXRPcmRlckxpc3RdID0gdXNlU3RhdGUoW10pO1xuICAvLyBhZGQgYW4gaXRlbSB0byB0aGUgb3JkZXIgbGlzdFxuICBjb25zdCBhZGRBbkl0ZW0gPSAoaXRlbURldGFpbHMpID0+IHtcbiAgICAvL3RvZG9cbiAgICBzZXRPcmRlckxpc3QoKGN1ckFycmF5KSA9PiB7XG4gICAgICAvLyBjcmVhdGUgYW4gZW1wdHkgYXJyYXlcbiAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xuICAgICAgbGV0IGZvdW5kID0gMDtcbiAgICAgIGlmIChjdXJBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAoY29uc3QgZGlzaCBvZiBjdXJBcnJheSkge1xuICAgICAgICAgIGlmIChkaXNoLmlkID09PSBpdGVtRGV0YWlscy5pZCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGRpc2ggaXMgZm91bmQgaW4gdGhlIG9yZGVyID0+IHVwZGF0ZSB0aGUgdG90YWwgYW1vdW50XG4gICAgICAgICAgICBuZXdBcnJheS5wdXNoKHsgLi4uZGlzaCwgYW1vdW50OiBkaXNoLmFtb3VudCsxIH0pO1xuICAgICAgICAgICAgZm91bmQgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBvciBqdXN0IGFkZCBpbnRvIHRoZSBuZXcgYXJyYXlcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld0FycmF5LnB1c2goeyAuLi5kaXNoIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZvdW5kID09PSAxXG4gICAgICAgID8gbmV3QXJyYXlcbiAgICAgICAgOiBbLi4ubmV3QXJyYXksIHsgLi4uaXRlbURldGFpbHMsIGFtb3VudDogMSB9XTtcbiAgICB9KTtcbiAgfTtcbiAgLy8gc2hvdyBtb2RhbFxuICBjb25zdCBzaG93Q2FydEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0Q2FydElzU2hvd24odHJ1ZSk7XG4gIH07XG4gIC8vIHJlbW92ZSBtb2RhbFxuICBjb25zdCBoaWRlQ2FydEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2V0Q2FydElzU2hvd24oZmFsc2UpO1xuICB9O1xuICBsZXQgdG90YWxJdGVtID0gb3JkZXJMaXN0LnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gK2l0ZW0uYW1vdW50LCAwKVxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TmVvRm9vZDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8SW50cm9kdWN0aW9uLz5cbiAgICAgICAgICA8Rm9vZE1lbnUvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgPC9tYWluPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwiUm93IiwiQ29sIiwiSW1hZ2UiLCJSZWFjdCIsImNvbmZpZyIsIkludHJvZHVjdGlvbiIsIkZvb2RNZW51IiwiYXV0b0FkZENzcyIsIkhvbWUiLCJjYXJ0SXNTaG93biIsInNldENhcnRJc1Nob3duIiwidXNlU3RhdGUiLCJvcmRlckxpc3QiLCJzZXRPcmRlckxpc3QiLCJhZGRBbkl0ZW0iLCJpdGVtRGV0YWlscyIsImN1ckFycmF5IiwibmV3QXJyYXkiLCJmb3VuZCIsImxlbmd0aCIsImRpc2giLCJpZCIsInB1c2giLCJhbW91bnQiLCJzaG93Q2FydEhhbmRsZXIiLCJoaWRlQ2FydEhhbmRsZXIiLCJ0b3RhbEl0ZW0iLCJyZWR1Y2UiLCJzdW0iLCJpdGVtIiwiRnJhZ21lbnQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});