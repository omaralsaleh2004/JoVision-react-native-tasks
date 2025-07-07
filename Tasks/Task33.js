import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const Task33 = () => {
  const [paused, setPaused] = useState(true);

  const handlePress = () => {
    setPaused(!paused);
  };

  return (
    <View>
      <Video
        onTouchStart={handlePress}
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        style={styles.video}
        paused={paused}
        poster="https://img.youtube.com/vi/YE7VzlLtp-4/maxresdefault.jpg"
        resizeMode="contain"
        controls
      />
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
});

export default Task33;
