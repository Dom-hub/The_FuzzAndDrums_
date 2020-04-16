import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Hyperlink from 'react-native-hyperlink'
import 'moment-timezone';
import moment from 'moment';
import 'moment/src/locale/fr';
import * as Animatable from 'react-native-animatable';

export default class NewsItem extends React.Component {

  render() {
    const feed = this.props._feed
    const dateToFormat = feed.created_time;   
    if (!this.props._feed.full_picture)
    return (    
      <Animatable.View animation="lightSpeedIn" delay={0} duration={2000} iterationCount={1} direction="alternate">
          <View style={styles.textView}>
            <View style={{ backgroundColor: 'black', height:2, width: '100%', marginBottom: 1}}></View>
              <View style={{ flexDirection:'row' }}>

                  <View style={{margin:10,  width: '100%', height: '100%'}}>
                      <Text style={{ marginBottom:10, fontSize:13, fontStyle:'italic', fontWeight:'normal', color:'#808080', textAlign:'left' }}>Publié par :</Text>
                      <Text style={{ marginBottom:10, fontSize:16, fontWeight:'bold', color:'#8b0000', textAlign:'left' }}>{feed.from.name}</Text>
                  </View>

                  <View style={{marginLeft:-10, margin:10, position:'absolute', width:'100%', height:'100%'}}>
                    <Text style={{marginBottom:10, fontStyle: 'italic', fontSize:13, fontWeight:'normal', color:'#808080', textAlign:'right'}}>Date et heure de publication :</Text>
                    <Text style={{marginBottom:10, fontSize:13, fontWeight:'normal',color:'white', textAlign:'right',}}>{moment(dateToFormat).format('LLL')}</Text>
                  </View>
                </View>

                <View>
                <Hyperlink linkDefault={ true } linkStyle={ { color: '#2980b9', fontSize: 20 } }>
                  <Text style={styles.list_body}>{feed.message}</Text>
                  </Hyperlink>
                </View>
                  
              <View style={{backgroundColor:'black', height:2, width:'100%', marginTop:15}}></View>
          </View>

          <View style={{width:'100%', marginTop:20}}></View>
      </Animatable.View>
    )
    else{
      return (
        <Animatable.View animation="bounceInRight" delay={0} duration={2000} iterationCount={1} direction="alternate">
          <View style={styles.textView}>
            <View style={{backgroundColor: 'black', height: 2, width: '100%', marginBottom: 1}}></View>

                <View style={{ flexDirection:'row' }}>

                  <View style={{ margin:10, width: '100%', height: '100%'}}>
                    <Text style={{ marginBottom: 10, fontSize: 13, fontStyle:'italic', fontWeight: 'normal', color: '#808080', textAlign: 'left' }}>Publié par :</Text>
                    <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: 'bold', color: '#8b0000', textAlign: 'left' }}>{feed.from.name}</Text>
                  </View>
                  <View style={{ marginLeft: -10, fontStyle:'italic', margin: 10, position:'absolute', width:'100%', height:'100%' }}>
                    <Text style={{marginBottom:10, fontStyle: 'italic', fontSize:13, fontWeight:'normal', color:'#808080', textAlign:'right'}}>Date et heure de publication :</Text>
                    <Text style={{ marginBottom: 10, fontSize: 13, fontWeight:'normal', color: 'white', textAlign:'right' }}>{moment(dateToFormat).format('LLL')}</Text>
                  </View>

                </View>

                <View>
                  <Hyperlink linkDefault={ true } linkStyle={{ color: '#2980b9', fontSize: 20 }}>
                    <Text style={styles.list_body}>{feed.message}</Text>
                  </Hyperlink>
                </View>
        
                <Image
                  style={styles.merchImage}
                  source={{uri: feed.full_picture}}
                />

                <View style={{backgroundColor:'black', height:2, width:'100%', marginTop:1}}></View>
            </View>
          <View style={{width:'100%', marginTop:20}}></View>
        </Animatable.View>
    )
  }}
}

const styles = StyleSheet.create({

  touchableOpacity: {
    flex:1,
    flexDirection:'row',
    marginTop: 5,
    alignItems:'center',
    opacity:0.9
  },

  merchImage:{
    height:300, 
    width:'100%',
    marginTop:-20
  },

  textView:{
    width: '100%',
    flexDirection: 'column',
    alignItems: 'baseline',
    backgroundColor: '#1B1B1B',
    opacity: 0.9
  },

  list_body2: { 
    marginTop: 10,
    marginBottom: 10, 
    fontSize: 13,
    fontWeight: 'normal',
    color: 'white', 
    textAlign: 'right'
  },

  list_title: { 
    marginTop:10,
    marginBottom:10, 
    fontSize:13,
    fontWeight:'normal',
    color:'white', 
    textAlign:'justify', 
    alignSelf: 'flex-end'
  },

  list_body: { 
    marginLeft:5,
    marginBottom:30, 
    fontSize:20,
    fontWeight:'normal',
    color:'white',
    textAlign:'left'
  },

  textDescription:{
    color:'white',
    fontSize:16,
    fontWeight:'bold'
  }

});

