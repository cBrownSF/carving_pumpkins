import Button from './main_buttons.js'
import CandyCorn from './candy_corn.js'
 class MenuScreen{
   
  constructor(canvas){
    this.NUM_CANDY = 25;
    this.candyArray = [];
    this.canvas = canvas;

    this.ctx = canvas.getContext('2d');
    this.populateCandyArray();
    this.start();
    this.drawTitle()
    // this.drawButton()

  }
 
  populateCandyArray() { 
    const canvas = document.getElementById("mycanvas");
    for (let i = 0; i < this.NUM_CANDY; i++) {
      let x = Math.random() * (canvas.width - 200);
      let y = Math.random() * (canvas.height - 200);
      let velX = Math.floor((Math.random() * 5) + 3);
      let velY = Math.floor((Math.random() * 5) + 3);
      if (i !== 0) {
        for (let j = 0; j < this.candyArray.length; j++) {
          if (this.getDist(x, y, this.candyArray[j].x, this.candyArray[j].y) < 70) {
            x = Math.random() * (canvas.width - 200);
            y = Math.random() * (canvas.height - 200);
            j = -1;    
          }
    }
  }
    let corn = new CandyCorn(x, y,velX,velY);
    this.candyArray.push(corn);
    }
  }
 getDist(x1, y1, x2, y2) {
     return Math.sqrt(
       Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
     );
   }

drawMenu(){
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (let i = 0; i < this.candyArray.length; i ++){
      this.candyArray[i].drawCorn(this.ctx)
      this.drawTitle()
    }
  }

start() {
  this.lastTime = 0;
  requestAnimationFrame(this.animate.bind(this));
}
animate(time){
  const timeDelta = time - this.lastTime;
  this.moveObjects(timeDelta)
  this.checkCollisions();
  this.drawMenu()
  this.lastTime = time;

  requestAnimationFrame(this.animate.bind(this));
}
moveObjects(timeDelta){
  this.candyArray.forEach(candy =>{
    candy.move(timeDelta);
  })
}

checkCollisions() {
    for (let i = 0; i < this.candyArray.length; i++) {
      for (let j = 1; j < this.candyArray.length; j++) {
        const candy1 = this.candyArray[i];
        const candy2 = this.candyArray[j];

        if (candy1.isCollidedWith(candy2)) {
          
        }
      }
    }
  };

  //relocate

  drawTitle() {
    
    const titleImage = document.getElementById("title");
     this.ctx.drawImage(titleImage, this.canvas.width/2 - 200, this.canvas.height/2 -200);
  }
//   drawButton(){
//     new Button(500, 500, 80, "START!")
//   }

// }

// 
 }
export default MenuScreen;
