import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const TotalCount = ({totalTodos, completedTodos }) =>{

    return <Text style={{fontSize: 22, fontWeight: 800, paddingVertical:16}}>
    Total todos: {totalTodos}  Completed todos: {completedTodos}
  </Text>


}


export default TotalCount;
