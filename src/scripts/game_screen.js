import Button from './main_buttons.js'
import Instructions from './instructions'
import Util from './carving_actions.js';
import Defaults from './util.js';

class GameScreen {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')
    this.hoverArray = ['one'];
    this.pumpkinArray = []
    this.newScreen();
    this.resetButton;
    this.instructButton;
    this.undoButton;
    this.buttonActions();
    this.carving = false;
    this.coordinatesArray = []
    this.firstCarve()
    this.newPath;
    // this.beginCarve()
    this.pumpkinArray = []
    // this.drawingPumpkin()
    // this.pumpkinDrawArray()
  }
  buttonActions() {
    let hoverArray = this.hoverArray
    let ctx = this.ctx;
    let canvas = this.canvas
    let resetButton = this.resetButton;
    let undoButton=this.undoButton;
    let instructButton = this.instructButton
    let textSize = this.canvas.height / 15.47 / 2.0
    canvas.addEventListener("click", e => {
      if (ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
        this.buttonClick();
        ctx.clearRect(0, 0, canvas.width, canvas.height)
            // this.pumpkinArray =[]
        this.newScreen()
        Defaults.buttonStyles(ctx, canvas, resetButton, textSize, "#E66C2C", "Reset", 8.43, .945)
      }
      if (ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
        this.buttonClick()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        hoverArray.splice(0, 1)
        new Instructions(canvas)
      }
      if (ctx.isPointInPath(undoButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
        this.buttonClick()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        hoverArray.splice(0, 1)
        this.newScreen()
      }
    })
    canvas.addEventListener("mousemove", e => {
      // console.log(`X':${e.offsetX},Y:${e.offsetY}`)
      if (ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
        Defaults.buttonStyles(ctx, canvas, resetButton, textSize, "#E66C2C", "Reset", 8.43, .945)
      }
      if (!ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
        Defaults.buttonStyles(ctx, canvas, resetButton, textSize, "#ffae42", "Reset", 8.43, .945)
      }
      if (ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
        Defaults.buttonStyles(ctx, canvas, instructButton, textSize, "#E66C2C", "Back", 3.77, .945)
      }
      if (!ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
        Defaults.buttonStyles(ctx, canvas, instructButton, textSize, "#ffae42", "Back", 3.77, .945)
      }
      if (ctx.isPointInPath(undoButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
        Defaults.buttonStyles(ctx, canvas, undoButton, textSize, "#E66C2C", "Undo", 1.77, .945)
      }
      if (!ctx.isPointInPath(undoButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
        Defaults.buttonStyles(ctx, canvas, undoButton, textSize, "#ffae42", "Undo", 1.77, .945)
      }
    })
  }
  carveSound() {
    let audio = document.getElementById("carveSound")
    audio.play()
  }
  buttonClick() {
    let buttonSound = document.getElementById("buttonClick")
    buttonSound.play()
  }
  drawResetButton() {
    let ctx = this.ctx
    let canvas = this.canvas
    let resetButton = new Path2D()
    let textSize = this.canvas.height / 15.47 / 2.0

    resetButton.arc(canvas.width * .945, canvas.height / 9.75, canvas.height / 15.47, 0, Math.PI * 2, true);
    Defaults.buttonStyles(ctx, canvas, resetButton, textSize, "#ffae42", "Reset", 8.43, .945)
    this.resetButton = resetButton;
  }
  drawInstructionButton() {
    let ctx = this.ctx
    let canvas = this.canvas
    let instructionButton = new Path2D()
    let textSize = this.canvas.height / 15.47 / 2.0

    instructionButton.arc(canvas.width * .945, canvas.height / 4.0, canvas.height / 15.47, 0, Math.PI * 2, true);
    Defaults.buttonStyles(ctx, canvas, instructionButton, textSize, "#ffae42", "Back", 3.77, .945)
    this.instructButton = instructionButton;
  }
  drawUndoButton(){
    let ctx = this.ctx
    let canvas = this.canvas
    let undoButton = new Path2D()
    let textSize = this.canvas.height / 15.47 / 2.0

    undoButton.arc(canvas.width * .945, canvas.height / 2.0, canvas.height / 15.47, 0, Math.PI * 2, true);
    Defaults.buttonStyles(ctx, canvas, undoButton, textSize, "#ffae42", "Undo", 1.77, .945)
    this.undoButton = undoButton;
  }
  newScreen() {
    this.carving=false;
    let wide = document.getElementById("widePumpkin");
    this.ctx.drawImage(wide, this.canvas.width / 3.72, this.canvas.height / 11.41, this.canvas.width / 2 - 15, this.canvas.height / 1.15);
    const raven = document.getElementById("raven");
    this.ctx.drawImage(raven, 0, this.canvas.height / 4.85, this.canvas.width / 5.9, this.canvas.height / 3.23);
    this.drawInstructionButton()
    this.drawResetButton()
    this.drawUndoButton()
  }

  firstCarve() {
    let carving = this.carving;
    let canvas = this.canvas;
    let ctx = canvas.getContext('2d')
    // let pumpkinPath=this.pumpkinPath;
    let coordinatesArray = this.coordinatesArray;
    let hoverArray = this.hoverArray;
    let resetButton = this.resetButton;
    let instructButton = this.instructButton;
    let undoButton=this.undoButton;
    this.canvas.addEventListener("mousedown", e => {
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let index = (e.offsetY * imgData.width + e.offsetX) * 4;
      let red = imgData.data[index];
      let green = imgData.data[index + 1];
      let blue = imgData.data[index + 2];
      let alpha = imgData.data[index + 3];
      if (ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) || ctx.isPointInPath(undoButton, e.offsetX, e.offsetY) ||ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)){
        carving=false;
        console.log('hit in but')
      }
      if (red !== 0 && blue < 45 && !ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && !ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)) {
        carving = true;
        this.newPath = new Path2D()
        ctx.beginPath()
        // newPath = contextPath;
        coordinatesArray.push(e.offsetX, e.offsetY);
      }
      if (carving){
       console.log('carving')
        this.carving = true;
        this.beginCarve()
      }else{
        this.carving=false;
      }
    })
  }
  beginCarve() {
    let carving = this.carving;
    let canvas = this.canvas;
    let ctx = canvas.getContext('2d')
    let coordinatesArray = this.coordinatesArray;
    let resetButton = this.resetButton;
    let instructButton = this.instructButton
    let newP = this.newPath;

    canvas.addEventListener("mousemove", e => {
      if (!carving) return false;
      
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let index = (e.offsetY * imgData.width + e.offsetX) * 4;
      let red = imgData.data[index];
      let blue = imgData.data[index + 2]
      if (red !== 0 && blue < 45 && !ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && !ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)) {
        ctx.lineWidth = 8;
        ctx.lineCap = "round"
        newP.lineTo(e.offsetX, e.offsetY)
        ctx.stroke(newP)
        coordinatesArray.push(e.offsetX, e.offsetY);
      }
      if (coordinatesArray.length > 10 && (e.offsetX - 3 < coordinatesArray[0] && e.offsetX + 3 > coordinatesArray[0]) && (e.offsetY - 3 < coordinatesArray[1] && e.offsetY + 3 > coordinatesArray[1])) {
        carving = false;
        ctx.closePath()
        ctx.fillStyle = "#ffbd2e"
        ctx.fill(newP)
        this.pumpkinArray.push(newP)
        this.carveSound()
        coordinatesArray.splice(0, coordinatesArray.length)
        ctx.beginPath();
      }
      canvas.addEventListener("mouseup", e => {
        coordinatesArray.splice(0, coordinatesArray.length)
        carving = false;
        ctx.closePath()
        ctx.beginPath();
      })

    })
  }
  pumpkinDrawArray() {
    let array = this.pumpkinArray;
    let ctx = this.ctx;
    let i = 0;
    for (let i = 0; i < array.length; i++) {
      ctx.fillStyle = "#ffbd2e"
      ctx.lineWidth = 5
      ctx.fill(new Path2D(this.pumpkinArray[i]))
      ctx.stroke(new Path2D(this.pumpkinArray[i]))
      ctx.closePath(new Path2D(this.pumpkinArray[i]))
    }
    this.carving=false;
 
  }
}



export default GameScreen;