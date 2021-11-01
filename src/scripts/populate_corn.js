// if (i !== 0) {
//   for (let j = 0; j < this.candyArray.length; j++) {
//     if (this.distBetween(x, y, this.candyArray[j].x, this.candyArray[j].y) <= 0) {
//       x = Math.random() * canvas.width;
//       y = Math.random() * canvas.height;
//       //also can possibly change the value here later so that they are spaced farther apart
//       //still an issue because these newCoordinates could also already be filled
//     }
// //   }
// // }

// distBetween(x1, y1, x2, y2) {
//   return Math.sqrt(
//     Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
//   );
// }