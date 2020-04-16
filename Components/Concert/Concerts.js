import React from 'react';
import { View, FlatList, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';
import ConcertItem from '../Concert/ConcertItem'
import {getEventsFromApiGraph} from '../News/FBAPI'

export default class Concerts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      _events: [],
      isLoading: true,
      isFetching: false
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  componentDidMount(){
    getEventsFromApiGraph().then(data => {
      this.setState({
        _events: data.data,
        isLoading: false
      })
    })
  }

  onRefresh() {
    this.componentDidMount()
    this.forceUpdate()
 }

  render() {
    return (
      <View style={{flex:1, width:'100%', height:'100%', alignSelf:'center', justifyContent:'center', backgroundColor:'#1B1B1B'}}>
        <ImageBackground source={require('../../Images/speakerBackground2misombre.png')} style={{  flex:1, resizeMode:'stretch'}} > 
          <FlatList 
            isRendered={true}
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.isFetching}
            data={this.state._events}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <ConcertItem _events={item}/>}
          />
          {this._displayLoading()}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})