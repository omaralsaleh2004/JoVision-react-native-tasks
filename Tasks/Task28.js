import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Alert,
  Pressable,
  Modal,
  TextInput,
  Button,
  Text,
} from 'react-native';

const Task28 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputIndex, setInputIndex] = useState('');
  const flatListRef = useRef(null);

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

  const scrollToImage = () => {
    const index = parseInt(inputIndex);
    if (!isNaN(index) && index >= 0 && index < images.length) {
      flatListRef.current.scrollToIndex({ index });
      setModalVisible(false);
      setInputIndex('');
    } else {
      Alert.alert(
        'Invalid index',
        `Enter a number between 0 and ${images.length - 1}`,
      );
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Image Index" onPress={() => setModalVisible(true)} />

      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        keyExtractor={index => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => Alert.alert('Image', `You selected image ${index}`)}
          >
            <Image source={{ uri: item }} style={styles.image} />
          </Pressable>
        )}
      />

      <Modal visible={modalVisible}>
        <View style={styles.modal}>
          <Text>Enter image index:</Text>
          <TextInput
            style={styles.input}
            value={inputIndex}
            onChangeText={setInputIndex}
          />
          <Button title="Ok" onPress={scrollToImage} />
        </View>
      </Modal>
    </View>
  );
};

export default Task28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
  },
  modal: {
    marginTop: '50%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: '100%',
    padding: 8,
    marginVertical: 10,
  },
});
