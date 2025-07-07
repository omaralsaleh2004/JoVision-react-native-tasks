import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { saveText } from '../Redux/Store';

class ClassComponentTask40 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.savedText,
    };
  }

  componentWillUnmount() {
    this.props.saveText(this.state.text);
  }

  handleChangeText = newText => {
    this.setState({ text: newText });
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          value={this.state.text}
          onChangeText={this.handleChangeText}
          placeholder="Enter text"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
  },
});

const mapStateToProps = state => ({
  savedText: state.text.value,
});

const mapDispatchToProps = {
  saveText,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClassComponentTask40);
