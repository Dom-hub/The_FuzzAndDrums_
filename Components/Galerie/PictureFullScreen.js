import React from 'react'
import { ActivityIndicator, StyleSheet, View, Image, ImageBackground } from 'react-native'
import { getPhotoFullScreen } from '../../API/FuzzApi'

class PictureFullScreen extends React.Component {

  constructor(props) {
  super(props)
  this.state = {
    photo: undefined,
    isLoading: true
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

componentDidMount()
{
  getPhotoFullScreen(this.props.navigation.state.params.idPhoto).then(data => {
    this.setState({
      photo: data,
      isLoading:false
    })
  })
}

_displayPhotoFullScreen() {
  const {photo} = this.state
   if (photo != undefined) {
     return (
       <View style={styles.scrollview_container}>
       <Image
        style={styles.image}
        source={{uri: photo.images[0].source}}/>
       </View>
     )
   }
 }

  render()
  {
    return(
      <ImageBackground
        style={styles.main_container}
        source={require('../../Images/speakerBackground2misombre.png')}>
        {this._displayLoading()}
        {this._displayPhotoFullScreen()}
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },

  background_container: {
    flex:1
  },

  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  scrollview_container:{
    flex:1
  },

  image: {
    flex:1,
    resizeMode:'contain'
  }
})





export default PictureFullScreen
