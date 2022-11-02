import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ShowScreen = ({ navigation }) => {
  console.log(navigation.getParam('id'));
  return (
    <View>
      <Text>Show Screen</Text>
    </View>
  )
};

const style = StyleSheet.create({});

export default ShowScreen;