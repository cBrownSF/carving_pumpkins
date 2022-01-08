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
    let textSize = this.canvas.height / 15.47 / 2.0
    let button = new Path2D()
  
    button.arc(this.canvas.width / 2, this.canvas.height * .81, canvas.height / 15.47, 0, Math.PI * 2, true);
    ctx.lineWidth = textSize / 7;
    ctx.fillStyle = Defaults.buttonColor();
    ctx.fill(button)
    ctx.font = `${textSize}pt Impact`
    ctx.fillStyle = Defaults.fontColor();
    ctx.textAlign = Defaults.fontAlign();
    ctx.fillText("Start", canvas.width / 2, canvas.height *.825)
    ctx.stroke(button)
    this.startButton = button;
  }


  mouseHover() {
    let clickArray = this.clickArray
    let ctx = this.ctx
    let canvas = this.canvas
    let button = this.startButton;
    let textSize = this.canvas.height / 15.47 / 2.0
    this.canvas.addEventListener('mousemove', e => {
    
        if (ctx.isPointInPath(button, e.offsetX, e.offsetY) && clickArray.includes('instruct')) { 
          this.hovered = true; 
          ctx.lineWidth = textSize/7;
          ctx.fillStyle = Defaults.buttonHover();
          ctx.fill(button)
          ctx.font = `${textSize}pt Impact`
          ctx.fillStyle = Defaults.fontColor();
          ctx.textAlign = Defaults.fontAlign();
          ctx.fillText("Start", canvas.width / 2, canvas.height * .825)
          ctx.stroke(button)
        }
        if (!ctx.isPointInPath(button, e.offsetX, e.offsetY) && clickArray.includes('instruct')){
          this.hovered = false;
          ctx.lineWidth = textSize / 7;
    ctx.fillStyle = Defaults.buttonColor();
    ctx.fill(button)
    ctx.font = `${textSize}pt Impact`
    ctx.fillStyle = Defaults.fontColor();
    ctx.textAlign = Defaults.fontAlign();
    ctx.fillText("Start", canvas.width / 2, canvas.height *.825)
    ctx.stroke(button)
      }
    })
  }
  buttonClick() {
    let buttonSound = document.getElementById("buttonClick")
    buttonSound.play()
  }
  loadGameScreen() {
    let clickArray = this.clickArray;
    let ctx = this.ctx
    let canvas = this.canvas
  
    canvas.addEventListener('click', e => {
      if (this.hovered === true && clickArray.includes('instruct')) {
        this.buttonClick()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        clickArray.splice(0, 1)
        new GameScreen(canvas)
      } else {
        return false
      }
    })
  }


  drawBox() {
    let canvas = this.canvas
    let instructions = '                      ---GAMEPLAY---?1. Click and hold the mouse to begin carving?2. Carve the pumpkin by moving the mouse?3. Move the black line back to the starting point?4. Let go of the mouse to complete the carve ?5. Repeat the process and keep carvin!'
    let x = canvas.width / 3.3;
    let y = canvas.width / 19.4;
    let height = canvas.width/19.4;
    let textSize=canvas.height/32.3
    let splitInt = instructions.split('?');

    for (let i = 0; i < splitInt.length; i++) {
      this.ctx.font = `${textSize}pt Arial`
      this.ctx.fillStyle = "black"
      this.ctx.textAlign = "left"
      this.ctx.fillText(splitInt[i], x, y + (i * height));
    }
  }
}
export default Instructions;