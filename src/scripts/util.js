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

  },mouseMove(e,red,blue,carving,instruct,reset,ctx,coordinatesArray){
    if (red !== 0 && blue < 45 && !ctx.isPointInPath(instruct, e.offsetX, e.offsetY) && !ctx.isPointInPath(reset, e.offsetX, e.offsetY)) {

      ctx.lineWidth = 8;
      ctx.lineCap = "round"
      // ctx.lineJoin='round'
      // ctx.strokeStyle('rgba(0, 0, 0, 0.7)')
      // ctx.moveTo(e.offsetX,e.offsetY)
      // let newPath = contextPath;
      ctx.lineTo(e.offsetX, e.offsetY)
      ctx.stroke()

      coordinatesArray.push(e.offsetX, e.offsetY);

    }
    if (coordinatesArray.length > 10 && (e.offsetX - 3 < coordinatesArray[0] && e.offsetX + 3 > coordinatesArray[0]) && (e.offsetY - 3 < coordinatesArray[1] && e.offsetY + 3 > coordinatesArray[1])) {
      // ctx.lineTo(coordinatesArray[0], coordinatesArray[1])


      carving = false;

      ctx.closePath()
      // ctx.stroke()
      ctx.fillStyle = "#ffbd2e"
      ctx.fill()
      // this.carveSound()
      // ctx.beginPath()
      // // ctx.moveTo(coordinatesArray[coordinatesArray.length - 1], coordinatesArray[coordinatesArray.length - 2])
      // ctx.lineTo(coordinatesArray[0],coordinatesArray[1])
      // ctx.stroke()
      // ctx.closePath()
      // ctx.closePath()
      //can add the path to an array here
      coordinatesArray.splice(0, coordinatesArray.length)
      ctx.beginPath();
    }  
  }
 
}

export default Defaults;