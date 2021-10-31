

// const Candy_Corn = require("./scripts/candy_corn.js");
window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("mycanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  // var board = ctx.fillRect(200,100,800,600)
 
  let candyCorn = {
    width: 50,
    height: 69,
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: 5,
    dy: 4
  }
  function drawCorn() {
    for (let i = 0; i < 20; i++) {
      let randomWidth = Math.random() * innerWidth;
      let x = randomWidth;
      let randomHeight = Math.random() * innerHeight
      let y = randomHeight;
      ctx.drawImage(candyImg, candyCorn.x, candyCorn.y, 50, 69);
      candyCorn.x += candyCorn.dx;
      candyCorn.y += candyCorn.dy;
    }
  
  }
  candyImg.onload = function () {
    
     drawCorn();
    
   } 
   var x = 200;
  function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    drawCorn();
    requestAnimationFrame(animate);
//   //   // candyCorn.x += candyCorn.dx;
//   //   // candyCorn.x += candyCorn.dx;
  }
  animate();
})

