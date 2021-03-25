import React, {Component} from 'react';
import {ImageBackground, View, StyleSheet, Text, Image, Button, TouchableOpacity, BackHandler} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';
import Sound from 'react-native-sound';
import khs from '../audio/khs.mp3'
Sound.setCategory('Playback');

var bgsound = new Sound(khs, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }

});
  

const clickHandler = () =>
{
  bgsound.stop();
}
class MainScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
   
    {this.props.navigation.navigate('HomeScreen') + bgsound.stop(); Orientation.lockToPortrait();}
    return true;
  }
  render() {
    const navigation = this.props.navigation;
    

    bgsound.setVolume(50);
    bgsound.setNumberOfLoops(20);
    bgsound.play()
    return (
  
          <View style = {styles.container}>

            <TouchableOpacity onPress = {() => navigation.navigate('HomeScreen') + clickHandler()}>
                <Image source={require('../PNG/k_back.png')} style={styles.buttonBack} />
              </TouchableOpacity>
          
      <ImageBackground source={require("../PNG/k_bg.png")} style={styles.backgroundImage}>
           
   
          <View style={styles.container2}/>
          <View style={styles.title}>
            <Image style={styles.logo}source={require('../PNG/k_logo.gif')} />
          </View>
          <View style={styles.title}>
            <Text style={styles.Text}Dragon Slayer/>
          </View>
          <View style={styles.menu}>
            <View style={styles.buttonspace}>
      
              
            </View>
            <View style={styles.buttonspace3}>
              <TouchableOpacity onPress={() => navigation.navigate('loadingPlay')}>
                <Image source={require('../PNG/k_play.png')} style={styles.button} />
              </TouchableOpacity>
              </View>
            <View style={styles.buttonspace}>
              <TouchableOpacity onPress={() => navigation.navigate('How')}>
               <Image source={require('../PNG/k_how.png')} style={styles.buttonHow} />
              </TouchableOpacity>
            </View>
          </View>
   
      </ImageBackground>
        </View>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: '#b5e2e6'
  },
  container2: {
    flex: 2,
  },
  container3: {
    flex: 1,
  
  },
  title: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop:'35%',
    height: hp('150%'),
    width: wp('150%'),
    resizeMode:'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flex:9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonspace: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonspace2: {
    padding:'15%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf:'flex-start',
  },
  buttonspace3: {
    padding: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
  },
  button: {
    borderRadius: 2.5,
    resizeMode: 'contain',
    height: hp('20%'),
    width: wp('80%'),
    alignSelf: 'center',
    marginTop:'80%',  
   
  },
  buttonHow: {
    borderRadius: 2.5,
    resizeMode: 'contain',
    height: hp('100%'),
    width: wp('70%'),
    alignSelf: 'center',
    marginTop: '-45%',  

  },
  buttonBack: {
    borderRadius: 2.5,
    resizeMode: 'contain',
    height: hp('20%'),
    width: wp('40%'),
    marginHorizontal: -60,
    marginVertical: -55
  },

});
