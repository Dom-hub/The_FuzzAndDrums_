import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Container, Content } from 'native-base'

import Concerts from '../Components/Concert/Concerts';
import Home from '../Components/Home';
import Music from '../Components/Music/Music';
import Merchandising from '../Components/Merch/Merchandising';
import Newsletter from '../Components/Newsletter';
import News from '../Components/News/News';
import About from '../Components/About';
import DrawerTrigger from '../Components/DrawerTrigger';
import HeaderBackArrow from '../Components/HeaderBackArrow';
import Video from '../Components/Video/video';
import VideoDetail from '../Components/Video/videoDetail';
import Galerie from '../Components/Galerie/Galerie'
import PictureFullScreen from '../Components/Galerie/PictureFullScreen'
import {getStatusBarHeight} from 'react-native-status-bar-height';

///////////////////////////// DRAWER CONFIGURATION

const CustomDrawerContentComponent = (props) => (
  <Container style={styles.container}>
      <Image
          style={styles.drawerImage}
          source={require('../Images/fuzzanddrumsimageulule.png')}/>
    <Content style={styles.content}>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: getStatusBarHeight()
  },
  
  drawerImage: {
    flex: 0.4,
    resizeMode: 'stretch',
    height: undefined,
    width: undefined
  },

  content: {
    backgroundColor: 'black'
  }

})

//////////////////////////////// LES STACKNAVIGATORS

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
       title: 'Home',
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white',
       },
       headerStyle: {
        backgroundColor: 'black',
       }
    }}
})
 
const ConcertsStack = createStackNavigator({
  Concert: {
    screen: Concerts,
    navigationOptions: {
        title: 'Concerts',
        headerLeft: () => <HeaderBackArrow/>,

        headerRight: () =><DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white',
       },
       headerStyle: {
        backgroundColor: 'black',
       }
    }}
})

const MusicStack = createStackNavigator({
  Music: {
    screen: Music,
    navigationOptions: {
        title: 'Musique',
        headerLeft: () => <HeaderBackArrow/>,
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white',
       },
       headerStyle: {
        backgroundColor: 'black',
       }
    }}
})

const VideosStack = createStackNavigator({
  Video: {
    screen: Video,
    navigationOptions: {
      title: 'Videos',
      headerLeft: () => <HeaderBackArrow/>,
      headerRight: () => <DrawerTrigger/>,
      headerTitleStyle: {
        color: 'white',
     },
     headerStyle: {
      backgroundColor: 'black',
     }
    }},
    VideoDetail: {
    screen: VideoDetail,
    navigationOptions: {
      title: 'Player',
      headerRight: () => <DrawerTrigger/>,
      headerTitleStyle: {
        color: 'white',
     },
     headerStyle: {
      backgroundColor: 'black',
     },
     headerTintColor: '#8b0000'
    }
  }
})

const MerchandisingStack = createStackNavigator({
  Merch: {
    screen: Merchandising,
    navigationOptions: {
        title: 'Merch',
        headerLeft: () => <HeaderBackArrow/>,
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white',
       },
       headerStyle: {
        backgroundColor: 'black',
       }
    }}
})

const NewsletterStack = createStackNavigator({
  Newsletter: {
    screen: Newsletter,
    navigationOptions: {
        title: 'Newsletter',
        headerLeft: () => <HeaderBackArrow/>,
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white',
       },
       headerStyle: {
        backgroundColor: 'black',
       }
    }}
})

const AboutStack = createStackNavigator({
  About: {
    screen: About,
    navigationOptions: {
        title: 'About',
        headerLeft: () => <HeaderBackArrow/>,
        headerRight: () => <DrawerTrigger/>,
        headerTitleStyle: {
          color: 'white',
       },
       headerStyle: {
        backgroundColor: 'black',
       }
    }}
})

const NewsStack = createStackNavigator({
    News: {
      screen: News,
      navigationOptions: {
          title: 'News',
          headerLeft: () => <HeaderBackArrow/>,
          headerRight: () => <DrawerTrigger/>,
          headerTitleStyle: {
            color: 'white'
         },
         headerStyle: {
          backgroundColor: 'black',
         }
      }}
})

const GalerieStack = createStackNavigator ({
    Galerie: {
    screen: Galerie,
    navigationOptions: {
      title: 'Galerie',
      headerLeft: () => <HeaderBackArrow/>,
      headerRight: () => <DrawerTrigger/>,
      headerTitleStyle: {
        color: 'white'
     },
     headerStyle: {
      backgroundColor: 'black',
     }
  }},
    PictureFullScreen: {
    screen: PictureFullScreen,
    navigationOptions: {
      title: 'Galerie',
      headerRight: () => <DrawerTrigger/>,
      headerTitleStyle: {
        color: 'white'
    },
    headerStyle: {
      backgroundColor: 'black',
     },
     headerTintColor: '#8b0000'
  }}
})

//////////////////////////////// DRAWERNAGIVATOR

const DrawerNavigator = createDrawerNavigator(
  {
    One: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Home',
        drawerIcon:(
          <Image source={require('../Images/icon/hand.png')}
          style={ {height:24, width:24}}/>
        )
      }},
    Two: {    
      screen: NewsStack,
      navigationOptions: {
      title: 'News',
      drawerIcon:(
        <Image source={require('../Images/icon/newspaper.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Three: {    
      screen: ConcertsStack,
      navigationOptions: {
      title: 'Concerts',
      drawerIcon:(
        <Image source={require('../Images/icon/concert.png')}
        style={ {height:30, width:30}}/>
      )
    }},
    Four: {    
      screen: MusicStack,
      navigationOptions: {
      title: 'Music',
      drawerIcon:(
        <Image source={require('../Images/icon/audio.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Five: {    
      screen: VideosStack,
      navigationOptions: {
      title: 'Videos',
      drawerIcon:(
        <Image source={require('../Images/icon/video.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Six: {    
      screen: GalerieStack,
      navigationOptions: {
      title: 'Gallery',
      drawerIcon:(
        <Image source={require('../Images/icon/photos.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Seven: {    
      screen: MerchandisingStack,
      navigationOptions: {
      title: 'Merch',
      drawerIcon:(
        <Image source={require('../Images/icon/shirt.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Eight: {    
      screen: AboutStack,
      navigationOptions: {
      title: 'About',
      drawerIcon:(
        <Image source={require('../Images/icon/info.png')}
        style={ {height:24, width:24}}/>
      )
    }},
    Nine: {    
      screen: NewsletterStack,
      navigationOptions: {
      title: 'Newsletter',
      drawerIcon:(
        <Image source={require('../Images/icon/newsletter.png')}
        style={ {height:24, width:24 }}/>
      )
    }}
  },
  {
    contentOptions: {
      inactiveTintColor: 'white',
      activeTintColor: '#8b0000',
      activeBackgroundColor:'#1B1B1B',
      labelStyle: {
        fontSize:18,
        fontWeight:'bold'
      },
      iconContainerStyle: {
        opacity: 1
      }
    },

    drawerPosition: "right",
    drawerBackgroundColor: "black",
    initialRouteName: 'One',
    backBehavior: 'history',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'

  }
);

const App = createSwitchNavigator({
  Main: DrawerNavigator
});

export default createAppContainer(App);