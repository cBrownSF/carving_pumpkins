// // import * as CandyCorn from "./candy_corn.js"
import CandyCorn from './candy_corn.js'
export default class MenuScreen{
  constructor(){
    this.WIDTH = 800;
    this.HEIGHT = 600;
    this.NUM_CANDY = 15;
    this.candyArray = [];
    // this.populateCorn();
    // this.drawCandy();
  }
  populateCorn() {
    for (let i = 0; i < this.NUM_CANDY; i++) {
      let x = Math.random() * 800
      let y = Math.random() * 600
      let corn = new CandyCorn(x,y)
      this.candyArray.push(corn);
    }
    // return this.populateCorn() maybe add return statements
  }

  drawCandy(ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // for (let i = 0; i <this.candyArray; i ++){
    //   let candy = candyArray[i].drawCorn();
    // }
    // return this.drawCandy() maybe add this
  }
//   animateCorn(ctx){
    

//   }

  
}
// // module.exports = MenuScreen;
// // export default MenuScreen;