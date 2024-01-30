"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/about/page",{

/***/ "(app-pages-browser)/./app/(pages)/about/page.tsx":
/*!************************************!*\
  !*** ./app/(pages)/about/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nasync function fetchHtmlContent() {\n    const repoOwner = \"idealistraj9\";\n    const repoName = \"b2Match-gui\";\n    const filePath = \"index.html\"; // Update with the actual path\n    const apiUrl = \"https://api.github.com/repos/\".concat(repoOwner, \"/\").concat(repoName, \"/contents/\").concat(filePath);\n    try {\n        const response = await fetch(apiUrl);\n        const data = await response.json();\n        // Use the 'content' property directly for HTML content\n        const base64Content = data.content;\n        // Decode base64 content\n        const htmlContent = atob(base64Content);\n        return htmlContent;\n    } catch (error) {\n        console.error(\"Error fetching HTML content:\", error);\n        return null;\n    }\n}\nfunction Home() {\n    _s();\n    const [htmlContent, setHtmlContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Call the fetchHtmlContent function when the component is mounted\n        const fetchData = async ()=>{\n            const content = await fetchHtmlContent();\n            if (content) {\n                console.log(\"HTML Content:\", content);\n                setHtmlContent(content);\n            // Update your component state or do something with the HTML content\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-secondary p-10 pt-3 flex flex-col text-center justify-center h-screen overflow-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-5xl mt-5 font-bold  pl-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"bg-gradient-to-r from-green-600 via-violet-900-500 to-green-950 inline-block text-transparent bg-clip-text\",\n                        children: \"About Us\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-secondary flex justify-center items-center m-3 rounded-sm border-background mt-3 pt-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                            className: \"flex w-2/4 m-5 p-10 items-center text-center justify-center flex-col shadow-none bg-secondary border-none\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"./about.jpg\",\n                                    alt: \"\",\n                                    className: \"rounded-full\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-2xl font-bold mt-5 \",\n                                    children: \"We want to make a positive contribution to ensuring that artificial intelligence is used correctly.\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                            className: \"flex w-2/4 m-5 p-10 flex-col text-left bg-secondary border-none shadow-none\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                    className: \"mt-5 text-xl\",\n                                    children: \"Authorship\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                                    className: \"text-[20px]\",\n                                    children: \"B2Bmatch.ch is a service provided by: BildKom International GmbH, Zurich\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                    className: \"mt-5 text-xl\",\n                                    children: \"Management\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                                    className: \"text-[20px]\",\n                                    children: \"Dr. Patrik Zwahlen\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                                    className: \"mt-5 text-xl\",\n                                    children: \"We would be happy to help you with your search.\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardDescription, {\n                                    className: \"text-[20px]\",\n                                    children: \"Our databases work and we can deliver. Creating the prompts is challenging. That's why we're taking care of it personally at the moment. We should be ready by the beginning of 2024 so that you can search independently and without our help.\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    dangerouslySetInnerHTML: {\n                        __html: htmlContent\n                    }\n                }, void 0, false, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"Mw/78g8TTegwEVSla662nAvZEpo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocGFnZXMpL2Fib3V0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytCO0FBUUQ7QUFDYztBQUNIO0FBRXpDLGVBQWVPO0lBQ2IsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLFdBQVcsY0FBYyw4QkFBOEI7SUFFN0QsTUFBTUMsU0FBUyxnQ0FBNkNGLE9BQWJELFdBQVUsS0FBd0JFLE9BQXJCRCxVQUFTLGNBQXFCLE9BQVRDO0lBRWpGLElBQUk7UUFDRixNQUFNRSxXQUFXLE1BQU1DLE1BQU1GO1FBQzdCLE1BQU1HLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtRQUVoQyx1REFBdUQ7UUFDdkQsTUFBTUMsZ0JBQWdCRixLQUFLRyxPQUFPO1FBRWxDLHdCQUF3QjtRQUN4QixNQUFNQyxjQUFjQyxLQUFLSDtRQUV6QixPQUFPRTtJQUNULEVBQUUsT0FBT0UsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxPQUFPO0lBQ1Q7QUFDRjtBQUVlLFNBQVNFOztJQUN0QixNQUFNLENBQUNKLGFBQWFLLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRS9DRCxnREFBU0EsQ0FBQztRQUNSLG1FQUFtRTtRQUNuRSxNQUFNb0IsWUFBWTtZQUNoQixNQUFNUCxVQUFVLE1BQU1WO1lBQ3RCLElBQUlVLFNBQVM7Z0JBQ1hJLFFBQVFJLEdBQUcsQ0FBQyxpQkFBaUJSO2dCQUM3Qk0sZUFBZU47WUFDZixvRUFBb0U7WUFDdEU7UUFDRjtRQUVBTztJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFO2tCQUNFLDRFQUFDRTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUtELFdBQVU7OEJBQ2QsNEVBQUNFO3dCQUFHRixXQUFVO2tDQUE2Rzs7Ozs7Ozs7Ozs7OEJBSTdILDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUMxQixxREFBSUE7NEJBQUMwQixXQUFVOzs4Q0FDZCw4REFBQ0c7b0NBQUlDLEtBQUk7b0NBQWNDLEtBQUk7b0NBQUdMLFdBQVU7Ozs7Ozs4Q0FDeEMsOERBQUNFO29DQUFHRixXQUFVOzhDQUEyQjs7Ozs7Ozs7Ozs7O3NDQUszQyw4REFBQzFCLHFEQUFJQTs0QkFBQzBCLFdBQVU7OzhDQUNkLDhEQUFDeEIsMERBQVNBO29DQUFDd0IsV0FBVTs4Q0FBZTs7Ozs7OzhDQUNwQyw4REFBQ3pCLGdFQUFlQTtvQ0FBQ3lCLFdBQVU7OENBQWM7Ozs7Ozs4Q0FJekMsOERBQUN4QiwwREFBU0E7b0NBQUN3QixXQUFVOzhDQUFlOzs7Ozs7OENBQ3BDLDhEQUFDekIsZ0VBQWVBO29DQUFDeUIsV0FBVTs4Q0FBYzs7Ozs7OzhDQUd6Qyw4REFBQ3hCLDBEQUFTQTtvQ0FBQ3dCLFdBQVU7OENBQWU7Ozs7Ozs4Q0FHcEMsOERBQUN6QixnRUFBZUE7b0NBQUN5QixXQUFVOzhDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBUTdDLDhEQUFDRDtvQkFBSU8seUJBQXlCO3dCQUFFQyxRQUFRaEI7b0JBQVk7Ozs7Ozs4QkFDcEQsOERBQUNaLDBEQUFNQTs7Ozs7Ozs7Ozs7O0FBSWY7R0ExRHdCZ0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhwYWdlcykvYWJvdXQvcGFnZS50c3g/NTQzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkRGVzY3JpcHRpb24sXHJcbiAgQ2FyZEZvb3RlcixcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRUaXRsZSxcclxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEh0bWxDb250ZW50KCkge1xyXG4gIGNvbnN0IHJlcG9Pd25lciA9IFwiaWRlYWxpc3RyYWo5XCI7XHJcbiAgY29uc3QgcmVwb05hbWUgPSBcImIyTWF0Y2gtZ3VpXCI7XHJcbiAgY29uc3QgZmlsZVBhdGggPSBcImluZGV4Lmh0bWxcIjsgLy8gVXBkYXRlIHdpdGggdGhlIGFjdHVhbCBwYXRoXHJcblxyXG4gIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7cmVwb093bmVyfS8ke3JlcG9OYW1lfS9jb250ZW50cy8ke2ZpbGVQYXRofWA7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIC8vIFVzZSB0aGUgJ2NvbnRlbnQnIHByb3BlcnR5IGRpcmVjdGx5IGZvciBIVE1MIGNvbnRlbnRcclxuICAgIGNvbnN0IGJhc2U2NENvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XHJcblxyXG4gICAgLy8gRGVjb2RlIGJhc2U2NCBjb250ZW50XHJcbiAgICBjb25zdCBodG1sQ29udGVudCA9IGF0b2IoYmFzZTY0Q29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIGh0bWxDb250ZW50O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgSFRNTCBjb250ZW50OlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2h0bWxDb250ZW50LCBzZXRIdG1sQ29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIENhbGwgdGhlIGZldGNoSHRtbENvbnRlbnQgZnVuY3Rpb24gd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IGZldGNoSHRtbENvbnRlbnQoKTtcclxuICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhUTUwgQ29udGVudDpcIiwgY29udGVudCk7XHJcbiAgICAgICAgc2V0SHRtbENvbnRlbnQoY29udGVudCk7XHJcbiAgICAgICAgLy8gVXBkYXRlIHlvdXIgY29tcG9uZW50IHN0YXRlIG9yIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBIVE1MIGNvbnRlbnRcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IHAtMTAgcHQtMyBmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtdC01IGZvbnQtYm9sZCAgcGwtNlwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi02MDAgdmlhLXZpb2xldC05MDAtNTAwIHRvLWdyZWVuLTk1MCBpbmxpbmUtYmxvY2sgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHRcIj5cclxuICAgICAgICAgICAgQWJvdXQgVXNcclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG0tMyByb3VuZGVkLXNtIGJvcmRlci1iYWNrZ3JvdW5kIG10LTMgcHQtMFwiPlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZmxleCB3LTIvNCBtLTUgcC0xMCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgc2hhZG93LW5vbmUgYmctc2Vjb25kYXJ5IGJvcmRlci1ub25lXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hYm91dC5qcGdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG10LTUgXCI+XHJcbiAgICAgICAgICAgICAgV2Ugd2FudCB0byBtYWtlIGEgcG9zaXRpdmUgY29udHJpYnV0aW9uIHRvIGVuc3VyaW5nIHRoYXRcclxuICAgICAgICAgICAgICBhcnRpZmljaWFsIGludGVsbGlnZW5jZSBpcyB1c2VkIGNvcnJlY3RseS5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImZsZXggdy0yLzQgbS01IHAtMTAgZmxleC1jb2wgdGV4dC1sZWZ0IGJnLXNlY29uZGFyeSBib3JkZXItbm9uZSBzaGFkb3ctbm9uZVwiPlxyXG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cIm10LTUgdGV4dC14bFwiPkF1dGhvcnNoaXA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XVwiPlxyXG4gICAgICAgICAgICAgIEIyQm1hdGNoLmNoIGlzIGEgc2VydmljZSBwcm92aWRlZCBieTogQmlsZEtvbSBJbnRlcm5hdGlvbmFsIEdtYkgsXHJcbiAgICAgICAgICAgICAgWnVyaWNoXHJcbiAgICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cIm10LTUgdGV4dC14bFwiPk1hbmFnZW1lbnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XVwiPlxyXG4gICAgICAgICAgICAgIERyLiBQYXRyaWsgWndhaGxlblxyXG4gICAgICAgICAgICA8L0NhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJtdC01IHRleHQteGxcIj5cclxuICAgICAgICAgICAgICBXZSB3b3VsZCBiZSBoYXBweSB0byBoZWxwIHlvdSB3aXRoIHlvdXIgc2VhcmNoLlxyXG4gICAgICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XVwiPlxyXG4gICAgICAgICAgICAgIE91ciBkYXRhYmFzZXMgd29yayBhbmQgd2UgY2FuIGRlbGl2ZXIuIENyZWF0aW5nIHRoZSBwcm9tcHRzIGlzXHJcbiAgICAgICAgICAgICAgY2hhbGxlbmdpbmcuIFRoYXQncyB3aHkgd2UncmUgdGFraW5nIGNhcmUgb2YgaXQgcGVyc29uYWxseSBhdCB0aGVcclxuICAgICAgICAgICAgICBtb21lbnQuIFdlIHNob3VsZCBiZSByZWFkeSBieSB0aGUgYmVnaW5uaW5nIG9mIDIwMjQgc28gdGhhdCB5b3VcclxuICAgICAgICAgICAgICBjYW4gc2VhcmNoIGluZGVwZW5kZW50bHkgYW5kIHdpdGhvdXQgb3VyIGhlbHAuXHJcbiAgICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sQ29udGVudCB9fSAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJDYXJkRGVzY3JpcHRpb24iLCJDYXJkVGl0bGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvb3RlciIsImZldGNoSHRtbENvbnRlbnQiLCJyZXBvT3duZXIiLCJyZXBvTmFtZSIsImZpbGVQYXRoIiwiYXBpVXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiYmFzZTY0Q29udGVudCIsImNvbnRlbnQiLCJodG1sQ29udGVudCIsImF0b2IiLCJlcnJvciIsImNvbnNvbGUiLCJIb21lIiwic2V0SHRtbENvbnRlbnQiLCJmZXRjaERhdGEiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiaDEiLCJpbWciLCJzcmMiLCJhbHQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(pages)/about/page.tsx\n"));

/***/ })

});