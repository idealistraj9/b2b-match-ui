"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/contact/page",{

/***/ "(app-pages-browser)/./app/(pages)/contact/page.tsx":
/*!**************************************!*\
  !*** ./app/(pages)/contact/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Imprint; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nasync function fetchHtmlContent() {\n    const repoOwner = \"preet665\";\n    const repoName = \"b2b-match-ui-docs\";\n    const filePath = \"contact.html\"; // Update with the actual path\n    const apiUrl = \"https://api.github.com/repos/\".concat(repoOwner, \"/\").concat(repoName, \"/contents/\").concat(filePath);\n    try {\n        const response = await fetch(apiUrl);\n        const data = await response.json();\n        // Use the 'content' property directly for HTML content\n        const base64Content = data.content;\n        // Decode base64 content\n        const htmlContent = atob(base64Content);\n        return htmlContent;\n    } catch (error) {\n        console.error(\"Error fetching HTML content:\", error);\n        return null;\n    }\n}\nfunction Imprint() {\n    _s();\n    const [htmlContent, setHtmlContent] = react__WEBPACK_IMPORTED_MODULE_1__.useState(\"\");\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        // Call the fetchHtmlContent function when the component is mounted\n        const fetchData = async ()=>{\n            const content = await fetchHtmlContent();\n            if (content) {\n                console.log(\"HTML Content:\", content);\n                setHtmlContent(content);\n            // Update your component state or do something with the HTML content\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-[#e0e9d2] p-10 pt-3 flex flex-col text-center justify-center h-full overflow-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: htmlContent\n                        }\n                    }, void 0, false, {\n                        fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\contact\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\contact\\\\page.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\contact\\\\page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\contact\\\\page.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Imprint, \"Mw/78g8TTegwEVSla662nAvZEpo=\");\n_c = Imprint;\nvar _c;\n$RefreshReg$(_c, \"Imprint\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocGFnZXMpL2NvbnRhY3QvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMrQjtBQVVVO0FBSXpDLGVBQWVFO0lBQ2IsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLFdBQVcsZ0JBQWdCLDhCQUE4QjtJQUUvRCxNQUFNQyxTQUFTLGdDQUE2Q0YsT0FBYkQsV0FBVSxLQUF3QkUsT0FBckJELFVBQVMsY0FBcUIsT0FBVEM7SUFFakYsSUFBSTtRQUNGLE1BQU1FLFdBQVcsTUFBTUMsTUFBTUY7UUFDN0IsTUFBTUcsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1FBRWhDLHVEQUF1RDtRQUN2RCxNQUFNQyxnQkFBZ0JGLEtBQUtHLE9BQU87UUFFbEMsd0JBQXdCO1FBQ3hCLE1BQU1DLGNBQWNDLEtBQUtIO1FBRXpCLE9BQU9FO0lBQ1QsRUFBRSxPQUFPRSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDLE9BQU87SUFDVDtBQUNGO0FBQ2UsU0FBU0U7O0lBQ3RCLE1BQU0sQ0FBQ0osYUFBYUssZUFBZSxHQUFHbEIsMkNBQWMsQ0FBQztJQUVyREEsNENBQWUsQ0FBQztRQUNkLG1FQUFtRTtRQUNuRSxNQUFNcUIsWUFBWTtZQUNoQixNQUFNVCxVQUFVLE1BQU1WO1lBQ3RCLElBQUlVLFNBQVM7Z0JBQ1hJLFFBQVFNLEdBQUcsQ0FBQyxpQkFBaUJWO2dCQUM3Qk0sZUFBZU47WUFDZixvRUFBb0U7WUFDdEU7UUFDRjtRQUVBUztJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFO2tCQUNFLDRFQUFDRTtZQUFJQyxXQUFVOzs4QkFDZiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQUcsNEVBQUNEO3dCQUFLRSx5QkFBeUI7NEJBQUVDLFFBQVFiO3dCQUFZOzs7Ozs7Ozs7Ozs4QkFDckUsOERBQUNaLDBEQUFNQTs7Ozs7Ozs7Ozs7O0FBSWY7R0F4QndCZ0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhwYWdlcykvY29udGFjdC9wYWdlLnRzeD80YzRmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRDb250ZW50LFxyXG4gIENhcmREZXNjcmlwdGlvbixcclxuICBDYXJkRm9vdGVyLFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgQ2FyZFRpdGxlLFxyXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2FyZFwiO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcclxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoSHRtbENvbnRlbnQoKSB7XHJcbiAgY29uc3QgcmVwb093bmVyID0gXCJwcmVldDY2NVwiO1xyXG4gIGNvbnN0IHJlcG9OYW1lID0gXCJiMmItbWF0Y2gtdWktZG9jc1wiO1xyXG4gIGNvbnN0IGZpbGVQYXRoID0gXCJjb250YWN0Lmh0bWxcIjsgLy8gVXBkYXRlIHdpdGggdGhlIGFjdHVhbCBwYXRoXHJcblxyXG4gIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7cmVwb093bmVyfS8ke3JlcG9OYW1lfS9jb250ZW50cy8ke2ZpbGVQYXRofWA7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIC8vIFVzZSB0aGUgJ2NvbnRlbnQnIHByb3BlcnR5IGRpcmVjdGx5IGZvciBIVE1MIGNvbnRlbnRcclxuICAgIGNvbnN0IGJhc2U2NENvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XHJcblxyXG4gICAgLy8gRGVjb2RlIGJhc2U2NCBjb250ZW50XHJcbiAgICBjb25zdCBodG1sQ29udGVudCA9IGF0b2IoYmFzZTY0Q29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIGh0bWxDb250ZW50O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgSFRNTCBjb250ZW50OlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1wcmludCgpIHtcclxuICBjb25zdCBbaHRtbENvbnRlbnQsIHNldEh0bWxDb250ZW50XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ2FsbCB0aGUgZmV0Y2hIdG1sQ29udGVudCBmdW5jdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZFxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgZmV0Y2hIdG1sQ29udGVudCgpO1xyXG4gICAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSFRNTCBDb250ZW50OlwiLCBjb250ZW50KTtcclxuICAgICAgICBzZXRIdG1sQ29udGVudChjb250ZW50KTtcclxuICAgICAgICAvLyBVcGRhdGUgeW91ciBjb21wb25lbnQgc3RhdGUgb3IgZG8gc29tZXRoaW5nIHdpdGggdGhlIEhUTUwgY29udGVudFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI2UwZTlkMl0gcC0xMCBwdC0zIGZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj48ZGl2ICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWxDb250ZW50IH19Lz48L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGb290ZXIiLCJmZXRjaEh0bWxDb250ZW50IiwicmVwb093bmVyIiwicmVwb05hbWUiLCJmaWxlUGF0aCIsImFwaVVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImJhc2U2NENvbnRlbnQiLCJjb250ZW50IiwiaHRtbENvbnRlbnQiLCJhdG9iIiwiZXJyb3IiLCJjb25zb2xlIiwiSW1wcmludCIsInNldEh0bWxDb250ZW50IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(pages)/contact/page.tsx\n"));

/***/ })

});