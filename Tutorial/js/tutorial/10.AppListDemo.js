/**
 * Created by wangzhen on 17/4/26.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity, // 不透明度触摸
    AlertIOS
} from 'react-native';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;

var column = 3;
var itemWidth = 80;
var itemMargin = (screenWidth - (itemWidth * column)) / 4;
var bottomMargin = 10;

// 导入json数据
var shareData = require('../../src/json/shareData.json');

var AppListDemo = React.createClass({
    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        return {
          dataSource : ds.cloneWithRows(shareData.data)
        }
    },
    render(){
        return (
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderRow}
                      contentContainerStyle={styles.container}
            />
        )
    },
    renderRow(data){
        return (
            <TouchableOpacity>
                <View style={styles.cellView}>
                    <Image source={{uri: data.icon}} style={styles.cellImage}/>
                    <Text style={styles.cellText}>{data.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: 'skyblue',
    },
    cellView: {
        width: itemWidth,
        // backgroundColor: 'cyan',
        marginLeft: itemMargin,
        marginBottom: bottomMargin
    },
    cellImage: {
        width: itemWidth,
        height: itemWidth
    },
    cellText: {
        alignSelf: 'center',
        marginTop: 4
    }
});


module.exports = AppListDemo;



