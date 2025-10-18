const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "#7abcc7ff",
  "#ec11a6ff",
];
let r = 0;
let g = 0;
let b = 0;
let a = 0;
const rgbaColors = [r <= 255, g <= 255, b <= 255, a <= 1];

let h = 0;
let s = 0;
let f = 0;

const hexcolors = [h <= 9, s <= f];

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

const colorPanel = document.getElementById("colorPanel");
const colorText = document.getElementById("colorCode");

console.log(Math.random());

function randomColor() {
  console.log("first btton got clicked");
  let colorIndex = Math.floor(Math.random() * colors.length);
  colorPanel.style.backgroundColor = colors[colorIndex];
  colorText.innerText = colors[colorIndex];
}

function randomRgbaColor() {
  console.log("second button got clicked");
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random().toFixed(2);
  let rgbaColor = `rgba(${r},${g},${b},${a})`;
  colorPanel.style.backgroundColor = rgbaColor;
  colorText.innerText = rgbaColor;
}

function randomHexColor() {
  console.log("third button got clicked");
  let hex = "#";
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 6; i++) {
    hex += hexDigits[Math.floor(Math.random() * 16)];
  }
  colorPanel.style.backgroundColor = hex;
  colorText.innerText = hex;
}

btn1.addEventListener("click", randomColor);
{
}

btn2.addEventListener("click", randomRgbaColor);
btn3.addEventListener("click", randomHexColor);
