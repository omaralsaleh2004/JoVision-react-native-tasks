import React, { useEffect, useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { saveText } from '../Redux/Store';

const ComponentOneTask39 = () => {
  const dispatch = useDispatch();
  const savedText = useSelector(state => state.text.value);
  const [text, setText] = useState(savedText);

  useEffect(() => {
    return () => {
      dispatch(saveText(text));
    };
  }, [text]);

  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter text"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },
});

export default ComponentOneTask39;
