/**
 * Created by wangzhen on 17/5/6.
 */
import React from 'react';
import {
    StyleSheet,
    NavigatorIOS,
    TabBarIOS
} from 'react-native'

const Home = require('./YCHome');
const Find = require('./YCFind');
const Message = require('./YCMesssage');
const Mine = require('./YCMine');

const MainTabBar = React.createClass({
    getInitialState(){
        return {
            selectedItem: 'home'
        }
    },
    render(){
        return (
            <TabBarIOS
                tintColor='orange'
            >
                <TabBarIOS.Item
                    badge = '2'
                    title = '首页'
                    icon = {{uri: 'tabbar_home'}}
                    selected={this.state.selectedItem == 'home'}
                    onPress={()=>{this.setState({selectedItem: 'home'})}}
                    style={{

                    }}
                >
                    <NavigatorIOS
                        tintColor='orange'
                        style={{flex:1}}
                        initialRoute = {
                            {
                                component: Home,
                                title: '首页',
                                leftButtonIcon: {uri: 'navigationbar_friendattention'},
                                rightButtonIcon: {uri: 'navigationbar_pop'}
                            }

                        }
                    />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title = '发现'
                    icon = {{uri: 'tabbar_discover'}}
                    selected={this.state.selectedItem == 'find'}
                    onPress={()=>{this.setState({selectedItem: 'find'})}}
                >
                    <NavigatorIOS
                        tintColor='orange'
                        style={{flex:1}}
                        initialRoute = {
                            {
                                component: Find,
                                title: '发现'
                            }
                        }
                    />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title = '消息'
                    icon = {{uri: 'tabbar_message_center'}}
                    selected={this.state.selectedItem == 'message'}
                    onPress={()=>{this.setState({selectedItem: 'message'})}}
                >
                    <NavigatorIOS
                        tintColor='orange'
                        style={{flex:1}}
                        initialRoute = {
                            {
                                component: Message,
                                title: '消息'
                            }

                        }
                    />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title = '我的'
                    icon = {{uri: 'tabbar_profile'}}
                    selected={this.state.selectedItem == 'mine'}
                    onPress={()=>{this.setState({selectedItem: 'mine'})}}
                >
                    <NavigatorIOS
                        tintColor='orange'
                        style={{flex:1}}
                        initialRoute = {
                            {
                                component: Mine,
                                title: '我的'
                             }
                        }
                    />
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
});

module.exports = MainTabBar;