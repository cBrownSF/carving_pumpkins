import Button from './main_buttons.js'
import Instructions from './instructions'
import Util from './carving_actions.js';
import Defaults from './util.js';

class GameScreen {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')
    this.hoverArray = ['one'];
    this.newScreen();
    this.resetButton;
    this.instructButton;
    this.undoButton;
    this.closed=false;
    this.coordinatesArray = []
    this.tempPumpArray=[];
    this.tempLineArray=[];
    this.pumpkinArray = [];
    this.lineArray=[];
    this.unfinishedArray=[];
    this.buttonActions();
    this.carving = false;
    this.firstCarve()
    this.newPath;
    this.diffPath
    this.combinedPath;
  }
  tempArrayFunc(){
    this.pumpkinArray.push(this.tempPumpArray)
    this.lineArray.push(this.tempLineArray)
    this.tempPumpArray=[];
    this.tempLineArray=[];
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
        this.pumpkinArray =[]
        this.lineArray=[]
        this.newScreen()
        Defaults.buttonStyles(ctx, canvas, resetButton, textSize, "#E66C2C", "Reset", 8.43, .945)
      }
      if (ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
    
        this.buttonClick()
        this.newScreen()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.pumpkinArray=[]
        hoverArray.splice(0, 1)
        new Instructions(canvas)
      }
      if (ctx.isPointInPath(undoButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
        console.log('click undo')
       
        this.buttonClick()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        this.tempPumpArray=[]
        this.tempLineArray=[]
        this.pumpkinDrawArray()
        this.drawLineArray()
        // this.drawNoFinishArray()
        // this.pumpkinArray.pop()
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
    let wide = document.getElementById("widePumpkin");
    this.ctx.drawImage(wide, this.canvas.width / 3.72, this.canvas.height / 11.41, this.canvas.width / 2 - 15, this.canvas.height / 1.15);
    const raven = document.getElementById("raven");
    this.ctx.drawImage(raven, 0, this.canvas.height / 4.85, this.canvas.width / 5.9, this.canvas.height / 3.23);
    this.carving=false;
    this.drawInstructionButton()
    this.drawResetButton()
    this.drawUndoButton()
  }

  firstCarve() {
    
    let carving = this.carving;
    let canvas = this.canvas;
    let ctx = canvas.getContext('2d')
    let coordinatesArray = this.coordinatesArray;
    let resetButton = this.resetButton;
    let instructButton = this.instructButton;
    let undoButton=this.undoButton;
    let combinePath=this.combinedPath;
    
    this.canvas.addEventListener("mousedown", e => {
      
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let index = (e.offsetY * imgData.width + e.offsetX) * 4;
      let red = imgData.data[index];
      let green = imgData.data[index + 1];
      let blue = imgData.data[index + 2];
      let alpha = imgData.data[index + 3];
    if (ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) || ctx.isPointInPath(undoButton, e.offsetX, e.offsetY) ||ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)){
      this.carving=false;
      return false;
    }
    if (red !== 0 && blue < 45 && !ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && !ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)) {
      this.carving = true;
      this.newPath = new Path2D()
      ctx.beginPath()
      // newPath = contextPath;
      coordinatesArray.push(e.offsetX, e.offsetY);
      carving=true
    }
    if (carving){
        this.closed=false;
        this.carving = true;
        this.carve()
      }else{
        this.carving=false;
      }
    })
  }
  carve() {
    let carving = this.carving;
    let canvas = this.canvas;
    let ctx = canvas.getContext('2d')
    let coordinatesArray = this.coordinatesArray;
    let resetButton = this.resetButton;
    let instructButton = this.instructButton
    let undoButton=this.undoButton;
    let newP = this.newPath;
   this.combinedPath = new Path2D()
    let combinePath = this.combinedPath;
    let diffP=this.diffPath;
    canvas.addEventListener("mousemove", e => {
      if (!carving) return false;
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let index = (e.offsetY * imgData.width + e.offsetX) * 4;
      let red = imgData.data[index];
      let blue = imgData.data[index + 2]
      if (red !== 0 && blue < 45 && !ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && !ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && !ctx.isPointInPath(undoButton, e.offsetX, e.offsetY)) {
        ctx.lineWidth = 8;
        ctx.lineCap = "round"
        newP.lineTo(e.offsetX, e.offsetY)
        ctx.stroke(newP)
        coordinatesArray.push(e.offsetX, e.offsetY);
        this.down=true;
      }
      if (coordinatesArray.length > 10 && (e.offsetX - 3 < coordinatesArray[0] && e.offsetX + 3 > coordinatesArray[0]) && (e.offsetY - 3 < coordinatesArray[1] && e.offsetY + 3 > coordinatesArray[1])) {
        coordinatesArray.splice(0, coordinatesArray.length)
        carving=false
        ctx.fillStyle = "#ffbd2e"
        ctx.fill(newP)
        ctx.closePath(newP)
        this.tempArrayFunc()
        this.tempPumpArray.push(newP)
        this.carveSound()
        carving=false
        this.closed=true;
        this.combinePath=null;
        ctx.beginPath();
        return false;
      }
        canvas.addEventListener("mouseup",  e=> {
          if (ctx.isPointInPath(undoButton, e.offsetX, e.offsetY)|| this.closed===true){
            
              carving=false;
              ctx.closePath()
            coordinatesArray.splice(0, coordinatesArray.length)
              return false;
            }else{
         
              coordinatesArray.splice(0, coordinatesArray.length)
              ctx.closePath(newP);
              this.tempArrayFunc()
              this.unfinishedArray.push(newP)
              if (this.unfinishedArray.length ===1){
                this.tempLineArray.push(this.unfinishedArray[0])
              }
              carving = false;
              ctx.beginPath();
              return false;
          }
        })
      })
  }
  
  drawLineArray(){
    let ctx = this.ctx;
    this.drawLineArray.forEach((path) =>{
      ctx.lineWidth = 8
      ctx.stroke(new Path2D(path))
      ctx.closePath(new Path2D(path))
      ctx.closePath()
    }
  )
    ctx.closePath()
  }
  
  pumpkinDrawArray() {
    this.newScreen()
    let array = this.pumpkinArray.flat();
    let ctx = this.ctx;
  
    debugger;
    let i = 0;
   
    for (let i = 0; i < array.length; i++) {
      ctx.fillStyle = "#ffbd2e"
      ctx.lineWidth = 8
      ctx.beginPath()
      console.log(array[i])
      ctx.stroke(new Path2D(array[i]))
      ctx.fill(new Path2D(array[i]))
    
      ctx.closePath(new Path2D(array[i]))
      
    }
    ctx.closePath(0)
    this.carving=false;
 
  }
}



export default GameScreen;