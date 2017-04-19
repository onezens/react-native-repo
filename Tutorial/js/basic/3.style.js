import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet} from 'react-native'

class Tutorial extends Component {
  render() {
    return (
      <View>
        <Text style={styles.bigBlue}>Jone snow : You are not alone! </Text>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>Hello world!</Text>
        <Text style={[styles.bigBlue, styles.red] }>multible styles</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  bigBlue: {
    fontSize : 20,
    color: 'blue'
  },
  red: {
    color: 'red'
  }
});

AppRegistry.registerComponent('Tutorial', ()=>Tutorial);
