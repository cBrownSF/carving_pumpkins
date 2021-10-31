// const Candy_Corn = require("./scripts/candy_corn.js");
window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("mycanvas");
  canvas.width = 800;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');
  const candyImg = document.getElementById("corn");

  const candyCorn = {
    // width: 50,
    // height: 69,
    x: 200,
    y: 200,
    size:30,
    dx: 5,
    dy: 4
  }
 
  function drawCorn() {
    ctx.drawImage(candyImg, candyCorn.x, candyCorn.y, candyCorn.size)
    console.log("hello");

  }
  drawCorn();
})