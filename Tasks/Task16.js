// Tasks/Task16.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task16 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>From Task 16</Text>
    </View>
  );
};

export default Task16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
});
