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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nasync function fetchHtmlContent() {\n    const repoOwner = \"idealistraj9\";\n    const repoName = \"b2Match-gui\";\n    const filePath = \"index.html\"; // Update with the actual path\n    const apiUrl = \"https://api.github.com/repos/\".concat(repoOwner, \"/\").concat(repoName, \"/contents/\").concat(filePath);\n    try {\n        const response = await fetch(apiUrl);\n        const data = await response.json();\n        // Use the 'content' property directly for HTML content\n        const base64Content = data.content;\n        // Decode base64 content\n        const htmlContent = atob(base64Content);\n        return htmlContent;\n    } catch (error) {\n        console.error(\"Error fetching HTML content:\", error);\n        return null;\n    }\n}\nfunction Home() {\n    _s();\n    const [htmlContent, setHtmlContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Call the fetchHtmlContent function when the component is mounted\n        const fetchData = async ()=>{\n            const content = await fetchHtmlContent();\n            if (content) {\n                console.log(\"HTML Content:\", content);\n                setHtmlContent(content);\n            // Update your component state or do something with the HTML content\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-secondary flex flex-col text-center justify-center h-fit overflow-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    dangerouslySetInnerHTML: {\n                        __html: htmlContent\n                    }\n                }, void 0, false, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\about\\\\page.tsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"Mw/78g8TTegwEVSla662nAvZEpo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocGFnZXMpL2Fib3V0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDK0I7QUFTYTtBQUNIO0FBRXpDLGVBQWVJO0lBQ2IsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLFdBQVcsY0FBYyw4QkFBOEI7SUFFN0QsTUFBTUMsU0FBUyxnQ0FBNkNGLE9BQWJELFdBQVUsS0FBd0JFLE9BQXJCRCxVQUFTLGNBQXFCLE9BQVRDO0lBRWpGLElBQUk7UUFDRixNQUFNRSxXQUFXLE1BQU1DLE1BQU1GO1FBQzdCLE1BQU1HLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtRQUVoQyx1REFBdUQ7UUFDdkQsTUFBTUMsZ0JBQWdCRixLQUFLRyxPQUFPO1FBRWxDLHdCQUF3QjtRQUN4QixNQUFNQyxjQUFjQyxLQUFLSDtRQUV6QixPQUFPRTtJQUNULEVBQUUsT0FBT0UsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxPQUFPO0lBQ1Q7QUFDRjtBQUVlLFNBQVNFOztJQUN0QixNQUFNLENBQUNKLGFBQWFLLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRS9DRCxnREFBU0EsQ0FBQztRQUNSLG1FQUFtRTtRQUNuRSxNQUFNb0IsWUFBWTtZQUNoQixNQUFNUCxVQUFVLE1BQU1WO1lBQ3RCLElBQUlVLFNBQVM7Z0JBQ1hJLFFBQVFJLEdBQUcsQ0FBQyxpQkFBaUJSO2dCQUM3Qk0sZUFBZU47WUFDZixvRUFBb0U7WUFDdEU7UUFDRjtRQUVBTztJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFO2tCQUNFLDRFQUFDRTtZQUFJQyxXQUFVOzs4QkFtQ2IsOERBQUNEO29CQUFJRSx5QkFBeUI7d0JBQUVDLFFBQVFYO29CQUFZOzs7Ozs7OEJBQ3BELDhEQUFDWiwwREFBTUE7Ozs7Ozs7Ozs7OztBQUlmO0dBMUR3QmdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocGFnZXMpL2Fib3V0L3BhZ2UudHN4PzU0M2EiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZERlc2NyaXB0aW9uLFxyXG4gIENhcmRGb290ZXIsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkVGl0bGUsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hIdG1sQ29udGVudCgpIHtcclxuICBjb25zdCByZXBvT3duZXIgPSBcImlkZWFsaXN0cmFqOVwiO1xyXG4gIGNvbnN0IHJlcG9OYW1lID0gXCJiMk1hdGNoLWd1aVwiO1xyXG4gIGNvbnN0IGZpbGVQYXRoID0gXCJpbmRleC5odG1sXCI7IC8vIFVwZGF0ZSB3aXRoIHRoZSBhY3R1YWwgcGF0aFxyXG5cclxuICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3JlcG9Pd25lcn0vJHtyZXBvTmFtZX0vY29udGVudHMvJHtmaWxlUGF0aH1gO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAvLyBVc2UgdGhlICdjb250ZW50JyBwcm9wZXJ0eSBkaXJlY3RseSBmb3IgSFRNTCBjb250ZW50XHJcbiAgICBjb25zdCBiYXNlNjRDb250ZW50ID0gZGF0YS5jb250ZW50O1xyXG5cclxuICAgIC8vIERlY29kZSBiYXNlNjQgY29udGVudFxyXG4gICAgY29uc3QgaHRtbENvbnRlbnQgPSBhdG9iKGJhc2U2NENvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBodG1sQ29udGVudDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIEhUTUwgY29udGVudDpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtodG1sQ29udGVudCwgc2V0SHRtbENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDYWxsIHRoZSBmZXRjaEh0bWxDb250ZW50IGZ1bmN0aW9uIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmZXRjaEh0bWxDb250ZW50KCk7XHJcbiAgICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIVE1MIENvbnRlbnQ6XCIsIGNvbnRlbnQpO1xyXG4gICAgICAgIHNldEh0bWxDb250ZW50KGNvbnRlbnQpO1xyXG4gICAgICAgIC8vIFVwZGF0ZSB5b3VyIGNvbXBvbmVudCBzdGF0ZSBvciBkbyBzb21ldGhpbmcgd2l0aCB0aGUgSFRNTCBjb250ZW50XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeSBmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtZml0IG92ZXJmbG93LWF1dG9cIj5cclxuICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC01eGwgbXQtNSBmb250LWJvbGQgIHBsLTZcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNjAwIHRvLWdyZWVuLTk1MCBpbmxpbmUtYmxvY2sgdGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHRcIj5cclxuICAgICAgICAgICAgQWJvdXQgVXNcclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG0tMyByb3VuZGVkLXNtIGJvcmRlci1iYWNrZ3JvdW5kIG10LTMgcHQtMFwiPlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZmxleCB3LTIvNCBtLTUgcC0xMCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgc2hhZG93LW5vbmUgYmctc2Vjb25kYXJ5IGJvcmRlci1ub25lXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hYm91dC5qcGdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG10LTUgXCI+XHJcbiAgICAgICAgICAgICAgV2Ugd2FudCB0byBtYWtlIGEgcG9zaXRpdmUgY29udHJpYnV0aW9uIHRvIGVuc3VyaW5nIHRoYXRcclxuICAgICAgICAgICAgICBhcnRpZmljaWFsIGludGVsbGlnZW5jZSBpcyB1c2VkIGNvcnJlY3RseS5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImZsZXggdy0yLzQgbS01IHAtMTAgZmxleC1jb2wgdGV4dC1sZWZ0IGJnLXNlY29uZGFyeSBib3JkZXItbm9uZSBzaGFkb3ctbm9uZVwiPlxyXG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cIm10LTUgdGV4dC14bFwiPkF1dGhvcnNoaXA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XVwiPlxyXG4gICAgICAgICAgICAgIEIyQm1hdGNoLmNoIGlzIGEgc2VydmljZSBwcm92aWRlZCBieTogQmlsZEtvbSBJbnRlcm5hdGlvbmFsIEdtYkgsXHJcbiAgICAgICAgICAgICAgWnVyaWNoXHJcbiAgICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cIm10LTUgdGV4dC14bFwiPk1hbmFnZW1lbnQ8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XVwiPlxyXG4gICAgICAgICAgICAgIERyLiBQYXRyaWsgWndhaGxlblxyXG4gICAgICAgICAgICA8L0NhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJtdC01IHRleHQteGxcIj5cclxuICAgICAgICAgICAgICBXZSB3b3VsZCBiZSBoYXBweSB0byBoZWxwIHlvdSB3aXRoIHlvdXIgc2VhcmNoLlxyXG4gICAgICAgICAgICA8L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgPENhcmREZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XVwiPlxyXG4gICAgICAgICAgICAgIE91ciBkYXRhYmFzZXMgd29yayBhbmQgd2UgY2FuIGRlbGl2ZXIuIENyZWF0aW5nIHRoZSBwcm9tcHRzIGlzXHJcbiAgICAgICAgICAgICAgY2hhbGxlbmdpbmcuIFRoYXQncyB3aHkgd2UncmUgdGFraW5nIGNhcmUgb2YgaXQgcGVyc29uYWxseSBhdCB0aGVcclxuICAgICAgICAgICAgICBtb21lbnQuIFdlIHNob3VsZCBiZSByZWFkeSBieSB0aGUgYmVnaW5uaW5nIG9mIDIwMjQgc28gdGhhdCB5b3VcclxuICAgICAgICAgICAgICBjYW4gc2VhcmNoIGluZGVwZW5kZW50bHkgYW5kIHdpdGhvdXQgb3VyIGhlbHAuXHJcbiAgICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbENvbnRlbnQgfX0gLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvb3RlciIsImZldGNoSHRtbENvbnRlbnQiLCJyZXBvT3duZXIiLCJyZXBvTmFtZSIsImZpbGVQYXRoIiwiYXBpVXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiYmFzZTY0Q29udGVudCIsImNvbnRlbnQiLCJodG1sQ29udGVudCIsImF0b2IiLCJlcnJvciIsImNvbnNvbGUiLCJIb21lIiwic2V0SHRtbENvbnRlbnQiLCJmZXRjaERhdGEiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(pages)/about/page.tsx\n"));

/***/ })

});