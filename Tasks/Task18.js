import React, { useState } from 'react';
import { Text, View, SafeAreaView, ActivityIndicator } from 'react-native';

const Task18 = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <View>
          <Text>loading for 5 seconds ....</Text>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Task18;
