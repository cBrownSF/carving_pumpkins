import { throws } from "assert";

class CandyCorn {
 
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.velX = 5;
    this.velY = 4;
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

  // moveCorn(ctx){
  //   const canvas = document.getElementById("mycanvas");
  //   // // const ctx = canvas.getContext('2d');
  //   //ctx.clearRect(0,0,canvas.width,canvas.height)
  //   this.drawCorn(ctx);
  //   let newX = this.x + this.velX
  //   let newY = this.y + this.velY;
  //   this.x = newX;
  //   this.y = newY;
  //   requestAnimationFrame(this.moveCorn(ctx));
  // }
  //checkWalls(){
    //if (if (this.x > canvas.width || corn.x <0){
//     this.velX = (this.velX * -1)
// }
// if (corn.y > canvas.height || corn.y < 0) {
//   this.velY = (corn.dy * -1)
// })
  //}
  // isOnTitle(){
    //example
  //   if (this.x > 200 || this.y < 600)
  //     this.velX = (this.velX * -1)
  // }
} 
export default CandyCorn