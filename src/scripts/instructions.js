import Button from './main_buttons.js'
import GameScreen from './game_screen.js';
class Instructions{

  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')
  this.drawButton();
    this.drawBox();
    this.startButton;
    this.getMousePos(e)
    // this.loadGameScreen()
  }

  drawButton(){
 
  let button = new Button(this.canvas.width/2, this.canvas.height/2 +300, 70, "START!",this.canvas)  
    this.startButton = button;
  }
  
  loadGameScreen(){
    let clickArray = ['instruct']
    let button = this.startButton
    // let ctx = this.ctx
    // let canvas = this.canvas
    // let offX = ctx.canvas.offsetLeft;
    // let offY = ctx.canvas.offsetTop;
  let rect = this.canvas.getBoundingClientRect(), // abs. size of element
   scaleX = this.canvas.width / rect.width,    // relationship bitmap vs. element for X
   scaleY = this.canvas.height / rect.height;  // relationship bitmap vs. element for Y

    this.canvas.addEventListener('click', function (e) {
       
      // let mouseX = e.clientX -offX
      // let mouseY = e.clientY-offY
      let mouseX= (e.clientX - rect.left) * scaleX  // scale mouse coordinates after they have
  let mouseY= (e.clientY - rect.top) * scaleY 
      console.log(`buttonX:${button.x},MX:${mouseX}`)
      console.log(`buttonY:${button.y}, MY:${mouseY}`)
      
      if ((mouseX >= button.x -59 && mouseX < button.x + 59) && (mouseY > button.y -59 && mouseY < button.y+45) && clickArray.includes('instruct')) {

        debugger;
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          clickArray.splice(0, 1)
          new GameScreen(canvas)
        }else {
          return false
        }
     
      
  })
}

  // newone() {
  //   const mouseTrack = {
  //     x: null,
  //     y: null
  //   }
  //   mouseTrack.x = e.clientX
  //   mouseTrack.y = e.clientY
  //   // console.log(button)
  //   console.log(this.startButton)

    
  //   console.log(`canvas width needed: ${canvas.width / 2 - 60} - ${canvas.width / 2 + 45}`)
  //   console.log(`canvas height needed: ${canvas.height / 2 + 200 - 42}-${canvas.height / 2 + 200 + 45}`)
  //   console.log(`mousePosX:${mouseTrack.x},mousePosY:${mouseTrack.y}`)
  //   console.log('-----------------------------------')

  //   // if ((mouseTrack.x >= canvas.width / 2 - 60 && mouseTrack.x < canvas.width / 2 + 45) && (mouseTrack.y > canvas.height / 2 + 200 - 42 && canvas.height / 2 + 200 + 45) && clickArray.includes('instruct')) {
  //   //   ctx.clearRect(0, 0, canvas.width, canvas.height)
  //   //   clickArray.splice(0, 1)
  //   //   new GameScreen(canvas)
  //   // } else {
  //   //   return false
  //   // }
  // }
  drawBox() {
    let instructions = '                         ----GAMEPLAY----?1. Click and hold the mouse to begin carving?2. Carve the pumpkin by moving the mouse?3. Move the black line back to the starting point?4. Let go of the mouse to complete the carve ?5. Repeat the process and keep carvin!'
    let x = this.canvas.width / 2 - 450;
    let y = 100;
    let height = 100;
    let splitInt = instructions.split('?');

    for (let i = 0;  i < splitInt.length; i++){
          this.ctx.font = 'bold 30pt Arial'
          this.ctx.fillStyle = "black"
          this.ctx.textAlign = "left"
          this.ctx.fillText(splitInt[i], x, y + (i * height));
      }
    }
  }
export default Instructions;