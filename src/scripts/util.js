const Util = {
  getDist(x1,y1, x2,y2) {
    return Math.sqrt(
      Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
    );
  },
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
  // isCollided(getDist){
  //  return getDist === 0;
  // }

//if (isCollided === true){
  // this.velX = velX * -1
    // this.velY = velY * -1
// } else{
  // this.velX;
  // this.velY;
// }
}
