const CandyCorn = require("./scripts/candy_corn.js")
const HomePage = require("./scripts/home_page.js")
window.CandyCorn = CandyCorn;
window.HomePage = HomePage;
window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("mycanvas");
  const candyImg = document.getElementById("corn");
  canvas.width = innerWidth;
  canvas.height = innerWidth;
  const ctx = canvas.getContext('2d');
  candyImg.onload = function () {
    drawCorn();
  }

})

