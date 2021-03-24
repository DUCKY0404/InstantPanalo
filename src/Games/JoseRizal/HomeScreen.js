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
import { isWhiteSpaceLike } from 'typescript'; 
import cello from './assets/sounds/cello.mp3';
import cello2 from './assets/sounds/cello2.mp3';
Sound.setCategory('Playback');



var bgsound = new Sound(cello, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('duration in seconds: ' + bgsound.getDuration() + 'number of channels: ' + bgsound.getNumberOfChannels());
});

var bgsound2 = new Sound(cello2, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('duration in seconds: ' + bgsound.getDuration() + 'number of channels: ' + bgsound.getNumberOfChannels());
});

bgsound.setNumberOfLoops(-1);
bgsound.release(); 

const clickHanlder= () =>
{
  bgsound2.play((success) => {
    if (success) {
      console.log('successfully finished playing');
      bgsound2.setVolume(1);
      bgsound.stop();
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });
}



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
    }
    return true;
  };

  render() {
    const {navigate} = this.props.navigation;
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
        style={styles.background}
        resizeMode="cover"
        source={require('./assets/bplain.jpg')}>
        {/* quitbutton ni rizal */}

        {/* sample ni nash */}
        <TouchableOpacity
          onPress={() => navigate('HomeScreen')}
          style={styles.button_back}>
          <Image
            source={require('./assets/backbuttonTEST.png')}
            style={styles.logoback}
          />
        </TouchableOpacity>

        <Image
          style={styles.logo}
          source={require('./assets/Rizal_Logo.gif')}></Image>

        <View style={styles.boxescolumn}>
          <TouchableOpacity onPress={() => navigate('JRGameScreen') + clickHanlder()}>
            <Image
              style={styles.playButton}
              source={require('./assets/play.png') }></Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('JRInstructionScreen')}>
            <Image
              style={styles.howButton}
              source={require('./assets/how.png')}></Image>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default JRHomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  logo: {
    width: wp('100%'),
    height: hp('55%'),
    marginTop: hp('2%'),
    alignSelf: 'center',
  },
  boxescolumn: {
    flexDirection: 'column',
    marginTop: hp('2%'),
  },

  button_back: {
    height: hp('4%'),
    width: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
  },

  logoback: {
    width: wp('50%'),
    resizeMode: 'contain',
  },

  playButton: {
    width: wp('50%'),
    height: hp('15%'),
    marginLeft: hp('0.1%'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  howButton: {
    width: wp('50%'),
    height: hp('15%'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
