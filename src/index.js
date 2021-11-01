import Button from './scripts/main_buttons.js'
import CandyCorn from './scripts/candy_corn.js'
import MenuScreen from './scripts/menu_screen.js'
window.Button = Button;
window.CandyCorn = CandyCorn;
window.MenuScreen = MenuScreen;
const mouseTrack = {
  x: null,
  y:null
}

window.addEventListener("DOMContentLoaded",function() {
  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const candyImg = document.getElementById("corn");
  
  candyImg.onload = function () {
    new MenuScreen();
  }
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    new MenuScreen();
  })
  canvas.addEventListener("click",function(e){
    mouseTrack.x = e.x
    console.log(e)
  })
  
})

