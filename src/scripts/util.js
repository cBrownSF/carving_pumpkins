const Defaults = {
  buttonLineWidth(){
    return 5;
  },
  buttonFont(){
    return "35pt Impact"
  },
  buttonColor(){
    return "#ffae42"
  },
  fontColor(){
    return "black"
  },
  fontAlign(){
    return "center"
  },
  buttonHover(){
    return"#E66C2C"
  },
 buttonStyles(ctx,canvas,button,textSize,fillStyle,buttonText,height){
    ctx.fillStyle = fillStyle;
    ctx.fill(button)
    ctx.font = `${textSize}pt Impact`
    ctx.fillStyle = "black";
    ctx.textAlign = 'center';
    ctx.fillText(buttonText, canvas.width * .945, canvas.height / height)
    ctx.stroke(button)
    ctx.lineWidth = textSize / 7;

  },
   buttonStyleHoverInstruct(ctx, canvas,textSize) {
   ctx.lineWidth = textSize/7;
  ctx.fillStyle = "#ffae42";
  ctx.fill(instructionButton)
    ctx.font = `${textSize}pt Impact`
    ctx.fillStyle = "black";
  ctx.textAlign = 'center';
  ctx.fillText("Back", this.canvas.width * .945, canvas.height / 3.77)
    ctx.stroke(instructionButton)

  }

}

export default Defaults;