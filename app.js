let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let winnerName = document.querySelector("#winnerName");

let turn0 = true; //playerX, playerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      box.style.color = "red"
      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.color = "green";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        winnerName.innerText = `Winner is ${pos1Val}`;
        boxes.forEach((box) => {
          box.disabled = true;
        });
      }
    }
  }
};

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = ""
    winnerName.innerText = "";
  });
});
