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
  
  let menuScreen = new MenuScreen(canvas);
  let keysAvail = ['Space']
  let clickArray = ['instruct']
  let carving = false;
  let newArray = [];

  window.addEventListener('keydown', (e)=>{
    if (e.code === 'Space' && !keysAvail.includes('Space')) {
      return false;
    }
    if (e.code === 'Space' && keysAvail.includes('Space')) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      menuScreen.gameState = false;
      window.cancelAnimationFrame(menuScreen.frame);
      keysAvail.splice(0,1);
      new Instructions(canvas);
    }
  })

  canvas.addEventListener("click", function (e) {
    mouseTrack.x = e.x
    mouseTrack.y = e.y
    if ((mouseTrack.x >= canvas.width / 2 - 60 && mouseTrack.x < canvas.width / 2 + 45) && (mouseTrack.y > canvas.height / 2 + 200 - 42 && canvas.height / 2 + 200 + 45) && clickArray.includes('instruct')) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      clickArray.splice(0,1)
      new GameScreen(canvas)
    } else {
      return false
    }
  })

  canvas.addEventListener("mousedown", (e) => {
    mouseTrack.x = e.clientX
    mouseTrack.y = e.clientY
    if (clickArray.length === 0) {
      ctx.beginPath();
      ctx.rect(canvas.width/2 -400,canvas.height/2 - 200,800,550)
      ctx.closePath()
      ctx.clip();
      carving = true;
      ctx.beginPath()
      newArray.push(mouseTrack.x, mouseTrack.y);
    }
    if (clickArray.length === 0  && (mouseTrack.y > 50 && mouseTrack.y < 200)&& (mouseTrack.x > canvas.width-180 && mouseTrack.x < canvas.width -15)) {
      new GameScreen(canvas)
    }
  })

  canvas.addEventListener("mousemove", (e)=>{
    mouseTrack.x = e.clientX
    mouseTrack.y = e.clientY
    if (!carving) return false;
    if (clickArray.length === 0) {
      ctx.lineWidth = 11;
      ctx.lineCap = "round"
      ctx.lineTo(mouseTrack.x, mouseTrack.y)
      ctx.stroke()
      }
  });
     
  canvas.addEventListener("mouseup", (e) =>{
    if (clickArray.length === 0) {
      mouseTrack.x = e.clientX
      mouseTrack.y = e.clientY
      let mouseX = mouseTrack.x
      let mouseY = mouseTrack.y
        if ((mouseX - 10 < newArray[0] && mouseX + 10> newArray[0]) && (mouseY - 10 < newArray[1] && mouseY + 10 > newArray[1])) {
          carving = false;
          ctx.closePath()
          ctx.fill()
          ctx.beginPath()
          newArray.splice(0,newArray.length)
        }
      newArray.splice(0, newArray.length)
      carving = false;
      ctx.beginPath();
    }
  })
})