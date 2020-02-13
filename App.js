import React, {Component} from 'react';
import {Alert, Button, TextInput, StyleSheet, Text, View} from 'react-native';

export default class App extends Component<Props> {
  state = {
    text: ""
  }

  onButtonPress() {
    const {text} = this.state;
    Alert.alert(`you have entered ${text} into your textbox.`);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TextInput 
        style= {{
          height: 40,
          width: 300,
          borderColor: 'black',
          borderWidht: 1
        }}
        onChangeText={ (text) => this.setState({text})}
        placeholder="Please enter your text"
        autoCapitalize="none"
        />
        <Button title="Press here" onPress={this.onButtonPress.bind(this)}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
