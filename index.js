

function populateBoard(size) {
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRow = `repeat(${size}, 1fr)`;
  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = 'grey';
    board.insertAdjacentElement("beforeend", div);
  }
}

populateBoard(16);