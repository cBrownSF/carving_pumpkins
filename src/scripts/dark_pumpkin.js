import Button from './main_buttons.js'
class DarkPumpkin {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.newScreen();
  }

  newScreen() {
    const wide = document.getElementById("darkPumpkin");
    this.ctx.drawImage(wide, this.canvas.width / 2 - 400, this.canvas.height / 2 - 400, 850, 838);
    const raven = document.getElementById("raven");
    this.ctx.drawImage(raven, 0, 200, 600, 720);
    new Button(this.canvas.width - 100, 100, 70, "RESET!", this.canvas)
  }

  reset() {
    this.newScreen()
  }
}
export default DarkPumpkin;