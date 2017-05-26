/**
 * Created by wangzhen on 17/5/26.
 */

import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Discovery extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Discovery</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
