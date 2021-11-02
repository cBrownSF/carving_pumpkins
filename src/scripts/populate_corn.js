// // // if (i !== 0) {
// // //   for (let j = 0; j < this.candyArray.length; j++) {
// // //     if (this.distBetween(x, y, this.candyArray[j].x, this.candyArray[j].y) <= 15) {
// // //       x = Math.random() * canvas.width;
// // //       y = Math.random() * canvas.height;
// // //       //also can possibly change the value here later so that they are spaced farther apart
// // //       //still an issue because these newCoordinates could also already be filled
// // //     }
// // // //   }
// // // // }
// // for (let j = 0; j < this.candyArray.length; j++)
// //   let corn = new CandyCorn(x, y);
// // if (corn.isCollidedWith(candyArray[j]){
// //   corn.x = Math.random() * canvas.width;
// //   corn.y = Math.random() * canvas.height;
// //   j = -1;
// //   )else{
// //     this.candyArray.push(corn);
// //   }
// // if (this.distBetween(x, y, this.candyArray[j].x, this.candyArray[j].y) <= 0)
// // if corn.isCollidedWith(candyArray[j]){
// //   x = Math.random() * canvas.width;
// //   y = Math.random() * canvas.height;
// //   let j =-1;continue;

// // }
// // isOntopOf(){
// //   getDist(x1, y1, x2, y2) {

// // }
// // isCollidedWith(otherObject) {
// //   if (this.getDist(this.x, this.y, otherObject.x, otherObject.y) <= 0) {
// //     return true;
// //   }
// //   else {
// //     false
// //   }
// // }
// // // distBetween(x1, y1, x2, y2) {
// // //   return Math.sqrt(
// // //     Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
// // //   );
// // // }

// // for (let j = 0; j < this.candyArray.length; j++) {
// //   let corn = new CandyCorn(x, y);
// //   if (this.getDist(corn.x, corn.y, this.candyArray[j].x, this.candyArray[j].y) <= 15) {
// //     corn.x = Math.random() * canvas.width;
// //     corn.y = Math.random() * canvas.height;
// //     j = -1; continue;
// //   } else {

// // corn = {
// //   x:5,
// //   y:4
// // }
// let corn = {
//   x: 5,
//   y: 4
// }
// function checkFor() {
//   let corn = {
//     x: 5,
//     y: 4
//   }

//   for (let i = 0; i < 8; i++) {
//     if (getDist(corn.x, corn.y, cheese.x, cheese.y) <= 0) {
//       corn.x = Math.random() * canvas.width;
//       corn.y = Math.random() * canvas.height
//       i = -1; continue;
//     }
//     else {
//       return corn;
//     }
//   }
// }