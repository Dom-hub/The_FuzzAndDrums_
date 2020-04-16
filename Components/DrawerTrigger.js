import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import * as Animatable from 'react-native-animatable';
import { View } from 'native-base';

class DrawerTrigger extends React.Component {

  render() {
    return (

      <View style={{ flexDirection: 'row' }} >

        <TouchableOpacity style={styles.trigger} onPress={() => this.props.navigation.navigate("Newsletter")}>
          <Ionicons name={'md-mail'} size={28} color={'#8b0000'} />
        </TouchableOpacity>

        <Animatable.View animation="bounce" delay={0} duration={1500} iterationDelay={8000} iterationCount='infinite' >
          <TouchableOpacity style={styles.trigger} onPress={() => { this.props.navigation.dispatch(DrawerActions.openDrawer()) }}>
            <Ionicons name={'md-menu'} size={30} color={'#8b0000'} />
          </TouchableOpacity>
        </Animatable.View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginRight: 27,
    height: undefined,
    width: undefined,
  }
});

export default withNavigation(DrawerTrigger);
