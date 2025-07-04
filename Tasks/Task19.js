import React, { useState } from 'react';
import { Button, View } from 'react-native';
import MyClassComponent from '../Components/MyClassPage';

const Task19 = () => {
  const [showPage, setShowPage] = useState(false);
  const handlePressButton = () => {
    setShowPage(true);
  };
  return (
    <View>
      <Button title="Show" onPress={handlePressButton}></Button>
      {showPage ? <MyClassComponent /> : null}
    </View>
  );
};

export default Task19;
