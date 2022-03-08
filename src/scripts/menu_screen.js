import CandyCorn from './candy_corn.js'
import Instructions from './instructions.js';
 class MenuScreen{
   
  constructor(canvas){
    this.NUM_CANDY = 25;
    this.candyArray = [];
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.populateCandyArray();
    this.start();
    this.drawTitle()
  }
  
  populateCandyArray() { 
    console.log('populating')
    const canvas = this.canvas;
    for (let i = 0; i < this.NUM_CANDY; i++) {
      let x = Math.random() * (canvas.width - 200);
      let y = Math.random() * (canvas.height - 200);
      let velX = Math.floor((Math.random() * 5) + 3);
      let velY = Math.floor((Math.random() * 5) + 3);
      console.log(`x:${x}, canvas.width:${canvas.width}` )
      console.log(`y:${y}, canvas.width:${canvas.height}` )
      if (i !== 0) {
        for (let j = 0; j < this.candyArray.length; j++) {
          if (this.getDist(x, y, this.candyArray[j].x, this.candyArray[j].y) < 70 || x <80 || y<80) {
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
//   loadInstructions(){
//     debugger;
//     let keyArray = this.keysAvail;
//     let canvas = this.canvas;
//     let ctx = this.ctx;
    
//     this.canvas.addEventListener("keydown", function(e) {
//       debugger;
//       if (e.code === 'Space') {
//         debugger;
//         ctx.clearRect(0, 0, canvas.width, canvas.height)
//         window.cancelAnimationFrame(MenuScreen.frame);
//         keysAvail.splice(0, 1);
//         new Instructions(canvas)
//       }
//     })
// }
  getDist(x1, y1, x2, y2) {
    return Math.sqrt(
      Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
    );
  }

  drawMenu(){
    console.log('draw')
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (let i = 0; i < this.candyArray.length; i ++){
      this.candyArray[i].drawCorn(this.ctx);
    }
    this.drawTitle();
    this.drawSpace();
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
    this.frame = requestAnimationFrame(this.animate.bind(this));
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

  drawTitle() {
    const titleImage = document.getElementById("title");
    this.ctx.drawImage(titleImage, this.canvas.width / 3.45, this.canvas.height / 3.403, this.canvas.width / 2.378, this.canvas.height / 7.29);
  }

  drawSpace(){
    const spaceImage = document.getElementById("space")
   
    this.ctx.drawImage(spaceImage, this.canvas.width / 2.353, this.canvas.height / 2, this.canvas.width / 6.937,this.canvas.height/16.16)
  }
}
export default MenuScreen;
