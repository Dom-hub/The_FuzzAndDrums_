import React from 'react'
import {ActivityIndicator,View,FlatList, ImageBackground, StyleSheet } from 'react-native'
import GalerieItem from './GalerieItem'
import { getAlbumsPhotosFromApi, getUploadePhotosFromApi } from '../../API/FuzzApi'

class Galerie extends React.Component {

  constructor(props)
{
  super(props)
  this._allAlbums = [],
  this._allEachAlbums=[],
  this._onlyPictureTable=[],
  this.state={
    photos: [],
    isLoading: true, // A l'ouverture de la vue, on affiche le chargement, le temps de récupérer le détail du film
  }
}

_displayPictures(){
  getAlbumsPhotosFromApi().then(data => {

    this._allAlbums=data.data

    for (var i=0; i<3; i++){

        this._allEachAlbums[i]=this._allAlbums[i].photos.data;
  }
  var l=0;
  for (var j=0; j<this._allEachAlbums.length; j++)
  {
    for (var k=0; k<this._allEachAlbums[j].length; k++)
    {

      this._onlyPictureTable[l]= this._allEachAlbums[j][k]
      l++;
    }
  }


this.setState({ photos:this._onlyPictureTable, isLoading: false})


})
}

_displayLoading() {
 if (this.state.isLoading) {
   // Si isLoading vaut true, on affiche le chargement à l'écran
   return (
     <View style={styles.loading_container}>
       <ActivityIndicator size='large' />
     </View>
   )
 }
}

  _displayPictureFullScreen = (idPhoto) => {
      console.log("Display film with id " + idPhoto)
      this.props.navigation.navigate("PictureFullScreen", {idPhoto: idPhoto})

    }

  render() {

    return (

      <ImageBackground
        source={require('../../Images/speakerBackground2misombre.png')}
        style={styles.background_container}>
        {this._displayLoading()}
        {this._displayPictures()}

       <FlatList
        numColumns = {2}
        columnWrapperStyle={styles.wrapper_style}
        data={this.state.photos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) =>
        <GalerieItem
          photo={item}
          displayPictureFullScreen={this._displayPictureFullScreen}/>}
        />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  background_container: {
    flex:1
  },

  main_container: {
    flexDirection:'row',
    flexWrap: 'wrap'
  },

  image: {
    height: 100,
    width:92,
    marginLeft:5,
    marginRight:5,
    marginBottom:5,
    marginTop:5
  },

  wrapper_style: {
    flexWrap:'wrap'
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
})

export default Galerie
