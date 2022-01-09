const Defaults = {

 buttonStyles(ctx,canvas,button,textSize,fillStyle,buttonText,height,width){
    ctx.fillStyle = fillStyle;
    ctx.fill(button)
    ctx.font = `${textSize}pt Impact`
    ctx.fillStyle = "black";
    ctx.textAlign = 'center';
    ctx.fillText(buttonText, canvas.width * width, canvas.height / height)
    ctx.lineWidth = textSize / 7;
    ctx.stroke(button)

  },
 
}

export default Defaults;