import Button from './scripts/main_buttons.js'
import CandyCorn from './scripts/candy_corn.js'
import MenuScreen from './scripts/menu_screen.js'
window.Button = Button;
window.CandyCorn = CandyCorn;
window.MenuScreen = MenuScreen;
window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 600;
  
  
  let but = new Button(80, 80,50, 'Hello')


  const candyImg = document.getElementById("corn");
  candyImg.onload = function () {
    new MenuScreen();
  }
  

})

