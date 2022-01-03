 class Button{
  constructor(canvas){
    // this.x = x;
    // this.y = y;
    // this.radius = radius
    // this.START = 0;
    // this.END = Math.PI *2;
    // this.CCLOCK = true;
    // this.text = text;
    this.canvas = canvas
    this.ctx = canvas.getContext('2d');
    this.drawButton();
    
  }

  drawButton(x,y,text){
    // this.ctx.beginPath();
    // this.ctx.arc(this.x, this.y, this.radius,this.START, this.END, this.CCLOCK);
    // this.ctx.lineWidth = 5
    // this.ctx.fillStyle = "#E66C2C";
    // this.ctx.fill();
    // this.ctx.stroke()

    // this.ctx.font = '35pt Impact'
    // this.ctx.fillStyle = "black";
    // this.ctx.textAlign = 'center';
    // this.ctx.fillText(this.text,this.x,this.y + 15)
    // this.ctx.stroke()
    let canvas = this.canvas
    let ctx = this.ctx
    let diffPath = new Path2D()
    diffPath.arc(x, y, 70, 0, Math.PI * 2, true);
    ctx.lineWidth = 5;
    ctx.fillStyle = "#ffae42";
    ctx.fill(diffPath)
    ctx.font = '35pt Impact'
    ctx.fillStyle = "black";
    ctx.textAlign = 'center';
    ctx.fillText(text, x, y + 15)
    ctx.stroke(diffPath)
    debugger;
  }
}

export default Button;