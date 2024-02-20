// HandleComplete.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


{/* This component handles the list of the completed items and renders the same */}
const HandleComplete = ({ handleComplete }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleComplete}>
      <Text style={styles.text}>Handle Complete</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HandleComplete;
