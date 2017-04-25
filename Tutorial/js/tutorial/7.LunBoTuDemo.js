/**
 * Created by wangzhen on 17/4/22.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Image, AlertIOS} from 'react-native'
const {width} = require('Dimensions').get('window');

const imageData = require('../../src/json/ImageData.json');

const TimerMixin = require('react-timer-mixin');

var LunBoTuDemo = React.createClass({
    //注册计时器
    mixins : [TimerMixin],
    getDefaultProps(){
        return {
            duration: 1000
        }
    },
    getInitialState(){
        return {
            currentPage: 0
        }
    },
    componentDidMount(){
        this.startTimer();
    },
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScrollBeginDrag = {this.onScrollBeginDrag}
                    onScroll={this.onScroll}
                    onScrollEndDrag={this.onScrollEndDrag}
                    //每次滑动的时候调用
                    onMomentumScrollEnd={(e)=>{this.onMomentumScrollEnd(e)}}
                >
                    {this.renderSubViews()}
                </ScrollView>
                <View style={styles.indicatorView}>
                    {this.renderPageIndicator()}
                </View>
            </View>
        )
    },
    renderSubViews() {
        var subViews = [];
        var imgArr = imageData.data;
        for(var i= 0,length=imgArr.length; i<length; i++){
            var item = imgArr[i];
            subViews.push(
                <Image key={i} source={{uri: item.img}} style={styles.image}/>
            );
        }
        return subViews;
    },
    renderPageIndicator(){
        var textArr = [];
        for (var i= 0,length=imageData.data.length; i<length; i++){
            var style = {
                color: this.state.currentPage == i ? 'orange' : 'white',
                fontSize: 20,
                marginLeft: 4
            };
            textArr.push(
                <Text key={i} style={style}>&bull;</Text>
            );
        }
        return textArr;
    },
    onScrollBeginDrag(e) {
        this.clearInterval(this.timer);
    },
    onScroll(){
        console.log('onScroll');
    },
    onScrollEndDrag() {
        this.startTimer();
    },
    onMomentumScrollEnd(e){
        var offsetX = e.nativeEvent.contentOffset.x;
        var currentPage = Math.floor(offsetX / width);
        this.setState({
            currentPage: currentPage
        });
    },
    startTimer() {
        var scrollView = this.refs.scrollView;
        var imageCount = imageData.data.length;
        var page = 0;
        this.timer = this.setInterval(function(){
            var currentPage = this.state.currentPage+1;
            if (currentPage >= imageCount){
                page = 0
            }else{
                page = currentPage;
            }
            var offsetX = width * page;
            scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});

        }, this.props.duration);
    }
});

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    image: {
        width:width,
        height:160,
        resizeMode: 'stretch'
    },
    indicatorView: {
        flexDirection: 'row',
        height: 28,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'absolute',
        bottom: 0,
        width: width,
        paddingLeft: 4
    }
});

module.exports = LunBoTuDemo;