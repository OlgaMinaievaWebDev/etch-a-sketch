const grid = document.getElementById("grid");
const size = { rows: 5, cols: 8 };
const total = size.rows * size.cols;

makeDivs(total);

function makeDivs(tot) {
  for (let i = 0; i < total; i++) {
    const cell = document.createElement("div");
    grid.append(cell).className = "cell";
   cell.textContent = `${i + 1}`;
  }
}


