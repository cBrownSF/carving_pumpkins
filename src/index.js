import CandyCorn from './scripts/candy_corn.js'
import MenuScreen from './scripts/menu_screen.js'
window.CandyCorn = CandyCorn;
window.MenuScreen = MenuScreen;
window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 600;
  ctx.beginPath();
  ctx.arc(80,80,50,0,Math.PI *2,true);
  ctx.lineWidth = 7
  ctx.stroke()
  const candyImg = document.getElementById("corn");
  candyImg.onload = function () {
    new MenuScreen();
  }
  

})

