import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameContainer from "./components/GameContainer";

const Stack = createNativeStackNavigator();

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Reversi" component={GameContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
