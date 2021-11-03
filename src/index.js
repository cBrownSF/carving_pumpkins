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
// window.MenuScreen.gameState = true;
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
  let instruct = new Instructions(canvas);
//  function instructions(e){
//    if (e.code === 'Space' && menuScreen.gameState === true) {
//      ctx.clearRect(0, 0, canvas.width, canvas.height)
//      menuScreen.gameState = false;
//      window.cancelAnimationFrame(menuScreen.frame);
//    }
//    new Instructions(canvas);
//    boundedInstruct = null;
//  }
  // let boundedInstruct = instructions.bind(this);
  // window.addEventListener('keydown', boundedInstruct )
  let keysAvail = ['Space']
  window.addEventListener('keydown', (e)=>{
   
    if (e.code === 'Space' && !keysAvail.includes('Space')) {
      return false;
    }
    if (e.code === 'Space' && keysAvail.includes('Space')) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      menuScreen.gameState = false;
      window.cancelAnimationFrame(menuScreen.frame);
      keysAvail.splice(0,1);
    }
    
  new Instructions(canvas);
  })
//    boundedInstruct = null;
//  }

  // titleImage.addEventListener("click",(e)=>
  // {console.log(hello)}
  // )
  // window.addEventListener("resize", function () {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   new MenuScreen();
  //   console.log('hello')
  // })
  let clickArray = ['instruct']
  canvas.addEventListener("click", function (e) {
    
    mouseTrack.x = e.x
    mouseTrack.y = e.y
  
    if ((mouseTrack.x >= canvas.width / 2 - 60 && mouseTrack.x < canvas.width / 2 + 45) && (mouseTrack.y > canvas.height / 2 + 200 - 42 && canvas.height / 2 + 200 + 45) && clickArray.includes('instruct')) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      clickArray.splice(0,1)
      console.log('heyy')
    } else {
      return false
    }
    new GameScreen(canvas)
  })

    // (mouseTrack.x >= canvas.width / 2 - 60 && mouseTrack.x < canvas.width / 2 + 45)
    // &&
})

