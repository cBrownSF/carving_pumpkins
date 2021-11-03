 class Button{
  constructor(pos,radius,text){
    this.pos = pos;
    this.radius = radius
    this.START = 0;
    this.END = Math.PI *2;
    this.CCLOCK = true;
    this.text = text;
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext('2d');
    this.drawButton(ctx)
    console.log('hello')
  }

  drawButton(ctx){
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius,this.START, this.END, this.CCLOCK);
    ctx.lineWidth = 5
    ctx.fillStyle = "#E66C2C";
    ctx.fill();
    ctx.font = '25 pt Arial'
    ctx.fillStyle = "black";
    ctx.textAlign = 'center';
    ctx.fillText(this.text,this.x,this.y)
  }

}

export default Button;