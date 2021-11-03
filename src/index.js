import GameScreen from './scripts/game_screen.js'
import Button from './scripts/main_buttons.js'
import CandyCorn from './scripts/candy_corn.js'
import MenuScreen from './scripts/menu_screen.js'
import Instructions from './scripts/instructions.js'
window.Button = Button;
window.CandyCorn = CandyCorn;
window.MenuScreen = MenuScreen;
window.GameScreen = GameScreen;
window.Instructions = Instructions;
const mouseTrack = {
  x: null,
  y:null
}
const STATE= {
  MENU: 0
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
    if (e.code === 'Space' && menuScreen.gameState === true){
      ctx.clearRect(0,0,canvas.width,canvas.height)
      window.cancelAnimationFrame(menuScreen.frame);
      menuScreen.gameState = false;
    }
   
   new Instructions(canvas);
})

  // titleImage.addEventListener("click",(e)=>
  // {console.log(hello)}
  // )
  // window.addEventListener("resize", function () {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   new MenuScreen();
  //   console.log('hello')
  // })
  
  canvas.addEventListener("click", function (e) {
    
    mouseTrack.x = e.x
    mouseTrack.y = e.y
    let canvaslowy = canvas.height / 2 +200 - 42
    let canvashighy = canvas.height / 2 +200 + 45;
    // console.log(`${ mouseTrack.x }, ${ mouseTrack.y}`)
    if ((mouseTrack.x >= canvas.width / 2 - 60 && mouseTrack.x < canvas.width / 2 + 45) &&(mouseTrack.y > canvas.height / 2 + 200 - 42 && canvas.height / 2 + 200 + 45)) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    } else {
      return false
    }
    new GameScreen(canvas)
  })

    // (mouseTrack.x >= canvas.width / 2 - 60 && mouseTrack.x < canvas.width / 2 + 45)
    // &&
})

