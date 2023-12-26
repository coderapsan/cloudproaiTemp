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
exports.id = "pages/api/services/generativeaiandml/getservice";
exports.ids = ["pages/api/services/generativeaiandml/getservice"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/services/generativeaiandml/getservice.js":
/*!************************************************************!*\
  !*** ./pages/api/services/generativeaiandml/getservice.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nfunction handler(req, res) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(`data/services/generativeaiandml/${req.query.slug}.json`);\n    fs__WEBPACK_IMPORTED_MODULE_0__.readFile(filePath, \"utf-8\", (err, data)=>{\n        if (err) {\n            res.status(500).json({\n                error: \"No Such Blog Found \"\n            });\n            return;\n        }\n        console.log(req.query.slug);\n        res.status(200).json(JSON.parse(data));\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VydmljZXMvZ2VuZXJhdGl2ZWFpYW5kbWwvZ2V0c2VydmljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDZFQUE2RTtBQUNwRDtBQUNEO0FBRVQsU0FBU0UsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFJeEMsTUFBTUMsV0FBV0osbURBQVksQ0FBQyxDQUFDLGdDQUFnQyxFQUFFRSxJQUFJSSxLQUFLLENBQUNDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFFdEZSLHdDQUFXLENBQUNLLFVBQVUsU0FBUyxDQUFDSyxLQUFLQyxPQUFTO1FBQzVDLElBQUlELEtBQUs7WUFDUE4sSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFzQjtZQUNwRDtRQUNGLENBQUM7UUFFREMsUUFBUUMsR0FBRyxDQUFDYixJQUFJSSxLQUFLLENBQUNDLElBQUk7UUFFMUJKLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNJLEtBQUtDLEtBQUssQ0FBQ1A7SUFDbEM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamVlbmEtcmVhY3QvLi9wYWdlcy9hcGkvc2VydmljZXMvZ2VuZXJhdGl2ZWFpYW5kbWwvZ2V0c2VydmljZS5qcz80OWJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXG4gIFxuXG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKGBkYXRhL3NlcnZpY2VzL2dlbmVyYXRpdmVhaWFuZG1sLyR7cmVxLnF1ZXJ5LnNsdWd9Lmpzb25gKTtcblxuICBmcy5yZWFkRmlsZShmaWxlUGF0aCwgJ3V0Zi04JywgKGVyciwgZGF0YSkgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdObyBTdWNoIEJsb2cgRm91bmQgJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhyZXEucXVlcnkuc2x1Zyk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKGRhdGEpKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZpbGVQYXRoIiwicmVzb2x2ZSIsInF1ZXJ5Iiwic2x1ZyIsInJlYWRGaWxlIiwiZXJyIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/services/generativeaiandml/getservice.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/services/generativeaiandml/getservice.js"));
module.exports = __webpack_exports__;

})();