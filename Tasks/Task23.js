import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MyClassComponent from '../Components/MyClassPage';

const Task23 = () => {
  const [text, setText] = useState('');

  return (
    <View>
      <Text>{text}</Text>
      <MyClassComponent text={text} onChangeText={setText} />
    </View>
  );
};

export default Task23;
