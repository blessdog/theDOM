// first step: grabbing element to change
let title = document.getElementById("title");
let paragraph1 = document.getElementById("first-paragraph");
let paragraph2 = document.getElementById("second-paragraph");

// second step:
function blue() {
  let color = "blue";
  title.setAttribute("style", "color: " + color);
  paragraph1.setAttribute("style", `color: ${color}`);
  paragraph2.setAttribute("style", `color: ${color}`);
}
// third step:
function red() {
  let color = "red";
  title.setAttribute("style", "color: " + color);
  paragraph1.setAttribute("style", `color: ${color}`);
  paragraph2.setAttribute("style", `color: ${color}`);
}
