import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const UseCurrentTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const time = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);
  return (
    <View>
      <Text>{date.toLocaleTimeString()}</Text>
      <Text>{date.toLocaleDateString()}</Text>
    </View>
  );
};

export default UseCurrentTime;
