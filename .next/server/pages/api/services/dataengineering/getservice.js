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
exports.id = "pages/api/services/dataengineering/getservice";
exports.ids = ["pages/api/services/dataengineering/getservice"];
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

/***/ "(api)/./pages/api/services/dataengineering/getservice.js":
/*!**********************************************************!*\
  !*** ./pages/api/services/dataengineering/getservice.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nfunction handler(req, res) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(`data/services/dataengineering/${req.query.slug}.json`);\n    fs__WEBPACK_IMPORTED_MODULE_0__.readFile(filePath, \"utf-8\", (err, data)=>{\n        if (err) {\n            res.status(500).json({\n                error: \"No Such Blog Found \"\n            });\n            return;\n        }\n        console.log(req.query.slug);\n        res.status(200).json(JSON.parse(data));\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VydmljZXMvZGF0YWVuZ2luZWVyaW5nL2dldHNlcnZpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFDcEQ7QUFDRDtBQUVULFNBQVNFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBSXhDLE1BQU1DLFdBQVdKLG1EQUFZLENBQUMsQ0FBQyw4QkFBOEIsRUFBRUUsSUFBSUksS0FBSyxDQUFDQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBRXBGUix3Q0FBVyxDQUFDSyxVQUFVLFNBQVMsQ0FBQ0ssS0FBS0MsT0FBUztRQUM1QyxJQUFJRCxLQUFLO1lBQ1BOLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBc0I7WUFDcEQ7UUFDRixDQUFDO1FBRURDLFFBQVFDLEdBQUcsQ0FBQ2IsSUFBSUksS0FBSyxDQUFDQyxJQUFJO1FBRTFCSixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSSxLQUFLQyxLQUFLLENBQUNQO0lBQ2xDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2plZW5hLXJlYWN0Ly4vcGFnZXMvYXBpL3NlcnZpY2VzL2RhdGFlbmdpbmVlcmluZy9nZXRzZXJ2aWNlLmpzPzUyMDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgXG5cbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLnJlc29sdmUoYGRhdGEvc2VydmljZXMvZGF0YWVuZ2luZWVyaW5nLyR7cmVxLnF1ZXJ5LnNsdWd9Lmpzb25gKTtcblxuICBmcy5yZWFkRmlsZShmaWxlUGF0aCwgJ3V0Zi04JywgKGVyciwgZGF0YSkgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdObyBTdWNoIEJsb2cgRm91bmQgJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhyZXEucXVlcnkuc2x1Zyk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKGRhdGEpKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZpbGVQYXRoIiwicmVzb2x2ZSIsInF1ZXJ5Iiwic2x1ZyIsInJlYWRGaWxlIiwiZXJyIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/services/dataengineering/getservice.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/services/dataengineering/getservice.js"));
module.exports = __webpack_exports__;

})();