export default class CandyCorn {
 
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 4;
    // this.drawCorn();
  }
  drawCorn(ctx) {
      const candyImg = document.getElementById("corn");
      ctx.drawImage(candyImg, this.x, this.y);
    }
  
}
// export default CandyCorn;
// module.exports = CandyCorn;

// MovingObject.prototype.move = function () {
//   let newX = this.x + this.dx
// let newY = this.y + this.dy;
//   this.x = newX;
      // this.y = newY
// }