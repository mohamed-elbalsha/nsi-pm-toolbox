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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPlugin)\n/* harmony export */ });\n/* harmony import */ var _internal_plugin_pmtool_backend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internal/plugin-pmtool-backend */ \"../../plugins/pmtool-backend/src/index.ts\");\n\n\n\n\nasync function createPlugin(\n  env,\n) {\n  // Here is where you will add all of the required initialization code that\n  // your backend plugin needs to be able to start!\n\n  // The env contains a lot of goodies, but our router currently only\n  // needs a logger\n  return await (0,_internal_plugin_pmtool_backend__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n    logger: env.logger,\n    \n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9wbXRvb2wudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJmaWxlOi8vLy9ob21lL21pZ28vcHJvamVjdHMvcG10b29sIChjb3B5IDUtOSA2IGFtKS9wYWNrYWdlcy9iYWNrZW5kL3NyYy9wbHVnaW5zL3BtdG9vbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAaW50ZXJuYWwvcGx1Z2luLXBtdG9vbC1iYWNrZW5kJztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihcbiAgZW52LFxuKSB7XG4gIC8vIEhlcmUgaXMgd2hlcmUgeW91IHdpbGwgYWRkIGFsbCBvZiB0aGUgcmVxdWlyZWQgaW5pdGlhbGl6YXRpb24gY29kZSB0aGF0XG4gIC8vIHlvdXIgYmFja2VuZCBwbHVnaW4gbmVlZHMgdG8gYmUgYWJsZSB0byBzdGFydCFcblxuICAvLyBUaGUgZW52IGNvbnRhaW5zIGEgbG90IG9mIGdvb2RpZXMsIGJ1dCBvdXIgcm91dGVyIGN1cnJlbnRseSBvbmx5XG4gIC8vIG5lZWRzIGEgbG9nZ2VyXG4gIHJldHVybiBhd2FpdCBjcmVhdGVSb3V0ZXIoe1xuICAgIGxvZ2dlcjogZW52LmxvZ2dlcixcbiAgICBcbiAgfSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/pmtool.ts\n");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("06ec4bde137d2d84eb65")
/******/ })();
/******/ 
/******/ }
;