class Button{
  constructor(x,y,radius,height){
    this.x = x;
    this.y = y;
    this.radius = radius
    this.START = 0;
    this.END = Math.PI *2;
    this.CCLOCK = true;
    this.drawButton(ctx)
  }

  drawButton(ctx){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius,this.START, THIS.END, THIS.CCLOCK);
    ctx.lineWidth = 5
    ctx.font = 
    ctx.stroke()
  }
}