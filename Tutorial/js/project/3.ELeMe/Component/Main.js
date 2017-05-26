/**
 * Created by wangzhen on 17/5/26.
 */

import React, {Component} from 'react'
import {
    Navigator,
    StyleSheet,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from 'react-native-tab-navigator';


const Util = require('./Util');
import Home from './Home/Home';
import Mine from './Mine/Mine';
import Order from './Order/Order';
import Discovery from './Discovery/Discovery';

export default class Main extends Component {
    render(){
        return (
            <Navigator
                initialRoute={{component: TabbarView}}
                configureScene={()=>Navigator.SceneConfigs.FloatFromRight}
                renderScene={(route, navigator)=>{
                    return <route.component navigator={navigator} {...route.args} />
                }}
            />
        )
    }
}

class TabbarView extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentTab: 'Home'
        }
    }
    render() {
        return (
            <TabNavigator
                tabBarStyle={styles.tabBarStyle}
            >
                {this.renderItems()}
            </TabNavigator>
        )
    }
    renderItems(){
        var items = [];
        items.push(this.renderTabbarItem('外卖', 'Home', 'logo-google', 'logo-google', <Home {...this.props}/>, 0));
        items.push(this.renderTabbarItem('外卖', 'Discovery', 'ios-compass-outline', 'ios-compass-outline', <Discovery {...this.props}/>, 1));
        items.push(this.renderTabbarItem('外卖', 'Order', 'ios-list-box-outline', 'ios-list-box-outline', <Order {...this.props}/>, 2));
        items.push(this.renderTabbarItem('外卖', 'Mine', 'ios-contact-outline', 'ios-contact-outline', <Mine {...this.props}/>, 3));
        return items;
    }
    renderTabbarItem(tabName, tabId ,tabIcon, tabSelIcon, component, index) {
        return (
            <TabNavigator.Item
                key={index}
                tabStyle={styles.tabItemStyle}
                title={tabName}
                selected={this.state.currentTab === tabId}
                selectedTitleStyle={{color: "#3496f0"}}
                renderIcon={() => <Icon name={tabIcon} size={Util.px2dp(22)} color="#666"/>}
                renderSelectedIcon={() => <Icon name={tabSelIcon} size={Util.px2dp(22)} color="#3496f0"/>}
                onPress={() => this.setState({currentTab: tabId})}>
                {component}
            </TabNavigator.Item>
        )
    }
}

const styles = StyleSheet.create({
    tabBarStyle: {
        height: Util.px2dp(46),
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    tabItemStyle: {
        padding: Util.px2dp(4)
    }
});