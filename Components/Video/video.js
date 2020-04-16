import React, {Component, useState } from 'react'
import { View, ImageBackground, FlatList } from 'react-native';
import { getVideoDataIDFromApi } from './FuzzYoutubeApi';
import VideoItem from './videoItem';

export default class Video extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      fetchdata: getVideoDataIDFromApi().then ( details => 
        {
         this.setState({fetchdata: details['items'] }) 
        })
    }
  };

  _DisplayVideo = (VideoID) => {
    this.props.navigation.navigate("VideoDetail", {VideoID: VideoID})
  }

  render() {    
    const jsondata = [];
    incrim = 0;
    Array.from(this.state.fetchdata, child => {
      child.snippet.resourceId.id=incrim;
      child.snippet.resourceId.title=child.snippet.channelTitle;
      child.snippet.resourceId.desc=child.snippet.title;
      child.snippet.resourceId.thumbn=child.snippet.thumbnails.maxres.url;
      jsondata.push(child.snippet.resourceId);
      incrim++;
    });
      return (
        <View style={{flex: 1}}>
          <ImageBackground source={require('../../Images/speakerBackground2misombre.png')} style={{  flex:1, resizeMode:'stretch'}} > 
                <FlatList
                    data={jsondata}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <VideoItem videodetail={item} DisplayVideo={this._DisplayVideo} />}
                />
          </ImageBackground>
      </View>
    )
  }
}
