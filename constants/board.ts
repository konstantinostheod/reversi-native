import { PLAYERS } from "./players";

// Initial state of the board
export const initialBoardState = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, PLAYERS.PLAYER_2, PLAYERS.PLAYER_1, null, null, null],
  [null, null, null, PLAYERS.PLAYER_1, PLAYERS.PLAYER_2, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
];
