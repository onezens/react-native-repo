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
            selectedItem: 'home',
            currentTab: 'HomePage',

        }
    },

    render(){
        return (
            <TabBarIOS
                tintColor='orange'
            >
                {this.renderTabBarItem('首页', 'tabbar_home', 'home', 1, <Home {...this.props}/> )}
                {this.renderTabBarItem('首页', 'tabbar_discover', 'find', 0, <Find {...this.props}/>)}
                {this.renderTabBarItem('首页', 'tabbar_message_center', 'message', 0, <Message {...this.props}/>)}
                {this.renderTabBarItem('首页', 'tabbar_profile', 'mine', 0, <Mine {...this.props}/>)}

            </TabBarIOS>
        )
    },
    renderTabBarItem(title, iconName, tabName, badge, component){
       return (
           <TabBarIOS.Item
               badge = {badge}
               title = {title}
               icon = {{uri: iconName}}
               selected={this.state.selectedItem == tabName}
               onPress={()=>{this.setState({selectedItem: tabName})}}

           >
               {component}
           </TabBarIOS.Item>
       )
    }
});

const Navigation = React.createClass({
    render(){
        return (
            <NavigatorIOS
                tintColor='orange'
                style={{flex:1}}
                initialRoute = {
                    {
                        component: MainTabBar,
                        title: '我的'
                    }
                }
            />
        )
    }
});

const styles = StyleSheet.create({
    tabbar: {
        height: 49,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    hide: {
        transform: [
            {translateX:375}
        ]
    },
    tabStyle:{
        padding: 4
    }
});


module.exports = Navigation;