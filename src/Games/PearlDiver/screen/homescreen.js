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
import pdhs from '../audio/pdhs.mp3';
Sound.setCategory('Playback');

var bgsound = new Sound(pdhs, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('duration in seconds: ' + bgsound.getDuration() + 'number of channels: ' + bgsound.getNumberOfChannels());
});
bgsound.setNumberOfLoops(-1);

const clickHandler= () =>
{
  bgsound.stop();
} 

class DSHome extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    {
      this.props.navigation.navigate('HomeScreen') + bgsound.stop();;
    }
    return true;
  };


  render() {
    const navigation = this.props.navigation;
    bgsound.setVolume(50);
    bgsound.setNumberOfLoops(20);
    bgsound.play()
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../src/bgfinall.gif')}
          style={styles.backgroundImage}>
          {/* Back/Quit Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen') + clickHandler()}
            style={styles.button_back}>
            <Image
              source={require('../src/PearlDiverAssets-BackButton.png')}
              style={styles.icon_back}
            />
          </TouchableOpacity>
          <View
            style={{
              marginTop: hp('12%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* Pearl Diver Logo */}
            <Image
              style={styles.logo_pearldiver}
              source={require('../src/PearlDiverLogoGIF.gif')}
            />
          </View>
          <View style={styles.container_playbutton}>
            {/* Play Button */}
            <TouchableOpacity
              onPress={() => navigation.navigate('PDGamex')}
              style={styles.button_play}>
              <Image
                source={require('../src/PearlDiverAssets-PlayButton.png')}
                style={styles.image_playbutton}
              />
            </TouchableOpacity>
          </View>

          {/* How to Play Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('PDHowToPlay')}
            style={styles.button_howtoplay}>
            <Image
              source={require('../src/PearlDiverAssets-HowtoPlay.png')}
              style={styles.image_howtoplay}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
export default DSHome;
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
    resizeMode: 'contain',
  },

  button_back: {
    height: hp('4%'),
    width: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
  },

  icon_back: {width: wp('50%'), resizeMode: 'contain'},

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
    width: wp('100%'),
    resizeMode: 'cover',
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
