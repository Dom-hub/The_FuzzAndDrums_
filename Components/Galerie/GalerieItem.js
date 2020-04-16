import React from 'react'
import {Dimensions,StyleSheet, Image, TouchableOpacity } from 'react-native'
import FadeIn from './FadeIn'

class GalerieItem extends React.Component {

  render() {
  const {photo, displayPictureFullScreen} = this.props
    return (
      <FadeIn>
        <TouchableOpacity
          style={styles.imagewrap}
          onPress={() => displayPictureFullScreen(photo.id)}>
          <Image
            style={styles.image}
            source = {{uri: photo.images[0].source}}/>
        </TouchableOpacity>
        </FadeIn>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 250
  },
  photo: {
    height: 100,
    width:92,
    marginLeft:5,
    marginRight:5,
    marginBottom:5,
    marginTop:5,
  },
  image:{
    flex:1,
    width:null,
    alignSelf: "stretch",
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    height: (Dimensions.get('window').height/3)-12,
    width: (Dimensions.get('window').width/2)-4,
    backgroundColor: '#fff'
  }
})

export default GalerieItem
