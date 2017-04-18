import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native'

class DisplayShow extends Component {
  constructor(props){
    super(props);
    this.state = {showText: true};
    //toggle the state every second
    setInterval(()=>{
      this.setState({showText: !this.state.showText});
    }, 1000)
  }
  render(){
    let display = this.state.showText ? this.props.text : '';
    return (
        <Text>{display}</Text>
    )
  }
}

class Tutorial extends Component {
  render(){
    return(
      <View>
        <DisplayShow text='Hello World!' />
        <DisplayShow text='The code world!' />
        <DisplayShow text='This react-native app code'/>
      </View>
    )
  }
}

AppRegistry.registerComponent('Tutorial', ()=>Tutorial);
