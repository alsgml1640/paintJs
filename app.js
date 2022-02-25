const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const range = document.querySelector("#range");

const color = document.getElementsByClassName("color");

let painting = false;

ctx.fillStyle = "black";
ctx.strokeStyle = "black";

ctx.lineWidth = 2.5;

canvas.width = 700;
canvas.height = 700;

// 채우기 효과
function handleCanvasClick() {}

Array.from(color).forEach((color) => {
  color.addEventListener("click", () => {
    const selectColor = color.style.backgroundColor;
    ctx.strokeStyle = selectColor;
  });
});

range.addEventListener("input", () => {
  const size = range.value;
  ctx.lineWidth = size;
});

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
canvas.addEventListener("click", handleCanvasClick);

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
