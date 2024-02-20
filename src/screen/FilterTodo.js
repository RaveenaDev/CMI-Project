import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from "react-native";

const FilterTodo = ({ filterData, setfilterData, handleFilter }) => (
    <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="Search By ID"
      value={filterData}
      onChangeText={(userText) => setfilterData(userText)}
    />
  
  <TouchableOpacity style={styles.addButton} onPress={handleFilter}>
      <Text style={styles.addButtonText}>
        Sort
      </Text>
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

export default FilterTodo;
