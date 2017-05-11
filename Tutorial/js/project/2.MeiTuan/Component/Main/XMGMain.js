/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// npm install

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,   // 判断当前运行的系统
    Navigator
} from 'react-native';


/**-----导入外部的组件类------**/
import TabNavigator from 'react-native-tab-navigator';

var Home = require('../Home/XMGHome');
var Shop = require('../Shop/XMGShop');
var Mine = require('../Mine/XMGMine');
var More = require('../More/XMGMore');



var Tabbar = React.createClass({
    // 初始化函数(变量是可以改变的,充当状态机的角色)
    getInitialState(){
        return{
            selectedTab:'home' // 默认是第一个
        }
    },
    render(){
        return (

            <TabNavigator
            >
                {/*--首页--*/}
                {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected','home', '首页', <Home {...this.props}/>)}
                {/*--商家--*/}
                {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected','shop', '商家', <Shop {...this.props}/>)}
                {/*--我的--*/}
                {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected','mine', '我的', <Mine {...this.props}/>)}
                {/*--更多--*/}
                {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected','more', '更多', <More {...this.props}/>)}
            </TabNavigator>
        )
    },

    // 每一个TabBarItem
    renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName, component, badgeText){
        return(
            <TabNavigator.Item
                title={title}  // 传递变量,一定要加{}
                renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle}/>} // 图标

                renderSelectedIcon={() =><Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}   // 选中的图标
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText = {badgeText}
            >
                {component}
            </TabNavigator.Item>
        )
    }
});

var Main = React.createClass({
    render() {
        return (
            <Navigator
                initialRoute={{component: Tabbar}}
                configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                renderScene={(route, navigator) => {
                     return <route.component navigator={navigator} {...route.args}/>
                    }
                }
            />
        )
    }

});


const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    },

    selectedTitleStyle:{
        color:'orange'
    }
});

// 输出组件类
module.exports = Main;
