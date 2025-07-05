// Components/MyFunctionPage.js
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Text } from 'react-native';

const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText(newText) {
      setText(newText);
    },
  }));

  return (
    <View>
      <Text style={{ fontSize: 18 }}>{text}</Text>
    </View>
  );
});

export default MyFunctionPage;
