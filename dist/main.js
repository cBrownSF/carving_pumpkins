/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_candy_corn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/candy_corn.js */ \"./src/scripts/candy_corn.js\");\n/* harmony import */ var _scripts_menu_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/menu_screen.js */ \"./src/scripts/menu_screen.js\");\n\n\nwindow.CandyCorn = _scripts_candy_corn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nwindow.MenuScreen = _scripts_menu_screen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"mycanvas\");\n  var ctx = canvas.getContext('2d');\n  canvas.width = 800;\n  canvas.height = 600;\n  var candyImg = document.getElementById(\"corn\"); // candyImg.onload = function () {\n  //   drawCorn();\n  // }\n\n  var cc = new _scripts_candy_corn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](400, 400);\n  cc.drawCorn(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBRSxNQUFNLENBQUNGLFNBQVAsR0FBbUJBLDhEQUFuQjtBQUNBRSxNQUFNLENBQUNELFVBQVAsR0FBb0JBLCtEQUFwQjtBQUNBQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFZO0FBQ3RELE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FKLEVBQUFBLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLEdBQWY7QUFDQUwsRUFBQUEsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLEdBQWhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBakIsQ0FMc0QsQ0FNdEQ7QUFDQTtBQUNBOztBQUNBLE1BQUlNLEVBQUUsR0FBRyxJQUFJWiw4REFBSixDQUFjLEdBQWQsRUFBa0IsR0FBbEIsQ0FBVDtBQUVBWSxFQUFBQSxFQUFFLENBQUNDLFFBQUgsQ0FBWU4sR0FBWjtBQUVELENBYkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJ2aW5nX3B1bXBraW5zLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbmR5Q29ybiBmcm9tICcuL3NjcmlwdHMvY2FuZHlfY29ybi5qcydcbmltcG9ydCBNZW51U2NyZWVuIGZyb20gJy4vc2NyaXB0cy9tZW51X3NjcmVlbi5qcydcbndpbmRvdy5DYW5keUNvcm4gPSBDYW5keUNvcm47XG53aW5kb3cuTWVudVNjcmVlbiA9IE1lbnVTY3JlZW47XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY2FudmFzLndpZHRoID0gODAwO1xuICBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuICBjb25zdCBjYW5keUltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29yblwiKTtcbiAgLy8gY2FuZHlJbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAvLyAgIGRyYXdDb3JuKCk7XG4gIC8vIH1cbiAgbGV0IGNjID0gbmV3IENhbmR5Q29ybig0MDAsNDAwKVxuXG4gIGNjLmRyYXdDb3JuKGN0eClcblxufSlcblxuIl0sIm5hbWVzIjpbIkNhbmR5Q29ybiIsIk1lbnVTY3JlZW4iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImNhbmR5SW1nIiwiY2MiLCJkcmF3Q29ybiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/candy_corn.js":
/*!***********************************!*\
  !*** ./src/scripts/candy_corn.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CandyCorn; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CandyCorn = /*#__PURE__*/function () {\n  function CandyCorn(x, y) {\n    _classCallCheck(this, CandyCorn);\n\n    this.x = x;\n    this.y = y;\n    this.dx = 5;\n    this.dy = 4; // this.drawCorn();\n  }\n\n  _createClass(CandyCorn, [{\n    key: \"drawCorn\",\n    value: function drawCorn(ctx) {\n      var candyImg = document.getElementById(\"corn\");\n      ctx.drawImage(candyImg, this.x, this.y);\n    }\n  }]);\n\n  return CandyCorn;\n}(); // export default CandyCorn;\n// module.exports = CandyCorn;\n// MovingObject.prototype.move = function () {\n//   let newX = this.x + this.dx\n// let newY = this.y + this.dy;\n//   this.x = newX;\n// this.y = newY\n// }\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW5keV9jb3JuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUJBO0FBRW5CLHFCQUFZQyxDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQTs7QUFDZCxTQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVSxDQUFWLENBSmMsQ0FLZDtBQUNEOzs7O1dBQ0Qsa0JBQVNDLEdBQVQsRUFBYztBQUNWLFVBQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQWpCO0FBQ0FILE1BQUFBLEdBQUcsQ0FBQ0ksU0FBSixDQUFjSCxRQUFkLEVBQXdCLEtBQUtMLENBQTdCLEVBQWdDLEtBQUtDLENBQXJDO0FBQ0Q7Ozs7S0FHTDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTTtBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FydmluZ19wdW1wa2lucy8uL3NyYy9zY3JpcHRzL2NhbmR5X2Nvcm4uanM/MWRhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYW5keUNvcm4ge1xuIFxuICBjb25zdHJ1Y3Rvcih4LHkpe1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmR4ID0gNTtcbiAgICB0aGlzLmR5ID0gNDtcbiAgICAvLyB0aGlzLmRyYXdDb3JuKCk7XG4gIH1cbiAgZHJhd0Nvcm4oY3R4KSB7XG4gICAgICBjb25zdCBjYW5keUltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29yblwiKTtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoY2FuZHlJbWcsIHRoaXMueCwgdGhpcy55KTtcbiAgICB9XG4gIFxufVxuLy8gZXhwb3J0IGRlZmF1bHQgQ2FuZHlDb3JuO1xuLy8gbW9kdWxlLmV4cG9ydHMgPSBDYW5keUNvcm47XG5cbi8vIE1vdmluZ09iamVjdC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICgpIHtcbi8vICAgbGV0IG5ld1ggPSB0aGlzLnggKyB0aGlzLmR4XG4vLyBsZXQgbmV3WSA9IHRoaXMueSArIHRoaXMuZHk7XG4vLyAgIHRoaXMueCA9IG5ld1g7XG4gICAgICAvLyB0aGlzLnkgPSBuZXdZXG4vLyB9Il0sIm5hbWVzIjpbIkNhbmR5Q29ybiIsIngiLCJ5IiwiZHgiLCJkeSIsImN0eCIsImNhbmR5SW1nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/candy_corn.js\n");

/***/ }),

/***/ "./src/scripts/menu_screen.js":
/*!************************************!*\
  !*** ./src/scripts/menu_screen.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuScreen; }\n/* harmony export */ });\n/* harmony import */ var _candy_corn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candy_corn.js */ \"./src/scripts/candy_corn.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// // import * as CandyCorn from \"./candy_corn.js\"\n\n\nvar MenuScreen = /*#__PURE__*/function () {\n  function MenuScreen() {\n    _classCallCheck(this, MenuScreen);\n\n    this.WIDTH = 800;\n    this.HEIGHT = 600;\n    this.NUM_CANDY = 15;\n    this.candyArray = []; // this.populateCorn();\n    // this.drawCandy();\n  }\n\n  _createClass(MenuScreen, [{\n    key: \"populateCorn\",\n    value: function populateCorn() {\n      for (var i = 0; i < this.NUM_CANDY; i++) {\n        var x = Math.random() * 800;\n        var y = Math.random() * 600;\n        var corn = new _candy_corn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y);\n        this.candyArray.push(corn);\n      } // return this.populateCorn() maybe add return statements\n\n    }\n  }, {\n    key: \"drawCandy\",\n    value: function drawCandy(ctx) {\n      ctx.clearRect(0, 0, canvas.width, canvas.height); // for (let i = 0; i <this.candyArray; i ++){\n      //   let candy = candyArray[i].drawCorn();\n      // }\n      // return this.drawCandy() maybe add this\n    } //   animateCorn(ctx){\n    //   }\n\n  }]);\n\n  return MenuScreen;\n}(); // // module.exports = MenuScreen;\n// // export default MenuScreen;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tZW51X3NjcmVlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQztBQUNuQix3QkFBYTtBQUFBOztBQUNYLFNBQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEdBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQixDQUpXLENBS1g7QUFDQTtBQUNEOzs7O1dBQ0Qsd0JBQWU7QUFDYixXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0YsU0FBekIsRUFBb0NFLENBQUMsRUFBckMsRUFBeUM7QUFDdkMsWUFBSUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBeEI7QUFDQSxZQUFJQyxDQUFDLEdBQUdGLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUF4QjtBQUNBLFlBQUlFLElBQUksR0FBRyxJQUFJWCxzREFBSixDQUFjTyxDQUFkLEVBQWdCRyxDQUFoQixDQUFYO0FBQ0EsYUFBS0wsVUFBTCxDQUFnQk8sSUFBaEIsQ0FBcUJELElBQXJCO0FBQ0QsT0FOWSxDQU9iOztBQUNEOzs7V0FFRCxtQkFBVUUsR0FBVixFQUFjO0FBQ1pBLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JDLE1BQU0sQ0FBQ0MsS0FBM0IsRUFBa0NELE1BQU0sQ0FBQ0UsTUFBekMsRUFEWSxDQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsTUFDSDtBQUdBOzs7OztLQUlBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJ2aW5nX3B1bXBraW5zLy4vc3JjL3NjcmlwdHMvbWVudV9zY3JlZW4uanM/NWUzNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyBpbXBvcnQgKiBhcyBDYW5keUNvcm4gZnJvbSBcIi4vY2FuZHlfY29ybi5qc1wiXG5pbXBvcnQgQ2FuZHlDb3JuIGZyb20gJy4vY2FuZHlfY29ybi5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVTY3JlZW57XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5XSURUSCA9IDgwMDtcbiAgICB0aGlzLkhFSUdIVCA9IDYwMDtcbiAgICB0aGlzLk5VTV9DQU5EWSA9IDE1O1xuICAgIHRoaXMuY2FuZHlBcnJheSA9IFtdO1xuICAgIC8vIHRoaXMucG9wdWxhdGVDb3JuKCk7XG4gICAgLy8gdGhpcy5kcmF3Q2FuZHkoKTtcbiAgfVxuICBwb3B1bGF0ZUNvcm4oKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLk5VTV9DQU5EWTsgaSsrKSB7XG4gICAgICBsZXQgeCA9IE1hdGgucmFuZG9tKCkgKiA4MDBcbiAgICAgIGxldCB5ID0gTWF0aC5yYW5kb20oKSAqIDYwMFxuICAgICAgbGV0IGNvcm4gPSBuZXcgQ2FuZHlDb3JuKHgseSlcbiAgICAgIHRoaXMuY2FuZHlBcnJheS5wdXNoKGNvcm4pO1xuICAgIH1cbiAgICAvLyByZXR1cm4gdGhpcy5wb3B1bGF0ZUNvcm4oKSBtYXliZSBhZGQgcmV0dXJuIHN0YXRlbWVudHNcbiAgfVxuXG4gIGRyYXdDYW5keShjdHgpe1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDx0aGlzLmNhbmR5QXJyYXk7IGkgKyspe1xuICAgIC8vICAgbGV0IGNhbmR5ID0gY2FuZHlBcnJheVtpXS5kcmF3Q29ybigpO1xuICAgIC8vIH1cbiAgICAvLyByZXR1cm4gdGhpcy5kcmF3Q2FuZHkoKSBtYXliZSBhZGQgdGhpc1xuICB9XG4vLyAgIGFuaW1hdGVDb3JuKGN0eCl7XG4gICAgXG5cbi8vICAgfVxuXG4gIFxufVxuLy8gLy8gbW9kdWxlLmV4cG9ydHMgPSBNZW51U2NyZWVuO1xuLy8gLy8gZXhwb3J0IGRlZmF1bHQgTWVudVNjcmVlbjsiXSwibmFtZXMiOlsiQ2FuZHlDb3JuIiwiTWVudVNjcmVlbiIsIldJRFRIIiwiSEVJR0hUIiwiTlVNX0NBTkRZIiwiY2FuZHlBcnJheSIsImkiLCJ4IiwiTWF0aCIsInJhbmRvbSIsInkiLCJjb3JuIiwicHVzaCIsImN0eCIsImNsZWFyUmVjdCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/menu_screen.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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