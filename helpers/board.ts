import { PLAYERS } from "../constants/players";

// This function performs moves based on reversi rules
// Returns a new board state when the move is legal, otherwise returns null
export const applyMoveInTheBoard = (boardState: number[][], i: number, j: number, playerTurn: PLAYERS) => {
  if (boardState[i][j] !== null) return null; // If the tile is already occupied, return null

  const directions = [
    [-1, 0], [1, 0], [0, -1], [0, 1], // Up, down, left, right
    [-1, -1], [-1, 1], [1, -1], [1, 1], // Diagonals
  ]

  const newBoard = boardState.map((row) => row.slice());
  newBoard[i][j] = playerTurn;
  let legalMove = false;

  directions.forEach(([di, dj]) => {
    let x = i + di;
    let y = j + dj;
    let shouldFlip = false;

    while (x >= 0 && x < boardState.length && y >= 0 && y < boardState[0].length) {
      if (newBoard[x][y] === null) {
        break; // Empty cell, invalid direction
      }

      if (newBoard[x][y] === playerTurn) {
        shouldFlip = true;
        break;
      }

      x += di;
      y += dj;
    }

    if (shouldFlip) {
      x = i + di;
      y = j + dj;
      while (newBoard[x][y] !== playerTurn) {
        if(!legalMove) legalMove = true; // At least one tile is flipped, the move is legal
        newBoard[x][y] = playerTurn;
        x += di;
        y += dj;
      }
    }
  })

  return legalMove ? newBoard : null;
}
