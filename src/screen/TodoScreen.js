import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity

} from "react-native";
import { IconButton } from "react-native-paper";
import TotalCount from "./TotalCount";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import ListItem from "./ListItem";
import HandleComplete from "./HandleComplete";
import InProgress from "./InProgress";
import AllTask from "./AllTask";

const TodoScreen = () => {
  // Init local states
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const[filterData, setFilterData] = useState("");
  // Inside the TodoScreen component, store the original todoList to reset when needed
  const [originalTodoList, setOriginalTodoList] = useState([]);


//   To filter Data  By ID
  const handleFilter = () => {
    if (filterData.trim() === "") {
      // If filterData is empty, reset todoList to the original list
      setTodoList(originalTodoList);
      
    } else {
      // If filterData is not empty, filter todoList by id
      const filteredTodos = originalTodoList.filter(todo => todo.id.toString() === filterData.trim());
      setTodoList(filteredTodos);
    }
    setFilterData("");
  };
  
  
  

  // Fetch TODO items from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodoList(json);
        setOriginalTodoList(json);
      })
      .catch((error) => console.error(error));
  }, []);
  
  // Handle Add Todo
  const randomInteger = Math.ceil(Math.random() * 101) + 199;



  const handleAddTodo = () => {
    setTodoList([
      ...todoList,
      {
        id: randomInteger,
        title: todo,
        completed: false,
      },
    ]);

    setTodo("");
  };


  // Handle Toggle Completed
  const handleToggleCompleted = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Handle Delete Todo
  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  // Render Todos
  const renderTodos = ({ item, index }) => {
    const { id, title, completed } = item;

    return (
      <View style={styles.todoItem}>
        <Text style={{fontSize: 20, color: '#fff', fontWeight:600, paddingHorizontal: 20}}>{id}</Text>
        <Text style={styles.todoText}>
          {completed ? (
            <Text style={styles.completedText}>{title}</Text>
          ) : (
            title
          )}
        </Text>

        {/* Icon Buttons for having Icons in the REndered List */}
        <IconButton
          icon="pencil"
          iconColor={completed ? "#00ff00": "#ccc"}
          onPress={() => handleToggleCompleted(id)}
        />
        <IconButton
          icon="trash-can"
          iconColor={completed ? "#ccc" : "#fff"}
          onPress={() => handleDeleteTodo(id)}
        />
      </View>
    );
  };

  // Count total and completed todos
  const totalTodos = todoList.length;
  const completedTodos = todoList.filter((todo) => todo.completed).length;


//   Function to handle and show the list of completed Items
  const handleComplete = () => {
    const completedTasks = originalTodoList.filter((todo) => todo.completed === true);
    setTodoList(completedTasks);
  };


//   Function to show the list of items which are not complted i.e, in progress
  const handleProgress = () => {
    const progressTasks = originalTodoList.filter((todo) => !todo.completed === true);
    setTodoList(progressTasks);
  };


//   function to show all the items
  const handleAll = () => {
    setTodoList(originalTodoList);
  };

  return (

    // SafeAreaView render content within the safe area boundaries of a device. 
    <SafeAreaView style={styles.container}>

        {/* Components */}
      <TotalCount totalTodos={totalTodos} completedTodos={completedTodos}   />
      
      <AddTodo todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />

      <FilterTodo filterData={filterData} setfilterData={setFilterData} handleFilter={handleFilter}   />

      <View style={styles.setStyle}>


{/* This component handles the list of the completed items and renders the same */}
      <HandleComplete handleComplete={handleComplete} />


   {/* This component renders the list which are not completed */}
    <InProgress handleProgress={handleProgress}    />

 {/* This components helps us to render the entire list items */}
    <AllTask handleAll={handleAll}></AllTask>


      </View>
    
     
     {/* This component normally fetches the list from the JSON Server during the App Load */}
      <ListItem todoList={todoList} renderTodos={renderTodos} />

     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    paddingTop: 50
  },

  setStyle: {
    flexDirection: 'row',
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 12
  },

 

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
  },
});

export default TodoScreen;