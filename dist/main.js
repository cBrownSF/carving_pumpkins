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
/***/ (function() {

eval("// const Candy_Corn = require(\"./scripts/candy_corn.js\");\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"mycanvas\");\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  var ctx = canvas.getContext('2d'); // var board = ctx.fillRect(200,100,800,600)\n\n  var candyImg = document.getElementById(\"corn\");\n  var candyCorn = {\n    width: 50,\n    height: 69,\n    x: Math.random() * innerWidth,\n    y: Math.random() * innerHeight,\n    dx: 5,\n    dy: 4\n  };\n\n  function drawCorn() {\n    for (var i = 0; i < 20; i++) {\n      ctx.drawImage(candyImg, Math.random() * innerWidth, Math.random() * innerHeight, 50, 69);\n    }\n  }\n\n  candyImg.onload = function () {\n    drawCorn();\n  };\n\n  function move() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height); //   //   drawCorn();\n    //   // \n\n    requestAnimationFrame(move); //   //   // candyCorn.x += candyCorn.dx;\n    //   //   // candyCorn.x += candyCorn.dx;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJ2aW5nX3B1bXBraW5zLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJjYW5keUltZyIsImNhbmR5Q29ybiIsIngiLCJNYXRoIiwicmFuZG9tIiwieSIsImR4IiwiZHkiLCJkcmF3Q29ybiIsImkiLCJkcmF3SW1hZ2UiLCJvbmxvYWQiLCJtb3ZlIiwiY2xlYXJSZWN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUNBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFZO0FBQ3RELE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQUYsRUFBQUEsTUFBTSxDQUFDRyxLQUFQLEdBQWVMLE1BQU0sQ0FBQ00sVUFBdEI7QUFDQUosRUFBQUEsTUFBTSxDQUFDSyxNQUFQLEdBQWdCUCxNQUFNLENBQUNRLFdBQXZCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHUCxNQUFNLENBQUNRLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWixDQUpzRCxDQUt0RDs7QUFDQSxNQUFNQyxRQUFRLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFqQjtBQUNBLE1BQUlRLFNBQVMsR0FBRztBQUNkUCxJQUFBQSxLQUFLLEVBQUUsRUFETztBQUVkRSxJQUFBQSxNQUFNLEVBQUUsRUFGTTtBQUdkTSxJQUFBQSxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQlQsVUFITDtBQUlkVSxJQUFBQSxDQUFDLEVBQUVGLElBQUksQ0FBQ0MsTUFBTCxLQUFnQlAsV0FKTDtBQUtkUyxJQUFBQSxFQUFFLEVBQUUsQ0FMVTtBQU1kQyxJQUFBQSxFQUFFLEVBQUU7QUFOVSxHQUFoQjs7QUFRQSxXQUFTQyxRQUFULEdBQW9CO0FBQ2xCLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQlgsTUFBQUEsR0FBRyxDQUFDWSxTQUFKLENBQWNWLFFBQWQsRUFBd0JHLElBQUksQ0FBQ0MsTUFBTCxLQUFnQlQsVUFBeEMsRUFBb0RRLElBQUksQ0FBQ0MsTUFBTCxLQUFnQlAsV0FBcEUsRUFBaUYsRUFBakYsRUFBcUYsRUFBckY7QUFDRDtBQUVGOztBQUNERyxFQUFBQSxRQUFRLENBQUNXLE1BQVQsR0FBa0IsWUFBWTtBQUUzQkgsSUFBQUEsUUFBUTtBQUVULEdBSkY7O0FBS0EsV0FBU0ksSUFBVCxHQUFnQjtBQUNkZCxJQUFBQSxHQUFHLENBQUNlLFNBQUosQ0FBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCdEIsTUFBTSxDQUFDRyxLQUF6QixFQUFnQ0gsTUFBTSxDQUFDSyxNQUF2QyxFQURjLENBRWxCO0FBQ0E7O0FBQ0lrQixJQUFBQSxxQkFBcUIsQ0FBQ0YsSUFBRCxDQUFyQixDQUpjLENBS2xCO0FBQ0E7QUFDRztBQUNGLENBbENEIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIGNvbnN0IENhbmR5X0Nvcm4gPSByZXF1aXJlKFwiLi9zY3JpcHRzL2NhbmR5X2Nvcm4uanNcIik7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Y2FudmFzXCIpO1xuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIC8vIHZhciBib2FyZCA9IGN0eC5maWxsUmVjdCgyMDAsMTAwLDgwMCw2MDApXG4gIGNvbnN0IGNhbmR5SW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3JuXCIpO1xuICBsZXQgY2FuZHlDb3JuID0ge1xuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDY5LFxuICAgIHg6IE1hdGgucmFuZG9tKCkgKiBpbm5lcldpZHRoLFxuICAgIHk6IE1hdGgucmFuZG9tKCkgKiBpbm5lckhlaWdodCxcbiAgICBkeDogNSxcbiAgICBkeTogNFxuICB9XG4gIGZ1bmN0aW9uIGRyYXdDb3JuKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgY3R4LmRyYXdJbWFnZShjYW5keUltZywgTWF0aC5yYW5kb20oKSAqIGlubmVyV2lkdGgsIE1hdGgucmFuZG9tKCkgKiBpbm5lckhlaWdodCwgNTAsIDY5KTtcbiAgICB9XG4gIFxuICB9XG4gIGNhbmR5SW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBcbiAgICAgZHJhd0Nvcm4oKTtcbiAgICBcbiAgIH0gXG4gIGZ1bmN0aW9uIG1vdmUoKSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLDAsY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuLy8gICAvLyAgIGRyYXdDb3JuKCk7XG4vLyAgIC8vIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShtb3ZlKTtcbi8vICAgLy8gICAvLyBjYW5keUNvcm4ueCArPSBjYW5keUNvcm4uZHg7XG4vLyAgIC8vICAgLy8gY2FuZHlDb3JuLnggKz0gY2FuZHlDb3JuLmR4O1xuICB9XG59KVxuXG4iXSwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;