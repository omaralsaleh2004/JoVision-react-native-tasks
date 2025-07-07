// Task38.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TextProvider from '../Context/TextProvider';
import ComponentTwo from '../Components/ComponentTwo';

const Task38 = () => {
  return (
    <TextProvider>
      <View Style={styles.container}>
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
        <ComponentTwo />
      </View>
    </TextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Task38;
