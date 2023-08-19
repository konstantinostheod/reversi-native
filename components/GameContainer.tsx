import Board from "./Board";
import { PLAYERS } from "../constants/players";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Text } from "react-native";
import Score from "./Score";
import { DEFAULT_PLAYER, getPlayerLabelStyle } from "../shared/players";
import { initialBoardState } from "../constants/board";

export default function GameContainer() {
  const [boardState, setBoardState] = useState(initialBoardState); // Keeps track of the board state
  const [playerTurn, setPlayerTurn] = useState(DEFAULT_PLAYER); // Keeps track of the player turn

  const applyNewGame = () => {
    setBoardState(initialBoardState);
    setPlayerTurn(DEFAULT_PLAYER);
  };

  return (
    <View style={styles.container}>
      <View>
        <Score boardState={boardState} />
      </View>
      <Board
        boardState={boardState}
        setBoardState={setBoardState}
        playerTurn={playerTurn}
        togglePlayerTurn={() =>
          setPlayerTurn(
            playerTurn === PLAYERS.PLAYER_1
              ? PLAYERS.PLAYER_2
              : PLAYERS.PLAYER_1,
          )
        }
      />
      <TouchableOpacity
        style={styles.newGameContainer}
        onPress={() => applyNewGame()}
      >
        <Text style={styles.newGameButton}>New game 🔄</Text>
      </TouchableOpacity>
      <View>
        <Text style={[styles.playerTurnLabel, getPlayerLabelStyle(playerTurn)]}>
          Player {playerTurn + 1}'s turn.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 70,
    flexDirection: "column",
  },
  playerTurnLabel: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 35,
    paddingBottom: 40,
  },
  newGameContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
    paddingVertical: 20,
  },
  newGameButton: {
    color: "#282828",
    fontSize: 21,
  },
});
