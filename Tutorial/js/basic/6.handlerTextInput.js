import React, {Component} from 'react'
import {AppRegistry, Text, TextInput, View} from 'react-native'

class Tutorial extends Component {
  constructor(props){
    super(props)
    this.state = {text: ''}
  }
  render(){
    return(
      <View style={{padding:10}}>
        <TextInput style={{height: 40}}
          placeholder="input text here"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
         {this.state.text}
       </Text>
      </View>
    )
  };
}

AppRegistry.registerComponent('Tutorial', ()=>Tutorial);
