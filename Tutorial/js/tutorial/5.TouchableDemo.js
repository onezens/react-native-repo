/**
 * Created by wangzhen on 17/4/22.
 */

import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, AlertIOS} from 'react-native'


//ES5
var TouchableDemo = React.createClass({
    //不可变的值
    getDefaultProps(){
        return{
            age: 18
        }
    },
    //可以改变的值
    getInitialState(){
        return {
            title: '不透明触摸',
            name: 'XiaoMing'
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>this.activeEvent('点击')}
                    onPressIn={()=>this.activeEvent('按下')}
                    onPressOut={()=>this.activeEvent('抬起')}
                    onLongPress={()=>this.activeEvent('长按')}
                >
                    <View style={styles.touchView}>
                        <Text>点我试试!(常用事件)</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text>状态:{this.state.title}</Text>
                    <Text>姓名:{this.state.name}</Text>
                    <Text>年龄:{this.props.age}</Text>
                </View>
            </View>
        )
    },
    activeEvent(e){
        this.setState({
            title: e
        });
    }
});


//ES6
//class TouchableDemo extends Component {
//
//}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchView:{
        width: 300,
        height: 50,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginBottom: 8
    }
});

module.exports = TouchableDemo;