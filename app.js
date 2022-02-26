const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const range = document.querySelector("#range");

const color = document.getElementsByClassName("color");

const fillBtn = document.querySelector(".fillBtn");
const clearBtn = document.querySelector(".clearBtn");
const saveBtn = document.querySelector(".saveBtn");

const CANVAS_SIZE = 700;

let painting = false;
let filling = false;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.fillStyle = "black";
ctx.strokeStyle = "black";

ctx.lineWidth = 2.5;

Array.from(color).forEach((color) => {
  color.addEventListener("click", handleColorClick);
});

function handleColorClick(event) {
  const selectColor = event.target.style.backgroundColor;
  ctx.strokeStyle = selectColor;
  ctx.fillStyle = selectColor;
}

function handleRangeSize() {
  const size = range.value;
  ctx.lineWidth = size;
}

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

// 채우기 효과
function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleFillBtnClick() {
  const btnName = fillBtn.innerHTML;
  if (btnName === "FILL") {
    fillBtn.innerHTML = "PAINT";
    filling = true;
  } else {
    fillBtn.innerHTML = "FILL";
    filling = false;
  }
}

function handleClearBtnClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}
function handleSaveClick() {
  const link = document.createElement("a");
  link.download = "paintImg";
  link.href = canvas.toDataURL();
  link.click();
}

clearBtn.addEventListener("click", handleClearBtnClick);
fillBtn.addEventListener("click", handleFillBtnClick);
saveBtn.addEventListener("click", handleSaveClick);

range.addEventListener("input", handleRangeSize);

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
canvas.addEventListener("click", handleCanvasClick);
