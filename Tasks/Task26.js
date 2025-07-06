import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const Task26 = () => {
  const [text, setText] = useState('');
  const handleNonBlockingRequest = () => {
    fetch('https://api.ipify.org/')
      .then(response => response.text())
      .then(ip => {
        console.log(ip);
        setText(ip);
      });
  };

  const handleBlockingRequest = async () => {
    try {
      const response = await fetch('https://api.ipify.org/');

      if (!response.ok) {
        console.log('Error', response.err);
      }
      const data = await response.text();
      setText(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <Button onPress={handleNonBlockingRequest} title="Non-Blocking-Request" />
      <Button onPress={handleBlockingRequest} title="Blocking-Request" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Task26;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: '20',
    padding: 20,
    flex: 1,
  },
  btn: {
    marginBottom: 5,
  },
  text: {
    marginTop: 10,
  },
});
