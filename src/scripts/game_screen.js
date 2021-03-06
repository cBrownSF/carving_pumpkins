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
    // this.soundButton;
    this.closed=false;
    // this.sound=true;
    this.coordinatesArray = []
    this.tempPumpArray=[];
    this.tempLineArray=[];
    this.pumpkinArray = [];
    this.lineArray=[];
    this.buttonActions();
    this.carving = false;
    this.firstCarve()
    this.offScreen()
    this.interval=null;
    this.left=false;
    this.counter=0;
    this.timeLeft=15;
    this.timeRemaining;
    // setInterval(this.countdown.bind(this), 1000)
  }

  countdown() {
    let counter = this.counter
    this.counter ++
    
    let timeLeft = this.timeLeft
    
    let convert = this.convertSecondstoMin
    let correctTime=convert(timeLeft - counter)
    let timeRemaining=timeLeft-counter;
    this.timeRemaining=timeRemaining;
    document.getElementById('time').innerHTML=correctTime
    console.log(correctTime)
    if(timeLeft-counter ===0){
      clearInterval(this.interval)
      this.counter=0
    }
  }
  runTime(){
    this.interval=setInterval(
      this.countdown.bind(this)
    ,1000)
  }
  convertSecondstoMin(secs) {
    let minutes = Math.floor(secs / 60);
    let seconds = secs % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds
    let canvas = document.getElementById('mycanvas')
    let ctx = canvas.getContext('2d')
    return`0${minutes} : ${seconds}`
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
    // let soundButton=this.soundButton;
    let instructButton = this.instructButton
    let textSize = this.canvas.height / 15.47 / 2.0
    canvas.addEventListener("click", e => {
      
      if (ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
        this.buttonClick();
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.pumpkinArray = []
        this.tempLineArray = []
        this.tempPumpArray = []
        this.lineArray = [];
        this.newScreen()
        
        Defaults.buttonStyles(ctx, canvas, resetButton, textSize, "#E66C2C", "Reset", 8.43, .945)
      }
      if (ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
        // this.runTime()
        // setInterval(this.countdown.bind(this), 1000)
        
        this.tempPumpArray = []
        this.tempLineArray = []
        this.buttonClick()
        ctx.clearRect(0, 0, canvas.width, canvas.height)
   
        this.pumpkinDrawArray()
        this.drawLineArray()
        Defaults.buttonStyles(ctx, canvas, instructButton, textSize, "#E66C2C", "Undo", 3.77, .945);
      }
      // if (ctx.isPointInPath(soundButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
      //    if (this.sound=false){
      //      Defaults.buttonStyles(ctx, canvas, soundButton, textSize, "#ffae42", "Sound On", 1.77, .945)
      //     this.sound=true;
      //    }else{
      //      Defaults.buttonStyles(ctx, canvas, soundButton, textSize, "#ffae42", "Sound Off", 1.77, .945)
      //      this.sound=false
      //    }
      //   this.tempPumpArray=[]
      //   this.tempLineArray=[]
      //   this.buttonClick()
      //   ctx.clearRect(0, 0, canvas.width, canvas.height)
 
      //   this.pumpkinDrawArray()
      //   this.drawLineArray()
      // }
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
        Defaults.buttonStyles(ctx, canvas, instructButton, textSize, "#E66C2C", "Undo", 3.77, .945)
      }
      if (!ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
        Defaults.buttonStyles(ctx, canvas, instructButton, textSize, "#ffae42", "Undo", 3.77, .945)
      }
      // if (ctx.isPointInPath(undoButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
      //   Defaults.buttonStyles(ctx, canvas, undoButton, textSize, "#E66C2C", "Undo", 1.77, .945)
      // }
      // if (!ctx.isPointInPath(undoButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
      //   Defaults.buttonStyles(ctx, canvas, undoButton, textSize, "#ffae42", "Undo", 1.77, .945)
      // }
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
    Defaults.buttonStyles(ctx, canvas, instructionButton, textSize, "#ffae42", "Undo", 3.77, .945)
    this.instructButton = instructionButton;
  }
  // drawSoundButton(){
  //   let ctx = this.ctx
  //   let canvas = this.canvas
  //   let soundButton = new Path2D()
  //   let textSize = this.canvas.height / 15.47 / 2.0

  //   soundButton.arc(canvas.width * .945, canvas.height / 2.0, canvas.height / 15.47, 0, Math.PI * 2, true);
  //   Defaults.buttonStyles(ctx, canvas, soundButton, textSize, "#ffae42", "Sound Off", 1.77, .945)
  //   this.soundButton = soundButton;
  // }
  newScreen() {
    let wide = document.getElementById("widePumpkin");
    this.ctx.drawImage(wide, this.canvas.width / 3.72, this.canvas.height / 11.41, this.canvas.width / 2 - 15, this.canvas.height / 1.15);
    const raven = document.getElementById("raven");
    this.ctx.drawImage(raven, 0, this.canvas.height / 4.85, this.canvas.width / 5.9, this.canvas.height / 3.23);
    this.carving=false;
    this.drawInstructionButton()
    this.drawResetButton()
    // this.drawSoundButton()
  }
 
  firstCarve() {
    
    let carving = this.carving;
    let canvas = this.canvas;
    let ctx = canvas.getContext('2d')
    let coordinatesArray = this.coordinatesArray;
    let resetButton = this.resetButton;
    let instructButton = this.instructButton;
    // let undoButton=this.undoButton;
    let combinePath=this.combinedPath;
    
    this.canvas.addEventListener("mousedown", e => {
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let index = (e.offsetY * imgData.width + e.offsetX) * 4;
      let red = imgData.data[index];
      let green = imgData.data[index + 1];
      let blue = imgData.data[index + 2];
      let alpha = imgData.data[index + 3];
      console.log(`red:${red},green:${green},blue:${blue}, alpha:${alpha}`)
    if (ctx.isPointInPath(instructButton, e.offsetX, e.offsetY)  ||ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)){
      this.carving=false;
      return false;
    }
    if (this.hoverArray.length ===1 && red !== 0 && red!==72 && blue < 45 && !ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && !ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)) {
      this.carving = true;
      // this.newPath = new Path2D()
      ctx.beginPath()
      coordinatesArray.push(e.offsetX, e.offsetY);
      carving=true
     
    }
    if (carving){
      console.log('hitting is carving')
        this.closed=false;
        this.carving = true;
        this.left=false;
        console.log(this.newPath)
        this.carve()
      }else{
        this.carving=false;
      }
    })
  }
  offScreen(){
    
    this.canvas.addEventListener("mouseleave",e=>{
     
      this.carving=false;
      this.left=true
    })
  }
  carve() {
    let carving = this.carving;
    let canvas = this.canvas;
    let ctx = canvas.getContext('2d')
    let coordinatesArray = this.coordinatesArray;
    let resetButton = this.resetButton;
    let instructButton = this.instructButton
    // let undoButton=this.undoButton;
    let newP = new Path2D;
 
    canvas.addEventListener("mousemove", e => {
      if (!carving) return false;
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let index = (e.offsetY * imgData.width + e.offsetX) * 4;
      let red = imgData.data[index];
      let blue = imgData.data[index + 2]
      let green = imgData.data[index + 1];
      if (this.left === false && red !== 0 && blue < 45 && red !== 72 && !ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && !ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)) {
        ctx.lineWidth = 8;
        ctx.lineCap = "round"
        newP.lineTo(e.offsetX, e.offsetY)
        ctx.stroke(newP)
        coordinatesArray.push(e.offsetX, e.offsetY);
      }
      if (coordinatesArray.length > 10 && (e.offsetX - 3 < coordinatesArray[0] && e.offsetX + 3 > coordinatesArray[0]) && (e.offsetY - 3 < coordinatesArray[1] && e.offsetY + 3 > coordinatesArray[1])) {
        coordinatesArray.splice(0, coordinatesArray.length)
        console.log('connected')
        carving=false
        ctx.fillStyle = "#ffbd2e"
        ctx.fill(newP)
        ctx.closePath(newP)
        this.tempArrayFunc()
        this.tempPumpArray.push(newP)
        this.carveSound()
        carving=false
        this.closed=true;
        ctx.beginPath();
        
        return false;
      }
      if (this.left === true || green === 189){
        debugger;
        console.log('hitting new condition')
        this.left=false
        carving = false
        this.closed = true;
        ctx.beginPath();
        return false;
      }
    })
        canvas.addEventListener("mouseup", e=>{
          if (this.hoverArray.length !==1 || ctx.isPointInPath(resetButton,e.offsetX,e.offsetY) || ctx.isPointInPath(instructButton,e.offsetX,e.offsetY) || this.closed===true){
            
            carving=false;
            ctx.closePath()
            this.left=false
            coordinatesArray.splice(0, coordinatesArray.length)
            return false;
          } else{
            this.left=false;
              coordinatesArray.splice(0, coordinatesArray.length)
              carving = false;
              ctx.closePath(newP);
             
             
                
                this.tempArrayFunc()
                this.tempLineArray.push(newP)
                carving = false;
                // ctx.beginPath();
                
            
             
              this.mouseUp = true;
              carving = false;
              
              return false;
          }
        }, { once: true })
  }
  
  drawLineArray(){
    let ctx = this.ctx;
    let lines= this.lineArray.flat();
    console.log(this.lineArray.length)
 
    for (let i = 0; i <lines.length; i++) {
      debugger;
      ctx.lineWidth = 8
      ctx.beginPath()
      ctx.stroke(new Path2D(lines[i]))
      ctx.closePath(new Path2D(lines[i]))
    }
    this.carving=false;
    ctx.closePath()
  }
  
  
  pumpkinDrawArray() {
    this.newScreen()
    let array = this.pumpkinArray.flat();
    let ctx = this.ctx;
  
    for (let i = 0; i < array.length; i++) {
      ctx.fillStyle = "#ffbd2e"
      ctx.lineWidth = 8
      ctx.beginPath()
      ctx.stroke(new Path2D(array[i]))
      ctx.fill(new Path2D(array[i]))
    
      ctx.closePath(new Path2D(array[i]))
      
    }
    ctx.closePath()
    this.carving=false;
  }
}



export default GameScreen;