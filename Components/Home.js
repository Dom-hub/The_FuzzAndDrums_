import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import FadeIn from '../Components/FadeIn';
import * as Animatable from 'react-native-animatable';

export default class Home extends React.Component {

  render() {
    return (

      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../Images/speakerBackground2misombre.png')} style={{ flex:1, resizeMode: 'stretch' }}>
        <FadeIn>
          <ScrollView showsVerticalScrollIndicator={false} >

                                                      {/*NEWS ITEM*/}

              <TouchableOpacity   onPress={() => this.props.navigation.navigate("News")} >
                <Animatable.View animation="flipInX" delay={0} duration={800} iterationCount={1} direction="alternate" style={styles.containerSafe}>
                  <ImageBackground source={require('../Images/image2.png')} style={styles.imageBackgrounudStyle} >
                    <View style={{flexDirection:'row'}}>
                      <Text animation="shake" duration={15000} iterationCount='infinite' style={styles.containerTextu}>News</Text>
                    </View>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

                                                      {/*CONCERTS ITEM*/} 

              <TouchableOpacity onPress={() => this.props.navigation.navigate("Concert")}>
                <Animatable.View animation="flipInX" delay={300} duration={800} iterationCount={1} direction="alternate"  style={styles.containerSafe}>
                  <ImageBackground source={require('../Images/cover.jpg')} style={styles.imageBackgrounudStyle} >
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.containerTextu}>Concerts</Text>
                      </View> 
                  </ImageBackground>
                </Animatable.View> 
              </TouchableOpacity>

                                                      {/*MUSIC ITEM*/} 

              <TouchableOpacity onPress={() => this.props.navigation.navigate("Music")}>                                                               
                <Animatable.View animation="flipInX" delay={600} duration={800} iterationCount={1} direction="alternate" style={styles.containerSafe}>
                  <ImageBackground source={require('../Images/pochettealbumfuzzanddrums.jpg')} style={styles.imageBackgrounudStyle} >
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.containerTextu}>Music</Text>
                      </View>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

                                                      {/*VIDEOS ITEM*/} 

              <TouchableOpacity onPress={() => this.props.navigation.navigate("Video")}>
              <Animatable.View animation="flipInX" delay={900} duration={800} iterationCount={1} direction="alternate" style={styles.containerSafe}>
                  <ImageBackground source={require('../Images/boatpic.jpg')} style={styles.imageBackgrounudStyle} >
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.containerTextu}>Videos</Text>
                      </View>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>  

                                                    {/*GALERIE US ITEM*/}

              <TouchableOpacity onPress={() => this.props.navigation.navigate("Galerie")}>                                        
                <Animatable.View animation="flipInX" delay={1200} duration={800} iterationCount={1} direction="alternate" style={styles.containerSafe}>
                  <ImageBackground source={require('../Images/france2concert.png')} style={styles.imageBackgrounudStyle}>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.containerTextu}>Gallery</Text>
                      </View>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

                                                      {/*MERCH ITEM*/} 

              <TouchableOpacity onPress={() => this.props.navigation.navigate("Merch")}>                                                   
                <Animatable.View animation="flipInX" delay={1500} duration={800} iterationCount={1} direction="alternate" style={styles.containerSafe}>
                  <ImageBackground source={require('../Images/mediators.jpg')} style={styles.imageBackgrounudStyle} >
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.containerTextu}>Merch</Text>
                      </View>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>

                                                      {/*ABOUT US ITEM*/}

              <TouchableOpacity onPress={() => this.props.navigation.navigate("About")}>                                        
                <Animatable.View animation="flipInX" delay={1800} duration={800} iterationCount={1} direction="alternate" style={styles.containerSafe}>
                  <ImageBackground source={require('../Images/image1.png')} style={styles.imageBackgrounudStyle}>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.containerTextu}>About Us</Text>
                      </View>
                  </ImageBackground>
                </Animatable.View>
              </TouchableOpacity>


          </ScrollView>
          </FadeIn>
        </ImageBackground>
      </SafeAreaView>  

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor:'#1B1B1B'
  },

  containerSafe: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    marginTop:10,
    width:'100%',
    height:150,
    flexDirection:'row',
    borderTopWidth: 0,
    elevation: 20
  },

  containerTextu: {
    zIndex:0,
    fontVariant:'small-caps',
    fontSize:60,
    fontFamily:'Roboto',
    color:'#8b0000',
    fontWeight: 'bold', 
    fontVariant:[ 'small-caps' ],
    opacity:1,
    marginLeft:5,
    textShadowColor: '#8b0000',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 13
  },

  imageBackgrounudStyle: {
    width: '100%', 
    height: '100%', 
    opacity:0.9
  }

});