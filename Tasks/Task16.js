import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Task16 = () => {
  const [showText, setShowText] = useState(false);
  const handlePressButton = () => {
    setShowText(!showText);
  };
  return (
    <View>
      <Text style={{ marginBottom: 7, fontSize: 22 }}>Task 16 :</Text>
      {showText && <Text style={styles.title}>Omar</Text>}
      <Button style={styles.btn} title="Show" onPress={handlePressButton} />
    </View>
  );
};

export default Task16;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
});
