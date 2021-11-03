class CandyCorn {
 
  constructor(x,y,velX,velY){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }

  collideWith(otherObject) {
    // default do nothing
  };
  drawCorn(ctx) {
      const candyImg = document.getElementById("corn");
      ctx.drawImage(candyImg, this.x, this.y);
  }

  getDist(x1, y1, x2, y2) {
    return Math.sqrt(
      Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
    );
  }
  
  isCollidedWith(otherObject) {
    if (this.getDist(this.x,this.y, otherObject.x,otherObject.y) <= 70){
        return true;
      }
    else{
      false
    }
  } 


  move(timeDelta) {
    const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA
    this.checkWalls()
    // this.checkTitle()
    let offsetX = this.velX * velocityScale;
    let offsetY = this.velY * velocityScale;
    this.x =this.x +offsetX
    this.y =this.y + offsetY
  }

  checkWalls() {
    const canvas = document.getElementById("mycanvas");
    let ctx = canvas.getContext('2d');
    if (this.x > canvas.width -50|| this.x < 0) {
      this.velX = (this.velX * -1)
    }
    if (this.y > canvas.height -69|| this.y < 0) {
      this.velY = (this.velY * -1)
    }
  }

  
  // checkTitle(){
  // //   const canvas = document.getElementById("mycanvas");
  // //   let ctx = canvas.getContext('2d');
  // //   if (this.x < 600 && this.x > canvas.width - 600){
  // //     this.velX = (this.velX * -1)
  // //   //   this.velY = (this.velY * -1)
  // //   }
  // //   if (this.y > 400 && this.y > canvas.width -400){
  // //     this.velY = (this.velY * -1)
  // //   //   this.velX = (this.velX * -1)
  // //   }
  // }
} 
export default CandyCorn