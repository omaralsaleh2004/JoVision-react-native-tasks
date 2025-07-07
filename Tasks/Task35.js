import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Task35 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmitedData = async () => {
    if (!name || !age || !country) {
      Alert.alert('Missing Data');
      return;
    }

    const person = {
      name,
      age,
      country,
      timeStamp:
        new Date().toLocaleDateString() +
        ' , ' +
        new Date().toLocaleTimeString(),
    };

    try {
      await AsyncStorage.setItem('personData', JSON.stringify(person));
      console.log('Stored:', person);
      Alert.alert('Success', 'Data stored successfully!');
    } catch (err) {
      console.error('AsyncStorage error:', err);
      Alert.alert('Error', 'Failed to store data.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.inputText}
        placeholder="Name"
      />
      <TextInput
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={styles.inputText}
        placeholder="Age"
      />
      <TextInput
        value={country}
        onChangeText={setCountry}
        style={styles.inputText}
        placeholder="Country"
      />
      <Button onPress={handleSubmitedData} title="Submit" />
    </View>
  );
};

export default Task35;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    gap: 20,
  },
  inputText: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    width: 150,
  },
});
