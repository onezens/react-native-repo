/**
 * Created by wangzhen on 17/5/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    WebView
} from 'react-native';

// http://c.3g.163.com/nc/article/BMU8KHQD00964J4O/full.html

const NewsDetail = React.createClass({
    getDefaultProps(){
      return {

      }
    },
    getInitialState(){
      return {
          detailData: ''
      }
    },
    render(){
        return (
            <WebView
                automaticallyAdjustContentInsets={true}
                style={styles.container}
                source={{html: this.state.detailData, baseUrl: ''}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
            />
        )
    },
    componentDidMount(){
        this.getDetailData();
    },
    getDetailData(){
        var docId = this.props.rowData['docid'];
        var api_uri = 'http://c.3g.163.com/nc/article/' + docId + '/full.html';
        fetch(api_uri).
            then((res) => res.json()).
            then((resData) => {
            var detailData = resData[docId];
            var bodyData = detailData.body;
            var imgArr = detailData.img;

            for(var i=0; i<imgArr.length; i++){
                var img = imgArr[i];
                var imgSrc = '<img src="' + img.src + '" width="100%">';
                console.log(imgSrc);
                bodyData = bodyData.replace(img.ref, imgSrc);
            }
            console.log(bodyData);
            this.setState({
                detailData: bodyData
            });
        }).catch((err)=>{
            alert('获取数据失败！');
        });
    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});



// 输出类
module.exports = NewsDetail;