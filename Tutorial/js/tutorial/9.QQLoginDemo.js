/**
 * Created by wangzhen on 17/4/25.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

class LoginDemo extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.icon} source={require('../../img/icon.png')} />
                <TextInput
                    style={styles.input}
                    placeholder='请输入账号'
                    clearButtonMode='always'
                />
                <TextInput
                    style={styles.input}
                    placeholder='请输入密码'
                    secureTextEntry={true}
                    clearButtonMode='always'
                />
                <View style={styles.btnView}>
                    <Text style={styles.btnTxt}>登录</Text>
                </View>
                <View style={styles.extraView}>
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>
                <View style={styles.thirdLoginView}>
                    <Text>其他登录方式：</Text>
                    <Image style={styles.thirdLoginViewImg} source={{uri: 'icon3.png'}}/>
                    <Image style={styles.thirdLoginViewImg} source={{uri: 'icon7.png'}}/>
                    <Image style={styles.thirdLoginViewImg} source={{uri: 'icon8.png'}}/>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DDD'
    },
    icon: {
        marginTop: 64,
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#fff',
        marginBottom: 8
    },
    input: {
        width: width,
        height: 36,
        backgroundColor: '#fff',
        marginBottom: 1,
        fontSize: 16,
        textAlign: 'center'
    },
    btnView: {
        width: width-16,
        backgroundColor: '#2c94f6',
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        borderRadius: 4
    },
    btnTxt: {
        color: 'white'
    },
    extraView: {
        width: width-16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    thirdLoginView: {
        position: 'absolute',
        bottom: 20,
        width: width-16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    thirdLoginViewImg: {
        width: 50,
        height: 50,
        marginLeft: 4,
        borderRadius: 25
    }
});


// 输出类
module.exports = LoginDemo;