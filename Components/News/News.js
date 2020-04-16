import React from 'react';
import { ActivityIndicator, StyleSheet, View, FlatList, ImageBackground } from 'react-native';
import NewsItem from './NewsItem'
import {getFeedFromApiGraph} from './FBAPI'

export default class News extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      _feed: [],
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
    getFeedFromApiGraph().then(data => {
      this.setState({
        _feed: data.data,
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
            data={this.state._feed}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <NewsItem _feed={item}/>}
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