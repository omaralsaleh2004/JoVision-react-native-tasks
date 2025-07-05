import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class MyClassComponent extends Component {
  componentDidMount() {
    console.log('loaded');
  }

  componentWillUnmount() {
    console.log('unloaded');
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          value={this.props.Text}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

export default MyClassComponent;

styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
