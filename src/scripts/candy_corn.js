
class CandyCorn(){
  const candyImg = document.getElementById("corn");
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 4;
    this.drawCorn();
  }

}
  drawCorn() {
      ctx.drawImage(candyImg, this.x, this.y);
    }
}
// function Game() {
//   this.DIM_X = 1000;
//   this.DIM_Y = 1000;
//   this.NUM_ASTEROIDS = 8;
//   this.asteroidArray = [];
//   this.addAsteroids();
// }




//window.addEventListener("DOMContentLoaded", function () {
//   const canvas = document.getElementById("mycanvas");
//   canvas.width = 800;
//   canvas.height = 600;
//   const ctx = canvas.getContext('2d');
//   const candyImg = document.getElementById("corn");

//   const circle = {
//     x: 200,
//     y: 200,
//     size: 30,
//     dx: 5,
//     dy: 4
//   };

//   function drawCircle() {
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
//     ctx.fillStyle = 'purple';
//     ctx.fill();
//   }

//   // function update() {
//   //   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   //   drawCircle();

//   //   circle.x += circle.dx;
//   //   circle.y += circle.dy;
//   // }

//   // image.onload = function(){

//   // const candyCorn = {
//   //   width: 50,
//   //   height: 69,
//   //   x:0,
//   //   y: 0,
//   //   speed: 3,
//   //   dx: 0,
//   //   dy: 0
//   // }
//   //   function drawCircle() {
//   //   ctx.beginPath();
//   //   ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
//   //   ctx.fillStyle = 'purple';
//   //   ctx.fill();
//   // }
// const candyCorn = {
//   //   width: 50,
//   //   height: 69,
//   //   x:0,
//   //   y: 0,
//   //   speed: 3,
//   //   dx: 0,
//   //   dy: 0
//   // }
//   // function drawCorn() {
//   //     // ctx.drawImage(candyImg, candyCorn.x, candyCorn.y, candyCorn.width, candyCorn.height)
//   // //   }
//   // function animate(){
//   //   ctx.clearRect(0,0,canvas.width, canvas.height)
//   //   drawCorn();
//   // 
//   //   // requestAnimationFrame(animate);
//   //   // candyCorn.x += candyCorn.dx;
//   //   // candyCorn.x += candyCorn.dx;
//   // }

//   // function move(){
//   //   ctx.clearRect(0,0,canvas.width, canvas.height);
//   //   candyCorn.x 
//   // }
//   // function resizeCanvas(){
//   //   canvas.width = 800;
//   //   canvas.height = 600;
//   // }
//   // window.addEventListener('resize', function(){
//   //   resizeCanvas();
//   // })
// })
