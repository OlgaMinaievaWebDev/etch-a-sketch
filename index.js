let color = "black";
document.addEventListener("DOMContentLoaded", function () {
  populateBoard(16);

  let sizeBtn = document.getElementById("size");
  sizeBtn.addEventListener("click", function () {
    let size = boardSize();
    populateBoard(size);
  });
});

function populateBoard(size) {
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRow = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", changeColor);
    board.insertAdjacentElement("beforeend", div);
  }
}

function boardSize() {
  let userInput = prompt("Please enter size of the board");
  let message = document.querySelector("p");
  if (userInput === "" || isNaN(userInput)) {
    message.textContent = "Please enter a number";
  } else if (userInput < 0 || userInput > 100) {
    message.textContent = "Please enter a number between 1 and 100";
  } else {
    message.textContent = "Start drawing!";
    return userInput;
  }
}

function changeColor() {
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
  } else if (color == "white") {
    this.style.backgroundColor = "white";
  } else {
    this.style.backgroundColor = "black";
  }
}

function setColor(colorPick) {
  color = colorPick;
}
