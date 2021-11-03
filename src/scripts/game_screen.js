import Button from './main_buttons.js'
class GameScreen{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.drawPumpkin();
    this.drawReset();
    this.drawUndo();
    this.drawCandle();
    // this.drawPumpkinGreen();
    // this.drawPumpkinTall();
  }

  drawPumpkin(){
  const wide = document.getElementById("widePumpkin");
  this.ctx.drawImage(wide, this.canvas.width/2 - 200, this.canvas.height/2 - 200, 600,591);
  }

  drawReset(){
    new Button(this.canvas.width - 100, this.canvas.height-this.canvas.height + 100,70,"RESET!",this.canvas)
  }
  drawUndo() {
    new Button(this.canvas.width - 100, this.canvas.height - this.canvas.height + 300, 70, "UNDO", this.canvas)
  }
  drawCandle() {
    new Button(this.canvas.width - 100, this.canvas.height - this.canvas.height + 500, 70, "CANDLE", this.canvas)
  }
  // drawPumpkinGreen(){
  //   const green = document.getElementById("greenPumpkin");
  //   this.ctx.drawImage(green, 300, 300, 570, 594);
  // }
  // drawPumpkinTall(){
  //   const tall = document.getElementById("tallPumpkin");
  //   this.ctx.drawImage(tall, 300, 300, 414,464);
  // }
}
export default GameScreen;