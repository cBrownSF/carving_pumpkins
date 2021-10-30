import Example from "./scripts/example";

// document.addEventListener("DOMContentLoaded", () =>{ 
// console.log("hello world");
// const main = document.getElementById("main");
// new Example(main);
// })

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
//fillRect
// ctx.fillRect(20,60,150,100);
// ctx.fillStyle = 'black';

// //strokeRect
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green'
// ctx.strokeRect(100,200,150,150);
// //clearRect
// ctx.clearRect(25,25,140,90)
// //strokeText
// ctx.fillText('Pumpkins',400,50)
// ctx.font = '50px Times'
// ctx.strokeText('Pumpkins',400,100)
//stroke text referenes line width and stroke style from above

///Paths--triangular buttons like candy corn
// ctx.beginPath()
// ctx.moveTo(50,50);
// ctx.lineTo(150,50);
// ctx.lineTo(100,200);
// ctx.stroke()
// ctx.closePath();

//Arcs->
// ctx.arc(canvas.width/2, canvas.height / 2,40,0,Math.Pi *2)
// ctx.stroke();
// ctx.moveTo()
//Add image and then we can move on this
function move(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  candyCorn.x 
}
const candyImg = document.getElementById("corn");

const candyCorn = {
  w: 50,
  h: 69,
  x:40,
  y: 150,
  speed: 3,
  dx: 4,
  dy: 4
}

function drawCorn(){
  ctx.drawImage(candyImg, candyCorn.x, candyCorn.y, candyCorn.w, candyCorn.h)
}

function animate(){
  drawCorn();
  requestAnimationFrame(animate);

}