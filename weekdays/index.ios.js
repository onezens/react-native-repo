/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import some lib we need
import React from 'react';
var Component = React.Component;
import {AppRegistry} from 'react-native';
import {View} from 'react-native';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import Moment from 'moment';
import DayItem from './src/day-item';

export default class weekdays extends Component {
    render() {
    return <View style={styles.container}>
      <Text>
      Days of week
      </Text>
      <Text>
      {Moment().format('dddd')}
      </Text>
      <DayItem />

    </View>
  }
};

//style for the react component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  }
});

//show the react component on the screen
AppRegistry.registerComponent('weekdays',function  () {
  return weekdays;
});
