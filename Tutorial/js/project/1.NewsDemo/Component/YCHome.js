/**
 * Created by wangzhen on 17/5/6.
 */

import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native'

const localData = require('../../../../src/json/LocalData.json');
const AutoScrollView = require('./YCAutoScrollView');
var {width} = require('Dimensions').get('window');

const Home = React.createClass({
    getInitialState(){
      return {
          headerDataArr: [],
          dataSource: new ListView.DataSource({
              rowHasChanged: (r1, r2)=> r1 !== r2
          })
      }
    },
    render(){
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderHeader={this.renderHeader}
                />
            </View>
        )
    },
    componentDidMount(){
        this.getHomeData()
    },
    renderRow(data){
        return (
            <TouchableOpacity
                onPress={()=>{this.jumpToNewsDetail(data.docid)}}
            >
                <View style={styles.cellView}>
                    <Image source={{uri: data.imgsrc}} style={styles.cellImage} />
                    <View style={styles.cellDetailView}>
                        <Text style={styles.cellTitle}>{data.title}</Text>
                        <Text style={styles.cellDetailTitle}>{data.digest}</Text>
                        <Text style={styles.cellReplyCountTitle}>{data.replyCount}跟帖</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },
    renderHeader() {

        var isHaveData = this.state.headerDataArr.length==0;
        if (isHaveData) return;
        return (
            <AutoScrollView
                topAdsArr = {this.state.headerDataArr}
            />
        )

    },
    getHomeData(){

        var listData = localData['T1348647853363'];
        var headerData = listData[0]['ads'];
        listData.splice(0, 1)
        this.setState({
            headerDataArr: headerData,
            dataSource: this.state.dataSource.cloneWithRows(listData)
        });
    },
    jumpToNewsDetail(newsId){

    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cellView: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        paddingLeft: 10
    },
    cellImage: {
        height: 60,
        width: 60
    },
    cellTitle: {
        width: width-90,
    },
    cellDetailTitle:{
        color: '#828283',
        width: width-90,
        fontSize: 13
    },
    cellReplyCountTitle: {
        position:'absolute',
        color: '#828283',
        borderColor: '#828283',
        borderWidth: 0.5,
        borderRadius: 2,
        right: 8,
        bottom: -14,
        paddingLeft: 2,
        paddingRight: 2,
        fontSize: 12
    },
    cellDetailView: {
        paddingLeft:10,
    }
});

module.exports = Home;
