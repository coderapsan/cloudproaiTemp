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
exports.id = "pages/services/dataengineering/[slug]";
exports.ids = ["pages/services/dataengineering/[slug]"];
exports.modules = {

/***/ "./pages/services/dataengineering/[slug].js":
/*!**************************************************!*\
  !*** ./pages/services/dataengineering/[slug].js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Slug = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { slug  } = router.query;\n    const [service, setService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (slug) {\n            fetch(window.origin + `/api/services/dataengineering/getservice?slug=${slug}`).then((response)=>{\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                return response.json();\n            }).then((parsed)=>{\n                setService(parsed);\n            }).catch((error)=>{\n                console.error(\"Error fetching service:\", error);\n            });\n        }\n    }, [\n        slug\n    ]);\n    if (!service) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\dataengineering\\\\[slug].js\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: service.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\dataengineering\\\\[slug].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: service.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\dataengineering\\\\[slug].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\dataengineering\\\\[slug].js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXJ2aWNlcy9kYXRhZW5naW5lZXJpbmcvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNYO0FBRXhDLE1BQU1JLE9BQU8sSUFBTTtJQUNqQixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEIsTUFBTSxFQUFFRyxLQUFJLEVBQUUsR0FBR0QsT0FBT0UsS0FBSztJQUM3QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUMsSUFBSTtJQUUzQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlLLE1BQU07WUFDUkksTUFBTUMsT0FBT0MsTUFBTSxHQUFDLENBQUMsOENBQThDLEVBQUVOLEtBQUssQ0FBQyxFQUN4RU8sSUFBSSxDQUFDLENBQUNDLFdBQWE7Z0JBQ2xCLElBQUksQ0FBQ0EsU0FBU0MsRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU0sK0JBQStCO2dCQUNqRCxDQUFDO2dCQUNELE9BQU9GLFNBQVNHLElBQUk7WUFDdEIsR0FDQ0osSUFBSSxDQUFDLENBQUNLLFNBQVc7Z0JBQ2hCVCxXQUFXUztZQUNiLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxRQUFVO2dCQUNoQkMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0M7UUFDSixDQUFDO0lBQ0gsR0FBRztRQUFDZDtLQUFLO0lBRVQsSUFBSSxDQUFDRSxTQUFTO1FBQ1oscUJBQU8sOERBQUNjO3NCQUFFOzs7Ozs7SUFDWixDQUFDO0lBRUQscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUloQixRQUFRaUIsS0FBSzs7Ozs7OzBCQUNsQiw4REFBQ0g7MEJBQUdkLFFBQVFrQixXQUFXOzs7Ozs7Ozs7Ozs7QUFHN0I7QUFFQSxpRUFBZXRCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZWVuYS1yZWFjdC8uL3BhZ2VzL3NlcnZpY2VzL2RhdGFlbmdpbmVlcmluZy9bc2x1Z10uanM/MzE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgU2x1ZyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbc2VydmljZSwgc2V0U2VydmljZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzbHVnKSB7XG4gICAgICBmZXRjaCh3aW5kb3cub3JpZ2luK2AvYXBpL3NlcnZpY2VzL2RhdGFlbmdpbmVlcmluZy9nZXRzZXJ2aWNlP3NsdWc9JHtzbHVnfWApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChwYXJzZWQpID0+IHtcbiAgICAgICAgICBzZXRTZXJ2aWNlKHBhcnNlZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LCBbc2x1Z10pO1xuXG4gIGlmICghc2VydmljZSkge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57c2VydmljZS50aXRsZX08L2gxPlxuICAgICAgPHA+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2x1ZzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlNsdWciLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJzZXJ2aWNlIiwic2V0U2VydmljZSIsImZldGNoIiwid2luZG93Iiwib3JpZ2luIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJwYXJzZWQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInAiLCJkaXYiLCJoMSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/services/dataengineering/[slug].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/services/dataengineering/[slug].js"));
module.exports = __webpack_exports__;

})();