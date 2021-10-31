import CandyCorn from './scripts/candy_corn.js'
import MenuScreen from './scripts/menu_screen.js'
window.CandyCorn = CandyCorn;
window.MenuScreen = MenuScreen;
window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 600;
  const candyImg = document.getElementById("corn");
  // candyImg.onload = function () {
  //   drawCorn();
  // }
  let cc = new CandyCorn(400,400)

  cc.drawCorn(ctx)

})

