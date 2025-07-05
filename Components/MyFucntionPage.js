import { useEffect } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const MyFunctionPage = ({ text, onChangeText }) => {
  useEffect(() => {
    console.log('Loaded');

    return () => {
      console.log('unloaded');
    };
  }, []);
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default MyFunctionPage;

styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
