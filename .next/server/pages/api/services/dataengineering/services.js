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
exports.id = "pages/api/services/dataengineering/services";
exports.ids = ["pages/api/services/dataengineering/services"];
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

/***/ "(api)/./pages/api/services/dataengineering/services.js":
/*!********************************************************!*\
  !*** ./pages/api/services/dataengineering/services.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nasync function handler(req, res) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().resolve(\"data/services/dataengineering/\");\n    try {\n        const files = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(filePath);\n        let allServices = [];\n        for (const file of files){\n            const fileContent = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(path__WEBPACK_IMPORTED_MODULE_1___default().join(filePath, file), \"utf-8\");\n            allServices.push(JSON.parse(fileContent));\n        }\n        res.status(200).json(allServices);\n    } catch (error) {\n        console.error(\"Error reading files:\", error);\n        res.status(500).json({\n            error: \"Internal Server Error\",\n            details: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VydmljZXMvZGF0YWVuZ2luZWVyaW5nL3NlcnZpY2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNkVBQTZFO0FBQ3BEO0FBQ0Q7QUFFVCxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxXQUFXSixtREFBWSxDQUFDO0lBRTlCLElBQUk7UUFDRixNQUFNTSxRQUFRLE1BQU1QLGdEQUFtQixDQUFDSztRQUN4QyxJQUFJSyxjQUFjLEVBQUU7UUFFcEIsS0FBSyxNQUFNQyxRQUFRSixNQUFPO1lBQ3hCLE1BQU1LLGNBQWMsTUFBTVosaURBQW9CLENBQzVDQyxnREFBUyxDQUFDSSxVQUFVTSxPQUNwQjtZQUdGRCxZQUFZSyxJQUFJLENBQUNDLEtBQUtDLEtBQUssQ0FBQ0w7UUFDOUI7UUFFQVIsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1Q7SUFDdkIsRUFBRSxPQUFPVSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDaEIsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1lBQXlCRSxTQUFTRixNQUFNRyxPQUFPO1FBQUM7SUFDaEY7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamVlbmEtcmVhY3QvLi9wYWdlcy9hcGkvc2VydmljZXMvZGF0YWVuZ2luZWVyaW5nL3NlcnZpY2VzLmpzPzcxOTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKCdkYXRhL3NlcnZpY2VzL2RhdGFlbmdpbmVlcmluZy8nKTtcblxuICB0cnkge1xuICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZGRpcihmaWxlUGF0aCk7XG4gICAgbGV0IGFsbFNlcnZpY2VzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZW50ID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZEZpbGUoXG4gICAgICAgIHBhdGguam9pbihmaWxlUGF0aCwgZmlsZSksXG4gICAgICAgICd1dGYtOCdcbiAgICAgICk7XG4gICAgICBcbiAgICAgIGFsbFNlcnZpY2VzLnB1c2goSlNPTi5wYXJzZShmaWxlQ29udGVudCkpO1xuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGFsbFNlcnZpY2VzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWFkaW5nIGZpbGVzOicsIGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJywgZGV0YWlsczogZXJyb3IubWVzc2FnZSB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJmaWxlUGF0aCIsInJlc29sdmUiLCJmaWxlcyIsInByb21pc2VzIiwicmVhZGRpciIsImFsbFNlcnZpY2VzIiwiZmlsZSIsImZpbGVDb250ZW50IiwicmVhZEZpbGUiLCJqb2luIiwicHVzaCIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJkZXRhaWxzIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/services/dataengineering/services.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/services/dataengineering/services.js"));
module.exports = __webpack_exports__;

})();