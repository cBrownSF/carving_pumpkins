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

  const candyImg = document.getElementById("corn");
  const titleImg = document.getElementById('title');
  const mouse = document.getElementById('mouse')

  let menuScreen = new MenuScreen(canvas);
  // let instruct = new Instructions(canvas);


  let keysAvail = ['Space']
  window.addEventListener('keydown', (e)=>{
    console.log(e)
    if (e.code === 'Space' && !keysAvail.includes('Space')) {
      return false;
    }
    if (e.code === 'Space' && keysAvail.includes('Space')) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      menuScreen.gameState = false;
      window.cancelAnimationFrame(menuScreen.frame);
      keysAvail.splice(0,1);
      console.log('for sure')
      new Instructions(canvas);
    }
  })


  let clickArray = ['instruct']
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

  // canvas.addEventListener("click", (e) =>{
    
  //   mouseTrack.x = e.x
  //   mouseTrack.y = e.y
  //   if (clickArray.length === 0) {
  //     if ((mouseTrack.x >= canvas.width -145 && mouseTrack.x < canvas.width - 54) && (mouseTrack.y > 97 && mouseTrack.y <186)) {
  //       console.log('reset')
  //   }
  // }//&& (mouseTrack.x > 640 && mouseTrack.x< canvas.width - 582) && (mouseTrack.y < canvas.height -81 && mouseTrack.y>canvas.height/2 -79)
  // })
    // (e.clientX > 640 && e.clientX < canvas.width - 582) && (e.clientY > canvas.height - 81 && e.clientY < canvas.height / 2 - 79)
  // if ((mouseTrack.x >= canvas.width - 145 && mouseTrack.x < canvas.width - 54) && (mouseTrack.y > 97 && mouseTrack.y < 186)) {
  let carving = false;

  let newArray =[]  
  canvas.addEventListener("mousedown", (e) => {
    
    mouseTrack.x = e.x
    mouseTrack.y = e.y
    console.log(mouseTrack)
    if (clickArray.length === 0) {
      ctx.beginPath();
      ctx.rect(canvas.width/2 -400,canvas.height/2 - 200,800,550)
      ctx.closePath()
      ctx.clip();
      carving = true;
      ctx.beginPath()
      let startX = e.clientX
      let startY= e.clientY
      newArray.push(e.clientX, e.clientY);
    }
    
    if (clickArray.length === 0  && (mouseTrack.y > 50 && mouseTrack.y < 200)&& (mouseTrack.x > canvas.width-180)) {
      new GameScreen(canvas)
    }
    // if (clickArray.length === 0 && (mouseTrack.y > 250 && mouseTrack.y < 400) && (mouseTrack.x > canvas.width - 180)) {
   
    // }
  })

  canvas.addEventListener("mousemove", (e)=>{
    mouseTrack.x = e.clientX
    mouseTrack.y = e.clientY
    if (!carving) return false;
    if (clickArray.length === 0) {
      ctx.lineWidth = 12;
      ctx.lineCap = "round"
      ctx.lineTo(e.clientX, e.clientY)
      ctx.stroke()
      }
  });
     
    
 
  canvas.addEventListener("mouseup", (e) =>{
    if (clickArray.length === 0) {
      mouseTrack.x = e.clientX
      mouseTrack.y = e.clientY
      let mouseX = mouseTrack.x
      let mouseY = mouseTrack.y

        if ((mouseX - 20 < newArray[0] && mouseX + 20> newArray[0]) && (mouseY - 20 < newArray[1] && mouseY + 20 > newArray[1])) {
          carving = false;
          ctx.closePath()
          ctx.fill()
          ctx.beginPath()
          newArray.splice(0,newArray.length)
        }

      newArray.splice(0, newArray.length)
      carving = false;
      ctx.beginPath();
      // console.log(mouseX,mouseY)
    }
  })
})