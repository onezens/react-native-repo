/**
 * Created by wangzhen on 17/4/22.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native'
const {width} = require('Dimensions').get('window');

const imageData = require('../../src/json/ImageData.json');

class LunBoTuDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    pagingEnabled={true}

                >
                    {this.renderSubViews()}
                </ScrollView>
                <View>
                    {this.renderPageIndicator()}
                </View>
            </View>
        )
    }
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
    }
    renderPageIndicator(){

    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    image: {
        width:width,
        height:160,
        resizeMode: 'stretch'
    }
});

module.exports = LunBoTuDemo;