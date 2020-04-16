import React from 'react'
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, Button, Linking } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { withTheme } from 'react-native-elements';

const iTunesStore = {name: 'iTunesStore', source: "../../Images/Players/itunesStore.png", type: 'Download',
                  url: "https://music.apple.com/fr/album/1448349313?app=itunes&cId=none&ign-itscg=30440&ign-itsct=catchall_p1&ign-mpt=uo%3D4&lId=1576648&sr=1&src=Linkfire"};
const amazonmusic = {name: 'amazonmusic', source: "../../Images/Players/amazon.png", type: 'Download',
                  url: "https://www.amazon.fr/Tapes-from-the-Garage/dp/B07MR783JW?tag=imusician05-21&ie=UTF8&linkCode=as2&ascsubtag=208f7fefdbc94fe9e9c5340b1508c380"}
const spotify = {name: 'spotify', source: "../../Images/Players/spotify.png", type: 'Play',
                  url: "https://open.spotify.com/album/7xHR83KymceW0tQbM25mVe"}
const appleMusic = {name: 'appleMusic', source: "../../Images/Players/appleMusic.png", type: 'Play',
                  url: "https://music.apple.com/fr/album/1448349313?app=music&lId=1576648&cId=none&src=Linkfire&sr=4&ign-itsct=catchall_p4&ign-itscg=30440&ign-mpt=uo%3D4"}
const deezer = {name: 'deezer', source: "../../Images/Players/deezer.png", type: 'Play',
                  url: "https://www.deezer.com/us/album/83012112?app_id=140685&utm_source=lf&utm_content=208f7fefdbc94fe9e9c5340b1508c380"}
const napster = {name: 'napster', source: "../../Images/Players/napster.png", type: 'Play',
                  url: "https://us.napster.com/artist/the-fuzz/album/tapes-from-the-garage"}
const tidal = {name: 'tidal', source: "../../Images/Players/tidal.png", type: 'Play',
                  url: "https://tidal.com/browse/album/101675013?awc=17117_1585160432_53ed4d92f945dac354d0399d48bfaf2d&utm_source=AWIN&utm_medium=316451&utm_campaign=Linkfire&utm_term=Generic_TextLink"}


class MusiqueItem extends React.Component {

    render() {
      return(
      <SafeAreaView>
        <ImageBackground source={require('../../Images/speakerBackground2misombre.png')} style={{ flex:1, resizeMode: 'stretch' }}>
          <Image 
            style={styles.image}
            source={require("../../Images/pochettealbumfuzzanddrums.jpg")}
          />
       
          <ScrollView style={{flex: 1}}>
           
                                                      {/*iTunesStore ITEM*/}

              <TouchableOpacity onPress={() => Linking.openURL(iTunesStore.url)}>
                <Animatable.View animation="flipInX" delay={0} duration={1000} iterationCount={1} direction="alternate" View style={styles.containerSafe}>
                  <ImageBackground style={styles.imageBackgroundStyle}>
                    <Image source={require("../../Images/Players/itunesStore.png")} style={styles.imageOnTop}/>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

                                                      {/*AmazonMusic ITEM*/} 

              <TouchableOpacity onPress={() => Linking.openURL(amazonmusic.url)}>
                <Animatable.View animation="flipInX" delay={500} duration={1000} iterationCount={1} direction="alternate" View style={styles.containerSafe}>
                <ImageBackground style={styles.imageBackgroundStyle}>
                  <Image source={require("../../Images/Players/amazon.png")} style={styles.imageOnTop}/>
                  </ImageBackground>
                </Animatable.View> 
              </TouchableOpacity>

                                                      {/*Spotify ITEM*/} 

              <TouchableOpacity onPress={() => Linking.openURL(spotify.url)}>                                                              
                <Animatable.View animation="flipInX" delay={1000} duration={1000} iterationCount={1} direction="alternate" View style={styles.containerSafe}>
                  <ImageBackground style={styles.imageBackgroundStyle}>
                    <Image source={require("../../Images/Players/spotify.png")} style={styles.imageOnTop}/>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

                                                      {/*AppleMusic ITEM*/} 

              <TouchableOpacity onPress={() => Linking.openURL(appleMusic.url)}>
                <Animatable.View animation="flipInX" delay={1500} duration={1000} iterationCount={1} direction="alternate" View style={styles.containerSafe}>
                <ImageBackground style={styles.imageBackgroundStyle}>
                    <Image source={require("../../Images/Players/appleMusic.png")} style={styles.imageOnTop}/>
                    </ImageBackground>
                  </Animatable.View>
              </TouchableOpacity>  

                                                    {/*DEEZER ITEM*/}

              <TouchableOpacity onPress={() => Linking.openURL(deezer.url)}>                                       
                <Animatable.View animation="flipInX" delay={2000} duration={1000} iterationCount={1} direction="alternate" View style={styles.containerSafe}>
                <ImageBackground style={styles.imageBackgroundStyle}>
                  <Image source={require("../../Images/Players/deezer.png")} style={styles.imageOnTop}/>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

                                                      {/*NAPSTER ITEM*/} 

              <TouchableOpacity onPress={() => Linking.openURL(napster.url)}>                                                 
                <Animatable.View animation="flipInX" delay={2500} duration={1000} iterationCount={1} direction="alternate" View style={styles.containerSafe}>
                <ImageBackground style={styles.imageBackgroundStyle}>
                  <Image source={require("../../Images/Players/napster.png")} style={styles.imageOnTop}/>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

                                                      {/*TIDAL ITEM*/}

              <TouchableOpacity onPress={() => Linking.openURL(tidal.url)}>
                <Animatable.View animation="flipInX" delay={3000} duration={1000} iterationCount={1} direction="alternate" View style={styles.containerSafe}>
                <ImageBackground style={styles.imageBackgroundStyle}>
                  <Image source={require("../../Images/Players/tidal.png")} style={styles.imageOnTop}/>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

          </ScrollView>
        </ImageBackground>
      </SafeAreaView>  
    );
  }
}

const styles = StyleSheet.create({

  imageOnTop: {
    flex: 2,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },

  containerSafe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
    marginTop: 2,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    elevation: 20
  },

  imageBackgroundStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    opacity: 0.85
  },

  image: {
    flex: 2,
    justifyContent: 'flex-start',
    width: undefined, 
    height: undefined,
    resizeMode: 'stretch',
  }

});

export default MusiqueItem