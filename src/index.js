// import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("mycanvas");
  canvas.width = 800;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');
  const candyImg = document.getElementById("corn");
  

// image.onload = function(){


const candyCorn = {
  width: 50,
  height: 69,
  x:0,
  y: 0,
  speed: 3,
  dx: 0,
  dy: 0
}
function drawCorn() {
    ctx.drawImage(candyImg, candyCorn.x, candyCorn.y, candyCorn.width, candyCorn.height)
  }
// function animate(){
//   ctx.clearRect(0,0,canvas.width, canvas.height)
//   drawCorn();
//   // requestAnimationFrame(animate);
//   // candyCorn.x += candyCorn.dx;
//   // candyCorn.x += candyCorn.dx;
// }

// function move(){
//   ctx.clearRect(0,0,canvas.width, canvas.height);
//   candyCorn.x 
// }
// function resizeCanvas(){
//   canvas.width = 800;
//   canvas.height = 600;
// }
// window.addEventListener('resize', function(){
//   resizeCanvas();
// })
});
