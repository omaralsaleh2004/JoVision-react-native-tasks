import React, { useState } from 'react';
import { Button, View } from 'react-native';
import MyClassComponent from '../Components/MyClassPage';
import MyFunctionPage from '../Components/MyFunctionPage';

const Task21 = () => {
  const [showPage, setShowPage] = useState(false);
  const handlePressButton = () => {
    setShowPage(!showPage);
  };

  return (
    <View>
      <Button title="Show" onPress={handlePressButton}></Button>
      {showPage ? <MyFunctionPage /> : null}
    </View>
  );
};

export default Task21;
