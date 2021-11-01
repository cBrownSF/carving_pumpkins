class ChooseScreen{
  constructor(){
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext('2d');
    this.drawPumpkin(ctx);
    this.drawPumpkinGreen(ctx);
    this.drawPumpkinTall(ctx);
  }

  drawPumpkin(ctx){
   let wide = document.getElementById("widePumpkin");
  ctx.drawImage(wide, 300, 300, 600,591);
  }
  drawPumpkinGreen(ctx){
    let green = document.getElementById("greenPumpkin");
    ctx.drawImage(green, 300, 300, 570, 594);
  }
  drawPumpkinTall(ctx){
    const tall = document.getElementById("tallPumpkin");
    ctx.drawImage(tall, 300, 300, 414,464);
  }
}
export default ChooseScreen;