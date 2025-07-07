import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const Task32 = () => {
  return (
    <View>
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        style={styles.video}
        poster="https://img.youtube.com/vi/YE7VzlLtp-4/maxresdefault.jpg"
        controls
        resizeMode="contain"
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

export default Task32;
