import React,{Component} from 'react'
import {AppRegistry, Text, View, ScrollView, Image, StyleSheet} from 'react-native'

class Tutorial extends Component {
  render() {
    return(
      <ScrollView>
        <Text style={styles.container}>scrollView scroll me</Text>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Text style={styles.container}>This is ScrollView</Text>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Image source={require('./src/img/favicon.png')}/>
        <Text style={styles.container}>This is ScrollView</Text>
      </ScrollView>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    fontSize:66
  }
});

AppRegistry.registerComponent('Tutorial', ()=>Tutorial);
