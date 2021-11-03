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
    let instructions = ' 1. Use your mouse to carve the pumpkin   ?2. The Reset button resets your pumpkin  ?    3. The Undo button reverses your last carve ? 4. The Candle button lights your pumpkin!';
    let x = this.canvas.width / 2;
    let y = this.canvas.height - this.canvas.height + 200;
    let height = 100;
    let splitInt = instructions.split('?');

    for (let i = 0;  i < splitInt.length; i++){
          this.ctx.font = '35pt Sans Serif'
          this.ctx.fillStyle = "black"
          this.ctx.fillText(splitInt[i], x, y + (i * height));
      }
    }
  }
export default Instructions;