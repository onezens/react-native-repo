/**
 * Created by wangzhen on 17/5/6.
 */

import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

const Message = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                <Text>消息</Text>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue'
    }
});

module.exports = Message;

