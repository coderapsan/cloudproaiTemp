"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/services/generativeaiandml/[slug]";
exports.ids = ["pages/services/generativeaiandml/[slug]"];
exports.modules = {

/***/ "./pages/services/generativeaiandml/[slug].js":
/*!****************************************************!*\
  !*** ./pages/services/generativeaiandml/[slug].js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Slug = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { slug  } = router.query;\n    const [service, setService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (slug) {\n            fetch(window.origin + `/api/services/generativeaiandml/getservice?slug=${slug}`).then((response)=>{\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                return response.json();\n            }).then((parsed)=>{\n                setService(parsed);\n            }).catch((error)=>{\n                console.error(\"Error fetching service:\", error);\n            });\n        }\n    }, [\n        slug\n    ]);\n    if (!service) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\generativeaiandml\\\\[slug].js\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: service.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\generativeaiandml\\\\[slug].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: service.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\generativeaiandml\\\\[slug].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\generativeaiandml\\\\[slug].js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXJ2aWNlcy9nZW5lcmF0aXZlYWlhbmRtbC9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBQ1g7QUFFeEMsTUFBTUksT0FBTyxJQUFNO0lBQ2pCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVHLEtBQUksRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBQzdCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSUssTUFBTTtZQUNSSSxNQUFNQyxPQUFPQyxNQUFNLEdBQUUsQ0FBQyxnREFBZ0QsRUFBRU4sS0FBSyxDQUFDLEVBQzNFTyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtnQkFDbEIsSUFBSSxDQUFDQSxTQUFTQyxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSwrQkFBK0I7Z0JBQ2pELENBQUM7Z0JBQ0QsT0FBT0YsU0FBU0csSUFBSTtZQUN0QixHQUNDSixJQUFJLENBQUMsQ0FBQ0ssU0FBVztnQkFDaEJULFdBQVdTO1lBQ2IsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLFFBQVU7Z0JBQ2hCQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtZQUMzQztRQUNKLENBQUM7SUFDSCxHQUFHO1FBQUNkO0tBQUs7SUFFVCxJQUFJLENBQUNFLFNBQVM7UUFDWixxQkFBTyw4REFBQ2M7c0JBQUU7Ozs7OztJQUNaLENBQUM7SUFFRCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzswQkFBSWhCLFFBQVFpQixLQUFLOzs7Ozs7MEJBQ2xCLDhEQUFDSDswQkFBR2QsUUFBUWtCLFdBQVc7Ozs7Ozs7Ozs7OztBQUc3QjtBQUVBLGlFQUFldEIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2plZW5hLXJlYWN0Ly4vcGFnZXMvc2VydmljZXMvZ2VuZXJhdGl2ZWFpYW5kbWwvW3NsdWddLmpzP2IzOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IFNsdWcgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3NlcnZpY2UsIHNldFNlcnZpY2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2x1Zykge1xuICAgICAgZmV0Y2god2luZG93Lm9yaWdpbiArYC9hcGkvc2VydmljZXMvZ2VuZXJhdGl2ZWFpYW5kbWwvZ2V0c2VydmljZT9zbHVnPSR7c2x1Z31gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocGFyc2VkKSA9PiB7XG4gICAgICAgICAgc2V0U2VydmljZShwYXJzZWQpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc2VydmljZTonLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3NsdWddKTtcblxuICBpZiAoIXNlcnZpY2UpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e3NlcnZpY2UudGl0bGV9PC9oMT5cbiAgICAgIDxwPntzZXJ2aWNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsdWc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlNsdWciLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJzZXJ2aWNlIiwic2V0U2VydmljZSIsImZldGNoIiwid2luZG93Iiwib3JpZ2luIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJwYXJzZWQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInAiLCJkaXYiLCJoMSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/services/generativeaiandml/[slug].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/services/generativeaiandml/[slug].js"));
module.exports = __webpack_exports__;

})();