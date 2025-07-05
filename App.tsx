import React from 'react';
import { View, StyleSheet } from 'react-native';
import Task16 from './Tasks/Task16';
import Task17 from './Tasks/Task17';
import Task18 from './Tasks/Task18';
import Task19 from './Tasks/Task19';
import Task20 from './Tasks/Task20';
import Task21 from './Tasks/Task21';

const App = () => {
  return (
    <View style={styles.appContainer}>
      {/* <Task16 />
      <Task17 />
      <Task18 /> 
      <Task19 />
      <Task20/>
      */}
      <Task21/>
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
