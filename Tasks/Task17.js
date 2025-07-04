import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Task17 = () => {
  const [showText, setShowText] = useState(false);
  const handlePressButton = () => {
    setShowText(!showText);
  };
  return (
    <View>
      <Text style={{ marginBottom: 7, fontSize: 22 }}>Task 17 :</Text>
      {showText && <Text style={styles.title}>Omar</Text>}
      <Button title={showText ? 'Hide' : 'Show'} onPress={handlePressButton} />
    </View>
  );
};

export default Task17;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});
