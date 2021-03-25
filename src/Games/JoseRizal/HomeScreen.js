import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Sound from 'react-native-sound';
import {isWhiteSpaceLike} from 'typescript';
import bgmusic_homescreen from './assets/sounds/bg_homescreen.mp3';

Sound.setCategory('Playback');

var bgsound = new Sound(bgmusic_homescreen, Sound.MAIN_BUNDLE, (error) => {
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

const musicStop = () => {
  bgsound.stop();
};

bgsound.setNumberOfLoops(-1);
bgsound.release();

class JRHomeScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    {
      this.props.navigation.navigate('HomeScreen');
      musicStop();
    }
    return true;
  };

  render() {
    const navigation = this.props.navigation;
    bgsound.setVolume(50);

    bgsound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/defaultbackground.jpg')}
          style={styles.backgroundImage}>
          {/* Back/Quit Button */}

          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen') + musicStop()}
            style={styles.button_back}>
            <Image
              source={require('./assets/button_back.png')}
              style={styles.icon_back}
            />
          </TouchableOpacity>
          <View
            style={{
              marginTop: hp('12%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* Rizal's Quills Logo */}
            <Image
              style={styles.logo_pearldiver}
              source={require('./assets/Rizal_Logo.gif')}
            />
          </View>
          <View style={styles.container_playbutton}>
            {/* Play Button */}
            <TouchableOpacity
              onPress={() => navigation.navigate('JRGameScreen') + musicStop()}
              style={styles.button_play}>
              <Image
                source={require('./assets/button_play.png')}
                style={styles.image_playbutton}
              />
            </TouchableOpacity>
          </View>

          {/* How to Play Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('JRInstructionScreen')}
            style={styles.button_howtoplay}>
            <Image
              source={require('./assets/button_howtoplay.png')}
              style={styles.image_howtoplay}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

export default JRHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  backgroundImage: {
    height: hp('100%'),
    width: wp('100%'),
  },

  logo_pearldiver: {
    height: hp('40%'),
    width: wp('80%'),
    resizeMode: 'cover',
  },

  //Test message
  button_back: {
    height: hp('8%'),
    width: hp('9%'),
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon_back: {width: wp('12%'), resizeMode: 'contain'},

  container_playbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('50%'),
    height: hp('10%'),
    marginRight: 15,
    alignSelf: 'center',
    marginTop: 50,
  },

  button_play: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image_playbutton: {
    height: hp('25%'),
    width: wp('70%'),
    resizeMode: 'contain',
  },

  button_howtoplay: {
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image_howtoplay: {
    height: hp('10%'),
    width: wp('50%'),
    resizeMode: 'cover',
  },
});
