import React, {Component} from 'react'
import {AppRegistry, Text, View, ListView} from 'react-native'

class Tutorial extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'Jone', 'Danny', 'Jenny', 'Jimmy', 'Jackson', 'Tim', 'James', 'Davie', 'Joe'
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView dataSource={this.state.dataSource} renderRow={(rowData)=><Text style={{fontSize:23, color: 'powderblue'}}>{rowData}</Text>}>
        </ListView>
      </View>
    )
  };
}

AppRegistry.registerComponent('Tutorial', ()=>Tutorial);
