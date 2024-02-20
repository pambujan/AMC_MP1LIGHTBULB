import React from 'react';
import { Text, View, Switch, StyleSheet, Image } from 'react-native';

export default class App extends React.Component {
  state = {
    switchValue: false,
    backgroundColor: '#000000',
    color: 'lightColor',
    bulbImage: require('./assets/offBulb.png')
  };

  handleSwitchToggle = (switchValue) => {
    const backgroundColor = switchValue ? '#ffffff' : '#000000';
    const color = switchValue ? 'darkColor' : 'lightColor';
    const bulbImage = switchValue ? require('./assets/onBulb.png') : require('./assets/offBulb.png');
    this.setState({ switchValue, backgroundColor, color, bulbImage });
  };

  render(){
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <Text style={[styles.textTitle, styles[this.state.color]]}>Light bulb with switch</Text>
        <Text style={[styles.textSubTitle, styles[this.state.color]]}>AMC MP1</Text>
        <Image source={this.state.bulbImage} style={styles.bulbImage} />
        <Switch value={this.state.switchValue} onValueChange={this.handleSwitchToggle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bulbImage: {
    width: 32,
    height: 50,
    marginBottom: 20,
  },
  textTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textSubTitle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 50,
  },
  lightColor: {
    color: '#ffffff',
  },
  darkColor: {
    color: '#000000',
  },
});
