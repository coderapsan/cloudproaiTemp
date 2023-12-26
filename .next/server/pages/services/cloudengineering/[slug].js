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
exports.id = "pages/services/cloudengineering/[slug]";
exports.ids = ["pages/services/cloudengineering/[slug]"];
exports.modules = {

/***/ "./pages/services/cloudengineering/[slug].js":
/*!***************************************************!*\
  !*** ./pages/services/cloudengineering/[slug].js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Slug = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { slug  } = router.query;\n    const [service, setService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (slug) {\n            fetch(window.origin + `/api/services/cloudengineering/getservice?slug=${slug}`).then((response)=>{\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                return response.json();\n            }).then((parsed)=>{\n                setService(parsed);\n            }).catch((error)=>{\n                console.error(\"Error fetching service:\", error);\n            });\n        }\n    }, [\n        slug\n    ]);\n    if (!service) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\cloudengineering\\\\[slug].js\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: service.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\cloudengineering\\\\[slug].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: service.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\cloudengineering\\\\[slug].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\cloudengineering\\\\[slug].js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXJ2aWNlcy9jbG91ZGVuZ2luZWVyaW5nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDWDtBQUV4QyxNQUFNSSxPQUFPLElBQU07SUFDakIsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUcsS0FBSSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDN0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDLElBQUk7SUFFM0NELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJSyxNQUFNO1lBQ1JJLE1BQU1DLE9BQU9DLE1BQU0sR0FBQyxDQUFDLCtDQUErQyxFQUFFTixLQUFLLENBQUMsRUFDekVPLElBQUksQ0FBQyxDQUFDQyxXQUFhO2dCQUNsQixJQUFJLENBQUNBLFNBQVNDLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNLCtCQUErQjtnQkFDakQsQ0FBQztnQkFDRCxPQUFPRixTQUFTRyxJQUFJO1lBQ3RCLEdBQ0NKLElBQUksQ0FBQyxDQUFDSyxTQUFXO2dCQUNoQlQsV0FBV1M7WUFDYixHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtnQkFDaEJDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1lBQzNDO1FBQ0osQ0FBQztJQUNILEdBQUc7UUFBQ2Q7S0FBSztJQUVULElBQUksQ0FBQ0UsU0FBUztRQUNaLHFCQUFPLDhEQUFDYztzQkFBRTs7Ozs7O0lBQ1osQ0FBQztJQUVELHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFJaEIsUUFBUWlCLEtBQUs7Ozs7OzswQkFDbEIsOERBQUNIOzBCQUFHZCxRQUFRa0IsV0FBVzs7Ozs7Ozs7Ozs7O0FBRzdCO0FBRUEsaUVBQWV0QixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamVlbmEtcmVhY3QvLi9wYWdlcy9zZXJ2aWNlcy9jbG91ZGVuZ2luZWVyaW5nL1tzbHVnXS5qcz84ZjQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBTbHVnID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtzZXJ2aWNlLCBzZXRTZXJ2aWNlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNsdWcpIHtcbiAgICAgIGZldGNoKHdpbmRvdy5vcmlnaW4rYC9hcGkvc2VydmljZXMvY2xvdWRlbmdpbmVlcmluZy9nZXRzZXJ2aWNlP3NsdWc9JHtzbHVnfWApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChwYXJzZWQpID0+IHtcbiAgICAgICAgICBzZXRTZXJ2aWNlKHBhcnNlZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbc2x1Z10pO1xuXG4gIGlmICghc2VydmljZSkge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57c2VydmljZS50aXRsZX08L2gxPlxuICAgICAgPHA+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2x1ZzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlNsdWciLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJzZXJ2aWNlIiwic2V0U2VydmljZSIsImZldGNoIiwid2luZG93Iiwib3JpZ2luIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJwYXJzZWQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInAiLCJkaXYiLCJoMSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/services/cloudengineering/[slug].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/services/cloudengineering/[slug].js"));
module.exports = __webpack_exports__;

})();