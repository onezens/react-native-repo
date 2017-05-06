/**
 * Created by wangzhen on 17/5/2.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';


var NavDemo = React.createClass({
    getInitialState(){
        return {
            selectedTabbarItem: 'home'
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topNav}>
                    <Text style={{fontSize: 17}}>NavDemo</Text>
                </View>
                <TabBarIOS>
                    <TabBarIOS.Item
                        systemIcon= 'downloads'
                        badge='3'
                        title= 'home'
                        selected= {this.state.selectedTabbarItem == 'home'}
                        onPress={()=>{this.setState({selectedTabbarItem: 'home'})}}
                    >
                        <View style={styles.tabBarView}>
                            <Text>第一页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon= 'bookmarks'
                        selected= {this.state.selectedTabbarItem == 'bookmarks'}
                        onPress={()=>{this.setState({selectedTabbarItem: 'bookmarks'})}}
                    >
                        <View style={styles.tabBarView}>
                            <Text>第二页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon= 'search'
                        selected= {this.state.selectedTabbarItem == 'search'}
                        onPress={()=>{this.setState({selectedTabbarItem: 'search'})}}
                    >
                        <View style={styles.tabBarView}>
                            <Text>第三页</Text>
                        </View>
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        systemIcon= 'downloads'
                        selected= {this.state.selectedTabbarItem == 'me'}
                        onPress={()=>{this.setState({selectedTabbarItem: 'me'})}}
                    >
                        <View style={styles.tabBarView}>
                            <Text>第四页</Text>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topNav: {
        backgroundColor: 'cyan',
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,

    },
    tabBarView: {
        backgroundColor:'orange',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

module.exports = NavDemo;