import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyClassComponent extends Component {
  state = {
    text: '',
  };

  componentDidMount() {
    console.log('loaded');
  }

  componentWillUnmount() {
    console.log('unloaded');
  }

  updateText = newText => {
    this.setState({ text: newText });
  };
  render() {
    return (
      <View>
        <Text style={{ fontSize: 18 }}>{this.state.text}</Text>
      </View>
    );
  }
}

export default MyClassComponent;
