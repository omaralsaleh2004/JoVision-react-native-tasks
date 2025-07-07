import React, { useState } from 'react';
import { View, Button, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import ClassComponentTask40 from '../Components/ClassComponentTask40';

const Task40 = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <Provider store={store}>
      <SafeAreaView style={{ marginTop: 50 }}>
        <Button
          title={showComponent ? 'Hide Component' : 'Show Component'}
          onPress={() => setShowComponent(!showComponent)}
        />
        {showComponent && <ClassComponentTask40 />}
      </SafeAreaView>
    </Provider>
  );
};

export default Task40;
