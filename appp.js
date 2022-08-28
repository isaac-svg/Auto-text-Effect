const textEl = document.getElementById("sentence");
const speedControl = document.getElementById("number");
const text = "I Love Programming";
let index = 1;
let speed = 300 / speedControl.value;

function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
  setTimeout(writeText, speed);
}
speedControl.addEventListener("input", (e) => (speed = 300 / e.target.value));

writeText();

