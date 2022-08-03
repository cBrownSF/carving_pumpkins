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
    button.arc(canvas.width / 2, canvas.height * .81, canvas.height/15.47, 0, Math.PI * 2, true);
    Defaults.buttonStyles(ctx, canvas, button, textSize, "#ffae42", "Start", 1.2121,.5)
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
        e.target.style.cursor = 'pointer'
        this.hovered = true; 
        Defaults.buttonStyles(ctx, canvas, button, textSize, "#E66C2C", "Start", 1.2121, .5)

      }
      if (!ctx.isPointInPath(button, e.offsetX, e.offsetY) && clickArray.includes('instruct')){
        e.target.style.cursor = 'default'

        this.hovered = false;
        Defaults.buttonStyles(ctx, canvas, button, textSize, "#ffae42", "Start", 1.2121, .5)
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
      ctx.closePath()
      new GameScreen(canvas)
    } else {
      return false
      }
    })
  }

  
  drawBox() {
    let canvas = this.canvas
    let instructions = '---GAMEPLAY---?1. Hold and drag the mouse down to begin carving?2. Continue to hold the mouse down while carving?3. Connect the black line to the starting point         ?4. Finished! Repeat the process and keep carving!?5.You are only allowed to undo one carve at a time?'
    let x = canvas.width / 2;
    let y = canvas.height / 19.4;
    let height = canvas.height/10;
    let textSize=canvas.height/32.3
    let splitInt = instructions.split('?');

    for (let i = 0; i < splitInt.length; i++) {
      this.ctx.font = `${textSize}pt Arial`
      this.ctx.fillStyle = "black"
      this.ctx.textAlign = "center"
      this.ctx.fillText(splitInt[i], x, y + (i * height));
    }
  }
}
export default Instructions;