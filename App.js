
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TodoScreen from './src/screen/TodoScreen';

export default function App() {
  return (
    <SafeAreaView>
 <View>
    
  <TodoScreen  />
    </View>

    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
