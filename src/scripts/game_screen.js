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
    this.pumpkinOutline;
  }
 buttonActions() {
   let hoverArray=this.hoverArray
   let resetButton = this.resetButton;
   let ctx = this.ctx;
   let canvas = this.canvas
   let instructButton=this.instructButton
   let pumpkin = this.pumpkinOutline;
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
    // console.log(`canvaswidth':${canvas.width}`)
    // console.log(`canvasheight':${canvas.height}`)
   
   
    if (ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && hoverArray.length === 1){
  

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
  let canvas=this.canvas;
  let ctx = this.ctx;

    let pumpkin = this.ctx.drawImage(wide, this.canvas.width / 2 - 400, this.canvas.height / 2 - 400, 850, 838);
    const raven = document.getElementById("raven");
    let ravImage = this.ctx.drawImage(raven, 0, 200, 300, 360);
    this.drawInstructionButton()
    this.drawResetButton()
    this.drawPumpkinGoodPath()
    // this.drawBezierCurve()
  
  }

drawBezierCurve(){
let canvas = this.canvas

let start={x:this.canvas.width/2-194+25, y:this.canvas.height/2-328 +120 -5}
  let end = { x: this.canvas.width / 2 - 400,y:this.canvas.height/2+100}
  let mid = { x: this.canvas.width / 2 - 369, y: this.canvas.height / 2 - 328 + 115}
  let secondend={x:this.canvas.width/2-169,y:this.canvas.height/2+400}
  let secondmid={x:this.canvas.width/2-369,y:this.canvas.height/2+395}
  let thirdend={x:this.canvas.width/2-50, y:this.canvas.height/2+415}
let outline = new Path2D;
this.ctx.beginPath()
outline.moveTo(start.x,start.y)
outline.quadraticCurveTo(mid.x,mid.y,end.x,end.y)
outline.quadraticCurveTo(start.x + 20, start.y-30,start.x+113,start.y-18)
outline.moveTo(end.x,end.y)
outline.quadraticCurveTo(secondmid.x,secondmid.y,secondend.x,secondend.y)


  outline.moveTo(secondend.x, secondend.y)
outline.quadraticCurveTo(this.canvas.width/2-86,this.canvas.height/2+445,thirdend.x,thirdend.y)
outline.moveTo(thirdend.x,thirdend.y)
outline.quadraticCurveTo(this.canvas.width/2,this.canvas.height/2+460,thirdend.x+160,thirdend.y)
outline.moveTo(thirdend.x + 160, thirdend.y)
outline.quadraticCurveTo(this.canvas.width / 2+140, this.canvas.height / 2 + 450, thirdend.x + 270, thirdend.y-15)
outline.moveTo(thirdend.x + 270, thirdend.y - 15)
  outline.quadraticCurveTo(thirdend.x + 302, thirdend.y + 10, thirdend.x + 398, thirdend.y - 58)
  outline.moveTo(thirdend.x+398,thirdend.y-58)
  outline.quadraticCurveTo(thirdend.x + 608, this.canvas.height / 2 +60, thirdend.x + 390, thirdend.y - 586)
  outline.moveTo(thirdend.x + 390, thirdend.y - 586)
  outline.lineTo(this.canvas.width / 2 - 194 + 25, this.canvas.height / 2 - 328 + 120 - 5)
  this.ctx.fill(outline)
outline.closePath()
  this.pumpkinOutline=outline;
} 
beginCarve(){
  let carving = this.carving; 
  let canvas = this.canvas;
  let ctx = canvas.getContext('2d')
  let pumpkinPath=this.goodPath;
  let carvingPath=this.carvingPath
  let coordinatesArray=this.coordinatesArray;
  let hoverArray=this.hoverArray;
  let pumpkin = this.pumpkinOutline;
  canvas.addEventListener("mousedown", e=> {
    if (ctx.isPointInPath(pumpkinPath, e.offsetX, e.offsetY)){
     
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let index = (e.offsetY * imgData.width + e.offsetX) * 4;
      let red = imgData.data[index];
      let green = imgData.data[index + 1];
      let blue = imgData.data[index + 2];
      let alpha = imgData.data[index + 3];
      if (red !== 0) {
        carving = true;
        ctx.beginPath()
        coordinatesArray.push(e.offsetX, e.offsetY);
      } 
      canvas.addEventListener("mousemove", e => {
        if (!carving) return false;
          ctx.lineWidth = 11;
          ctx.lineCap = "round"
          ctx.lineTo(e.offsetX, e.offsetY)
          ctx.stroke()
        
          
          // if (!ctx.isPointInPath(pumpkinPath, e.offsetX, e.offsetY)) {
          //   carving = false;
          // }
      })
      canvas.addEventListener("mouseup", e =>{
        // if (
        //   ctx.isPointInStroke(carvingPath,e.offsetX,e.offsetY)){
        
        if ((e.offsetX - 10 < coordinatesArray[0] && e.offsetX + 10 > coordinatesArray[0]) && (e.offsetY - 10 < coordinatesArray[1] && e.offsetY + 10 > coordinatesArray[1])) {
          carving = false;
          ctx.closePath()
          // ctx.closePath()
          //can add the path to an array here
          ctx.fillStyle = "#ffbd2e"
          ctx.fill()
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

getPixelData(x,y){
  
  // let imgData = false; 


  // if (imgData === false) {
  //   // fetch once canvas data     
    let ctx = this.canvas.getContext("2d");
    // }
    // Prepare your X Y coordinates which you will be fetching from your mouse loc
    // let x = 1514;   // 
    // let y = 337;
    
    // locate index of current pixel
  let imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
  let index = (y * imgData.width + x) * 4;
  let red = imgData.data[index];
  let green = imgData.data[index + 1];
  let blue = imgData.data[index + 2];
  let alpha = imgData.data[index + 3];
  console.log('pix x ' + x + ' y ' + y + ' index ' + index + ' COLOR ' + red + ',' + green + ',' + blue + ',' + alpha);
  if (red === 0){
    debugger;
    return false
  }else{
    return true;
  }
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
  pumpkinP.rect(canvas.width / 2 - 400, canvas.height / 2 - 242, 1000, 750)
  // this.ctx.fill(pumpkinP)
  pumpkinP.closePath()
  this.goodPath = pumpkinP;
  console.log(pumpkinP)
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