import React, {Component} from 'react';
import {Image, View, StyleSheet, Text, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Sound from 'react-native-sound';
import pdls from '../audio/pdls.mp3';
Sound.setCategory('Playback');

var bgsound = new Sound(pdls, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('duration in seconds: ' + bgsound.getDuration() + 'number of channels: ' + bgsound.getNumberOfChannels());
});
bgsound.setNumberOfLoops(-1);



class PDLoadingScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      const {navigate} = this.props.navigation;

      navigate('PDHomeScreen');
    }, 7000);
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
        source={require('../src/bg3.png')}>
        <View style={styles.container}>
          <Image
            style={styles.image_pearl}
            source={require('../src/PearlDiverLoadingScreen.gif')}
          />
          <Text style={styles.text_loading}>Loading...</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default PDLoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image_pearl: {
    width: 350,
    height: 350,
    justifyContent: 'center',
  },

  text_loading: {
    fontFamily: 'AkayaTelivigala-Regular',
    fontSize: hp('5%'),
    color: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
