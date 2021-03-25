import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Sound from 'react-native-sound';
import ufls from './audio/ufls.mp3';

Sound.setCategory('Playback');

var bgsound = new Sound(ufls, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('duration in seconds: ' + bgsound.getDuration() + 'number of channels: ' + bgsound.getNumberOfChannels());
});

class UFloadingScreen extends Component {
  state = {
    LogoAnimate: new Animated.Value(0),
    LogoText: new Animated.Value(0),
  };

  componentDidMount() {
    const {LogoAnimate, LogoText} = this.state;
    const navigation = this.props.navigation;
    Animated.parallel([
      Animated.spring(LogoAnimate, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 500,
        useNativeDriver: false,
      }).start(),

      Animated.timing(LogoText, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => navigation.navigate('UFHomeScreen'), 5000);
    });
  }

  render() {
    

    bgsound.setVolume(50);
 
    bgsound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });

    return (
      <ImageBackground source={require("./images/UF_BGLoading3-02.png")} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.LogoAnimate,
            top: this.state.LogoAnimate.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
          }}>
          <Image style={styles.dragonlogo} source={require("./images/loading1.gif")} />
        </Animated.View>
        <Animated.View style={{opacity: this.state.LogoText}}>
          <Text style={styles.logoText}> Loading . . . </Text>
        </Animated.View>
      </View>
      </ImageBackground>
    );
  }
}

export default UFloadingScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragonlogo: {
    marginTop:hp('-3%'),
    height: hp('100%'),
    width: hp('200%'),
    resizeMode: 'contain',
  },
  logoText: {
    color: 'white',
    fontSize: hp('3%'),
    fontFamily: 'TitanOne-Regular',
    marginTop: hp('-10%'),
    fontWeight: '200',
  },
});
