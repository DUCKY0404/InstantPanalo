import React, {Component} from 'react';
import {ImageBackground, View, StyleSheet, Text, Image, Button, TouchableOpacity, BackHandler} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Sound from 'react-native-sound';
import ufhs from './audio/ufhs.mp3';
Sound.setCategory('Playback');


var bgsound = new Sound(ufhs, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('duration in seconds: ' + bgsound.getDuration() + 'number of channels: ' + bgsound.getNumberOfChannels());
});


class DSHome extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    {this.props.navigation.navigate('HomeScreen')}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    return true;
  }
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
      <ImageBackground source={require("./images/UF_Background6.png")} style={styles.backgroundImage}>

          
        <View style={styles.container}>
          <View style={styles.container2}/>
          <View style={styles.title}>
            <Image style={styles.dslogo}source={require('./images/LogoGif2.gif')} />
          </View>
          <View style={styles.title}>
            <Text style={styles.Text}Dragon Slayer/>
          </View>
          <View style={styles.menu}>
            <View style={styles.buttonspace}>
            <View  style={styles.buttonspace2}>
              <TouchableOpacity onPress = {() => navigation.navigate('HomeScreen')}>
                <Image source={require('./images/btn_Back.png')} style={styles.buttonBack} />
              </TouchableOpacity>
            </View>
              
            </View>
            <View style={styles.buttonspace3}>
              <TouchableOpacity onPress={() => navigation.navigate('UFPlayLoading')}>
                <Image source={require('./images/btn_Play.png')} style={styles.button} />
              </TouchableOpacity>
              </View>
            <View style={styles.buttonspace}>
              <TouchableOpacity onPress={() => navigation.navigate('UFInstructionScreen')}>
               <Image source={require('./images/btn_How.png')} style={styles.buttonHow} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default DSHome;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
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
  dslogo: {
    marginTop:'55%',
    height: hp('100%'),
    width: wp('100%'),
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
    height: hp('45%'),
    width: wp('100%'),
    alignSelf: 'center',
    marginTop:'35%',  
  },
  buttonHow: {
    borderRadius: 2.5,
    resizeMode: 'contain',
    height: hp('100%'),
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: '-80%',  

  },
  buttonBack: {
    borderRadius: 2.5,
    resizeMode: 'contain',
    height: hp('20%'),
    width: wp('30%'),
 marginTop: '-63%',
 marginLeft:'-85%'
  },
  scoreSpace: {
    flexDirection: 'row',
  },
  upperScoreText :{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
}, 
  coinIcon: {
    height: hp('3.5%'),
    width: hp('2.5%'),
    resizeMode: 'contain',
},
});
