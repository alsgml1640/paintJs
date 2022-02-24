const canvas = document.querySelector(".canvas");

const range = document.querySelector("#range");

const color = document.getElementsByClassName("color");

canvas.addEventListener("mousemove", (event) => {
  console.log(event.offsetX, event.offsetY);
  //   console.log(canvas.offsetLeft);
});

Array.from(color).forEach((e) => {
  const selectColor = e.style.backgroundColor;
});

range.addEventListener("input", () => {
  const size = range.value;
});
