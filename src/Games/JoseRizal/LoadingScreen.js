import React, {Component} from 'react';
import {Image, View, StyleSheet, Text, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import bgmusic_loading from './assets/sounds/bg_loadingscreen.mp3';
import Sound from 'react-native-sound';

var bgsound = new Sound(bgmusic_loading, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log(
    'duration in seconds: ' +
      bgsound.getDuration() +
      'number of channels: ' +
      bgsound.getNumberOfChannels(),
  );
});
bgsound.setNumberOfLoops(-1);
bgsound.release();

class JRLoadingScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      const {navigate} = this.props.navigation;

      navigate('JRHomeScreen');
    }, 3000);
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
      <ImageBackground
        blurRadius={Platform.OS == 'ios' ? 5 : 1}
        style={styles.backgroundImage}
        source={require('./assets/defaultbackground.jpg')}>
        <View style={styles.container}>
          <Image
            style={styles.image_rizal}
            source={require('./assets/Logo_loadingscreen.gif')}
          />
          <Text style={styles.text_loading}>Loading...</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default JRLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image_rizal: {
    width: 380,
    height: 420,
    resizeMode: 'contain',
  },

  text_loading: {
    fontFamily: 'GreatVibes-Regular',
    fontSize: hp('5%'),
    color: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
