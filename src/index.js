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

window.addEventListener("DOMContentLoaded", ()=> {
  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const candyImg = document.getElementById("corn");
  const titleImg = document.getElementById('title');
  const keyBoard = document.getElementById("keyboard")
  const mouse = document.getElementById('mouse')
  let menuScreen = new MenuScreen(canvas);

  window.addEventListener('keydown', e => {
    
    if(e.code === 'Space'){
      ctx.clearRect(0,0,canvas.width,canvas.height)
      window.cancelAnimationFrame(menuScreen.frame);
    }
   ctx.drawImage(mouse, canvas.width / 2, canvas.height / 2)
})
  // mouse.addEventListener("click", ()=>{
  //   console.log('hey')
  // })

// window.onload = function(){  
//   new MenuScreen(canvas);
// }

 

  // titleImage.addEventListener("click",(e)=>
  // {console.log(hello)}
  // )
  // window.addEventListener("resize", function () {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   new MenuScreen();
  //   console.log('hello')
  // })
  // canvas.addEventListener("click",function(e){
  //   mouseTrack.x = e.x
  // })
  // function getMousePos(){
  //   console.log(mouseTrack.x);
  // }
  // getMousePos()
  canvas.addEventListener("click", function (e) {
    mouseTrack.x = e.x
    mouseTrack.y = e.y
    console.log(`${mouseTrack.x}, ${mouseTrack.y}`)
  })
})

