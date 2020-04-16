import React from 'react';
import { View, StyleSheet, FlatList, ImageBackground } from 'react-native';
import merchDetail from './MerchandasingDetail'
import MerchandasingItem from './MerchandasingItem'

export default class Merchandising extends React.Component {

  render() {
    return (

        <View style={styles.container}>
          <ImageBackground
            source={require('../../Images/speakerBackground2misombre.png')} 
            style={{flex:1, resizeMode:'stretch'}} >
              <FlatList
                data={merchDetail}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <MerchandasingItem merch={item} />}
               />
           </ImageBackground>
        </View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:'#1B1B1B'
  }
});
