import Button from './main_buttons.js'
import Instructions from './instructions'

class GameScreen{
  constructor(canvas){
    debugger;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')
    this.newScreen();
    this.clickArray = []
    this.drawResetButton()
    this.resetButton;
   
    this.carving = true;
  }
 beginCarve() {
   let pumpkinn = this.pumpkinObj;
  //  let resetButton = this.resetButton
  // let resetButton = this.resetButton;
   let ctx = this.ctx

  this.canvas.addEventListener("mousedown",function(e){
    if (ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)){
      console.log('hello')
      debugger;
    }
  })
}
drawResetButton(){
  debugger;

  let ctx = this.ctx
  let canvas = this.canvas
  let resetButton = new Path2D()
  resetButton.arc(this.canvas.width - 100, 100, 70,0, Math.PI * 2, true);
  ctx.lineWidth = 5;
  ctx.fillStyle = "#ffae42";
  ctx.fill(resetButton)
  ctx.font = '35pt Impact'
  ctx.fillStyle = "black";
  ctx.textAlign = 'center';
  ctx.fillText("RESET", this.canvas.width - 100, 115)
  ctx.stroke(resetButton)
  this.resetButton = resetButton;
}
  newScreen(){
   debugger;
    // let curPath = new Path2D()
    // let button = new Button(this.canvas)
    // let buttonPath=button.drawButton(curPath,this.canvas.width - 100, 100, 'RESET!')
    // debugger;
    // this.startButton = buttonPath
    const wide = document.getElementById("widePumpkin");
    // wide.addEventListener("mouseenter",function(e){
    //   console.log('mouseenter')
    // })
    // wide.addEventListener("mouseover",function(e){
    //   console.log('mouseover')
    // })
    let pumpkin = this.ctx.drawImage(wide, this.canvas.width / 2 - 400, this.canvas.height / 2 - 400, 850, 838);
  //   let pumpkinPath = new Path2D(pumpkin)

  //   this.ctx.fill(pumpkinPath)
  //  this.pumpkinObj = this.pumpkinPath; 
  // let image = new Image(pumpkin)
  // let imagePath = new Path2D(image)
  
  
 
    const raven = document.getElementById("raven");
    let ravImage = this.ctx.drawImage(raven,0,200, 300,360);
   
    // let button = new Button(this.canvas.width - 100, 100, 70, "RESET!", this.canvas)
    // button.drawButton
    // let resetButton = new Path2D(button)
    // this.resetButton = resetButton;
    // new Button(this.canvas.width - 100, 300, 70, "HOME", this.canvas)
  }
  
  reset(){
    this.newScreen()
  }  

 carve(){
  let carving = this.carving; 
  let canvas = this.canvas;
  let ctx = this.ctx;
   let carvingPath = new Path2D()
  // this.canvas.addEventListener("mousedown", function(e) {
  //   carving = true;
  

  // })

  }

  // drawPumpkinGreen(){
  //   const green = document.getElementById("greenPumpkin");
  //   this.ctx.drawImage(green, 300, 300, 570, 594);
  // }
  // drawPumpkinTall(){
  //   const tall = document.getElementById("tallPumpkin");
  //   this.ctx.drawImage(tall, 300, 300, 414,464);
  // }
}
export default GameScreen;