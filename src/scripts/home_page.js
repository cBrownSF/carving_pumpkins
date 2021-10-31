import * as CandyCorn from "./candy_corn.js"

class HomePage{
  constructor(){
    this.WIDTH = 800;
    this.HEIGHT = 600;
    this.NUM_CANDY = 15;
    this.candyArray = [];
    this.populateCorn();
  }
  populateCorn() {
    for (let i = 0; i < this.NUM_CANDY; i++) {
      let x = Math.random() * 800
      let y = Math.random() * 600
      let corn = new CandyCorn(x,y)
      this.candyArray.push(corn);
    }
  }

  
}

export default HomePage;