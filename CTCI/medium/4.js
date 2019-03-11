function victory(board) {
  for (let i = 0; i < board.length; i++) {
    if (won(board[i])) return board[i][0]
    if (won([board[0][i], board[1][i], board[2][i]])) return board[0][i]
  }
  if (won([board[0][0], board[1][1], board[2][2]])) return board[0][0]
  if (won([board[0][2], board[1][1], board[2][0]])) return board[0][i]
  return 0
}

function won(ar) {
  if (ar.some(e => e == 0)) return false
  if (ar.every(e => e == 1)) return true
  if (ar.every(e => e == 2)) return true
}

console.log(victory([[1, 2, 0], [2, 1, 0], [2, 0, 1]]))
