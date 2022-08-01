class CandyCorn {
 
  constructor(x,y,velX,velY){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }

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
    let offsetX = this.velX * velocityScale;
    let offsetY = this.velY * velocityScale;
    this.x =this.x +offsetX
    this.y =this.y + offsetY
  }

  checkWalls() {
    const canvas = document.getElementById("mycanvas");
    let ctx = canvas.getContext('2d');
    console.log(this.getDist(this.x,this.y,canvas.width, canvas.height))
    if (this.x > canvas.width - 55|| this.x < 0) {
      debugger
      this.velX = (this.velX * -1)
    }
    if (this.y > canvas.height - 69|| this.y < 0) {
      this.velY = (this.velY * -1)
    }
  }

  // checkTitle(timeDelta){
  //    const canvas = document.getElementById("mycanvas");
  //     let ctx = canvas.getContext('2d');
  //       if (this.x > Math.floor(canvas.width/4)){  
  //   }
  // }
} 
export default CandyCorn