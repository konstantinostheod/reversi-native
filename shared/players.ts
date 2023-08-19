import { StyleSheet } from "react-native";
import { PLAYERS } from "../constants/players";

export const DEFAULT_PLAYER = PLAYERS.PLAYER_1;

export const playerStyles = StyleSheet.create({
  player1Label: {
    color: "white",
    backgroundColor: "black",
  },
  player2Label: {
    color: "black",
    backgroundColor: "white",
  },
});

export const getPlayerLabelStyle = (player: PLAYERS) =>
  player === PLAYERS.PLAYER_1
    ? playerStyles.player1Label
    : playerStyles.player2Label;
