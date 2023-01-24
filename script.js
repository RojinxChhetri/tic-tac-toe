const board = document.getElementById("board");
const cells = board.getElementsByTagName("td");
const resetGameBtn = document.getElementById("reset-game");
const resetScoreBtn = document.getElementById("reset-score");
const xScore = document.getElementById("x-score");
const oScore = document.getElementById("o-score");
let player = "X";
let xScoreCount = 0;
let oScoreCount = 0;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (this.textContent === "") {
      this.textContent = player;
      this.classList.add(player.toLowerCase());
      checkWin();
      player = player === "X" ? "O" : "X";
    }
  });
}

resetGameBtn.addEventListener("click", function() {
  resetGame();
});

resetScoreBtn.addEventListener("click", function() {
  resetScore();
});

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      cells[a].textContent === player &&
      cells[b].textContent === player &&
      cells[c].textContent === player
    ) {
      alert(`Player ${player} wins!`);
      if(player === 'X'){
        xScoreCount++;
        xScore.textContent = xScoreCount;
      } else {
        oScoreCount++;
        oScore.textContent = oScoreCount;
      }
      resetGame();
    }
  }
  if(![...cells].some(cell => cell.textContent === "")){
    alert("It's a draw!");
    resetGame();
  }
}

function resetGame(){
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
    cells[i].classList.remove("x", "o");
  }
  player = "X";
}

function resetScore(){
  xScoreCount = 0;
  oScoreCount = 0;
  xScore.textContent = xScoreCount;
  oScore.textContent = oScoreCount;
}
