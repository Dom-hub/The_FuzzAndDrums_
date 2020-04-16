import React from 'react'
import { StyleSheet, View, Text, Image,TouchableOpacity, Linking } from 'react-native'

export default class MerchandasingItem extends React.Component {
  render() {
    const merch = this.props.merch
    return (
        <TouchableOpacity 
          style={styles.touchableOpacity}
          onPress={() => Linking.openURL(merch.url)}>
            <View>
              <Image 
                style={styles.merchImage}
                source={{uri: merch.imageUrl}}
              />
            </View>
            <View style={styles.textView}>
              <Text style={styles.title_text}>{merch.title} </Text>
              <Text style={styles.textDescription}>{merch.description}</Text>
              <Text style={styles.textPrice}>{merch.price}</Text> 
            </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({

  touchableOpacity: {
    opacity: 0.9,
    flex: 1,
    flexDirection: 'row',
    marginTop: 5, 
    alignItems: 'center',
    backgroundColor:'#1B1B1B'
  },

  merchImage:{
    height:100, 
    width:100
  },

  textView:{
    marginLeft: 10,
    marginRight: 10,
    flexDirection:'column',
    alignItems: 'baseline'
  },

  title_text: { 
    marginTop: 10,
    marginBottom: 10, 
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },

  textDescription:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },

  textPrice:{
    color:'#8b0000',
    fontWeight:'bold',
    marginBottom:10,
    fontWeight: 'bold'
  }

});

