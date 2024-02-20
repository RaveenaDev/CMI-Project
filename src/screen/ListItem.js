
import React from "react";
import { StyleSheet, FlatList } from "react-native";


const ListItem = ({ todoList, renderTodos }) => {
    return (
      <FlatList
        data={todoList}
        renderItem={renderTodos}
        keyExtractor={(item) => item.id.toString()} // Convert id to string for keyExtractor
      />
    );
  };

const styles = StyleSheet.create({
    todoItem: {
        backgroundColor: "#1e90ff",
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 12,
        marginBottom: 12,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
      },
      todoText: {
        color: "#fff",
        fontSize: 20,
        flex: 1,
        fontWeight: "bold", // Changed fontWeight to string value
      }



});
export default ListItem;