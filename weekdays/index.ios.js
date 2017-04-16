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
//DayItem 首字母要是小写代码报错

var weekDays = ['Sunday', 'Monday', 'Tuesday', 'WednesDay', 'Thursday', 'Friday', 'SaturDay'];

export default class weekdays extends Component {
    render() {

    return <View style={styles.container}>
      <Text>
      Days of week
      </Text>
      <Text>
      {Moment().format('dddd')}
      </Text>
      {days()}
    </View>
  }
};

function days(){
  return weekDays.map(function(day) {
    return <DayItem day={day} />
  });
};

//style for the react component
const styles = StyleSheet.create({
  container: {
    flex: 1, //标准是1
    flexDirection: 'column', //column -> row
    justifyContent: 'center', //垂直居中 flex-end
    alignItems: 'center', //水平居中     flex-start
    backgroundColor: 'orange', //视图的背景颜色
  }
});

//show the react component on the screen
AppRegistry.registerComponent('weekdays',function  () {
  return weekdays;
});
