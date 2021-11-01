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
      let x = Math.random() * canvas.width
      let y = Math.random() * canvas.height
      let corn = new CandyCorn(x,y)
      this.candyArray.push(corn);
      }
  }
 
  drawCandy(){
    for (let i = 0; i < this.candyArray.length; i ++){
  
      this.candyArray[i].drawCorn();
    //   console.log('hey');
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
