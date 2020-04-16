import React from 'react'
import { StyleSheet, View, Text, Image, Linking, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import 'moment-timezone';
import moment from 'moment';
import 'moment/src/locale/fr'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';



export default class ConcertItem extends React.Component {
  render() {

/////////////// COPIE DU TABLEAU JSON DANS CONSTANTE
    const events = this.props._events;

/////////////// TRAITEMENT ERREURS RECEPTION DATA
    if (events.place == undefined) {
      global.placeName = ""
    } else {
      global.placeName =
        events.place.name
    };

/////////////// CONSTANTES DES DATES
    const StartDateToFormat = events.start_time;
    const EndDateToFormat = events.end_time;

/////////////// CONSTANTES DE LOCALISATION
    const placeNameForUrl = placeName.replace(/ /g, "+");
    const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + placeNameForUrl;

/////////////// CONSTANTES DE PAGE FACEBOOK EVENTS
    const eventId = events.id;
    const facebookUrl = 'https://facebook.com/events/' + eventId;

    return (

      <Animatable.View animation="bounceIn" delay={0} duration={2000} iterationCount={1} direction="alternate" >
        <View style={styles.textView}>
          <View style={{ backgroundColor: 'black', height: 2, width: '100%', marginBottom: 1, alignContent: 'center' }}></View>



                                            {/* SECTION 1 : TITRE et @LOCALISATION  */}

          <View style={{ flexDirection: 'column', alignItems: "center", width: '100%' }}>

            <View style={{ margin: 10, width: '100%' }}>
              <Text style={{ textDecorationLine: 'underline', marginBottom: 10, fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>{events.name}</Text>
            </View>

            <View style={{ marginTop: -17, width: '100%' }}>
              <Text style={{ marginBottom: 10, fontSize: 25, fontWeight: 'normal', color: 'white', textAlign: 'center' }}>@{placeName}</Text>
            </View>



                                             {/* SECTION 2 : DATES ET HEURES  */}

            <View style={{ marginTop: 5, marginBottom: 5, flexDirection: 'row', alignContent: "center" }}>

              <View style={{ justifyContent: 'space-evenly', margin: 10 }}>
                <Text style={{ marginBottom: 10, fontSize: 15, fontWeight: 'normal', color: '#808080', textAlign: 'center' }}>Date et heure de début:</Text>
                <Text style={{ marginBottom: 1, fontSize: 15, fontWeight: 'normal', color: 'white', textAlign: 'center' }}>{moment(StartDateToFormat).format('LLL')}</Text>
                <Text style={{ fontSize: 13, fontWeight: 'normal', color: 'white', textAlign: 'center' }}>{moment(StartDateToFormat).fromNow()}</Text>
              </View>

              <View style={{ justifyContent: 'space-evenly', marginLeft: 30, margin: 10, }}>
                <Text style={{ marginBottom: 10, fontSize: 15, fontWeight: 'normal', color: '#808080', textAlign: 'center' }}>Date et heure de fin:</Text>
                <Text style={{ marginBottom: 1, fontSize: 15, fontWeight: 'normal', color: 'white', textAlign: 'center' }}>{moment(EndDateToFormat).format('LLL')}</Text>
                <Text style={{ fontSize: 13, fontWeight: 'normal', color: 'white', textAlign: 'center' }}>{moment(EndDateToFormat).fromNow()}</Text>
              </View>

            </View>



                                              {/* SECTION 3 : BOUTONS  */}

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>

              <View style={[{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', width: 10, height: 60, alignItems: 'center' }]}>
                <TouchableOpacity style={styles.touchableOpacityStyle}
                  activeOpacity={.5} onPress={() => Linking.openURL(mapsUrl)}>
                  <Ionicons style={{ justifyContent: 'space-between', marginRight: -10 }} name={'md-navigate'} size={23} color={'white'} />
                  <Text style={styles.touchableButtonsTextStyle}>ITINERAIRE</Text>
                </TouchableOpacity>
              </View>

              <View style={[{ flex: 1, justifyContent: 'space-evenly', flexDirection: 'row', width: 5, height: 60, alignItems: 'center' }]}>
                <TouchableOpacity style={styles.touchableOpacityStyle}
                  activeOpacity={.5} onPress={() => Linking.openURL(facebookUrl)}>
                  <Ionicons style={{ justifyContent: 'space-between', marginRight: -10 }} name={'md-information-circle'} size={23} color={'white'} />
                  <Text style={styles.touchableButtonsTextStyle}>DETAILS</Text>
                </TouchableOpacity>
              </View>

            </View>


          </View>

          <View style={{ backgroundColor: 'black', height: 2, width: '100%' }}></View>

        </View>
        <View style={{ width: '100%', marginTop: 20 }}></View>
      </Animatable.View>

    )
  }
}


const styles = StyleSheet.create({

  textView: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1B1B1B',
    opacity: 0.9
  },
  touchableOpacityStyle: {

    flexDirection: 'row',
    width: 120,
    height: 40,
    backgroundColor: '#8b0000',
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  touchableButtonsTextStyle: {

    color: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center'

  }


});

