import Button from './main_buttons.js'
import Instructions from './instructions'
import Util from './carving_actions.js';
class GameScreen{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')
   
    this.hoverArray = ['one'];
    this.newScreen();
    this.goodPath;
    this.pumpkinPath = []
    // this.drawPumpkinPath()
    // this.drawPumpkinArray()
    this.resetButton;
    this.instructButton;
    
    this.buttonActions();
    this.carving = false;
    this.carvingPath;
    this.carveCount=[];
    this.coordinatesArray=[]
    this.beginCarve()
    this.drawPumpkinArray;
  }
 buttonActions() {
   let hoverArray=this.hoverArray
   let resetButton = this.resetButton;
   let ctx = this.ctx;
   let canvas = this.canvas
   let instructButton=this.instructButton
   
  this.canvas.addEventListener("click",e =>{
    if (ctx.isPointInPath(resetButton, e.offsetX, e.offsetY)&& hoverArray.length ===1){
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      this.newScreen()
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
  this.canvas.addEventListener("mouseover",e =>{
    if (ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
      ctx.fillStyle = "#E66C2C";
      ctx.fill(resetButton)
      ctx.font = '35pt Impact'
      ctx.fillStyle = "black";
      ctx.textAlign = 'center';
      ctx.fillText("RESET", canvas.width - 100, 115)
      ctx.stroke(resetButton)
    }
  })
  this.canvas.addEventListener("mousemove",
  e =>{
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
    ctx.closePath()
    this.instructButton = instructionButton;
  }
  newScreen(){
 
   let wide = document.getElementById("widePumpkin");
    let pumpkin = this.ctx.drawImage(wide, this.canvas.width / 2 - 400, this.canvas.height / 2 - 400, 850, 838);
    const raven = document.getElementById("raven");
    let ravImage = this.ctx.drawImage(raven, 0, 200, 300, 360);
    this.drawInstructionButton()
    this.drawResetButton()
    this.drawPumpkinGoodPath()
  //   this.secondctx.drawImage(wide, this.canvas.width / 2 - 400, this.canvas.height / 2 - 400, wide.width,wide.height)
  //  debugger;
  //  this.secondcanvas.addEventListener("mouseenter",function(e){
  //   console.log('hello')
  //   debugger;
  //  })
  

    
   
  //   canvas.addEventListener('onload',function(e){
  //     console.log(ctx.drawImage(wide, 0, 0, wide.width, wide.height).getImageData(e.offsetX, e.offsetY, 1, 1).data)
  //    console.log('mouseenter')
  //  })

  //   this.ctx.fill(pumpkinPath)
  //  this.pumpkinObj = this.pumpkinPath; 
  // let image = new Image(pumpkin)
  // let imagePath = new Path2D(image)
  
  
 
    
   
    // let button = new Button(this.canvas.width - 100, 100, 70, "RESET!", this.canvas)
    // button.drawButton
    // let resetButton = new Path2D(button)
    // this.resetButton = resetButton;
    // new Button(this.canvas.width - 100, 300, 70, "HOME", this.canvas)
  }

 beginCarve(){
  let carving = this.carving; 
  let canvas = this.canvas;
  let ctx = canvas.getContext('2d')
  let pumpkinPath=this.goodPath;
  let carvingPath=this.carvingPath
  let coordinatesArray=this.coordinatesArray;
  let hoverArray=this.hoverArray;
  canvas.addEventListener("mousedown", e=> {
    if (ctx.isPointInPath(pumpkinPath, e.offsetX, e.offsetY)){
      carving = true;
      let carvep=new Path2D()
      coordinatesArray.push(e.offsetX, e.offsetY);
      canvas.addEventListener("mousemove", e => {
        if (!carving) return false;
          ctx.lineWidth = 11;
          ctx.lineCap = "round"
          carvep.lineTo(e.offsetX, e.offsetY)
          ctx.stroke(carvep)
        
          
          // if (!ctx.isPointInPath(pumpkinPath, e.offsetX, e.offsetY)) {
          //   carving = false;
          // }
      })
      canvas.addEventListener("mouseup", e =>{
        // if (
        //   ctx.isPointInStroke(carvingPath,e.offsetX,e.offsetY)){
        
        if ((e.offsetX - 10 < coordinatesArray[0] && e.offsetX + 10 > coordinatesArray[0]) && (e.offsetY - 10 < coordinatesArray[1] && e.offsetY + 10 > coordinatesArray[1])) {
          carving = false;
          carvep.closePath()
          // ctx.closePath()
          //can add the path to an array here
          ctx.fillStyle = "#ffbd2e"
          ctx.fill(carvep)
          debugger;
          
          coordinatesArray.splice(0, coordinatesArray.length)
        }
        //   // canvas.removeEventListener("mouseup",function(e))
          
        // carvingPath=null;
        // carving = false;
          coordinatesArray.splice(0, coordinatesArray.length)
          carving = false;
          ctx.beginPath();
        
       
        })  
      }
  })
}

  drawPumpkinSquare(){
    let canvas = this.canvas
    let pumpkinP= new Path2D()
     pumpkinP.rect(canvas.width / 2 - 400, canvas.height / 2 - 200, 800, 550)
     pumpkinP.closePath()
     this.pumpkinPath.push(pumpkinP);
  }
drawPumpkinArray(){
  debugger;
  let ctx = this.ctx;
  for (let i =0;i<this.pumpkinPath.length;i++){
  //  let i = new Path2D(this.pumpkinPath[i])
  debugger;
    ctx.fillStyle='orange'
    ctx.lineWidth=5
    ctx.fill(new Path2D(this.pumpkinPath[i]))
    // ctx.stroke(new Path2D(this.pumpkinPath[i]))

  }
}
drawPumpkinGoodPath(){
  let canvas = this.canvas
  let pumpkinP = new Path2D()
  pumpkinP.rect(canvas.width / 2 - 400, canvas.height / 2 - 200, 800, 550)
  pumpkinP.closePath()
  this.goodPath = pumpkinP;
}
}


// carve(){
//   let carvingPath =this.carvingPath;
//   let hoverArray = this.hoverArray;
//   let carving = this.carving; 
//   let ctx = this.ctx;
//   let carveCount = this.carveCount
//   console.log(this.carving)
//   console.log(this.carveCount)
 

//   // this.canvas.addEventListener("mousemove", e=>{
//   //   console.log(carvingPath)
//   //   if (this.carveCount.length ===1){
     
//   //     carvingPath = new Path2D()
//   //     ctx.beginPath()
//   //     ctx.lineWidth = 11;
//   //     ctx.lineCap = "round"
      
//   //     carvingPath.lineTo(e.offsetX, e.offsetY)
//   //     ctx.stroke(carvingPath)
//   //   }
  
//   // })
// }
// finishCarve(){
//   this.canvas.addEventListener()
// }

export default GameScreen;