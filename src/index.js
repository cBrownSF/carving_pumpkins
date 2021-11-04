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
let carving = true;

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
      console.log('for sure')
    }
    
  new Instructions(canvas);
  })
//    boundedInstruct = null;
//  }


  // function firstPos(){
  //   carving = true;
  // }
  // function endPos(){
  //   carving = false;
  // }
  // function carve(e){
  //   if (!carving) return false;
  //   ctx.lineWidth = 12;
  //   ctx.lineCap = 'round';
  //   ctx.lineTo(e.clientX,e.clientY)
  //   ctx.stroke()
  // }
  

  let clickArray = ['instruct']
  canvas.addEventListener("click", function (e) {
    
    mouseTrack.x = e.x
    mouseTrack.y = e.y
  
    if ((mouseTrack.x >= canvas.width / 2 - 60 && mouseTrack.x < canvas.width / 2 + 45) && (mouseTrack.y > canvas.height / 2 + 200 - 42 && canvas.height / 2 + 200 + 45) && clickArray.includes('instruct')) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      clickArray.splice(0,1)
      console.log('hey')
    } else {
      return false
    }
    new GameScreen(canvas)
  })

  let carving = false;

  function firstPos(){
    if (clickArray.length === 0) {
      carving = true;
      console.log('begin')
    }
  }
  function endPos() {
    if (clickArray.length === 0) {
    carving = false;
    ctx.beginPath();
    console.log('end')
    }
  }

  let newArray = [];
  canvas.addEventListener("mousedown", (e) => {
    let startX = e.clientX
    let startY= e.clientY
    firstPos()
    newArray.push(startX, startY);
    console.log(startX,startY);
  })
  canvas.addEventListener("mousemove", (e)=>{
   mouseTrack.x = e.clientX
    mouseTrack.y = e.clientY
    if (carving===false) return false;
    if (clickArray.length === 0) {

      ctx.lineTo(mouseTrack.x, mouseTrack.y)
      ctx.lineWidth = 11;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(mouseTrack.x, mouseTrack.y)
      let count = 0;
      for (let i = mouseTrack.x - 10; i <mouseTrack.x +11; i ++){
        for (let j = 0; j <newArray.length; j +=2){
          if (mouseTrack.x[i] === newArray[j]){
            count +=1;break;
          }
        }
        }
        for (let k = mouseTrack.y -10; k <mouseTrack.y +11; k ++){
          for (let l = 1; l <newArray.length; l+=2){
            if (mouseTrack.y[k] === newArray[l]){
              count += 1;break;
            }
          }
        }

        if (count ===2){
          return 'YESSSS';
        }
        // for (let j = mouseTrack.y - 10; j < mouseTrack.y + 11; j++) {
        //   coordinatesY .push(mouseTrack.y[j])
        // }
        // for (let k = 0; k <coordinatesX.length; k +=2){
        //   for (let l = )
        //   if(newArray.includes(coordinates))
        // }
        
      }
      // }
      // if (newArray.includes(mouseTrack.x) && newArray.includes(mouseTrack.y)){
      //   console.log('working');
      //   newArray.splice(0,newArray.length -1);
      // }
    
  });
      // if (newArray.length === 4 && (mouseTrack.x > newArray[2] - 10 && mouseTrack.x < newArray[2] + 10) && (mouseTrack.y > newArray[3] - 10 && mouseTrack.y < newArray[3] + 10)) {
      //   console.log('working');
      //   newArray.splice(0, newArray.length - 1);
      // }
      // if (newArray.length === 2 && (mouseTrack.x > newArray[0] - 10 && mouseTrack.x < newArray[1] + 10) && (mouseTrack.y > newArray[0] - 10 && mouseTrack.y < newArray[0] + 10)) {
      //   newArray.splice(0, 2);
      // }
      // }
      // console.log('coo')
    // carve();
    

    
  canvas.addEventListener("mouseup", (e) =>{
    endPos()
  })
})