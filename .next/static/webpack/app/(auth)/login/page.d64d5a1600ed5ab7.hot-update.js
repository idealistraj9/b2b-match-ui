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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst LoginForm = ()=>{\n    {\n        const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n        const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"bg-gray-50 dark:bg-gray-900\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center md:h-screen \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"flex items-center text-2xl font-semibold text-gray-900 dark:text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-8 h-8 mr-2\",\n                                src: \"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg\",\n                                alt: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, undefined),\n                            \"Flowbite\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-6 space-y-4 md:space-y-6 sm:p-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white\",\n                                    children: \"Sign in to your account\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    className: \"space-y-4 md:space-y-6\",\n                                    action: \"#\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"email\",\n                                                    className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                                    children: \"Your email\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                    lineNumber: 30,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"email\",\n                                                    name: \"email\",\n                                                    id: \"email\",\n                                                    className: \"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                                    placeholder: \"name@company.com\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"password\",\n                                                    className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                                    children: \"Password\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"password\",\n                                                    name: \"password\",\n                                                    id: \"password\",\n                                                    placeholder: \"••••••••\",\n                                                    className: \"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                                    required: true\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-start\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"flex items-center h-5\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                                id: \"remember\",\n                                                                \"aria-describedby\": \"remember\",\n                                                                type: \"checkbox\",\n                                                                className: \"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800\",\n                                                                required: true\n                                                            }, void 0, false, {\n                                                                fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                                lineNumber: 63,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"ml-3 text-sm\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                                htmlFor: \"remember\",\n                                                                className: \"text-gray-500 dark:text-gray-300\",\n                                                                children: \"Remember me\"\n                                                            }, void 0, false, {\n                                                                fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                                lineNumber: 72,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                            lineNumber: 71,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\",\n                                                    className: \"text-sm font-medium text-primary-600 hover:underline dark:text-primary-500\",\n                                                    children: \"Forgot password?\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800\",\n                                            children: \"Sign in\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm font-light text-gray-500 dark:text-gray-400\",\n                                            children: [\n                                                \"Don’t have an account yet?\",\n                                                \" \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\",\n                                                    className: \"font-medium text-primary-600 hover:underline dark:text-primary-500\",\n                                                    children: \"Sign up\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2\\\\b2-1\\\\my-app\\\\components\\\\LoginForm.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, undefined);\n    }\n};\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTG9naW5Gb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUNpQztBQUVqQyxNQUFNQyxZQUFZO0lBQ2hCO1FBQ0UsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO1FBQ25DLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUV6QyxxQkFDRSw4REFBQ007WUFBUUMsV0FBVTtzQkFDakIsNEVBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NDLE1BQUs7d0JBQ0xILFdBQVU7OzBDQUVWLDhEQUFDSTtnQ0FDQ0osV0FBVTtnQ0FDVkssS0FBSTtnQ0FDSkMsS0FBSTs7Ozs7OzRCQUNDOzs7Ozs7O2tDQUdULDhEQUFDTDt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDTztvQ0FBR1AsV0FBVTs4Q0FBMkY7Ozs7Ozs4Q0FHekcsOERBQUNRO29DQUFLUixXQUFVO29DQUF5QlMsUUFBTzs7c0RBQzlDLDhEQUFDUjs7OERBQ0MsOERBQUNTO29EQUNDQyxTQUFRO29EQUNSWCxXQUFVOzhEQUNYOzs7Ozs7OERBR0QsOERBQUNZO29EQUNDQyxNQUFLO29EQUNMQyxNQUFLO29EQUNMQyxJQUFHO29EQUNIZixXQUFVO29EQUNWZ0IsYUFBWTs7Ozs7Ozs7Ozs7O3NEQUdoQiw4REFBQ2Y7OzhEQUNDLDhEQUFDUztvREFDQ0MsU0FBUTtvREFDUlgsV0FBVTs4REFDWDs7Ozs7OzhEQUdELDhEQUFDWTtvREFDQ0MsTUFBSztvREFDTEMsTUFBSztvREFDTEMsSUFBRztvREFDSEMsYUFBWTtvREFDWmhCLFdBQVU7b0RBQ1ZpQixRQUFROzs7Ozs7Ozs7Ozs7c0RBR1osOERBQUNoQjs0Q0FBSUQsV0FBVTs7OERBQ2IsOERBQUNDO29EQUFJRCxXQUFVOztzRUFDYiw4REFBQ0M7NERBQUlELFdBQVU7c0VBQ2IsNEVBQUNZO2dFQUNDRyxJQUFHO2dFQUNIRyxvQkFBaUI7Z0VBQ2pCTCxNQUFLO2dFQUNMYixXQUFVO2dFQUNWaUIsUUFBUTs7Ozs7Ozs7Ozs7c0VBR1osOERBQUNoQjs0REFBSUQsV0FBVTtzRUFDYiw0RUFBQ1U7Z0VBQ0NDLFNBQVE7Z0VBQ1JYLFdBQVU7MEVBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzhEQUtMLDhEQUFDRTtvREFDQ0MsTUFBSztvREFDTEgsV0FBVTs4REFDWDs7Ozs7Ozs7Ozs7O3NEQUlILDhEQUFDbUI7NENBQ0NOLE1BQUs7NENBQ0xiLFdBQVU7c0RBQ1g7Ozs7OztzREFHRCw4REFBQ29COzRDQUFFcEIsV0FBVTs7Z0RBQXNEO2dEQUN0Qzs4REFDM0IsOERBQUNFO29EQUNDQyxNQUFLO29EQUNMSCxXQUFVOzhEQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBVWpCO0FBQ0Y7S0F6R01OO0FBMkdOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9naW5Gb3JtLnRzeD81YjA5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gIHtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTkwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWQ6aC1zY3JlZW4gXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04IGgtOCBtci0yXCJcclxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Zsb3diaXRlLnMzLmFtYXpvbmF3cy5jb20vYmxvY2tzL21hcmtldGluZy11aS9sb2dvLnN2Z1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgRmxvd2JpdGVcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IGRhcms6Ym9yZGVyIG1kOm10LTAgc206bWF4LXctbWQgeGw6cC0wIGRhcms6YmctZ3JheS04MDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgc3BhY2UteS00IG1kOnNwYWNlLXktNiBzbTpwLThcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbGVhZGluZy10aWdodCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIG1kOnRleHQtMnhsIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBpbiB0byB5b3VyIGFjY291bnRcclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIiBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBZb3VyIGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1wcmltYXJ5LTYwMCBmb2N1czpib3JkZXItcHJpbWFyeS02MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVAY29tcGFueS5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLigKLigKLigKLigKLigKLigKLigKLigKJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLXByaW1hcnktNjAwIGZvY3VzOmJvcmRlci1wcmltYXJ5LTYwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgaC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZW1lbWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJyZW1lbWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkIGJnLWdyYXktNTAgZm9jdXM6cmluZy0zIGZvY3VzOnJpbmctcHJpbWFyeS0zMDAgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmZvY3VzOnJpbmctcHJpbWFyeS02MDAgZGFyazpyaW5nLW9mZnNldC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJlbWVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZW1lbWJlciBtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5LTYwMCBob3Zlcjp1bmRlcmxpbmUgZGFyazp0ZXh0LXByaW1hcnktNTAwXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC13aGl0ZSBiZy1wcmltYXJ5LTYwMCBob3ZlcjpiZy1wcmltYXJ5LTcwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctcHJpbWFyeS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6YmctcHJpbWFyeS02MDAgZGFyazpob3ZlcjpiZy1wcmltYXJ5LTcwMCBkYXJrOmZvY3VzOnJpbmctcHJpbWFyeS04MDBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1saWdodCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICBEb27igJl0IGhhdmUgYW4gYWNjb3VudCB5ZXQ/e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXByaW1hcnktNjAwIGhvdmVyOnVuZGVybGluZSBkYXJrOnRleHQtcHJpbWFyeS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgU2lnbiB1cFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTG9naW5Gb3JtIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSIsImZvcm0iLCJhY3Rpb24iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYXJpYS1kZXNjcmliZWRieSIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/LoginForm.tsx\n"));

/***/ })

});