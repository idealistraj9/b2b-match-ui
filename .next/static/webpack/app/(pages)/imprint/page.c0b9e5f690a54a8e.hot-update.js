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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/footer */ \"(app-pages-browser)/./components/footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nasync function fetchHtmlContent() {\n    const repoOwner = \"idealistraj9\";\n    const repoName = \"b2Match-gui\";\n    const filePath = \"imprint.html\"; // Update with the actual path\n    const apiUrl = \"https://api.github.com/repos/\".concat(repoOwner, \"/\").concat(repoName, \"/contents/\").concat(filePath);\n    try {\n        const response = await fetch(apiUrl);\n        const data = await response.json();\n        // Use the 'content' property directly for HTML content\n        const base64Content = data.content;\n        // Decode base64 content\n        const htmlContent = atob(base64Content);\n        return htmlContent;\n    } catch (error) {\n        console.error(\"Error fetching HTML content:\", error);\n        return null;\n    }\n}\nfunction Home() {\n    _s();\n    const [htmlContent, setHtmlContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Call the fetchHtmlContent function when the component is mounted\n        const fetchData = async ()=>{\n            const content = await fetchHtmlContent();\n            if (content) {\n                console.log(\"HTML Content:\", content);\n                setHtmlContent(content);\n            // Update your component state or do something with the HTML content\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-secondary flex flex-col text-center  items-center h-screen overflow-auto \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    dangerouslySetInnerHTML: {\n                        __html: htmlContent\n                    }\n                }, void 0, false, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\imprint\\\\page.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\imprint\\\\page.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\PROJECT DEC 2023\\\\b2b-match-ui\\\\app\\\\(pages)\\\\imprint\\\\page.tsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"Mw/78g8TTegwEVSla662nAvZEpo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocGFnZXMpL2ltcHJpbnQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMrQjtBQVNhO0FBQ0g7QUFFekMsZUFBZUk7SUFDYixNQUFNQyxZQUFZO0lBQ2xCLE1BQU1DLFdBQVc7SUFDakIsTUFBTUMsV0FBVyxnQkFBZ0IsOEJBQThCO0lBRS9ELE1BQU1DLFNBQVMsZ0NBQTZDRixPQUFiRCxXQUFVLEtBQXdCRSxPQUFyQkQsVUFBUyxjQUFxQixPQUFUQztJQUVqRixJQUFJO1FBQ0YsTUFBTUUsV0FBVyxNQUFNQyxNQUFNRjtRQUM3QixNQUFNRyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7UUFFaEMsdURBQXVEO1FBQ3ZELE1BQU1DLGdCQUFnQkYsS0FBS0csT0FBTztRQUVsQyx3QkFBd0I7UUFDeEIsTUFBTUMsY0FBY0MsS0FBS0g7UUFFekIsT0FBT0U7SUFDVCxFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDOUMsT0FBTztJQUNUO0FBQ0Y7QUFFZSxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDSixhQUFhSyxlQUFlLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUUvQ0QsZ0RBQVNBLENBQUM7UUFDUixtRUFBbUU7UUFDbkUsTUFBTW9CLFlBQVk7WUFDaEIsTUFBTVAsVUFBVSxNQUFNVjtZQUN0QixJQUFJVSxTQUFTO2dCQUNYSSxRQUFRSSxHQUFHLENBQUMsaUJBQWlCUjtnQkFDN0JNLGVBQWVOO1lBQ2Ysb0VBQW9FO1lBQ3RFO1FBQ0Y7UUFFQU87SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRTtrQkFDRSw0RUFBQ0U7WUFBSUMsV0FBVTs7OEJBbUNiLDhEQUFDRDtvQkFBSUUseUJBQXlCO3dCQUFFQyxRQUFRWDtvQkFBWTs7Ozs7OzhCQUNwRCw4REFBQ1osMERBQU1BOzs7Ozs7Ozs7Ozs7QUFJZjtHQTFEd0JnQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHBhZ2VzKS9pbXByaW50L3BhZ2UudHN4PzBhNmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgQ2FyZERlc2NyaXB0aW9uLFxyXG4gIENhcmRGb290ZXIsXHJcbiAgQ2FyZEhlYWRlcixcclxuICBDYXJkVGl0bGUsXHJcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hIdG1sQ29udGVudCgpIHtcclxuICBjb25zdCByZXBvT3duZXIgPSBcImlkZWFsaXN0cmFqOVwiO1xyXG4gIGNvbnN0IHJlcG9OYW1lID0gXCJiMk1hdGNoLWd1aVwiO1xyXG4gIGNvbnN0IGZpbGVQYXRoID0gXCJpbXByaW50Lmh0bWxcIjsgLy8gVXBkYXRlIHdpdGggdGhlIGFjdHVhbCBwYXRoXHJcblxyXG4gIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zLyR7cmVwb093bmVyfS8ke3JlcG9OYW1lfS9jb250ZW50cy8ke2ZpbGVQYXRofWA7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIC8vIFVzZSB0aGUgJ2NvbnRlbnQnIHByb3BlcnR5IGRpcmVjdGx5IGZvciBIVE1MIGNvbnRlbnRcclxuICAgIGNvbnN0IGJhc2U2NENvbnRlbnQgPSBkYXRhLmNvbnRlbnQ7XHJcblxyXG4gICAgLy8gRGVjb2RlIGJhc2U2NCBjb250ZW50XHJcbiAgICBjb25zdCBodG1sQ29udGVudCA9IGF0b2IoYmFzZTY0Q29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIGh0bWxDb250ZW50O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgSFRNTCBjb250ZW50OlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2h0bWxDb250ZW50LCBzZXRIdG1sQ29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIENhbGwgdGhlIGZldGNoSHRtbENvbnRlbnQgZnVuY3Rpb24gd2hlbiB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IGZldGNoSHRtbENvbnRlbnQoKTtcclxuICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhUTUwgQ29udGVudDpcIiwgY29udGVudCk7XHJcbiAgICAgICAgc2V0SHRtbENvbnRlbnQoY29udGVudCk7XHJcbiAgICAgICAgLy8gVXBkYXRlIHlvdXIgY29tcG9uZW50IHN0YXRlIG9yIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBIVE1MIGNvbnRlbnRcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2Vjb25kYXJ5IGZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIgIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiBvdmVyZmxvdy1hdXRvIFwiPlxyXG4gICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtdC01IGZvbnQtYm9sZCAgcGwtNlwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi02MDAgdG8tZ3JlZW4tOTUwIGlubGluZS1ibG9jayB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dFwiPlxyXG4gICAgICAgICAgICBBYm91dCBVc1xyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbS0zIHJvdW5kZWQtc20gYm9yZGVyLWJhY2tncm91bmQgbXQtMyBwdC0wXCI+XHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJmbGV4IHctMi80IG0tNSBwLTEwIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBzaGFkb3ctbm9uZSBiZy1zZWNvbmRhcnkgYm9yZGVyLW5vbmVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fib3V0LmpwZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbXQtNSBcIj5cclxuICAgICAgICAgICAgICBXZSB3YW50IHRvIG1ha2UgYSBwb3NpdGl2ZSBjb250cmlidXRpb24gdG8gZW5zdXJpbmcgdGhhdFxyXG4gICAgICAgICAgICAgIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGlzIHVzZWQgY29ycmVjdGx5LlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiZmxleCB3LTIvNCBtLTUgcC0xMCBmbGV4LWNvbCB0ZXh0LWxlZnQgYmctc2Vjb25kYXJ5IGJvcmRlci1ub25lIHNoYWRvdy1ub25lXCI+XHJcbiAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LXhsXCI+QXV0aG9yc2hpcDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdXCI+XHJcbiAgICAgICAgICAgICAgQjJCbWF0Y2guY2ggaXMgYSBzZXJ2aWNlIHByb3ZpZGVkIGJ5OiBCaWxkS29tIEludGVybmF0aW9uYWwgR21iSCxcclxuICAgICAgICAgICAgICBadXJpY2hcclxuICAgICAgICAgICAgPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LXhsXCI+TWFuYWdlbWVudDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdXCI+XHJcbiAgICAgICAgICAgICAgRHIuIFBhdHJpayBad2FobGVuXHJcbiAgICAgICAgICAgIDwvQ2FyZERlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cIm10LTUgdGV4dC14bFwiPlxyXG4gICAgICAgICAgICAgIFdlIHdvdWxkIGJlIGhhcHB5IHRvIGhlbHAgeW91IHdpdGggeW91ciBzZWFyY2guXHJcbiAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICA8Q2FyZERlc2NyaXB0aW9uIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdXCI+XHJcbiAgICAgICAgICAgICAgT3VyIGRhdGFiYXNlcyB3b3JrIGFuZCB3ZSBjYW4gZGVsaXZlci4gQ3JlYXRpbmcgdGhlIHByb21wdHMgaXNcclxuICAgICAgICAgICAgICBjaGFsbGVuZ2luZy4gVGhhdCdzIHdoeSB3ZSdyZSB0YWtpbmcgY2FyZSBvZiBpdCBwZXJzb25hbGx5IGF0IHRoZVxyXG4gICAgICAgICAgICAgIG1vbWVudC4gV2Ugc2hvdWxkIGJlIHJlYWR5IGJ5IHRoZSBiZWdpbm5pbmcgb2YgMjAyNCBzbyB0aGF0IHlvdVxyXG4gICAgICAgICAgICAgIGNhbiBzZWFyY2ggaW5kZXBlbmRlbnRseSBhbmQgd2l0aG91dCBvdXIgaGVscC5cclxuICAgICAgICAgICAgPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sQ29udGVudCB9fSAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRm9vdGVyIiwiZmV0Y2hIdG1sQ29udGVudCIsInJlcG9Pd25lciIsInJlcG9OYW1lIiwiZmlsZVBhdGgiLCJhcGlVcmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJiYXNlNjRDb250ZW50IiwiY29udGVudCIsImh0bWxDb250ZW50IiwiYXRvYiIsImVycm9yIiwiY29uc29sZSIsIkhvbWUiLCJzZXRIdG1sQ29udGVudCIsImZldGNoRGF0YSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(pages)/imprint/page.tsx\n"));

/***/ })

});