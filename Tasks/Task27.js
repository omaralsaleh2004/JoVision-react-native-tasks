import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, Image, Alert } from 'react-native';

const Task27 = () => {
  const [img, setImg] = useState(0);

  const images = [
    'https://reactnative.dev/img/tiny_logo.png',
    'https://cdn.pixabay.com/photo/2017/06/30/21/24/sweden-2459840_960_720.jpg',
    'https://placebear.com/100/100',
  ];
  const displayImage = () =>
    Alert.alert('Choose Image', 'Please pick one image', [
      {
        text: '1',
        onPress: () => {
          setImg(0);
          console.log(0);
        },
      },
      {
        text: '2',
        onPress: () => {
          setImg(1);
          console.log(1);
        },
      },
      {
        text: '3',
        onPress: () => {
          setImg(2);
          console.log(2);
        },
      },
    ]);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: images[img],
        }}
        style={styles.img}
      />
      <Button title="Click" onPress={displayImage} />
    </View>
  );
};

export default Task27;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: '20',
    padding: 20,
    flex: 1,
  },
  img: {
    width: 50,
    height: 50,
  },
});
