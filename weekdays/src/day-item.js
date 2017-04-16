//import lib we need
import ReactNative from 'react-native';
import React from 'react'
var Text = ReactNative.Text;
var StyleSheet = ReactNative.StyleSheet;
var Component = React.Component;

//class
 class dayItem extends Component {
  render(){
    return <Text>
    Monday
    </Text>
  }
};

//export class
module.exports = dayItem;
