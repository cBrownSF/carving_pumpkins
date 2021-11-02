import ChooseScreen from './scripts/choose_screen.js'
import Button from './scripts/main_buttons.js'
import CandyCorn from './scripts/candy_corn.js'
import MenuScreen from './scripts/menu_screen.js'
window.Button = Button;
window.CandyCorn = CandyCorn;
window.MenuScreen = MenuScreen;
window.ChooseScreen = ChooseScreen;
const mouseTrack = {
  x: null,
  y:null
}

window.addEventListener("DOMContentLoaded",function() {
  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const titleImage = document.getElementById("title");
 ctx.drawImage(titleImage,canvas.width / 2 - 200, canvas.height / 2 - 200)
     new MenuScreen(canvas)
    

  titleImage.addEventListener("click",(e)=>
  {console.log(hello)}
  )
  // window.addEventListener("resize", function () {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   new MenuScreen();
  //   console.log('hello')
  // })
  canvas.addEventListener("click",function(e){
    mouseTrack.x = e.x
  })
})

