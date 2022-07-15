import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";

import { StyleSheet, Text, View, Button } from "react-native";
import * as Location from "expo-location";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import LandingScreen from "./components/auth/Landing";

// const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            margin: 16,
            borderWidth: 2,
            borderColor: "red",
            padding: 16,
          }}
        >
          Hello ur papa jjj
        </Text>
      </View>
      <Text style={styles.puyol}>Hello default het</Text>
      <Button tittle="Click me!" />
    </View>

    // {courseGoals.map((goal) => (
    //   <View key={goal} style={styles.textStyler}>
    //     <Text style={styles.goalText}>{goal}</Text>
    //   </View>
    // ))}

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Landing">
    //     <Stack.Screen
    //       name="Landing"
    //       component={LandingScreen}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  puyol: {
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    padding: 16,
  },
});
