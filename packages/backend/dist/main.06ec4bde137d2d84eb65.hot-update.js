"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/plugins/pmtool.ts":
/*!*******************************!*\
  !*** ./src/plugins/pmtool.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _internal_plugin_pmtool_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internal/plugin-pmtool-backend */ \"../../plugins/pmtool-backend/src/index.ts\");\n\n\n\n\nasync function createPlugin(\n  env,\n) {\n  // Here is where you will add all of the required initialization code that\n  // your backend plugin needs to be able to start!\n\n  // The env contains a lot of goodies, but our router currently only\n  // needs a logger\n  return await (0,_internal_plugin_pmtool_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n    logger: env.logger,\n      config,\n\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9wbXRvb2wudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbImZpbGU6Ly8vL2hvbWUvbWlnby9wcm9qZWN0cy9wbXRvb2wgKGNvcHkgNS05IDYgYW0pL3BhY2thZ2VzL2JhY2tlbmQvc3JjL3BsdWdpbnMvcG10b29sLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJvdXRlciB9IGZyb20gJ0BpbnRlcm5hbC9wbHVnaW4tcG10b29sLWJhY2tlbmQnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGx1Z2luKFxuICBlbnYsXG4pIHtcbiAgLy8gSGVyZSBpcyB3aGVyZSB5b3Ugd2lsbCBhZGQgYWxsIG9mIHRoZSByZXF1aXJlZCBpbml0aWFsaXphdGlvbiBjb2RlIHRoYXRcbiAgLy8geW91ciBiYWNrZW5kIHBsdWdpbiBuZWVkcyB0byBiZSBhYmxlIHRvIHN0YXJ0IVxuXG4gIC8vIFRoZSBlbnYgY29udGFpbnMgYSBsb3Qgb2YgZ29vZGllcywgYnV0IG91ciByb3V0ZXIgY3VycmVudGx5IG9ubHlcbiAgLy8gbmVlZHMgYSBsb2dnZXJcbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZVJvdXRlcih7XG4gICAgbG9nZ2VyOiBlbnYubG9nZ2VyLFxuICAgICAgY29uZmlnLFxuXG4gIH0pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/pmtool.ts\n");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fda4c9c35ec576267ea6")
/******/ })();
/******/ 
/******/ }
;