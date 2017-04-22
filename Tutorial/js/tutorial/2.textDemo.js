/**
 * Created by wangzhen on 17/4/22.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class TextDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} numberOfLines={4}>
                    我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,我是文本,
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        width:375,
        backgroundColor:'red',
        fontSize: 20,
        textAlign: 'justify',
        marginTop: 25,
    }
});

module.exports = TextDemo;

