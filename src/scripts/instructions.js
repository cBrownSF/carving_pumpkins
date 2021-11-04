import Button from './main_buttons.js'
class Instructions{

  constructor(canvas){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.drawButton();
    this.drawBox();
  }

  drawButton(){
    new Button(this.canvas.width/2, this.canvas.height/2 +200, 70, "START!",this.canvas)
  }
  drawBox() {
    let instructions = '1. Click and hold the mouse to begin carving?2. Carve the pumpkin by moving the mouse?3. Move the black line back to the starting point?4. Let go of the mouse to complete the carve ?5. Repeat the process and keep carvin!   ?*The Reset button clears all of the carves*?*The Pumpkin button allows you to choose a new pumpkin*'
    let x = this.canvas.width / 2 - 300;
    let y = 100;
    let height = 100;
    let splitInt = instructions.split('?');

    for (let i = 0;  i < splitInt.length; i++){
          this.ctx.font = '30pt Arial'
          this.ctx.fillStyle = "black"
          this.ctx.textAlign = "left"
          this.ctx.fillText(splitInt[i], x, y + (i * height));
      }
    }
  }
export default Instructions;