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
            />
        )
    },
    renderRow(rowData, secId, rowId, highlightedRow){
        return (
            <TouchableOpacity
                onPress={this.selectedRow(rowId)}
            >
                <View style={styles.container}>
                    <Image source={{uri:rowData.image}}  style={styles.image}/>
                    <View style={styles.textView}>
                        <Text>{rowData.name}</Text>
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
        marginTop: 20
    },
    image: {
        width: 80,
        height: 60,
        margin: 8
    },
    textView: {
        justifyContent: 'center'
    }

});

/*
var ListViewDemo = React.createClass({
    // 设置初始值
    getInitialState(){
        // 1.1 设置数据源
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 1.2 设置返回数据
        return{
            dataSource: ds.cloneWithRows(Wine)  // cloneWithRows 放置数组
        }
    },

    // 设置render函数
    render(){
        return(
            <ListView
                dataSource={this.state.dataSource}  // 数据源
                renderRow={this.renderRow}
            />
        );
    },

    // 返回具体的cell
    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert('点击了'+rowID+'行')}}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri: rowData.image}} style={styles.leftImageStyle}/>
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.topTitleStyle}>{rowData.name}</Text>
                        <Text style={styles.bottomTitleStyle}>¥{rowData.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

});
*/
/*
const styles = StyleSheet.create({
    cellViewStyle:{
        padding:10,
        backgroundColor:'white',
        // 下划线
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8',

        // 确定主轴的方向
        flexDirection:'row'
    },

    leftImageStyle:{
        width:60,
        height:60,
        marginRight:15
    },

    rightViewStyle:{
        // 主轴的对齐方式
        justifyContent:'center'
    },

    topTitleStyle:{
        color:'red',
        fontSize:15,
        width:width * 0.7,
        marginBottom:8
    },

    bottomTitleStyle:{
        color:'blue',
    }
});
*/
module.exports = ListViewDemo;