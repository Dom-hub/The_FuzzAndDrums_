import React, {Component, useState }  from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground} from 'react-native';
import { Video } from 'expo-av';
import WebView from 'react-native-webview';

export default class VideoDetail extends Component {
  constructor(props) {
      super(props);
      this.VideoData= this.props.navigation.state.params.VideoID;
    }

    render(){
      const videoID = this.VideoData['videoId'];
      return(
        <ImageBackground source={require('../../Images/speakerBackground2misombre.png')} style={{  flex:1, resizeMode:'stretch'}} > 
          <SafeAreaView  style={styles.container}>
            <WebView 
            /*source={{ html: `<iframe width='100%' height='500' 
                            src='https://www.youtube.com/embed/${videoID}' 
                            frameborder='0' allowfullscreen>
                            </iframe>` }}   
              */
              source={{uri:'https://www.youtube.com/embed/'+ this.VideoData.videoId}} 
              style={styles.SafeArea}
              javaScriptEnabled={true}
              scrollEnabled={true}
              allowsFullscreenVideo={true}
              automaticallyAdjustContentInsets={true}
              //allow="accelerometer; gyroscope"

            />
          </SafeAreaView>
        </ImageBackground>


        )
    }
}

const styles = StyleSheet.create({
  container: {

      flex: 1,
      //backgroundColor: "black",
      paddingVertical: 200,
  },

  videostyle: {
      //borderRadius : 8,
      //borderColor : 'white',
      //borderWidth : 2,
      alignSelf: 'stretch',
  },

  videotext: {
      flex: 1,
      flexDirection:"column",
      //marginTop: 20,
      marginVertical:15,
      marginLeft: 10,
  },

  videotitle: {
      color: "white",
      fontSize : 16,
      marginTop: 20,
      marginLeft: 10,

  },

  SafeArea: {
    flex:1,
    //backgroundColor: 'grey',
  },

  videoband: {
      color: "grey",
      fontSize : 12,
      marginLeft: 10,
  }
})