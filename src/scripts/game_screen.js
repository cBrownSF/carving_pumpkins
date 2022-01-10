import Button from './main_buttons.js'
import Instructions from './instructions'
import Util from './carving_actions.js';
import Sound from './sound.js';
import Defaults from './util.js';
class GameScreen{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')
    this.hoverArray = ['one'];
    this.newScreen();
    this.resetButton;
    this.instructButton;
    this.buttonActions();
    this.carving = false;
    this.coordinatesArray=[]
    this.beginCarve()
  }
  buttonActions() {
    let hoverArray=this.hoverArray
    let ctx = this.ctx;
    let canvas = this.canvas
    let resetButton = this.resetButton;
    let instructButton=this.instructButton
    let textSize = this.canvas.height / 15.47 / 2.0
    canvas.addEventListener("click",e =>{
      if (ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)&& hoverArray.length ===1){
        this.buttonClick();
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.newScreen()
        Defaults.buttonStyles(ctx, canvas, resetButton, textSize, "#E66C2C", "Reset", 8.43, .945)
      }
      if (ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1){
        this.buttonClick()
        ctx.clearRect(0,0,canvas.width,canvas.height)
        hoverArray.splice(0, 1)
        new Instructions(canvas)
      }
    })
    canvas.addEventListener("mousemove",e =>{
      // console.log(`X':${e.offsetX},Y:${e.offsetY}`)
      if (ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && hoverArray.length === 1){
        Defaults.buttonStyles(ctx, canvas, resetButton, textSize, "#E66C2C", "Reset", 8.43, .945)
      }
      if (!ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && hoverArray.length === 1){
        Defaults.buttonStyles(ctx, canvas, resetButton, textSize, "#ffae42", "Reset", 8.43,.945)
      }
      if (ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1){
        Defaults.buttonStyles(ctx, canvas, instructButton, textSize, "#E66C2C", "Back", 3.77,.945)
      }
      if (!ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1){
        Defaults.buttonStyles(ctx, canvas, instructButton, textSize, "#ffae42", "Back", 3.77,.945)
      } 
    })
  }
  carveSound(){
    let audio=document.getElementById("carveSound")
    audio.play()
  }
  buttonClick(){
    let buttonSound = document.getElementById("buttonClick")
    buttonSound.play()
  }
  drawResetButton(){
  let ctx = this.ctx
  let canvas = this.canvas
  let resetButton = new Path2D()
  let textSize =this.canvas.height/15.47/2.0
  
  resetButton.arc(canvas.width*.945, canvas.height/9.75, canvas.height/15.47,0, Math.PI * 2, true);
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
newScreen(){
  let wide = document.getElementById("widePumpkin");
 
  let pumpkin = this.ctx.drawImage(wide, this.canvas.width / 3.72, this.canvas.height/11.41, this.canvas.width / 2 - 15, this.canvas.height/1.15);
  const raven = document.getElementById("raven");
  let ravImage = this.ctx.drawImage(raven, 0, this.canvas.height/ 4.85, this.canvas.width/5.9, this.canvas.height / 3.23);
  this.drawInstructionButton()
  this.drawResetButton()
}


beginCarve(){
  let carving = this.carving; 
  let canvas = this.canvas;
  let ctx = canvas.getContext('2d')
  // let pumpkinPath=this.pumpkinPath;
  let coordinatesArray=this.coordinatesArray;
  let hoverArray=this.hoverArray;
  let resetButton = this.resetButton;
  let instructButton = this.instructButton
  // let carve = new Path2D;
  let soundEffect = this.soundEffect;
  this.canvas.addEventListener("mousedown", e=> {
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let index = (e.offsetY * imgData.width + e.offsetX) * 4;
    let red = imgData.data[index];
    let green = imgData.data[index + 1];
    let blue = imgData.data[index + 2];
    let alpha = imgData.data[index + 3];
    if (red !== 0 && blue < 45 && !ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && !ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)) {
      carving = true;
      ctx.beginPath()
      coordinatesArray.push(e.offsetX, e.offsetY);
    }
    canvas.addEventListener("mousemove", e => {
      if (!carving){
        return false;
      } 
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let index = (e.offsetY * imgData.width + e.offsetX) * 4;
      let red = imgData.data[index];
      let blue = imgData.data[index + 2]
      if (red !== 0 && blue < 45  && !ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && !ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)) {
        ctx.lineWidth = 8;
        ctx.lineCap = "round"
        ctx.lineJoin='round'
        // ctx.strokeStyle('rgba(0, 0, 0, 0.7)')
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()
        coordinatesArray.push(e.offsetX, e.offsetY);
        
      }
      if (coordinatesArray.length > 10 && (e.offsetX - 3< coordinatesArray[0] && e.offsetX + 3 > coordinatesArray[0]) && (e.offsetY - 3 < coordinatesArray[1] && e.offsetY + 3 > coordinatesArray[1])) {
        // ctx.lineTo(coordinatesArray[0], coordinatesArray[1])
        console.log(`offset y:${e.offsetY}`)
        console.log(`offset x:${e.offsetX}`)
        console.log(`x coord: ${coordinatesArray[0]}`)
        console.log(`y coord: ${coordinatesArray[1]}`)
     
        ctx.stroke()
        ctx.fillStyle = "#ffbd2e"
        ctx.fill()
        ctx.closePath()
        this.carveSound()
        // ctx.beginPath()
        // // ctx.moveTo(coordinatesArray[coordinatesArray.length - 1], coordinatesArray[coordinatesArray.length - 2])
        // ctx.lineTo(coordinatesArray[0],coordinatesArray[1])
        // ctx.stroke()
        // ctx.closePath()
        carving = false;
        ctx.closePath()
        //can add the path to an array here
        coordinatesArray.splice(0, coordinatesArray.length)
        ctx.beginPath();
      }  
      
      
    })
    canvas.addEventListener("mouseup", e =>{
      // if ((e.offsetX - 10 < coordinatesArray[0] && e.offsetX + 10 > coordinatesArray[0]) && (e.offsetY - 10 < coordinatesArray[1] && e.offsetY + 10 > coordinatesArray[1])) {
      //   carving = false;
      //   ctx.closePath()
      //   ctx.fillStyle = "#ffbd2e"
      //   ctx.fill()
        
      //   coordinatesArray.splice(0, coordinatesArray.length)
      // }
    //  this.carve=carve
      coordinatesArray.splice(0, coordinatesArray.length)
      carving = false;
      ctx.beginPath();
          // this.pumpkinPath.push(carve)
      }) 
    })
  }
}



export default GameScreen;