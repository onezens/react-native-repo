/**
 * Created by wangzhen on 17/4/25.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native';

const wine = require('../../src/json/Wine.json'); // 数组
const Dimensions = require('Dimensions');
const {width} = Dimensions.get('window');

const ListViewDemo = React.createClass({
    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        return {
            dataSource: ds.cloneWithRows(wine)
        }
    },
    render() {

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                style={{marginTop: 20}}
            />
        )
    },
    renderRow(rowData, secId, rowId, highlightedRow){
        return (
            <TouchableOpacity
                onPress={()=>{this.selectedRow(rowId)}}
            >
                <View style={styles.container}>
                    <Image source={{uri:rowData.image}}  style={styles.image}/>
                    <View style={styles.textView}>
                        <Text style={styles.titleLbl}>{rowData.name}</Text>
                        <Text style={{color: 'red'}}>¥{rowData.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    selectedRow(rowId){
        alert(rowId);
    }

});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#cccccc',
    },
    image: {
        width: 80,
        height: 60,
        margin: 8
    },
    textView: {
        justifyContent: 'center'
    },
    titleLbl: {
        width: width - 104
    }

});

module.exports = ListViewDemo;