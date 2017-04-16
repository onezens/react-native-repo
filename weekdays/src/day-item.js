//import lib we need
import ReactNative from 'react-native';
import React from 'react'
var Text = ReactNative.Text;
var StyleSheet = ReactNative.StyleSheet;
var Component = React.Component;

//class
 class dayItem extends Component {
  render(){
    return <Text style={styles.day}>
      {this.props.day}
    </Text>
  }
};

//style
const styles = StyleSheet.create({
  day: {
    color : 'cyan',
    fontSize : 16
  }
});

//export class
module.exports = dayItem;
