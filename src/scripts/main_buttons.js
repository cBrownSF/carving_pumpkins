 import Defaults from "./util";
 class Button{
  constructor(canvas){
    this.canvas = canvas
    this.ctx = canvas.getContext('2d');
    this.drawButton();
    
  }

  drawButton(x,y,ctx,text,path){
    path.arc(x, y, 70, 0, Math.PI * 2, true);
    ctx.lineWidth = 5;
    ctx.fillStyle = "#ffae42";
    ctx.fill(path)
    ctx.font = '35pt Impact'
    ctx.fillStyle = "black";
    ctx.textAlign = 'center';
    ctx.fillText(text, x, y + 15)
    ctx.stroke(path)
  
  }
}

export default Button;