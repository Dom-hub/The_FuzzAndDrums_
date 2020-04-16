import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, ActivityIndicator, ImageBackground } from 'react-native'
import MusiqueItem from './MusiqueItem'
import { Image } from 'native-base'

export default class Music extends React.Component {

    render() {
      return (
        <React.Fragment>
          <View style={styles.container}>
            <ImageBackground
              source={require('../../Images/speakerBackground2misombre.png')} 
              style={{ flex:1, resizeMode: 'stretch' }}>
                  <View style={styles.container}>
                      <MusiqueItem/>
                  </View>
              </ImageBackground>
            </View>
          </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  image: {
    margin: 2,
    width: 100,
    height: 100
  }
});

