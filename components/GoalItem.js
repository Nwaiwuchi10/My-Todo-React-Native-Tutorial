// import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
const GoalItem = (props) => {
  return (
    <View style={styles.textStyler}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  textStyler: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",

    padding: 8,
  },
  goalText: {
    color: "white",
  },
});
