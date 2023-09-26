// first step: grabbing element to change
let title = document.querySelector("title");
let paragraph1 = document.querySelector("first-paragraph");
let paragraph2 = document.querySelector("second-paragraph");

// second step:
function blue() {
  let color = "blue";
  title.setAttribute("style", "color: " + color);
  paragraph1.setAttribute("style", "color: " + color);
  paragraph2.setAttribute("style", "color: ${color}");
}
