import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";

const AddTodo = ({ todo, setTodo, handleAddTodo }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="Add a Task"
      value={todo}
      onChangeText={(userText) => setTodo(userText)}
    />

    <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
      <Text style={styles.addButtonText}>Add</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: "#000",
    paddingHorizontal: 40,
    paddingVertical: 17,
    borderRadius: 16,
  },
  addButtonText: {
    fontSize: 20,
    color: "#fff",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#1e90ff",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 20,
    flex: 1,
  },
});

export default AddTodo;
