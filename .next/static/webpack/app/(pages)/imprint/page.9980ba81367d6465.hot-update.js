"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/imprint/page",{

/***/ "(app-pages-browser)/./app/(pages)/imprint/page.tsx":
/*!**************************************!*\
  !*** ./app/(pages)/imprint/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nasync function fetchHtmlContent() {\n    const repoOwner = \"preet665\";\n    const repoName = \"b2b-match-ui-docs\";\n    const filePath = \"imprint.html\"; // Update with the actual path\n    const apiUrl = \"https://api.github.com/repos/\".concat(repoOwner, \"/\").concat(repoName, \"/contents/\").concat(filePath);\n    try {\n        const response = await fetch(apiUrl);\n        const data = await response.json();\n        // Use the 'content' property directly for HTML content\n        const base64Content = data.content;\n        // Decode base64 content\n        const htmlContent = atob(base64Content);\n        return htmlContent;\n    } catch (error) {\n        console.error(\"Error fetching HTML content:\", error);\n        return null;\n    }\n}\nfunction Home() {\n    _s();\n    const [htmlContent, setHtmlContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Call the fetchHtmlContent function when the component is mounted\n        const fetchData = async ()=>{\n            const content = await fetchHtmlContent();\n            if (content) {\n                console.log(\"HTML Content:\", content);\n                setHtmlContent(content);\n            // Update your component state or do something with the HTML content\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-secondary flex flex-col text-center justify-center h-screen overflow-auto \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    dangerouslySetInnerHTML: {\n                        __html: htmlContent\n                    }\n                }, void 0, false, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\imprint\\\\page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\imprint\\\\page.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\imprint\\\\page.tsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"Mw/78g8TTegwEVSla662nAvZEpo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocGFnZXMpL2ltcHJpbnQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMrQjtBQVNhO0FBQ0g7QUFFekMsZUFBZUk7SUFDYixNQUFNQyxZQUFZO0lBQ2xCLE1BQU1DLFdBQVc7SUFDakIsTUFBTUMsV0FBVyxnQkFBZ0IsOEJBQThCO0lBRS9ELE1BQU1DLFNBQVMsZ0NBQTZDRixPQUFiRCxXQUFVLEtBQXdCRSxPQUFyQkQsVUFBUyxjQUFxQixPQUFUQztJQUVqRixJQUFJO1FBQ0YsTUFBTUUsV0FBVyxNQUFNQyxNQUFNRjtRQUM3QixNQUFNRyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7UUFFaEMsdURBQXVEO1FBQ3ZELE1BQU1DLGdCQUFnQkYsS0FBS0csT0FBTztRQUVsQyx3QkFBd0I7UUFDeEIsTUFBTUMsY0FBY0MsS0FBS0g7UUFFekIsT0FBT0U7SUFDVCxFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDOUMsT0FBTztJQUNUO0FBQ0Y7QUFFZSxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDSixhQUFhSyxlQUFlLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUUvQ0QsZ0RBQVNBLENBQUM7UUFDUixtRUFBbUU7UUFDbkUsTUFBTW9CLFlBQVk7WUFDaEIsTUFBTVAsVUFBVSxNQUFNVjtZQUN0QixJQUFJVSxTQUFTO2dCQUNYSSxRQUFRSSxHQUFHLENBQUMsaUJBQWlCUjtnQkFDN0JNLGVBQWVOO1lBQ2Ysb0VBQW9FO1lBQ3RFO1FBQ0Y7UUFFQU87SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRTtrQkFDRSw0RUFBQ0U7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJRSx5QkFBeUI7d0JBQUVDLFFBQVFYO29CQUFZOzs7Ozs7OEJBQ3BELDhEQUFDWiwwREFBTUE7Ozs7Ozs7Ozs7OztBQUlmO0dBeEJ3QmdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocGFnZXMpL2ltcHJpbnQvcGFnZS50c3g/MGE2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkQ29udGVudCxcclxuICBDYXJkRGVzY3JpcHRpb24sXHJcbiAgQ2FyZEZvb3RlcixcclxuICBDYXJkSGVhZGVyLFxyXG4gIENhcmRUaXRsZSxcclxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEh0bWxDb250ZW50KCkge1xyXG4gIGNvbnN0IHJlcG9Pd25lciA9IFwicHJlZXQ2NjVcIjtcclxuICBjb25zdCByZXBvTmFtZSA9IFwiYjJiLW1hdGNoLXVpLWRvY3NcIjtcclxuICBjb25zdCBmaWxlUGF0aCA9IFwiaW1wcmludC5odG1sXCI7IC8vIFVwZGF0ZSB3aXRoIHRoZSBhY3R1YWwgcGF0aFxyXG5cclxuICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3JlcG9Pd25lcn0vJHtyZXBvTmFtZX0vY29udGVudHMvJHtmaWxlUGF0aH1gO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAvLyBVc2UgdGhlICdjb250ZW50JyBwcm9wZXJ0eSBkaXJlY3RseSBmb3IgSFRNTCBjb250ZW50XHJcbiAgICBjb25zdCBiYXNlNjRDb250ZW50ID0gZGF0YS5jb250ZW50O1xyXG5cclxuICAgIC8vIERlY29kZSBiYXNlNjQgY29udGVudFxyXG4gICAgY29uc3QgaHRtbENvbnRlbnQgPSBhdG9iKGJhc2U2NENvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBodG1sQ29udGVudDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIEhUTUwgY29udGVudDpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtodG1sQ29udGVudCwgc2V0SHRtbENvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDYWxsIHRoZSBmZXRjaEh0bWxDb250ZW50IGZ1bmN0aW9uIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmZXRjaEh0bWxDb250ZW50KCk7XHJcbiAgICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIVE1MIENvbnRlbnQ6XCIsIGNvbnRlbnQpO1xyXG4gICAgICAgIHNldEh0bWxDb250ZW50KGNvbnRlbnQpO1xyXG4gICAgICAgIC8vIFVwZGF0ZSB5b3VyIGNvbXBvbmVudCBzdGF0ZSBvciBkbyBzb21ldGhpbmcgd2l0aCB0aGUgSFRNTCBjb250ZW50XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNlY29uZGFyeSBmbGV4IGZsZXgtY29sIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuIG92ZXJmbG93LWF1dG8gXCI+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWxDb250ZW50IH19IC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb290ZXIiLCJmZXRjaEh0bWxDb250ZW50IiwicmVwb093bmVyIiwicmVwb05hbWUiLCJmaWxlUGF0aCIsImFwaVVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImJhc2U2NENvbnRlbnQiLCJjb250ZW50IiwiaHRtbENvbnRlbnQiLCJhdG9iIiwiZXJyb3IiLCJjb25zb2xlIiwiSG9tZSIsInNldEh0bWxDb250ZW50IiwiZmV0Y2hEYXRhIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(pages)/imprint/page.tsx\n"));

/***/ })

});