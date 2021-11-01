// import ChooseScreen from './scripts/choose_screen.js'
// import Button from './scripts/main_buttons.js'
// import CandyCorn from './scripts/candy_corn.js'
// import MenuScreen from './scripts/menu_screen.js'
// window.Button = Button;
// window.CandyCorn = CandyCorn;
// window.MenuScreen = MenuScreen;
// window.ChooseScreen = ChooseScreen;
const mouseTrack = {
  x: null,
  y:null
}

window.addEventListener("DOMContentLoaded",function() {
  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const candyImg = document.getElementById("corn");
  const titleImg = document.getElementById('title');
  titleImg.onload = function(){
   drawTitle();
   console.log('hello')
   }
  candyImg.onload = function () {
    // new MenuScreen();
    update()
    console.log(dist())
    // update2()
  }
  const corn = {
    width: 50,
    height: 80,
    x: 20,
    y: 200,
    velX: 2,
  velY: 2
  }
  
  const corn2 = {
    width: 50,
    height: 80,
    x: 300,
    y: 500,
    velX: 2,
  velY: 2
  }

  function drawCorn() {
    const candyImg = document.getElementById("corn");
    ctx.drawImage(candyImg, corn.x, corn.y,corn.width,corn.height);
    ctx.drawImage(candyImg, corn2.x, corn2.y , corn.width, corn.height);
  }


  function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawCorn()
    corn.x += corn.velX;
  corn.y += corn.velY;
  if (corn.x > canvas.width || corn.x <0){
    corn.velX = (corn.velX * -1)
  }
  if (corn.y > canvas.height || corn.y < 0){
    corn.velY = (corn.velY * -1)
  }
  
    requestAnimationFrame(update)
  }
  // function dist() {
  //   return Math.sqrt(
  //     Math.pow(corn.x - corn2.x, 2) + Math.pow(corn.y - corn2.y, 2)
  //   );
  // },


  // function is
  // function update() {
  //   ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
  //   drawCorn();
  //   requestAnimationFrame(update);
  // }
  
  // window.addEventListener("resize", function () {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   new MenuScreen();
  // })
  // canvas.addEventListener("click",function(e){
  //   mouseTrack.x = e.x
  // })
})

