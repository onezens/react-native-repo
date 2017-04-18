import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class Tutorial extends Component {
  render() {
    return (
      <LotsOfGreeting />
    );
  }
}
class Greeting extends Component {
  render() {
    return (
      <Text>Hello ! {this.props.name}</Text>
    );
  }
}

class LotsOfGreeting extends Component {
  render() {
    return (
      <View>
        <Greeting name='Xiaoming' />
        <Greeting name='XiaoHua' />
        <Greeting name='Xiaozhen' />
        <ShowImage />
      </View>
    )
  };
}

class ShowImage extends Component {
  render(){
    let pic = {
      url : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return(
      <Image source={pic} style={{width: 193, height: 110}}/>
    )
  };
}

AppRegistry.registerComponent('Tutorial', ()=>Tutorial);
