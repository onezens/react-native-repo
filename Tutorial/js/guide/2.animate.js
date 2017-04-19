import React, {Component} from 'react'
import {AppRegistry, View, Text, Animated} from 'react-native'

class FadeInView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }
  componentDidMount(){
    Animated.timing(
      this.state.fadeAnim,
       {
        toValue:1,
      }
    ).start();
  }
  render(){
    return(
      <Animated.View style={{
        ...this.props.style,
        opacity: this.state.fadeAnim
      }}>
        {this.props.children}
      </Animated.View>
    )
  }
}

class Tutorial extends Component {
  render(){
    return(
      <FadeInView style={{
        width:250,
        height:50,
        backgroundColor:'powderblue',
        justifyContent: 'center',
        alignItems: 'center',

      }}>
        <Text>Fade In View</Text>
      </FadeInView>
    )
  };
}

AppRegistry.registerComponent('Tutorial', ()=>Tutorial);
