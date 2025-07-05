import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MyFunctionPage from '../Components/MyFucntionPage';

const Task22 = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <MyFunctionPage text={text} onChangeText={setText} />
    </View>
  );
};

export default Task22;
