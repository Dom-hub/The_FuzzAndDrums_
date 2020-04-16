import React from 'react';
import { View, StyleSheet, Image,Text, TouchableOpacity, Linking, ScrollView, ImageBackground } from 'react-native';
import FadeIn from '../Components/FadeIn';

export default class About extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
          <ImageBackground
                source={require('../Images/speakerBackground2misombre.png')} 
                style={{flex:1, height:'100%', width :'100%'}}>
          <ScrollView>
                  <Image
                    style={styles.aboutImage}
                    source={require('../Images/clip.jpg')}/>

                  <View style={{height: 1, width: "100%", backgroundColor: "#fff"}}></View>

                  <View style={{opacity:0.9, backgroundColor: '#1B1B1B', marginTop: 30, marginBottom: 30 }}>
                    <Text style={styles.aboutText}>The Fuzz & Drums, c’est un duo rock-garage marseillais, des influences early 70's, 
                      un son radical et brut, porté par la voix et la guitare de Fuzz et la frappe et la voix de Drums.</Text>
                    <Text style={styles.aboutText}>Rock'n'roll duo with a lick of fuzz and a hint of drums.</Text>
                  </View>

                  <View style={{height: 1, width: "100%", backgroundColor: "#fff"}}></View>

                  <FadeIn>
                    <View style = {styles.aboutTouchableOpacity}>
                      <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.instagram.com/thefuzzanddrums/')}}>
                        <Image
                          style={styles.aboutIcon}
                          source={require('../Images/icon/instagram.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.facebook.com/the.fuzz.and.drums/')}}>
                        <Image
                          style={styles.aboutIcon}
                          source={require('../Images/icon/facebook.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://twitter.com/TheFuzzandDrums')}}>
                        <Image
                          style={styles.aboutIcon}
                          source={require('../Images/icon/twitter.png')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://m.me/the.fuzz.and.drums?fbclid=IwAR1vpX6vKoBtetUaNhlCsFISLo5VGjigLt5e23lMCTc9UE6_CduBkMDJjg8')}}>
                        <Image
                          style={styles.aboutIcon}
                          source={require('../Images/icon/messenger.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </FadeIn> 

                  <View style={{height: 1, width: "100%", backgroundColor: "#fff"}}></View>
                  </ScrollView>
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  scrollView: {
    flex:1
  },

  aboutImage: {
    height: 200,
    width: '100%',
    marginTop: 25
  },

  aboutText: {
    margin: 10,
    fontSize: 20,
    color: 'white',
    textAlign:"justify",
  },

  aboutIcon: {
    margin: 10,
    marginLeft: 15,
    height: 50,
    width: 50,
  },

  aboutTouchableOpacity: {
    flexDirection:'row',
    justifyContent:'center'
  }

});