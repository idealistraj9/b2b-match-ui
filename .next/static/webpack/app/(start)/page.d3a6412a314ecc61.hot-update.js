"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(start)/page",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a7e49559530e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2MxODEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJhN2U0OTU1OTUzMGVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/promptText.tsx":
/*!***********************************!*\
  !*** ./components/promptText.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _ui_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.tsx\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/globals.css */ \"(app-pages-browser)/./app/globals.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst PromptText = ()=>{\n    _s();\n    const submitButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleKeyDown = (event)=>{\n        // Check if the pressed key is Enter (key code 13)\n        if (event.keyCode === 13) {\n            // Trigger the click event of the Submit button\n            submitButtonRef.current.click();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full items-center \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_textarea__WEBPACK_IMPORTED_MODULE_3__.Textarea, {\n                    placeholder: \"Type your message here.\",\n                    rows: 2,\n                    className: \"pl-4 text-secondary-foreground bg-card hover:bg-secondary rounded-xl text-lg w-11/12 border-[1px] hover:border-ring outline-none transition-all duration-500\",\n                    onKeyDown: handleKeyDown\n                }, void 0, false, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\components\\\\promptText.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col m-2 w-34\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            variant: \"outline\",\n                            className: \"bg-primary text-secondary text-sm h-7 border-white border \",\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\components\\\\promptText.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            variant: \"outline\",\n                            className: \"bg-primary text-secondary h-7 border-white border\",\n                            children: \"New\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\components\\\\promptText.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            variant: \"outline\",\n                            className: \"bg-primary text-secondary h-7 border-white border dis\",\n                            ref: submitButtonRef,\n                            onClick: ()=>{\n                                // Handle the submit logic here\n                                console.log(\"Submit button clicked\");\n                            },\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\components\\\\promptText.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\components\\\\promptText.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\components\\\\promptText.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(PromptText, \"fDnGUqjrSHTSSLr1S2msdc479To=\");\n_c = PromptText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PromptText);\nvar _c;\n$RefreshReg$(_c, \"PromptText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvbXB0VGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNDO0FBQ1c7QUFDUjtBQUViO0FBRTVCLE1BQU1JLGFBQWE7O0lBQ2pCLE1BQU1DLGtCQUFrQkosNkNBQU1BLENBQUM7SUFFL0IsTUFBTUssZ0JBQWdCLENBQUNDO1FBQ3JCLGtEQUFrRDtRQUNsRCxJQUFJQSxNQUFNQyxPQUFPLEtBQUssSUFBSTtZQUN4QiwrQ0FBK0M7WUFDL0NILGdCQUFnQkksT0FBTyxDQUFDQyxLQUFLO1FBQy9CO0lBQ0Y7SUFFQSxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNULGtEQUFRQTtvQkFDUFUsYUFBWTtvQkFDWkMsTUFBTTtvQkFDTkYsV0FBVTtvQkFDVkcsV0FBV1Q7Ozs7Ozs4QkFFYiw4REFBQ0s7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDVix5REFBTUE7NEJBQ0xjLFNBQVM7NEJBQ1RKLFdBQVU7c0NBQ1g7Ozs7OztzQ0FHRCw4REFBQ1YseURBQU1BOzRCQUNMYyxTQUFTOzRCQUNUSixXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNWLHlEQUFNQTs0QkFDTGMsU0FBUzs0QkFDVEosV0FBVTs0QkFDVkssS0FBS1o7NEJBQ0xhLFNBQVM7Z0NBQ1AsK0JBQStCO2dDQUMvQkMsUUFBUUMsR0FBRyxDQUFDOzRCQUNkO3NDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FoRE1oQjtLQUFBQTtBQWtETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb21wdFRleHQudHN4P2RjZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9idXR0b25cIjtcclxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiLi91aS90ZXh0YXJlYVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCIuL3VpL2xhYmVsXCI7XHJcbmltcG9ydCBcIi4uL2FwcC9nbG9iYWxzLmNzc1wiO1xyXG5cclxuY29uc3QgUHJvbXB0VGV4dCA9ICgpID0+IHtcclxuICBjb25zdCBzdWJtaXRCdXR0b25SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZXZlbnQ6IHsga2V5Q29kZTogbnVtYmVyOyB9KSA9PiB7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgcHJlc3NlZCBrZXkgaXMgRW50ZXIgKGtleSBjb2RlIDEzKVxyXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgIC8vIFRyaWdnZXIgdGhlIGNsaWNrIGV2ZW50IG9mIHRoZSBTdWJtaXQgYnV0dG9uXHJcbiAgICAgIHN1Ym1pdEJ1dHRvblJlZi5jdXJyZW50LmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIFwiPlxyXG4gICAgICAgIDxUZXh0YXJlYVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZSBoZXJlLlwiXHJcbiAgICAgICAgICByb3dzPXsyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LXNlY29uZGFyeS1mb3JlZ3JvdW5kIGJnLWNhcmQgaG92ZXI6Ymctc2Vjb25kYXJ5IHJvdW5kZWQteGwgdGV4dC1sZyB3LTExLzEyIGJvcmRlci1bMXB4XSBob3Zlcjpib3JkZXItcmluZyBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtLTIgdy0zNFwiPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PXtcIm91dGxpbmVcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSB0ZXh0LXNlY29uZGFyeSB0ZXh0LXNtIGgtNyBib3JkZXItd2hpdGUgYm9yZGVyIFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB2YXJpYW50PXtcIm91dGxpbmVcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHJpbWFyeSB0ZXh0LXNlY29uZGFyeSBoLTcgYm9yZGVyLXdoaXRlIGJvcmRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE5ld1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e1wib3V0bGluZVwifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHRleHQtc2Vjb25kYXJ5IGgtNyBib3JkZXItd2hpdGUgYm9yZGVyIGRpc1wiXHJcbiAgICAgICAgICAgIHJlZj17c3VibWl0QnV0dG9uUmVmfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSBzdWJtaXQgbG9naWMgaGVyZVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWl0IGJ1dHRvbiBjbGlja2VkXCIpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9tcHRUZXh0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJCdXR0b24iLCJUZXh0YXJlYSIsIlByb21wdFRleHQiLCJzdWJtaXRCdXR0b25SZWYiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJrZXlDb2RlIiwiY3VycmVudCIsImNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJyb3dzIiwib25LZXlEb3duIiwidmFyaWFudCIsInJlZiIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/promptText.tsx\n"));

/***/ })

});