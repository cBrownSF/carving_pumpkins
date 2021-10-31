

// const Candy_Corn = require("./scripts/candy_corn.js");
window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("mycanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  // var board = ctx.fillRect(200,100,800,600)
  const candyImg = document.getElementById("corn");
  let candyCorn = {
    width: 50,
    height: 69,
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    dx: 5,
    dy: 4
  }
  function drawCorn() {
    for (let i = 0; i < 20; i++) {
      ctx.drawImage(candyImg, Math.random() * innerWidth, Math.random() * innerHeight, 50, 69);
    }
  
  }
  candyImg.onload = function () {
    
     drawCorn();
    
   } 
  function move() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
//   //   drawCorn();
//   // 
    requestAnimationFrame(move);
//   //   // candyCorn.x += candyCorn.dx;
//   //   // candyCorn.x += candyCorn.dx;
  }
})

