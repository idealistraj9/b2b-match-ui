"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/login/page",{

/***/ "(app-pages-browser)/./components/LoginForm.tsx":
/*!**********************************!*\
  !*** ./components/LoginForm.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LoginForm = ()=>{\n    {\n        const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n        const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"selection:bg-purple-500 selection:text-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-8 flex-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto overflow-hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-5xl font-bold text-purple-700\",\n                                    children: \"Welcome back!\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                    lineNumber: 14,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"mt-12\",\n                                    action: \"\",\n                                    method: \"POST\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"email\",\n                                                    name: \"email\",\n                                                    type: \"text\",\n                                                    className: \"peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-700\",\n                                                    placeholder: \"john@doe.com\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                    lineNumber: 20,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"email\",\n                                                    className: \"absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm\",\n                                                    children: \"Email address\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                    lineNumber: 27,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 19,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-10 relative\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"password\",\n                                                    type: \"password\",\n                                                    name: \"password\",\n                                                    className: \"peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-700\",\n                                                    placeholder: \"Password\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"password\",\n                                                    className: \"absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm\",\n                                                    children: \"Password\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"submit\",\n                                            value: \"Sign in\",\n                                            className: \"mt-20 px-8 py-4 uppercase rounded-full bg-purple-700 hover:bg-purple-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-purple-500 focus:ring-opacity-80 cursor-pointer\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    className: \"mt-4 block text-sm text-center font-medium text-purple-700 hover:underline focus:outline-none focus:ring-2 focus:ring-purple-500\",\n                                    children: [\n                                        \" \",\n                                        \"Forgot your password?\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined);\n    }\n};\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTG9naW5Gb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFpQztBQUVqQyxNQUFNQyxZQUFZO0lBQ2hCO1FBQ0UsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO1FBQ25DLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUV6QyxxQkFDRSw4REFBQ007WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBR0QsV0FBVTs4Q0FBcUM7Ozs7Ozs4Q0FJbkQsOERBQUNFO29DQUFLRixXQUFVO29DQUFRRyxRQUFPO29DQUFHQyxRQUFPOztzREFDdkMsOERBQUNMOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ0s7b0RBQ0NDLElBQUc7b0RBQ0hDLE1BQUs7b0RBQ0xDLE1BQUs7b0RBQ0xSLFdBQVU7b0RBQ1ZTLGFBQVk7Ozs7Ozs4REFFZCw4REFBQ0M7b0RBQ0NDLFNBQVE7b0RBQ1JYLFdBQVU7OERBQ1g7Ozs7Ozs7Ozs7OztzREFJSCw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDSztvREFDQ0MsSUFBRztvREFDSEUsTUFBSztvREFDTEQsTUFBSztvREFDTFAsV0FBVTtvREFDVlMsYUFBWTs7Ozs7OzhEQUVkLDhEQUFDQztvREFDQ0MsU0FBUTtvREFDUlgsV0FBVTs4REFDWDs7Ozs7Ozs7Ozs7O3NEQUtILDhEQUFDSzs0Q0FDQ0csTUFBSzs0Q0FDTEksT0FBTTs0Q0FDTlosV0FBVTs7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDYTtvQ0FDQ0MsTUFBSztvQ0FDTGQsV0FBVTs7d0NBRVQ7d0NBQUk7d0NBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRdEM7QUFDRjtLQW5FTU47QUFxRU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0udHN4PzViMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvbjpiZy1wdXJwbGUtNTAwIHNlbGVjdGlvbjp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggZmxleC0xXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtOFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LXB1cnBsZS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgV2VsY29tZSBiYWNrIVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC0xMlwiIGFjdGlvbj1cIlwiIG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVlciBoLTEwIHctZnVsbCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHBsYWNlaG9sZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItcHVycGxlLTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImpvaG5AZG9lLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgLXRvcC0zLjUgdGV4dC1ncmF5LTYwMCB0ZXh0LXNtIHRyYW5zaXRpb24tYWxsIHBlZXItcGxhY2Vob2xkZXItc2hvd246dGV4dC1iYXNlIHBlZXItcGxhY2Vob2xkZXItc2hvd246dGV4dC1ncmF5LTQwMCBwZWVyLXBsYWNlaG9sZGVyLXNob3duOnRvcC0yIHBlZXItZm9jdXM6LXRvcC0zLjUgcGVlci1mb2N1czp0ZXh0LWdyYXktNjAwIHBlZXItZm9jdXM6dGV4dC1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVlciBoLTEwIHctZnVsbCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHBsYWNlaG9sZGVyLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItcHVycGxlLTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCAtdG9wLTMuNSB0ZXh0LWdyYXktNjAwIHRleHQtc20gdHJhbnNpdGlvbi1hbGwgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0ZXh0LWJhc2UgcGVlci1wbGFjZWhvbGRlci1zaG93bjp0ZXh0LWdyYXktNDAwIHBlZXItcGxhY2Vob2xkZXItc2hvd246dG9wLTIgcGVlci1mb2N1czotdG9wLTMuNSBwZWVyLWZvY3VzOnRleHQtZ3JheS02MDAgcGVlci1mb2N1czp0ZXh0LXNtXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTaWduIGluXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yMCBweC04IHB5LTQgdXBwZXJjYXNlIHJvdW5kZWQtZnVsbCBiZy1wdXJwbGUtNzAwIGhvdmVyOmJnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIGJsb2NrIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctcHVycGxlLTUwMCBmb2N1czpyaW5nLW9wYWNpdHktODAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IGJsb2NrIHRleHQtc20gdGV4dC1jZW50ZXIgZm9udC1tZWRpdW0gdGV4dC1wdXJwbGUtNzAwIGhvdmVyOnVuZGVybGluZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTUwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgRm9yZ290IHlvdXIgcGFzc3dvcmQ/e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMb2dpbkZvcm0iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImFjdGlvbiIsIm1ldGhvZCIsImlucHV0IiwiaWQiLCJuYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJodG1sRm9yIiwidmFsdWUiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/LoginForm.tsx\n"));

/***/ })

});