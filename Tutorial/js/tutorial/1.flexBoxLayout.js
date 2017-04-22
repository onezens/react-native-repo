/**
 * Created by leaf on 2017/4/22.
 */

import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

//demo1
class  FlexBoxDemo1 extends  Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{backgroundColor:'cyan', height:20}}>第一个</Text>
                <Text style={{backgroundColor: 'skyblue', height:35}}>第二个</Text>
                <Text style={{backgroundColor: 'powderblue', height: 46}}>第三个</Text>
                <Text style={{backgroundColor: 'orange', height:66}}>第四个</Text>
            </View>
        );
    }
}

const styles1 = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
});

//demo2
class FlexBoxDemo2 extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={{backgroundColor:'cyan', width:120}}>第一个</Text>
                <Text style={{backgroundColor: 'skyblue', width:135}}>第二个</Text>
                <Text style={{backgroundColor: 'powderblue', width: 86}}>第三个</Text>
                <Text style={{backgroundColor: 'orange', width:166}}>第四个</Text>
            </View>
        )
    }
}

const styles2 = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        marginTop: 20,
        flexWrap: 'wrap',//一行显示不下,换行
        justifyContent: 'flex-start'
    }
});
//demo3     --------->    alignSelf
class FlexBoxDemo3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{backgroundColor:'cyan', width:60, height:80, alignSelf:'flex-start'}}>第一个</Text>
                <Text style={{backgroundColor: 'skyblue', width:70, height: 90, alignSelf: 'flex-end'}}>第二个</Text>
                <Text style={{backgroundColor: 'powderblue', width: 60, height: 86, alignSelf: 'center'}}>第三个</Text>
                <Text style={{backgroundColor: 'orange', width:80, height:110}}>第四个</Text>
            </View>
        )
    }
}

const styles3 = StyleSheet.create({
    container :{
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop:20
    }
});

//demo4
var {width, height, scale} = require('Dimensions').get('window');

class FlexBoxDemo4 extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>屏幕宽度: {width}</Text>
                <Text>屏幕高度: {height}</Text>
                <Text>屏幕scale: {scale}</Text>
            </View>
        )
    }
}

const styles4 = StyleSheet.create({
    container: {
        flex: 1, //撑满屏幕
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


//demo5
class FlexBoxDemo5 extends  Component {
    render(){
        return (
            <View style={styles5.container}>
                <Text>绝对定位</Text>
                <View style={styles5.topView}>
                    <View style={styles5.innerView}></View>
                </View>
                <Text>相对定位</Text>
                <View style={styles5.topView}>
                    <View style={styles5.innerView1}></View>
                </View>
            </View>
        )
    }
}

const styles5 = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        marginTop: 20
    },
    topView: {
        height: 200,
        backgroundColor: 'orange'
    },
    innerView: {
        width: 60,
        height: 60,
        backgroundColor: 'yellow',
        position: 'absolute',
        top: 60,
        right: 60
    },
    innerView1: {
        width: 60,
        height: 60,
        backgroundColor: 'yellow',
        position: 'relative',
        top: 60,
        right: -60
    }
});
module.exports = {FlexBoxDemo1, FlexBoxDemo2, FlexBoxDemo3, FlexBoxDemo4, FlexBoxDemo5};