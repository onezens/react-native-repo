/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// var React = require('react');
// var AppRegistry = React.AppRegistry;
import React from 'react';
import {Component} from 'react'
import {AppRegistry} from 'react-native';
import {View} from 'react-native';
import {Text} from 'react-native';
// import Moment 

export default class weekdays extends Component {
    render() {
    return <View>
      <Text>
      Days of week:
      </Text>
      <Text>
      Days of week:
      </Text>
      <Text>
      Days of week:
      </Text>
      <Text>
      Days of week:
      </Text>
      <Text>
      Days of week:
      </Text>
      <Text>
      Days of week:
      </Text>
      <Text>
      Days of week:
      </Text>
      <Text>
      Days of week:
      </Text>
    </View>
  }
}

// const 

AppRegistry.registerComponent('weekdays',function  () {
  return weekdays;
});