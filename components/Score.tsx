import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { PLAYERS } from "../constants/players";
import { playerStyles } from "../shared/players";
import { BoardState } from "../types/board";

export default function Score({ boardState }: { boardState: BoardState }) {
  const scores = getPlayerScores(boardState);

  return (
    <View style={styles.scoresContainer}>
      <View style={[styles.scoreContainer, playerStyles.player1Label]}>
        <Text style={[styles.score, playerStyles.player1Label]}>
          {scores[PLAYERS.PLAYER_1]}
        </Text>
      </View>
      <View style={[styles.scoreContainer, playerStyles.player2Label]}>
        <Text style={[styles.score, playerStyles.player2Label]}>
          {scores[PLAYERS.PLAYER_2]}
        </Text>
      </View>
    </View>
  );
}

const getPlayerScores = (boardState: BoardState) => {
  // Calculate the score for each player
  const scores = {
    [PLAYERS.PLAYER_1]: 0,
    [PLAYERS.PLAYER_2]: 0,
  };
  boardState.forEach((row) => {
    row.forEach((cell) => {
      if (cell != null) scores[cell] += 1;
    });
  });

  return scores;
};

const styles = StyleSheet.create({
  scoresContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scoreContainer: {
    flex: 1,
    alignItems: "center",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
});
