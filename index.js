function populateBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRow = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.style.background = "blue";
    board.appendChild(square);
  }
}

populateBoard(8);
