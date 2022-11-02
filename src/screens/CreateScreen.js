import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <Text>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text>Enter Content:</Text>
      <TextInput 
        value={content}
        onChangeText={(text) => setContent(text)}
      />
    </View>
  )
};

const style = StyleSheet.create({});

export default CreateScreen;