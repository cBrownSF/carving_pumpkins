import Button from './main_buttons.js'
import GameScreen from './game_screen.js';
import Defaults from './util.js';
class Instructions {

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')
    this.hovered= false;
    this.clickArray = ['instruct']
    this.drawButton();
    this.drawBox();
    this.startButton;
    this.mouseHover()
    this.loadGameScreen()
    
  }

  drawButton() {
    let ctx = this.ctx
    let canvas = this.canvas
    let button = new Path2D()
    button.arc(this.canvas.width / 2, this.canvas.height / 2 + 300, 70, 0, Math.PI * 2, true);
    ctx.lineWidth = Defaults.buttonLineWidth();
    ctx.fillStyle = Defaults.buttonColor();
    ctx.fill(button)
    ctx.font = Defaults.buttonFont()
    ctx.fillStyle = Defaults.fontColor();
    ctx.textAlign = Defaults.fontAlign();
    ctx.fillText("Start", canvas.width / 2, canvas.height / 2 + 315)
    ctx.stroke(button)
    this.startButton = button;
  }


  mouseHover() {
    let clickArray = this.clickArray
    let ctx = this.ctx
    let canvas = this.canvas
    let button = this.startButton;
  
    this.canvas.addEventListener('mousemove', e => {
    
        if (ctx.isPointInPath(button, e.offsetX, e.offsetY) && clickArray.includes('instruct')) { 
          this.hovered = true; 
          ctx.lineWidth = Defaults.buttonLineWidth();
          ctx.fillStyle = Defaults.buttonHover();
          ctx.fill(button)
          ctx.font = Defaults.buttonFont()
          ctx.fillStyle = Defaults.fontColor();
          ctx.textAlign = Defaults.fontAlign();
          ctx.fillText("Start", canvas.width / 2, canvas.height / 2 + 315)
          ctx.stroke(button)
        }
        if (!ctx.isPointInPath(button, e.offsetX, e.offsetY) && clickArray.includes('instruct')){
          this.hovered = false;
          this.drawButton()
      }
    })
  
  }

  loadGameScreen() {
    let clickArray = this.clickArray;
    let ctx = this.ctx
    let canvas = this.canvas
  
    canvas.addEventListener('click', e => {
      if (this.hovered === true && clickArray.includes('instruct')) {
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