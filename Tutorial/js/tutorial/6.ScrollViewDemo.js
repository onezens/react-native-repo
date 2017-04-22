/**
 * Created by wangzhen on 17/4/22.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
const {width} = require('Dimensions').get('window');

class ScrollViewDemo extends Component {
    render() {
        return (
            <ScrollView
                //horizontal={true}
                //showsHorizontalScrollIndicator={false}
                //pagingEnabled={true}
                // scrollEnabled={false}
            >
                {this.renderChildView()}
            </ScrollView>
        )
    }
    renderChildView(){
        var colors = ['green', 'orange', 'skyblue', 'powderblue', 'cyan', 'pink', 'purple'];
        var subViews = [];
        for(var i= 0,length=colors.length; i<length; i++){
            subViews.push(
                <View
                    key={i}
                    style={{
                        backgroundColor: colors[i],
                        width:width,
                        height: 156
                    }}
                >
                    <Text>{i}</Text>
                </View>
            );
        }
        return subViews;
    }
}

module.exports = ScrollViewDemo;
