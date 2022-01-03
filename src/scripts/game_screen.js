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
    this.beginCarve()
  }
 beginCarve() {
   let pumpkinn = this.pumpkinObj;
  //  let resetButton = this.resetButton
  console.log(this.startButton)
  let resetButton = this.resetButton;
   console.log(resetButton)
   let ctx = this.ctx

  this.canvas.addEventListener("click",function(e){
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
  resetButton.arc(this.canvas.width / 2, this.canvas.height / 2 + 300, 70, 0, Math.PI * 2, true);
  ctx.lineWidth = 5;
  ctx.fillStyle = "#ffae42";
  ctx.fill(resetButton)
  ctx.font = '35pt Impact'
  ctx.fillStyle = "black";
  ctx.textAlign = 'center';
  ctx.fillText("Start", canvas.width / 2, canvas.height / 2 + 315)
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
    let pumpkin = this.ctx.drawImage(wide, this.canvas.width / 2 - 400, this.canvas.height / 2 - 400, 850, 838);
    let pumpkinPath = new Path2D(pumpkin)
    this.ctx.fill(pumpkinPath)
   this.pumpkinObj = this.pumpkinPath; 
  // let image = new Image(pumpkin)
  // let imagePath = new Path2D(image)
  
  
 
    const raven = document.getElementById("raven");
    this.ctx.drawImage(raven,0,200, 600,720);
    // let button = new Button(this.canvas.width - 100, 100, 70, "RESET!", this.canvas)
    // button.drawButton
    // let resetButton = new Path2D(button)
    // this.resetButton = resetButton;
    // new Button(this.canvas.width - 100, 300, 70, "HOME", this.canvas)
  }
  
  reset(){
    this.newScreen()
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