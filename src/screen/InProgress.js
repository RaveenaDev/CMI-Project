import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


// This component renders the list which are not completed
const InProgress = ({handleProgress})  =>{

return (

    <TouchableOpacity style={styles.button} onPress={handleProgress}>
      <Text style={styles.text}> In Progress</Text>
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
      paddingHorizontal: 8
    },
    text: {
      color: '#fff',
      fontSize: 16,
    },
  });


export default InProgress;