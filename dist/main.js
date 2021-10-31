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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_candy_corn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/candy_corn.js */ \"./src/scripts/candy_corn.js\");\n/* harmony import */ var _scripts_menu_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/menu_screen.js */ \"./src/scripts/menu_screen.js\");\n\n\nwindow.CandyCorn = _scripts_candy_corn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nwindow.MenuScreen = _scripts_menu_screen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"mycanvas\");\n  var ctx = canvas.getContext('2d');\n  canvas.width = 800;\n  canvas.height = 600;\n  ctx.beginPath();\n  ctx.arc(80, 80, 50, 0, Math.PI * 2, true);\n  ctx.lineWidth = 7;\n  ctx.stroke();\n  var candyImg = document.getElementById(\"corn\");\n\n  candyImg.onload = function () {\n    new _scripts_menu_screen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBRSxNQUFNLENBQUNGLFNBQVAsR0FBbUJBLDhEQUFuQjtBQUNBRSxNQUFNLENBQUNELFVBQVAsR0FBb0JBLCtEQUFwQjtBQUNBQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFZO0FBQ3RELE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FKLEVBQUFBLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLEdBQWY7QUFDQUwsRUFBQUEsTUFBTSxDQUFDTSxNQUFQLEdBQWdCLEdBQWhCO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ0ksU0FBSjtBQUNBSixFQUFBQSxHQUFHLENBQUNLLEdBQUosQ0FBUSxFQUFSLEVBQVcsRUFBWCxFQUFjLEVBQWQsRUFBaUIsQ0FBakIsRUFBbUJDLElBQUksQ0FBQ0MsRUFBTCxHQUFTLENBQTVCLEVBQThCLElBQTlCO0FBQ0FQLEVBQUFBLEdBQUcsQ0FBQ1EsU0FBSixHQUFnQixDQUFoQjtBQUNBUixFQUFBQSxHQUFHLENBQUNTLE1BQUo7QUFDQSxNQUFNQyxRQUFRLEdBQUdaLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFqQjs7QUFDQVcsRUFBQUEsUUFBUSxDQUFDQyxNQUFULEdBQWtCLFlBQVk7QUFDNUIsUUFBSWpCLCtEQUFKO0FBQ0QsR0FGRDtBQUtELENBZkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJ2aW5nX3B1bXBraW5zLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbmR5Q29ybiBmcm9tICcuL3NjcmlwdHMvY2FuZHlfY29ybi5qcydcbmltcG9ydCBNZW51U2NyZWVuIGZyb20gJy4vc2NyaXB0cy9tZW51X3NjcmVlbi5qcydcbndpbmRvdy5DYW5keUNvcm4gPSBDYW5keUNvcm47XG53aW5kb3cuTWVudVNjcmVlbiA9IE1lbnVTY3JlZW47XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY2FudmFzLndpZHRoID0gODAwO1xuICBjYW52YXMuaGVpZ2h0ID0gNjAwO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5hcmMoODAsODAsNTAsMCxNYXRoLlBJICoyLHRydWUpO1xuICBjdHgubGluZVdpZHRoID0gN1xuICBjdHguc3Ryb2tlKClcbiAgY29uc3QgY2FuZHlJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcm5cIik7XG4gIGNhbmR5SW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgTWVudVNjcmVlbigpO1xuICB9XG4gIFxuXG59KVxuXG4iXSwibmFtZXMiOlsiQ2FuZHlDb3JuIiwiTWVudVNjcmVlbiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaGVpZ2h0IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiY2FuZHlJbWciLCJvbmxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/candy_corn.js":
/*!***********************************!*\
  !*** ./src/scripts/candy_corn.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CandyCorn; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CandyCorn = /*#__PURE__*/function () {\n  function CandyCorn(x, y) {\n    _classCallCheck(this, CandyCorn);\n\n    this.x = x;\n    this.y = y;\n    this.dx = 5;\n    this.dy = 4;\n  }\n\n  _createClass(CandyCorn, [{\n    key: \"drawCorn\",\n    value: function drawCorn(ctx) {\n      var candyImg = document.getElementById(\"corn\");\n      ctx.drawImage(candyImg, this.x, this.y);\n      console.log('drawCorn');\n    }\n  }, {\n    key: \"moveCorn\",\n    value: function moveCorn() {\n      newX = this.x + this.dx;\n      newY = this.y + this.dy;\n      this.x = newX;\n      this.y = newY;\n    }\n  }]);\n\n  return CandyCorn;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW5keV9jb3JuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUJBO0FBRW5CLHFCQUFZQyxDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQTs7QUFDZCxTQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUtDLEVBQUwsR0FBVSxDQUFWO0FBQ0Q7Ozs7V0FFRCxrQkFBU0MsR0FBVCxFQUFjO0FBQ1YsVUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBakI7QUFDQUgsTUFBQUEsR0FBRyxDQUFDSSxTQUFKLENBQWNILFFBQWQsRUFBd0IsS0FBS0wsQ0FBN0IsRUFBZ0MsS0FBS0MsQ0FBckM7QUFDQVEsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNEOzs7V0FFSCxvQkFBVTtBQUNSQyxNQUFBQSxJQUFJLEdBQUcsS0FBS1gsQ0FBTCxHQUFTLEtBQUtFLEVBQXJCO0FBQ0FVLE1BQUFBLElBQUksR0FBRyxLQUFLWCxDQUFMLEdBQVMsS0FBS0UsRUFBckI7QUFDQSxXQUFLSCxDQUFMLEdBQVNXLElBQVQ7QUFDQSxXQUFLVixDQUFMLEdBQVNXLElBQVQ7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnZpbmdfcHVtcGtpbnMvLi9zcmMvc2NyaXB0cy9jYW5keV9jb3JuLmpzPzFkYTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FuZHlDb3JuIHtcbiBcbiAgY29uc3RydWN0b3IoeCx5KXtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5keCA9IDU7XG4gICAgdGhpcy5keSA9IDQ7XG4gIH1cblxuICBkcmF3Q29ybihjdHgpIHtcbiAgICAgIGNvbnN0IGNhbmR5SW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3JuXCIpO1xuICAgICAgY3R4LmRyYXdJbWFnZShjYW5keUltZywgdGhpcy54LCB0aGlzLnkpO1xuICAgICAgY29uc29sZS5sb2coJ2RyYXdDb3JuJylcbiAgICB9XG5cbiAgbW92ZUNvcm4oKXtcbiAgICBuZXdYID0gdGhpcy54ICsgdGhpcy5keFxuICAgIG5ld1kgPSB0aGlzLnkgKyB0aGlzLmR5O1xuICAgIHRoaXMueCA9IG5ld1g7XG4gICAgdGhpcy55ID0gbmV3WTtcbiAgfVxufSJdLCJuYW1lcyI6WyJDYW5keUNvcm4iLCJ4IiwieSIsImR4IiwiZHkiLCJjdHgiLCJjYW5keUltZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcmF3SW1hZ2UiLCJjb25zb2xlIiwibG9nIiwibmV3WCIsIm5ld1kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/candy_corn.js\n");

/***/ }),

/***/ "./src/scripts/menu_screen.js":
/*!************************************!*\
  !*** ./src/scripts/menu_screen.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuScreen; }\n/* harmony export */ });\n/* harmony import */ var _candy_corn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candy_corn.js */ \"./src/scripts/candy_corn.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// // import * as CandyCorn from \"./candy_corn.js\"\n\n\nvar MenuScreen = /*#__PURE__*/function () {\n  function MenuScreen() {\n    _classCallCheck(this, MenuScreen);\n\n    this.WIDTH = 800;\n    this.HEIGHT = 600;\n    this.NUM_CANDY = 15;\n    this.candyArray = [];\n    this.populateCorn();\n    this.drawCandy();\n  }\n\n  _createClass(MenuScreen, [{\n    key: \"populateCorn\",\n    value: function populateCorn() {\n      for (var i = 0; i < this.NUM_CANDY; i++) {\n        var x = Math.random() * 800;\n        var y = Math.random() * 600;\n        var corn = new _candy_corn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y);\n        this.candyArray.push(corn);\n      }\n    }\n  }, {\n    key: \"drawButton\",\n    value: function drawButton() {}\n  }, {\n    key: \"drawCandy\",\n    value: function drawCandy() {\n      for (var i = 0; i < this.candyArray; i++) {\n        this.candyArray[i].drawCorn(ctx);\n      }\n    }\n  }]);\n\n  return MenuScreen;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tZW51X3NjcmVlbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBQ3FCQztBQUNuQix3QkFBYTtBQUFBOztBQUNYLFNBQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEdBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLFlBQUw7QUFDQSxTQUFLQyxTQUFMO0FBQ0Q7Ozs7V0FDRCx3QkFBZTtBQUNiLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLSixTQUF6QixFQUFvQ0ksQ0FBQyxFQUFyQyxFQUF5QztBQUN2QyxZQUFJQyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUF4QjtBQUNBLFlBQUlDLENBQUMsR0FBR0YsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXhCO0FBQ0EsWUFBSUUsSUFBSSxHQUFHLElBQUliLHNEQUFKLENBQWNTLENBQWQsRUFBZ0JHLENBQWhCLENBQVg7QUFDQSxhQUFLUCxVQUFMLENBQWdCUyxJQUFoQixDQUFxQkQsSUFBckI7QUFDQztBQUNKOzs7V0FDRCxzQkFBWSxDQUVYOzs7V0FDRCxxQkFBVztBQUNULFdBQUssSUFBSUwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRSxLQUFLSCxVQUF4QixFQUFvQ0csQ0FBQyxFQUFyQyxFQUF5QztBQUN2QyxhQUFLSCxVQUFMLENBQWdCRyxDQUFoQixFQUFtQk8sUUFBbkIsQ0FBNEJDLEdBQTVCO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnZpbmdfcHVtcGtpbnMvLi9zcmMvc2NyaXB0cy9tZW51X3NjcmVlbi5qcz81ZTM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8vIGltcG9ydCAqIGFzIENhbmR5Q29ybiBmcm9tIFwiLi9jYW5keV9jb3JuLmpzXCJcbmltcG9ydCBDYW5keUNvcm4gZnJvbSAnLi9jYW5keV9jb3JuLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVNjcmVlbntcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLldJRFRIID0gODAwO1xuICAgIHRoaXMuSEVJR0hUID0gNjAwO1xuICAgIHRoaXMuTlVNX0NBTkRZID0gMTU7XG4gICAgdGhpcy5jYW5keUFycmF5ID0gW107XG4gICAgdGhpcy5wb3B1bGF0ZUNvcm4oKTtcbiAgICB0aGlzLmRyYXdDYW5keSgpO1xuICB9XG4gIHBvcHVsYXRlQ29ybigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuTlVNX0NBTkRZOyBpKyspIHtcbiAgICAgIGxldCB4ID0gTWF0aC5yYW5kb20oKSAqIDgwMFxuICAgICAgbGV0IHkgPSBNYXRoLnJhbmRvbSgpICogNjAwXG4gICAgICBsZXQgY29ybiA9IG5ldyBDYW5keUNvcm4oeCx5KVxuICAgICAgdGhpcy5jYW5keUFycmF5LnB1c2goY29ybik7XG4gICAgICB9XG4gIH1cbiAgZHJhd0J1dHRvbigpe1xuICAgIFxuICB9XG4gIGRyYXdDYW5keSgpe1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDx0aGlzLmNhbmR5QXJyYXk7IGkgKyspe1xuICAgICAgdGhpcy5jYW5keUFycmF5W2ldLmRyYXdDb3JuKGN0eCk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiQ2FuZHlDb3JuIiwiTWVudVNjcmVlbiIsIldJRFRIIiwiSEVJR0hUIiwiTlVNX0NBTkRZIiwiY2FuZHlBcnJheSIsInBvcHVsYXRlQ29ybiIsImRyYXdDYW5keSIsImkiLCJ4IiwiTWF0aCIsInJhbmRvbSIsInkiLCJjb3JuIiwicHVzaCIsImRyYXdDb3JuIiwiY3R4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/menu_screen.js\n");

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