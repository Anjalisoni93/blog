import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  return (
    <View>
      <Text>Edit Screen - {navigation.getParam('id')}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default EditScreen;