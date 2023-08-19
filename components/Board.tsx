import { FlatList, StyleSheet, View } from "react-native";
import * as React from "react";
import Tile from "./Tile";
import { PLAYERS } from "../constants/players";
import { BoardState } from "../types/board";
import { applyMoveInTheBoard } from "../helpers/board";

export default function Board({
  boardState,
  setBoardState,
  playerTurn,
  togglePlayerTurn,
}: {
  boardState: number[][];
  setBoardState: (boardState: BoardState) => void;
  playerTurn: PLAYERS;
  togglePlayerTurn: () => void;
}) {
  // Apply the move and change the player turn
  const handleMove = (i: number, j: number) => {
    const boardAfterMove = applyMoveInTheBoard(boardState, i, j, playerTurn);
    if (boardAfterMove === null) return; // The move is illegal, do nothing

    // The move is legal, update the board state and change the player turn
    setBoardState(boardAfterMove);
    togglePlayerTurn();
  };

  return (
    <View style={styles.container}>
      {/*Render the board rows*/}
      <FlatList
        data={boardState}
        renderItem={({ item: row, index: i }) => (
          // Render the board tiles for each row
          <FlatList
            horizontal
            data={row}
            renderItem={({ item: column, index: j }) => (
              <Tile tileValue={column} submitMove={() => handleMove(i, j)} />
            )}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    color: "#039",
    flexDirection: "column",
  },
});
