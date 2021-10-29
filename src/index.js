import Example from "./scripts/example";

document.addEventListener("DOMcontentLoaded", () =>{ 
console.log("hello world");
const main = document.getElementById("main");
new Example(main);
})