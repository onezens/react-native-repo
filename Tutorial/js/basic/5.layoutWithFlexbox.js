import React, {Component} from 'react'
import {AppRegistry, Text, View, StyleSheet} from 'react-native'

class Tutorial extends Component {
  render(){
    return(
      // the default flexDirection is 'column'
      // justifyContent align center at vertical direction
      // flex-start, center, flex-end, space-around, and space-between.
      <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <View style={{width:50, height:50, backgroundColor:'powderblue'}}/>
        <View style={{width:50, height:50, backgroundColor:'skyblue'}} />
        <View style={{width:50, height:50, backgroundColor:'steelblue'}} />
      </View>
    )
  };
}

AppRegistry.registerComponent('Tutorial', ()=>Tutorial);
