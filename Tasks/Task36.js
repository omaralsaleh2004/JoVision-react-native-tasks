import React from 'react';
import { ScrollView, Text, View } from 'react-native';

function generateRandomWord(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const Task36 = () => {
  const words = [];
  for (let i = 0; i < 100; i++) {
    words.push(generateRandomWord(5 + Math.floor(Math.random() * 6))); //from 5 to 10 characters
  }

  return (
    <View>
      <ScrollView>
        {words.map((word, index) => (
          <Text key={index}>
            {index + 1}. {word}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Task36;
