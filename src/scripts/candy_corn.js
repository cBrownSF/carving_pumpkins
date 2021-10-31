export default class CandyCorn {
 
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 4;
  }

  drawCorn(ctx) {
      const candyImg = document.getElementById("corn");
      ctx.drawImage(candyImg, this.x, this.y);
      console.log('drawCorn')
    }

  moveCorn(){
    newX = this.x + this.dx
    newY = this.y + this.dy;
    this.x = newX;
    this.y = newY;
  }
}