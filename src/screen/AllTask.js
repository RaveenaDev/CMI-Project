import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


// This components helps us to render the entire list items

const AllTask = ({handleAll}) =>{

    return(
<TouchableOpacity style={styles.button} onPress={handleAll}>
      <Text style={styles.text}>All Task</Text>
    </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
      backgroundColor: '#000',
      alignItems: 'center',
      padding: 10,
      borderRadius: 5,
      marginLeft: 10,
      paddingHorizontal: 25
    },
    text: {
      color: '#fff',
      fontSize: 16,
    },
  });


export default AllTask;