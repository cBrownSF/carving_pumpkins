/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var CandyCorn = __webpack_require__(/*! ./scripts/candy_corn.js */ \"./src/scripts/candy_corn.js\");\n\nvar HomePage = __webpack_require__(/*! ./scripts/home_page.js */ \"./src/scripts/home_page.js\");\n\nwindow.CandyCorn = CandyCorn;\nwindow.HomePage = HomePage;\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"mycanvas\");\n  var candyImg = document.getElementById(\"corn\");\n  canvas.width = innerWidth;\n  canvas.height = innerWidth;\n  var ctx = canvas.getContext('2d');\n\n  candyImg.onload = function () {\n    drawCorn();\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsU0FBUyxHQUFHQyxtQkFBTyxDQUFDLDREQUFELENBQXpCOztBQUNBLElBQU1DLFFBQVEsR0FBR0QsbUJBQU8sQ0FBQywwREFBRCxDQUF4Qjs7QUFDQUUsTUFBTSxDQUFDSCxTQUFQLEdBQW1CQSxTQUFuQjtBQUNBRyxNQUFNLENBQUNELFFBQVAsR0FBa0JBLFFBQWxCO0FBQ0FDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQVk7QUFDdEQsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWpCO0FBQ0FGLEVBQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlQyxVQUFmO0FBQ0FMLEVBQUFBLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQkQsVUFBaEI7QUFDQSxNQUFNRSxHQUFHLEdBQUdQLE1BQU0sQ0FBQ1EsVUFBUCxDQUFrQixJQUFsQixDQUFaOztBQUNBTCxFQUFBQSxRQUFRLENBQUNNLE1BQVQsR0FBa0IsWUFBWTtBQUM1QkMsSUFBQUEsUUFBUTtBQUNULEdBRkQ7QUFJRCxDQVZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FydmluZ19wdW1wa2lucy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENhbmR5Q29ybiA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvY2FuZHlfY29ybi5qc1wiKVxuY29uc3QgSG9tZVBhZ2UgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2hvbWVfcGFnZS5qc1wiKVxud2luZG93LkNhbmR5Q29ybiA9IENhbmR5Q29ybjtcbndpbmRvdy5Ib21lUGFnZSA9IEhvbWVQYWdlO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWNhbnZhc1wiKTtcbiAgY29uc3QgY2FuZHlJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcm5cIik7XG4gIGNhbnZhcy53aWR0aCA9IGlubmVyV2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBpbm5lcldpZHRoO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY2FuZHlJbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGRyYXdDb3JuKCk7XG4gIH1cblxufSlcblxuIl0sIm5hbWVzIjpbIkNhbmR5Q29ybiIsInJlcXVpcmUiLCJIb21lUGFnZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FuZHlJbWciLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0Iiwib25sb2FkIiwiZHJhd0Nvcm4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/candy_corn.js":
/*!***********************************!*\
  !*** ./src/scripts/candy_corn.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CandyCorn = /*#__PURE__*/function () {\n  function CandyCorn(x, y) {\n    _classCallCheck(this, CandyCorn);\n\n    this.x = x;\n    this.y = y;\n    this.dx = 5;\n    this.dy = 4;\n    this.drawCorn();\n  }\n\n  _createClass(CandyCorn, [{\n    key: \"drawCorn\",\n    value: function drawCorn() {\n      var candyImg = document.getElementById(\"corn\");\n      ctx.drawImage(candyImg, this.x, this.y);\n    }\n  }]);\n\n  return CandyCorn;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CandyCorn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW5keV9jb3JuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFFSixxQkFBWUMsQ0FBWixFQUFjQyxDQUFkLEVBQWdCO0FBQUE7O0FBQ2QsU0FBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUtDLFFBQUw7QUFDRDs7OztXQUNELG9CQUFXO0FBQ1AsVUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBakI7QUFDQUMsTUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWNKLFFBQWQsRUFBd0IsS0FBS0wsQ0FBN0IsRUFBZ0MsS0FBS0MsQ0FBckM7QUFDRDs7Ozs7O0FBR0wsK0RBQWVGLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJ2aW5nX3B1bXBraW5zLy4vc3JjL3NjcmlwdHMvY2FuZHlfY29ybi5qcz8xZGE3Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhbmR5Q29ybiB7XG4gXG4gIGNvbnN0cnVjdG9yKHgseSl7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuZHggPSA1O1xuICAgIHRoaXMuZHkgPSA0O1xuICAgIHRoaXMuZHJhd0Nvcm4oKTtcbiAgfVxuICBkcmF3Q29ybigpIHtcbiAgICAgIGNvbnN0IGNhbmR5SW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3JuXCIpO1xuICAgICAgY3R4LmRyYXdJbWFnZShjYW5keUltZywgdGhpcy54LCB0aGlzLnkpO1xuICAgIH1cbiAgXG59XG5leHBvcnQgZGVmYXVsdCBDYW5keUNvcm47Il0sIm5hbWVzIjpbIkNhbmR5Q29ybiIsIngiLCJ5IiwiZHgiLCJkeSIsImRyYXdDb3JuIiwiY2FuZHlJbWciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZHJhd0ltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/candy_corn.js\n");

/***/ }),

/***/ "./src/scripts/home_page.js":
/*!**********************************!*\
  !*** ./src/scripts/home_page.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _candy_corn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candy_corn.js */ \"./src/scripts/candy_corn.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar HomePage = /*#__PURE__*/function () {\n  function HomePage() {\n    _classCallCheck(this, HomePage);\n\n    this.WIDTH = 800;\n    this.HEIGHT = 600;\n    this.NUM_CANDY = 15;\n    this.candyArray = [];\n    this.populateCorn();\n  }\n\n  _createClass(HomePage, [{\n    key: \"populateCorn\",\n    value: function populateCorn() {\n      for (var i = 0; i < this.NUM_CANDY; i++) {\n        var x = Math.random() * 800;\n        var y = Math.random() * 600;\n        var corn = new _candy_corn_js__WEBPACK_IMPORTED_MODULE_0__(x, y);\n        this.candyArray.push(corn);\n      }\n    }\n  }]);\n\n  return HomePage;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ob21lX3BhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7SUFFTUM7QUFDSixzQkFBYTtBQUFBOztBQUNYLFNBQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEdBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLFlBQUw7QUFDRDs7OztXQUNELHdCQUFlO0FBQ2IsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtILFNBQXpCLEVBQW9DRyxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDLFlBQUlDLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXhCO0FBQ0EsWUFBSUMsQ0FBQyxHQUFHRixJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBeEI7QUFDQSxZQUFJRSxJQUFJLEdBQUcsSUFBSVosMkNBQUosQ0FBY1EsQ0FBZCxFQUFnQkcsQ0FBaEIsQ0FBWDtBQUNBLGFBQUtOLFVBQUwsQ0FBZ0JRLElBQWhCLENBQXFCRCxJQUFyQjtBQUNEO0FBQ0Y7Ozs7OztBQUtILCtEQUFlWCxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FydmluZ19wdW1wa2lucy8uL3NyYy9zY3JpcHRzL2hvbWVfcGFnZS5qcz80YzU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIENhbmR5Q29ybiBmcm9tIFwiLi9jYW5keV9jb3JuLmpzXCJcblxuY2xhc3MgSG9tZVBhZ2V7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5XSURUSCA9IDgwMDtcbiAgICB0aGlzLkhFSUdIVCA9IDYwMDtcbiAgICB0aGlzLk5VTV9DQU5EWSA9IDE1O1xuICAgIHRoaXMuY2FuZHlBcnJheSA9IFtdO1xuICAgIHRoaXMucG9wdWxhdGVDb3JuKCk7XG4gIH1cbiAgcG9wdWxhdGVDb3JuKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5OVU1fQ0FORFk7IGkrKykge1xuICAgICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpICogODAwXG4gICAgICBsZXQgeSA9IE1hdGgucmFuZG9tKCkgKiA2MDBcbiAgICAgIGxldCBjb3JuID0gbmV3IENhbmR5Q29ybih4LHkpXG4gICAgICB0aGlzLmNhbmR5QXJyYXkucHVzaChjb3JuKTtcbiAgICB9XG4gIH1cblxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbIkNhbmR5Q29ybiIsIkhvbWVQYWdlIiwiV0lEVEgiLCJIRUlHSFQiLCJOVU1fQ0FORFkiLCJjYW5keUFycmF5IiwicG9wdWxhdGVDb3JuIiwiaSIsIngiLCJNYXRoIiwicmFuZG9tIiwieSIsImNvcm4iLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/home_page.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJ2aW5nX3B1bXBraW5zLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;