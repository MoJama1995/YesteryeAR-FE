import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ScrollView
} from 'react-native';
import React, { Component } from 'react';
export default class Hello extends Component {
  state = {
    count: 0
  };
  render() {
    let inputStyle = { color: '#FFF' };
    if (this.state.count === 1) {
      this.state.count;
    }
    const onPress = () => {
      this.setState(prevState => ({
        count: 1
      }));
    };
    return (
      <ScrollView>
        <View>
          <Text style={hellostyles.buttonText}>The History of Manchester!</Text>
        </View>
        <View>
          <Text style={hellostyles.buttonText}>
            Count "Count" {this.state.count === 0 ? this.state.count : null}
          </Text>
        </View>
        <Image
          source={require('../js/cup.jpg')}
          style={{ width: 400, height: 200 }}
        />
        <Text style={hellostyles.buttonText}>
          Some information about history. Some information about history. Some
          information about history. Some information about history. Some
          information about history.{' '}
        </Text>
        <Image
          source={require('../js/cup.jpg')}
          style={{ width: 400, height: 200 }}
        />
        <Text style={hellostyles.buttonText}>
          Some information about history. Some information about history. Some
          information about history. Some information about history. Some
          information about history.{' '}
        </Text>
        <Image
          source={require('../js/cup.jpg')}
          style={{ width: 400, height: 200 }}
        />
        <Text style={hellostyles.buttonText}>
          Some information about history. Some information about history. Some
          information about history. Some information about history. Some
          information about history.{' '}
        </Text>
        <Image
          source={require('../js/cup.jpg')}
          style={{ width: 400, height: 200 }}
        />
        <Text style={hellostyles.buttonText}>
          Some information about history. Some information about history. Some
          information about history. Some information about history. Some
          information about history.{' '}
        </Text>
        <Image
          source={require('../js/cup.jpg')}
          style={{ width: 400, height: 200 }}
        />
        <Button title="Press Me" color="#841584" onPress={onPress} />
        <Text style={hellostyles.buttonText}>
          Some information about history. Some information about history. Some
          information about history. Some information about history. Some
          information about history.{' '}
        </Text>
      </ScrollView>
    );
  }
}
var hellostyles = StyleSheet.create({
  buttonText: {
    color: '#ff0000',
    textAlign: 'center',
    fontSize: 20
  }
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
