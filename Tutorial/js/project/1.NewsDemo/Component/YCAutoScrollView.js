/**
 * Created by wangzhen on 17/5/6.
 */

import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    AlertIOS
} from 'react-native'

const {width} = require('Dimensions').get('window');
const TimerMixin = require('react-timer-mixin');

const autoScrollView = React.createClass({
    mixins: [TimerMixin],
    getDefaultProps(){
        return {
            duration: 2000,
            topAdsArr: []
        }
    },
    getInitialState(){
        return {
            currentIndex: 0,
            title: this.props.topAdsArr[0].title
        }
    },
    render(){
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    onMomentumScrollEnd={(e)=>this.onScrollEnd(e)}
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.renderSubViews()}
                </ScrollView>
                <View style={styles.bottomView}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <View style={{flexDirection:'row'}}>
                        {this.renderPageIndicator()}
                    </View>
                </View>
            </View>
        )
    },
    renderSubViews(){
        var subViews = [];
        var dataArr = this.props.topAdsArr;
        for(var i=0; i<dataArr.length; i++){
            var data = dataArr[i];
            subViews.push(
                <Image
                    source={{uri: data.imgsrc}}
                    style={styles.image}
                    key={i}
                />
            );
        }

        return subViews;
    },
    renderPageIndicator(){
        var indicators = [];
        var length = this.props.topAdsArr.length;
        for(var i=0; i<length; i++){
            indicators.push(
                <Text
                    key={i}
                    style={{
                    color: this.state.currentIndex==i ? 'orange' : '#f8f8f8',
                    marginRight: 1,
                    fontSize: 20
                }}
                >&bull;</Text>
            );
        }
        return indicators;
    },
    onScrollEnd(e){
        var offsetX = e.nativeEvent.contentOffset.x;
        var index = Math.floor(offsetX / width);
        console.log(index);
        this.setState({
            currentIndex: index,
            title: this.props.topAdsArr[index].title
        });
    },
    startTimer(){
        this.timer = this.setInterval(function () {

            var index = this.state.currentIndex + 1;
            if (index >= this.props.topAdsArr.length){
                index = 0
            }
            this.setState({
                currentIndex: index
            });
            this.refs.scrollView.scrollResponderScrollTo({x: index*width, y:0, animated: true});

        }, this.props.duration)
    },
    stopTimer(){
        this.clearInterval(this.timer);
    },
    componentDidMount(){
        this.startTimer();
    },
    onScrollBeginDrag(){
        this.stopTimer();
        console.log('stop');
    },
    onScrollEndDrag(){
        this.startTimer();
        console.log('start');
    }
});

const styles = StyleSheet.create({
    container: {
        height: 160,
        backgroundColor: 'pink'
    },
    image: {
        width: width,
        height: 160
    },
    bottomView: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: 25,
        bottom: 0,
        width: width,
        alignItems: 'center',
        paddingLeft: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: '#f8f8f8',
        fontSize: 13
    }
});
module.exports = autoScrollView;
