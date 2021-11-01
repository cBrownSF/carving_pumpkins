class CandyCorn {
 
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 4;
     const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext('2d');
    this.drawCorn(ctx)
  }

  drawCorn(ctx) {
      const candyImg = document.getElementById("corn");
      ctx.drawImage(candyImg, this.x, this.y);
    }

  moveCorn(){
    newX = this.x + this.dx
    newY = this.y + this.dy;
    this.x = newX;
    this.y = newY;
  }
} 
export default CandyCorn