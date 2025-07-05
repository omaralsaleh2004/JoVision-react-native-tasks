import { useEffect } from 'react';
import { Text, View } from 'react-native';

const MyFunctionPage = () => {
  useEffect(() => {
    console.log('Loaded');

    return () => {
      console.log('unloaded');
    };
  }, []);
  return (
    <View>
      <Text>From My Fucntion Page</Text>
    </View>
  );
};

export default MyFunctionPage;
