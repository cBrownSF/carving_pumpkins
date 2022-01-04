import Button from './main_buttons.js'
import Instructions from './instructions'

class GameScreen{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')
    this.hoverArray = ['one'];
    this.newScreen();
    this.drawResetButton()
    this.drawInstructionButton()
    this.resetButton;
    this.instructButton;
    this.buttonActions();
    this.carving = true;
  }
 buttonActions() {
   let hoverArray=this.hoverArray
   let resetButton = this.resetButton;
   let ctx = this.ctx;
   let canvas = this.canvas
   let instructButton=this.instructButton
   
  this.canvas.addEventListener("click",function(e){
    if (ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)&& hoverArray.length ===1){
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      hoverArray.splice(0, 1)
      new GameScreen(canvas)
      ctx.fillStyle = "#E66C2C";
      ctx.fill(resetButton)
      ctx.font = '35pt Impact'
      ctx.fillStyle = "black";
      ctx.textAlign = 'center';
      ctx.fillText("RESET", canvas.width - 100, 115)
      ctx.stroke(resetButton)
    }
    if (ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1){
      ctx.clearRect(0,0,canvas.width,canvas.height)
      hoverArray.splice(0, 1)
      new Instructions(canvas)
    }
  })
  this.canvas.addEventListener("mouseover",function(e){
    if (ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
      console.log(hoverArray.length)
      ctx.fillStyle = "#E66C2C";
      ctx.fill(resetButton)
      ctx.font = '35pt Impact'
      ctx.fillStyle = "black";
      ctx.textAlign = 'center';
      ctx.fillText("RESET", canvas.width - 100, 115)
      ctx.stroke(resetButton)
    }
  })
  this.canvas.addEventListener("mousemove",function(e){
    if (ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && hoverArray.length === 1){
      console.log(hoverArray.length)
      ctx.fillStyle = "#E66C2C";
      ctx.fill(resetButton)
      ctx.font = '35pt Impact'
      ctx.fillStyle = "black";
      ctx.textAlign = 'center';
      ctx.fillText("RESET", canvas.width - 100, 115)
      ctx.stroke(resetButton)
    }
    if (!ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && hoverArray.length === 1){
      ctx.fillStyle = "#ffae42";
      ctx.fill(resetButton)
      ctx.font = '35pt Impact'
      ctx.fillStyle = "black";
      ctx.textAlign = 'center';
      ctx.fillText("RESET", canvas.width - 100, 115)
      ctx.stroke(resetButton)
    }
    if (ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1){
      ctx.fillStyle = "#E66C2C";
      ctx.fill(instructButton)
      ctx.font = '35pt Impact'
      ctx.fillStyle = "black";
      ctx.textAlign = 'center';
      ctx.fillText("BACK", canvas.width - 100, 315)
      ctx.stroke(instructButton)
    }
    if (!ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1){
      ctx.fillStyle = "#ffae42";
      ctx.fill(instructButton)
      ctx.font = '35pt Impact'
      ctx.fillStyle = "black";
      ctx.textAlign = 'center';
      ctx.fillText("BACK", canvas.width - 100, 315)
      ctx.stroke(instructButton)
    }
  })
}
drawResetButton(){
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
  drawInstructionButton() {
    let ctx = this.ctx
    let canvas = this.canvas
    let instructionButton = new Path2D()
    instructionButton.arc(this.canvas.width - 100, 300, 70, 0, Math.PI * 2, true);
    ctx.lineWidth = 5;
    ctx.fillStyle = "#ffae42";
    ctx.fill(instructionButton)
    ctx.font = '35pt Impact'
    ctx.fillStyle = "black";
    ctx.textAlign = 'center';
    ctx.fillText("BACK", this.canvas.width - 100, 315)
    ctx.stroke(instructionButton)
    this.instructButton = instructionButton;
  }
  newScreen(){
 
   let wide = document.getElementById("widePumpkin");
 
   
  //   this.secondctx.drawImage(wide, this.canvas.width / 2 - 400, this.canvas.height / 2 - 400, wide.width,wide.height)
  //  debugger;
  //  this.secondcanvas.addEventListener("mouseenter",function(e){
  //   console.log('hello')
  //   debugger;
  //  })
  
  
    let pumpkin = this.ctx.drawImage(wide, this.canvas.width / 2 - 400, this.canvas.height / 2 - 400, 850, 838);

  //   canvas.addEventListener('onload',function(e){
  //     console.log(ctx.drawImage(wide, 0, 0, wide.width, wide.height).getImageData(e.offsetX, e.offsetY, 1, 1).data)
  //    console.log('mouseenter')
  //  })

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