import React from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Alert,
  Pressable,
} from 'react-native';

const Task28 = () => {
  const images = [
    'https://placekitten.com/200/200',
    'https://placebear.com/200/200',
    'https://picsum.photos/200/200?1',
    'https://picsum.photos/200/200?2',
    'https://picsum.photos/200/200?3',
    'https://picsum.photos/200/200?4',
    'https://picsum.photos/200/200?5',
    'https://picsum.photos/200/200?6',
    'https://picsum.photos/200/200?7',
    'https://picsum.photos/200/200?8',
    'https://picsum.photos/200/200?9',
  ];

  const handlePress = index => {
    Alert.alert('Image Selected', `You have selected image: ${index}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        keyExtractor={index => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => handlePress(index)}>
            <Image source={{ uri: item }} style={styles.image} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Task28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    paddingHorizontal: 10,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 10,
  },
});
