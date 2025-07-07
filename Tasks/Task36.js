import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

function generateRandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Task36 = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const words = [];
  for (let i = 0; i < 100; i++) {
    words.push(generateRandomWord(5 + Math.floor(Math.random() * 6))); //from 5 to 10 characters
  }

  return (
    <View style={styles.container}>
      <ScrollView refreshing={refreshing} onRefresh={onRefresh}>
        {words.map((word, index) => (
          <Text style={styles.text} key={index}>
            {index + 1}. {word}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Task36;
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    paddingVertical: 4,
  },
});
