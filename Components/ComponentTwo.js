// ComponentTwo.js
import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import TextContext from '../Context/TextContext';
import ComponentOne from './ComponentOne';

const ComponentTwo = () => {
  const { sharedText, setSharedText } = useContext(TextContext);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here ..."
        value={sharedText}
        onChangeText={setSharedText}
      />
      <ComponentOne />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
    padding: 8,
  },
});

export default ComponentTwo;
