import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TILE_STATE } from "../constants/tiles";
import { PLAYERS } from "../constants/players";

export default function Tile({
  tileValue,
  submitMove,
}: {
  tileValue: TILE_STATE;
  submitMove: () => void;
}) {
  let tileClass = null;
  if (tileValue != null)
    tileClass =
      tileValue === PLAYERS.PLAYER_1 ? styles.blackTile : styles.whiteTile;

  return (
    <View style={styles.tileContainer}>
      <TouchableOpacity
        onPress={() => {
          submitMove();
        }}
      >
        <View style={[styles.tile, tileClass]} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    width: 49,
    height: 49,
    backgroundColor: "#0a5f0b",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
  },
  tile: {
    width: 28,
    height: 28,
    borderRadius: 28,
    backgroundColor: "transparent",
  },
  blackTile: {
    backgroundColor: "black",
  },
  whiteTile: {
    backgroundColor: "white",
  },
});
