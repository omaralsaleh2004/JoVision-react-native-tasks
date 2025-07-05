import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MyFunctionPage from '../Components/MyFunctionPage';

const Task24 = () => {
  const textRef = useRef(null);

  const handleOnChangeText = text => {
    if (textRef.current) {
      textRef.current.updateText(text);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type here ..."
        onChangeText={handleOnChangeText}
      />
      <MyFunctionPage ref={textRef} />
    </View>
  );
};

export default Task24;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
