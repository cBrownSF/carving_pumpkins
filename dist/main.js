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

eval("// const Candy_Corn = require(\"./scripts/candy_corn.js\");\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"mycanvas\");\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  var ctx = canvas.getContext('2d'); // var board = ctx.fillRect(200,100,800,600)\n\n  var candyCorn = {\n    width: 50,\n    height: 69,\n    x: Math.random() * canvas.width,\n    y: Math.random() * canvas.height,\n    dx: 5,\n    dy: 4\n  };\n\n  function drawCorn() {\n    for (var i = 0; i < 20; i++) {\n      var randomWidth = Math.random() * innerWidth;\n      var _x = randomWidth;\n      var randomHeight = Math.random() * innerHeight;\n      var y = randomHeight;\n      ctx.drawImage(candyImg, candyCorn.x, candyCorn.y, 50, 69);\n      candyCorn.x += candyCorn.dx;\n      candyCorn.y += candyCorn.dy;\n    }\n  }\n\n  candyImg.onload = function () {\n    drawCorn();\n  };\n\n  var x = 200;\n\n  function animate() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    drawCorn();\n    requestAnimationFrame(animate); //   //   // candyCorn.x += candyCorn.dx;\n    //   //   // candyCorn.x += candyCorn.dx;\n  }\n\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJ2aW5nX3B1bXBraW5zLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJjYW5keUNvcm4iLCJ4IiwiTWF0aCIsInJhbmRvbSIsInkiLCJkeCIsImR5IiwiZHJhd0Nvcm4iLCJpIiwicmFuZG9tV2lkdGgiLCJyYW5kb21IZWlnaHQiLCJkcmF3SW1hZ2UiLCJjYW5keUltZyIsIm9ubG9hZCIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiJBQUVBO0FBQ0FBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQVk7QUFDdEQsTUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBRixFQUFBQSxNQUFNLENBQUNHLEtBQVAsR0FBZUwsTUFBTSxDQUFDTSxVQUF0QjtBQUNBSixFQUFBQSxNQUFNLENBQUNLLE1BQVAsR0FBZ0JQLE1BQU0sQ0FBQ1EsV0FBdkI7QUFDQSxNQUFNQyxHQUFHLEdBQUdQLE1BQU0sQ0FBQ1EsVUFBUCxDQUFrQixJQUFsQixDQUFaLENBSnNELENBS3REOztBQUVBLE1BQUlDLFNBQVMsR0FBRztBQUNkTixJQUFBQSxLQUFLLEVBQUUsRUFETztBQUVkRSxJQUFBQSxNQUFNLEVBQUUsRUFGTTtBQUdkSyxJQUFBQSxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQlosTUFBTSxDQUFDRyxLQUhaO0FBSWRVLElBQUFBLENBQUMsRUFBRUYsSUFBSSxDQUFDQyxNQUFMLEtBQWdCWixNQUFNLENBQUNLLE1BSlo7QUFLZFMsSUFBQUEsRUFBRSxFQUFFLENBTFU7QUFNZEMsSUFBQUEsRUFBRSxFQUFFO0FBTlUsR0FBaEI7O0FBUUEsV0FBU0MsUUFBVCxHQUFvQjtBQUNsQixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0IsVUFBSUMsV0FBVyxHQUFHUCxJQUFJLENBQUNDLE1BQUwsS0FBZ0JSLFVBQWxDO0FBQ0EsVUFBSU0sRUFBQyxHQUFHUSxXQUFSO0FBQ0EsVUFBSUMsWUFBWSxHQUFHUixJQUFJLENBQUNDLE1BQUwsS0FBZ0JOLFdBQW5DO0FBQ0EsVUFBSU8sQ0FBQyxHQUFHTSxZQUFSO0FBQ0FaLE1BQUFBLEdBQUcsQ0FBQ2EsU0FBSixDQUFjQyxRQUFkLEVBQXdCWixTQUFTLENBQUNDLENBQWxDLEVBQXFDRCxTQUFTLENBQUNJLENBQS9DLEVBQWtELEVBQWxELEVBQXNELEVBQXREO0FBQ0FKLE1BQUFBLFNBQVMsQ0FBQ0MsQ0FBVixJQUFlRCxTQUFTLENBQUNLLEVBQXpCO0FBQ0FMLE1BQUFBLFNBQVMsQ0FBQ0ksQ0FBVixJQUFlSixTQUFTLENBQUNNLEVBQXpCO0FBQ0Q7QUFFRjs7QUFDRE0sRUFBQUEsUUFBUSxDQUFDQyxNQUFULEdBQWtCLFlBQVk7QUFFM0JOLElBQUFBLFFBQVE7QUFFVCxHQUpGOztBQUtDLE1BQUlOLENBQUMsR0FBRyxHQUFSOztBQUNELFdBQVNhLE9BQVQsR0FBbUI7QUFDakJoQixJQUFBQSxHQUFHLENBQUNpQixTQUFKLENBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQnhCLE1BQU0sQ0FBQ0csS0FBekIsRUFBZ0NILE1BQU0sQ0FBQ0ssTUFBdkM7QUFDQVcsSUFBQUEsUUFBUTtBQUNSUyxJQUFBQSxxQkFBcUIsQ0FBQ0YsT0FBRCxDQUFyQixDQUhpQixDQUlyQjtBQUNBO0FBQ0c7O0FBQ0RBLEVBQUFBLE9BQU87QUFDUixDQXpDRCIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vLyBjb25zdCBDYW5keV9Db3JuID0gcmVxdWlyZShcIi4vc2NyaXB0cy9jYW5keV9jb3JuLmpzXCIpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWNhbnZhc1wiKTtcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAvLyB2YXIgYm9hcmQgPSBjdHguZmlsbFJlY3QoMjAwLDEwMCw4MDAsNjAwKVxuIFxuICBsZXQgY2FuZHlDb3JuID0ge1xuICAgIHdpZHRoOiA1MCxcbiAgICBoZWlnaHQ6IDY5LFxuICAgIHg6IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgsXG4gICAgeTogTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQsXG4gICAgZHg6IDUsXG4gICAgZHk6IDRcbiAgfVxuICBmdW5jdGlvbiBkcmF3Q29ybigpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgIGxldCByYW5kb21XaWR0aCA9IE1hdGgucmFuZG9tKCkgKiBpbm5lcldpZHRoO1xuICAgICAgbGV0IHggPSByYW5kb21XaWR0aDtcbiAgICAgIGxldCByYW5kb21IZWlnaHQgPSBNYXRoLnJhbmRvbSgpICogaW5uZXJIZWlnaHRcbiAgICAgIGxldCB5ID0gcmFuZG9tSGVpZ2h0O1xuICAgICAgY3R4LmRyYXdJbWFnZShjYW5keUltZywgY2FuZHlDb3JuLngsIGNhbmR5Q29ybi55LCA1MCwgNjkpO1xuICAgICAgY2FuZHlDb3JuLnggKz0gY2FuZHlDb3JuLmR4O1xuICAgICAgY2FuZHlDb3JuLnkgKz0gY2FuZHlDb3JuLmR5O1xuICAgIH1cbiAgXG4gIH1cbiAgY2FuZHlJbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIFxuICAgICBkcmF3Q29ybigpO1xuICAgIFxuICAgfSBcbiAgIHZhciB4ID0gMjAwO1xuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwwLGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICBkcmF3Q29ybigpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbi8vICAgLy8gICAvLyBjYW5keUNvcm4ueCArPSBjYW5keUNvcm4uZHg7XG4vLyAgIC8vICAgLy8gY2FuZHlDb3JuLnggKz0gY2FuZHlDb3JuLmR4O1xuICB9XG4gIGFuaW1hdGUoKTtcbn0pXG5cbiJdLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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