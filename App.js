import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

// import * as Location from "expo-location";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import LandingScreen from "./components/auth/Landing";

// const Stack = createStackNavigator();
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalvissible, setModalvissile] = useState(false);

  const startAddGoalHandler = () => {
    setModalvissile(true);
  };
  const endAddGoalHandler = () => {
    setModalvissile(false);
  };

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        {modalvissible ? (
          <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        ) : (
          <View></View>
        )}
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalContainer: {
    flex: 4,
  },
  // textStyler: {
  //   margin: 8,
  //   borderRadius: 6,
  //   backgroundColor: "#5e0acc",

  //   padding: 8,
  // },
  // goalText: {
  //   color: "white",
  // },
});
