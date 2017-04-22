/**
 * Created by wangzhen on 17/4/22.
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class ImageDemo extends Component {
    render() {
        return (
            <View style={styles.container}>

                {/*从项目中加载图片*/}
                <Text>1.从项目中加载图片</Text>
                <Image source={require('../../img/icon.png')} style={styles.imageStyle} />

                {/*从资源包中加载图片*/}
                <Text>2.从APP中加载图片</Text>
                {/*<Image source={require('image!bd_logo1')} style={styles.imageStyle} />*/}

                {/*从网络中加载图片*/}
                <Text>3.从网络中加载图片</Text>
                <Image source={{uri: 'http://www.520it.com/userfiles/1/images/cms/site/2015/09/index_06.jpg'}}  style={styles.imageStyle} />

                {/*从资源包中加载图片--另一种方式*/}
                <Text>4.从APP中加载图片</Text>
                <Image source={{uri: 'bd_logo1'}} style={styles.imageStyle} />


            </View>
        );
    }
};



class ImageDemo1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*用图片设置背景*/}
                <Text>5.用图片设置背景</Text>
                <Image source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493449966&di=1f0a51e3a77906dd0aba982dc0f1abeb&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F1%2F55f00045a31ea.jpg'}}  style={styles.imageStyle} >
                    {/* transparent 背景透明*/}
                    <Text style={{marginTop:40, backgroundColor:'transparent'}}>我是文字</Text>
                </Image>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    imageStyle:{
        width:160,
        height:160,
        // 圆角
         borderRadius:30,
        // 设置图片的内容模式
        resizeMode:'cover'  //宽高求最小,然后等比缩放
        // resizeMode:'contain' //宽高全部显示,然后等比缩放
        // resizeMode:'stretch' //拉伸
    }

});

module.exports = {ImageDemo, ImageDemo1};
