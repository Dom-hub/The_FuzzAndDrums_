import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import * as Animatable from 'react-native-animatable';

class HeaderBackArrow extends React.Component {

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.trigger}
          onPress={() => this.props.navigation.navigate("Home")}
        >
        <Ionicons
            name={'md-arrow-back'}
            size={24}
            color={'#8b0000'}
        />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginLeft: 15,
    marginRight: -15,
    height:undefined,
    width:undefined
  }
});

export default withNavigation(HeaderBackArrow);
