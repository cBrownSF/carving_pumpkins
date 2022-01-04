const Util={
  
  resetButtonactions(e) {
    let ctx = this.ctx;
  if (ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
    ctx.fillStyle = "#E66C2C";
    ctx.fill(resetButton)
    ctx.font = '35pt Impact'
    ctx.fillStyle = "black";
    ctx.textAlign = 'center';
    ctx.fillText("RESET", canvas.width - 100, 115)
    ctx.stroke(resetButton)
  }
  if (!ctx.isPointInPath(resetButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
    ctx.fillStyle = "#ffae42";
    ctx.fill(resetButton)
    ctx.font = '35pt Impact'
    ctx.fillStyle = "black";
    ctx.textAlign = 'center';
    ctx.fillText("RESET", canvas.width - 100, 115)
    ctx.stroke(resetButton)
  }
  if (ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
    ctx.fillStyle = "#E66C2C";
    ctx.fill(instructButton)
    ctx.font = '35pt Impact'
    ctx.fillStyle = "black";
    ctx.textAlign = 'center';
    ctx.fillText("BACK", canvas.width - 100, 315)
    ctx.stroke(instructButton)
  }
  if (!ctx.isPointInPath(instructButton, e.offsetX, e.offsetY) && hoverArray.length === 1) {
    ctx.fillStyle = "#ffae42";
    ctx.fill(instructButton)
    ctx.font = '35pt Impact'
    ctx.fillStyle = "black";
    ctx.textAlign = 'center';
    ctx.fillText("BACK", canvas.width - 100, 315)
    ctx.stroke(instructButton)
  }
}
}

export default Util;