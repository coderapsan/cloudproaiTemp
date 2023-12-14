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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Slug = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { slug  } = router.query;\n    const [service, setService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (slug) {\n            fetch(`http://localhost:3000/api/services/cloudengineering/getservice?slug=${slug}`).then((response)=>{\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                return response.json();\n            }).then((parsed)=>{\n                setService(parsed);\n            }).catch((error)=>{\n                console.error(\"Error fetching service:\", error);\n            });\n        }\n    }, [\n        slug\n    ]);\n    if (!service) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\cloudengineering\\\\[slug].js\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: service.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\cloudengineering\\\\[slug].js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: service.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\cloudengineering\\\\[slug].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rapsa\\\\OneDrive\\\\Desktop\\\\CloudProAI\\\\React Template\\\\pages\\\\services\\\\cloudengineering\\\\[slug].js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXJ2aWNlcy9jbG91ZGVuZ2luZWVyaW5nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDWDtBQUV4QyxNQUFNSSxPQUFPLElBQU07SUFDakIsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRUcsS0FBSSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDN0IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDLElBQUk7SUFFM0NELGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJSyxNQUFNO1lBQ1JJLE1BQU0sQ0FBQyxvRUFBb0UsRUFBRUosS0FBSyxDQUFDLEVBQ2hGSyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtnQkFDbEIsSUFBSSxDQUFDQSxTQUFTQyxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSwrQkFBK0I7Z0JBQ2pELENBQUM7Z0JBQ0QsT0FBT0YsU0FBU0csSUFBSTtZQUN0QixHQUNDSixJQUFJLENBQUMsQ0FBQ0ssU0FBVztnQkFDaEJQLFdBQVdPO1lBQ2IsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLFFBQVU7Z0JBQ2hCQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtZQUMzQztRQUNKLENBQUM7SUFDSCxHQUFHO1FBQUNaO0tBQUs7SUFFVCxJQUFJLENBQUNFLFNBQVM7UUFDWixxQkFBTyw4REFBQ1k7c0JBQUU7Ozs7OztJQUNaLENBQUM7SUFFRCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzswQkFBSWQsUUFBUWUsS0FBSzs7Ozs7OzBCQUNsQiw4REFBQ0g7MEJBQUdaLFFBQVFnQixXQUFXOzs7Ozs7Ozs7Ozs7QUFHN0I7QUFFQSxpRUFBZXBCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZWVuYS1yZWFjdC8uL3BhZ2VzL3NlcnZpY2VzL2Nsb3VkZW5naW5lZXJpbmcvW3NsdWddLmpzPzhmNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IFNsdWcgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW3NlcnZpY2UsIHNldFNlcnZpY2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2x1Zykge1xyXG4gICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zZXJ2aWNlcy9jbG91ZGVuZ2luZWVyaW5nL2dldHNlcnZpY2U/c2x1Zz0ke3NsdWd9YClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocGFyc2VkKSA9PiB7XHJcbiAgICAgICAgICBzZXRTZXJ2aWNlKHBhcnNlZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBzZXJ2aWNlOicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbc2x1Z10pO1xyXG5cclxuICBpZiAoIXNlcnZpY2UpIHtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+e3NlcnZpY2UudGl0bGV9PC9oMT5cclxuICAgICAgPHA+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsdWc7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiU2x1ZyIsInJvdXRlciIsInNsdWciLCJxdWVyeSIsInNlcnZpY2UiLCJzZXRTZXJ2aWNlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsInBhcnNlZCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwicCIsImRpdiIsImgxIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/services/cloudengineering/[slug].js\n");

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