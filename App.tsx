import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Task16 from './Tasks/Task16';
import Task17 from './Tasks/Task17';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Task16 />
      <Task17 />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    marginTop: 60,
  },
});
