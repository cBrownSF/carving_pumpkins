class CandyCorn {
 
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 4;
     const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext('2d');
    this.drawCorn(ctx)
    this.moveCorn()
    // this.moveCorn(ctx)
  }

  drawCorn(ctx) {
      const candyImg = document.getElementById("corn");
      ctx.drawImage(candyImg, this.x, this.y);
    }

  moveCorn(ctx){
    const canvas = document.getElementById("mycanvas");
    // const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height)
    this.drawCorn(ctx);
    let newX = this.x + this.dx
    let newY = this.y + this.dy;
    this.x = newX;
    this.y = newY;
    requestAnimationFrame(this.moveCorn);
  }
} 
export default CandyCorn