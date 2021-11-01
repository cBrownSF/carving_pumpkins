import Button from './main_buttons.js'
import CandyCorn from './candy_corn.js'
 class MenuScreen{
   
  constructor(){
    this.NUM_CANDY = 15;
    this.candyArray = [];
    this.populateCorn();
    this.drawCandy();
    // this.drawButton()
    // const canvas = document.getElementById("mycanvas");
    // constctx = canvas.getContext('2d')
    // this. drawTitle(ctx)
  }
  populateCorn() {
    for (let i = 0; i < this.NUM_CANDY; i++) {
      const canvas = document.getElementById("mycanvas");
      const ctx = canvas.getContext('2d');
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      if (i !== 0){
        for (let j = 0; j<this.candyArray.length; j++) {
          if (this.distBetween(x, y, this.candyArray[j].x, this.candyArray[j].y) <=0){
            x = Math.random() * canvas.width;
            y = Math.random() * canvas.height;
            //also can possibly change the value here later so that they are spaced farther apart
            //still an issue because these newCoordinates could also already be filled
          }
        }
      }
      let corn = new CandyCorn(x,y)
      this.candyArray.push(corn);
      }
  }
   distBetween(x1, y1, x2, y2) {
     return Math.sqrt(
       Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
     );
   }
  drawCandy(){
    for (let i = 0; i < this.candyArray.length; i ++){
      // this.candyArray[i].moveCorn();
      console.log('hey');
    }
  }

  drawTitle(ctx) {
    const titleImage = document.getElementById("title");
    ctx.drawImage(titleImage, 200, 200);
    
  }
  drawButton(){
    new Button(500, 500, 80, "START!")
  }

}

export default MenuScreen;
