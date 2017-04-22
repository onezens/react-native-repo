/**
 * Created by leaf on 2017/4/22.
 */

import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'


class CFlexBoxDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{backgroundColor:'red', height:30}}>第一个</Text>
                <Text style={{backgroundColor:'green', height:40}}>第二个</Text>
                <Text style={{backgroundColor:'blue', height:50}}>第三个</Text>
                <Text style={{backgroundColor:'yellow', height:60}}>第四个</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        // 上边距
        marginTop:25,
        // 改变主轴的方向
        flexDirection:'row',
        // 设置主轴的对齐方式
        justifyContent: 'space-around',
        // 设置侧轴的对齐方式
        alignItems:'center'
    }
});


/**-------------第二个示例程序-----------------------**/
class CFlexBoxDemo1 extends Component {
    render() {
        return (
            <View style={styles1.container}>
                <Text style={{backgroundColor:'red', width:80}}>第一个</Text>
                <Text style={{backgroundColor:'green', width:90}}>第二个</Text>
                <Text style={{backgroundColor:'blue', width:100}}>第三个</Text>
                <Text style={{backgroundColor:'yellow', width:110}}>第四个</Text>
            </View>
        );
    }
}

const styles1 = StyleSheet.create({
    container:{
        backgroundColor: 'purple',
        // 上边距
        marginTop:25,
        // 改变主轴的方向
        flexDirection:'row',
        // 设置主轴的对齐方式
        justifyContent: 'flex-start',
        // 设置侧轴的对齐方式
        alignItems:'center',
        // 显示不下,换一行
        flexWrap:'wrap'
    }
});


/**-------------第三个示例程序-----------------------**/
class CFlexBoxDemo2 extends Component {
    render() {
        return (
            <View style={styles2.container}>
                <Text style={{backgroundColor:'red', flex:1, height:60, alignSelf:'flex-start'}}>第一个</Text>
                <Text style={{backgroundColor:'green', flex:3, height:70, alignSelf:'flex-end'}}>第二个</Text>
                <Text style={{backgroundColor:'blue',  flex:2, height:80}}>第三个</Text>
                <Text style={{backgroundColor:'yellow', flex:1, height:90}}>第四个</Text>
            </View>
        );
    }
}

const  styles2 = StyleSheet.create({
    container:{
        backgroundColor: 'purple',
        // 上边距
        marginTop:25,
        // 改变主轴的方向
        flexDirection:'row',
        // 设置主轴的对齐方式
        justifyContent: 'flex-start',
        // 设置侧轴的对齐方式
        alignItems:'center'
    }
});

/**-------------第四个示例程序-----------------------**/

// 引入
var Dimensions = require('Dimensions');
var {width, height, scale} = Dimensions.get('window');

class CFlexBoxDemo3 extends Component {
    render() {
        return (
            <View style={styles3.outViewStyle}>
                <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
                <Text>当前屏幕的高度:{Dimensions.get('window').height}</Text>
                <Text>当前屏幕的分辨率:{Dimensions.get('window').scale}</Text>
            </View>
        );
    }
};

const styles3 = StyleSheet.create({
    outViewStyle:{
        // 占满屏幕
        flex:1,
        //  主轴方向居中
        justifyContent:'center',
        // 侧轴方向居中
        alignItems: 'center',
        // 背景
        backgroundColor:'red'
    }
});


/**-------------第五个示例程序-----------------------**/
class CFlexBoxDemo4 extends Component {
    render() {
        return (
            <View style={styles4.outViewStyle}>
                <Text>绝对定位</Text>
                <View style={styles4.topViewStyle}>
                    <View style={styles4.innerViewStyle}></View>
                </View>
                <Text>相对定位</Text>
                <View style={styles4.topViewStyle}>
                    <View style={styles4.innerViewStyle1}></View>
                </View>
            </View>
        );
    }
};


const styles4 = StyleSheet.create({
    outViewStyle:{
        marginTop:20,
        width:width,
        height:200,
        backgroundColor:'red'
    },

    topViewStyle:{
        width:width,
        height:150,
        backgroundColor:'yellow'
    },

    innerViewStyle:{
        width:60,
        height:60,
        backgroundColor:'green',
        // 绝对定位
        position:'absolute',
        top:0,
        right:0
    },

    innerViewStyle1: {
        width: 60,
        height: 60,
        backgroundColor: 'green',
        // 相对定位
        position: 'relative',
        top: 30,
        right: -30
    }
});

module.exports = {CFlexBoxDemo, CFlexBoxDemo1, CFlexBoxDemo2, CFlexBoxDemo3, CFlexBoxDemo4};