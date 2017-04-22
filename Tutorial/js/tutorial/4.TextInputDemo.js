/**
 * Created by wangzhen on 17/4/22.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'


class TextInputDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    //value={'default words'}
                    placeholder={' input words'}
                    clearButtonMode={'always'}
                    keyboardType={'number-pad'}
                    password={true}
                    //multiline={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textInput: {
        width: 200,
        height: 40,
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 4,
        alignSelf: 'center'
    }
});

module.exports = TextInputDemo;

