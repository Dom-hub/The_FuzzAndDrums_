import React from 'react';
import { addEmailToDB } from '../API/FuzzApi';
import { View, TextInput, StyleSheet, ImageBackground, Alert, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class Newsletter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: null,
      valid: false
    }
  }

  onHandleEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ email: text })
      this.setState({ email: false })
    }
    else {
      this.setState({ email: text })
      this.setState({ valid: true })
    }
  }

  closeAndThrowAlertForSuccess() {
    if (this.state.email == null) {
      Alert.alert(
        'Oops',
        'Veuillez entrer une adresse e-mail 🙂',
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      );
    } else {
      if (this.state.valid == false) {
        Alert.alert(
          'Oops',
          "L'adresse e-mail indiqué n'est pas valide 😞",
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        );
      }
      else {
        addEmailToDB(this.state.email);
        this.textInput.clear()
        this.state.email = null;
        this.setState({ valid: false })
        Alert.alert(
          'Merci !',
          'Nous vous tiendrons informé par e-mail des dernières news 🙂',
          [
            { text: 'OK', onPress: () => { this.props.navigation.navigate("Home") } },
          ],
          { cancelable: false }
        );
      }
    }
  }

  closeAndThrowAlertForCancel() {
    this.textInput.clear()
    this.state.email = null;
    this.props.navigation.navigate("Home");
  }

  render() {
    return (

      <View style={styles.container} >

        <ImageBackground source={require('../Images/speakerBackground2misombre.png')} style={{ flex: 1, height: '100%', width: '100%' }} >

          <Animatable.Image animation="bounceInDown" delay={0} duration={1500} iterationCount={1} style={{ flex: 1, height: 300, width: '100%', position: 'absolute' }} source={require('../Images/fuzzblanctransp.png')} />

          <View style={{ opacity: 0.9, backgroundColor: '#1B1B1B', marginTop: 156, justifyContent: 'center' }}>
            <Text style={{ marginTop: 20, color: 'white', fontSize: 20, alignSelf: "center", }}>Abonne-toi à notre Newsletter </Text>
            <Text style={{ color: 'white', fontSize: 20, alignSelf: "center", }}>et reçois en exclus </Text>
            <Text style={{ marginBottom: 20, color: 'white', fontSize: 20, alignSelf: "center", }}>nos futurs tracks, events et goodies!</Text>
          </View>

          <TextInput
            ref={input => { this.textInput = input }}
            style={styles.textInput}
            placeholder='Ton e-mail'
            onChangeText={this.onHandleEmail}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom:-70 }}>

            <View style={[{ width: "35%", alignItems: 'center'}]}>
              <TouchableOpacity style={styles.touchableOpacitySubmitButtonStyle}
                activeOpacity={.5} onPress={() => this.closeAndThrowAlertForSuccess()}>
                <Text style={styles.touchableButtonsTextStyle}>S'ABONNER</Text>
              </TouchableOpacity>
            </View>

            <View style={[{ width: "35%",  alignItems: 'center'}]}>
              <TouchableOpacity style={styles.touchableOpacitySubmitButtonStyle}
                activeOpacity={.5} onPress={() => this.closeAndThrowAlertForCancel()}>
                <Text style={styles.touchableButtonsTextStyle}>RETOUR</Text>
              </TouchableOpacity>
            </View>

          </View>

            <View style={styles.aboutTouchableOpacity}>
              <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/thefuzzanddrums/') }}>
                <Image
                  style={styles.aboutIcon}
                  source={require('../Images/icon/instagram.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com/the.fuzz.and.drums/') }}>
                <Image
                  style={styles.aboutIcon}
                  source={require('../Images/icon/facebook.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { Linking.openURL('https://twitter.com/TheFuzzandDrums') }}>
                <Image
                  style={styles.aboutIcon}
                  source={require('../Images/icon/twitter.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { Linking.openURL('https://m.me/the.fuzz.and.drums?fbclid=IwAR1vpX6vKoBtetUaNhlCsFISLo5VGjigLt5e23lMCTc9UE6_CduBkMDJjg8') }}>
                <Image
                  style={styles.aboutIcon}
                  source={require('../Images/icon/messenger.png')}
                />
              </TouchableOpacity>
            </View>

        </ImageBackground>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,

    alignItems: 'center',
    // justifyContent: 'center'
  },
  textInput: {

    height: 50,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#1B1B1B',
    borderColor: 'white',
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 50,
    margin: 20,
    marginTop: 30,
    marginBottom: 30,
    opacity: 0.8,
  },

  aboutTouchableOpacity: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  aboutIcon: {

    marginRight: 15,
    marginLeft: 15,
    height: 50,
    width: 50,
  },

  touchableOpacitySubmitButtonStyle: {

    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    width: '100%',
    height: '25%',
    backgroundColor: '#8b0000',
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#fff',
    justifyContent: 'center'
  },

  touchableButtonsTextStyle: {

    color: '#fff',
    // fontSize:''
    textAlign: 'center',
  }

});

// <Image style={{ marginBottom:30, flex: 1, width:'100%', height:'100%'}} source={require('../Images/Fuzzanddrumslogo.jpeg')} />