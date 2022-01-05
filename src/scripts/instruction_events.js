import Defaults from "./util";
const InstructionEvent = {
  mouseMove(e,button,clickArray,ctx){
    if (ctx.isPointInPath(button, e.offsetX, e.offsetY) && clickArray.includes('instruct')) {
      this.hovered = true;
      ctx.lineWidth = Defaults.buttonLineWidth();
      ctx.fillStyle = Defaults.buttonHover();
      ctx.fill(button)
      ctx.font = Defaults.buttonFont()
      ctx.fillStyle = Defaults.fontColor();
      ctx.textAlign = Defaults.fontAlign();
      ctx.fillText("Start", canvas.width / 2, canvas.height / 2 + 315)
      ctx.stroke(button)
    }
    if (!ctx.isPointInPath(button, e.offsetX, e.offsetY) && clickArray.includes('instruct')) {
      this.hovered = false;
      this.drawButton()
    }
  }
}

export default InstructionEvent