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

window.addEventListener("DOMContentLoaded", ()=> {
  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const global = false;
  debugger;
  console.log('hello')
  let menuScreen = new MenuScreen(canvas);

  window.addEventListener('keydown', loadInstructions,{once:true})
 

  function loadInstructions(e){
    if (e.code === 'Space') {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      window.cancelAnimationFrame(menuScreen.frame);
      new Instructions(canvas);
    }
  }

})