import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Button,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Player from "./Player";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image style={styles.frontpic} source={require("./assets/pic2.jpeg")} />

      <Text style={styles.heading}>
        Welcome to the New MP3 Player Build in React Native Using Expo
      </Text>

      <Button
        title="Go to Player"
        onPress={() => navigation.navigate("Player")}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  frontpic: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 250,
  },
  heading: {
    marginTop: 30,
    marginBottom: 30,
  },
});
