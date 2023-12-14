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
exports.id = "pages/api/services/cloudengineering/getservice";
exports.ids = ["pages/api/services/cloudengineering/getservice"];
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

/***/ "(api)/./pages/api/services/cloudengineering/getservice.js":
/*!***********************************************************!*\
  !*** ./pages/api/services/cloudengineering/getservice.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nfunction handler(req, res) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(`data/services/cloudengineering/${req.query.slug}.json`);\n    fs__WEBPACK_IMPORTED_MODULE_0__.readFile(filePath, \"utf-8\", (err, data)=>{\n        if (err) {\n            res.status(500).json({\n                error: \"No Such Blog Found \"\n            });\n            return;\n        }\n        console.log(req.query.slug);\n        res.status(200).json(JSON.parse(data));\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VydmljZXMvY2xvdWRlbmdpbmVlcmluZy9nZXRzZXJ2aWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNkVBQTZFO0FBQ3BEO0FBQ0Q7QUFFVCxTQUFTRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUl4QyxNQUFNQyxXQUFXSixtREFBWSxDQUFDLENBQUMsK0JBQStCLEVBQUVFLElBQUlJLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUVyRlIsd0NBQVcsQ0FBQ0ssVUFBVSxTQUFTLENBQUNLLEtBQUtDLE9BQVM7UUFDNUMsSUFBSUQsS0FBSztZQUNQTixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXNCO1lBQ3BEO1FBQ0YsQ0FBQztRQUVEQyxRQUFRQyxHQUFHLENBQUNiLElBQUlJLEtBQUssQ0FBQ0MsSUFBSTtRQUUxQkosSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0ksS0FBS0MsS0FBSyxDQUFDUDtJQUNsQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZWVuYS1yZWFjdC8uL3BhZ2VzL2FwaS9zZXJ2aWNlcy9jbG91ZGVuZ2luZWVyaW5nL2dldHNlcnZpY2UuanM/MDc0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuICBcclxuXHJcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLnJlc29sdmUoYGRhdGEvc2VydmljZXMvY2xvdWRlbmdpbmVlcmluZy8ke3JlcS5xdWVyeS5zbHVnfS5qc29uYCk7XHJcblxyXG4gIGZzLnJlYWRGaWxlKGZpbGVQYXRoLCAndXRmLTgnLCAoZXJyLCBkYXRhKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdObyBTdWNoIEJsb2cgRm91bmQgJyB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlcS5xdWVyeS5zbHVnKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKGRhdGEpKTtcclxuICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImZpbGVQYXRoIiwicmVzb2x2ZSIsInF1ZXJ5Iiwic2x1ZyIsInJlYWRGaWxlIiwiZXJyIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/services/cloudengineering/getservice.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/services/cloudengineering/getservice.js"));
module.exports = __webpack_exports__;

})();