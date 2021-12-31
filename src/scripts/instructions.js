import Button from './main_buttons.js'
import GameScreen from './game_screen.js';
class Instructions {

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')
    this.drawButton();
    this.drawBox();
    this.startButton;
    this.loadGameScreen()
    this.hovered= false;
  }

  drawButton() {

    // let button = new Button(this.canvas.width/2, this.canvas.height/2 +300, 70, "START!",this.canvas)
    let ctx = this.ctx
    let canvas = this.canvas
    let button = new Path2D()
    button.arc(this.canvas.width / 2, this.canvas.height / 2 + 300, 70, 0, Math.PI * 2, true);
    ctx.lineWidth = 5;
    ctx.fillStyle = "#ffae42";
    ctx.fill(button)
    console.log(this.hovered)
    ctx.font = '35pt Impact'
    ctx.fillStyle = "black";
    ctx.textAlign = 'center';
    ctx.fillText("Start", canvas.width / 2, canvas.height / 2 + 315)
    ctx.stroke(button)
    

    this.startButton = button;

    canvas.addEventListener('mousemove', function (event) {
      if (ctx.isPointInPath(button, event.offsetX, event.offsetY)) {
        this.hovered = true;
        ctx.fillStyle = "#E66C2C";
        ctx.fill(button)
       console.log(this.hovered)
      //  ctx.font = '35pt Impact'
      // ctx.fillStyle = "black";
      // ctx.textAlign = 'center';
      // ctx.fillText("Start", canvas.width / 2, canvas.height / 2 + 315)
      //   ctx.stroke(button)
      }
      else {
        this.hovered = false;
        ctx.fillStyle = "#ffae42";
        ctx.fill(button)
        console.log(this.hovered)
        // ctx.font = '35pt Impact'
        // ctx.fillStyle = "black";
        // ctx.textAlign = 'center';
        // ctx.fillText("Start", canvas.width / 2, canvas.height / 2 + 315)
        // ctx.stroke(button)
      }
    })
    // ctx.font = '35pt Impact'
    // ctx.fillStyle = "black";
    // ctx.textAlign = 'center';
    // ctx.fillText("Start", this.canvas.width / 2, this.canvas.height / 2 + 315)
    // ctx.stroke(button)
    // ctx.fill(button)
  }

  loadGameScreen() {
    let clickArray = ['instruct']
    let button = this.startButton
    let ctx = this.ctx
    let canvas = this.canvas
    let offX = ctx.canvas.offsetLeft;
    let offY = ctx.canvas.offsetTop;
    


    let rect = canvas.getBoundingClientRect(), // 
      scaleX = canvas.width / rect.width,
      scaleY = canvas.height / rect.height;
  
    canvas.addEventListener('click', function (e) {
      let mouseX = (e.clientX - rect.left) * scaleX
      let mouseY = (e.clientY - rect.top) * scaleY
      

      if (this.hovered === true && clickArray.includes('instruct')) {

        debugger;
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        clickArray.splice(0, 1)
        new GameScreen(canvas)
      } else {
        return false
      }
    })

  }


  drawBox() {
    let instructions = '                         ----GAMEPLAY----?1. Click and hold the mouse to begin carving?2. Carve the pumpkin by moving the mouse?3. Move the black line back to the starting point?4. Let go of the mouse to complete the carve ?5. Repeat the process and keep carvin!'
    let x = this.canvas.width / 2 - 450;
    let y = 100;
    let height = 100;
    let splitInt = instructions.split('?');

    for (let i = 0; i < splitInt.length; i++) {
      this.ctx.font = 'bold 30pt Arial'
      this.ctx.fillStyle = "black"
      this.ctx.textAlign = "left"
      this.ctx.fillText(splitInt[i], x, y + (i * height));
    }
  }
}
export default Instructions;