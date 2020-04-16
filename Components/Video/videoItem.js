import React, {Component, useState }  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';

export default class VideoItem extends Component{

    render(){
        const {videodetail, DisplayVideo} = this.props; 
        return(
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection:"column"}} onPress={()=> DisplayVideo(videodetail)} >
                    <Image style={styles.videostyle}
                            source={{uri:videodetail.thumbn}} 
                    />   
                    <View style={styles.videotext}> 
                            <Text style={styles.videotitle}> {videodetail.title} </Text>
                            <Text style={styles.videoband}> {videodetail.desc} </Text>
                    </View> 
            </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#1B1B1B',
        opacity: 0.7
    },

    videostyle: {
        alignSelf: 'stretch',
        height: 250
    },

    videotext: {
        flex: 1,
        flexDirection:"column",
        marginTop:5,
        marginBottom:20,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },

    videotitle: {
        color: "white",
        fontSize : 16
    },

    videoband: {
        color: "white",
        fontSize : 12
    }
})