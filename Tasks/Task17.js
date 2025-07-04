// Tasks/Task16.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Task17 = () => {
  const [showText, setShowText] = useState(true);
  const handlePressButton = () => {
    setShowText(!showText);
  };
  return (
    <View style={styles.container}>
      {showText && <Text style={styles.title}>Omar</Text>}
      <Button title="Show" onPress={handlePressButton} />
    </View>
  );
};

export default Task17;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});
