class CandyCorn {
 
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 4;
    this.drawCorn();
  }
  drawCorn() {
      const candyImg = document.getElementById("corn");
      ctx.drawImage(candyImg, this.x, this.y);
    }
  
}
export default CandyCorn;