// ComponentOne.js
import React, { Component } from 'react';
import { Text } from 'react-native';
import TextContext from '../Context/TextContext';

class ComponentOne extends Component {
  static contextType = TextContext;

  render() {
    return <Text style={{ fontSize: 18 }}>{this.context.sharedText}</Text>;
  }
}

export default ComponentOne;
