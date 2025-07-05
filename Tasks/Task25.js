import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import MyClassComponent from '../Components/MyClassPage';

const Task25 = () => {
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
      <MyClassComponent ref={textRef} />
    </View>
  );
};

export default Task25;

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
