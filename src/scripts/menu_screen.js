import Button from './main_buttons.js'
import CandyCorn from './candy_corn.js'
 class MenuScreen{
   
  constructor(canvas){
    this.NUM_CANDY = 15;
    this.candyArray = [];
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.populateCandyArray();
    this.start();
    // this.checkCollisions()
    // this.drawButton()
    // this. drawTitle()

  }
  populateCandyArray() { 
    const canvas = document.getElementById("mycanvas");
    for (let i = 0; i < this.NUM_CANDY; i++) {
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let corn = new CandyCorn(x, y);
      
        this.candyArray.push(corn);
      }
    }

drawMenu(){
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (let i = 0; i < this.candyArray.length; i ++){
      this.candyArray[i].drawCorn(this.ctx)
    }
  }

start() {
  this.lastTime = 0;
  requestAnimationFrame(this.animate.bind(this));
}
animate(time){
  const timeDelta = time - this.lastTime;
  this.moveObjects(timeDelta)
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
      for (let j = 0; j < this.candyArray.length; j++) {
        let candy1 = this.candyArray[i];
        let candy2 = this.candyArray[j];

        if (candy1.isCollidedWith(candy2)) {
          // const collision = candy1.collideWith(candy2);
          console.log('HELLO')
        }
      }
    }
  };
// //   drawTitle(ctx) {
//     const titleImage = document.getElementById("title");
//     ctx.drawImage(titleImage, 200, 200);
    
//   }
//   drawButton(){
//     new Button(500, 500, 80, "START!")
//   }

// }

// 
 }
export default MenuScreen;
