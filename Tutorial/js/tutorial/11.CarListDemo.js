/**
 * Created by wangzhen on 17/5/2.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

// 导入外部的json数据
var Car = require('../../src/json/Car.json');


var CarListDemo = React.createClass({
    getInitialState(){
        var getSectionData = (data ,sectionId) => {
            return data[sectionId];
        };
        var getRowData = (data, sectionId, rowId) => {
            return data[sectionId + ':' + rowId];
        };

        return {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged:(s1, s2) => s1 !== s2
            })
        }
    },
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.nav}>
                    <Text style={{fontSize: 20, color: '#fff'}}>CarListDemo</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                    style={styles.listView}
                />
            </View>
        )
    },
    componentDidMount(){
        this.loadDataFromJson()
    },
    loadDataFromJson(){
        var jsonData = Car.data;
        var data = {},
            sectionId = [],
            rowId = [];
        for (var i=0,length=jsonData.length; i<length; i++){
            var carObj = jsonData[i];
            data[i] = carObj.title;
            var cars = carObj.cars;
            sectionId.push(i);
            rowId[i] = [];
            for (var j=0, carsLength=cars.length; j<cars.length; j++){
                data[i+':'+j] = cars[j];
                rowId[i].push(j);
            }
        }

        console.log(JSON.stringify(data));

        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(data, sectionId, rowId)
        });
    },
    renderRow(rowData, sectionId, rowId){
        return (
            <TouchableOpacity>
                <View style={styles.cellContent}>
                    <Image source={{uri: rowData.icon}} style={styles.cellImage}/>
                    <Text style={styles.cellText}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        )
    },
    renderSectionHeader(sectionData) {
        return (
            <View style={styles.section}>
                <Text>
                    {sectionData}
                </Text>
            </View>
        )
    }


});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    nav: {
        height: 64,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    listView: {

    },
    cellContent: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5
    },
    cellImage: {
        width: 60,
        height: 60,
        marginLeft: 10
    },
    cellText :{
        marginLeft: 10
    },
    section: {
        height: 25,
        backgroundColor: 'cyan',
        justifyContent: 'center'
    }

});


module.exports = CarListDemo;