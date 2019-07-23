import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

class CounterButton extends React.Component {
  static defaultProps = {
    counter: -1,
  };

  constructor(props) {
    super(props);

    this.state = {
      counter: props.counter,
    };
  }

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <View style={styles.buttonContainer}>
        <Text>{this.state.counter}</Text>
        <Button title={'click me!'} onPress={this.clickHandler}/>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,

    borderColor: 'red',
    borderWidth: 2,

  },

});