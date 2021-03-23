import React, {Component} from 'react';
import {ImageBackground, View, StyleSheet, Text, Image, Button, TouchableOpacity, BackHandler} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Sound from 'react-native-sound';
import { isWhiteSpaceLike } from 'typescript';
import dshs from '../audio/dshs.mp3';
import dshs2 from '../audio/dshs2.mp3';
Sound.setCategory('Playback');


var bgsound = new Sound(dshs, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('duration in seconds: ' + bgsound.getDuration() + 'number of channels: ' + bgsound.getNumberOfChannels());
});

var bgsound2 = new Sound(dshs2, Sound.MAIN_BUNDLE, (error) => {
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
      <View style = {styles.container}>
    
        <TouchableOpacity onPress = {() => navigation.navigate('HomeScreen')}>
                <Image source={require('../images/BackBtnNew.png')} style={styles.buttonBack} />
              </TouchableOpacity>
              
      <ImageBackground source={require("../images/bgplay.png")} style={styles.backgroundImage}>

         
          <View style={styles.title}>
            <Image style={styles.dslogo}source={require('../images/NewdragonLogoGIF2.gif')} />
          </View>
          <View style={styles.title}>
            <Text style={styles.Text}Dragon Slayer/>
          </View>
          <View style={styles.menu}>
            <View style={styles.buttonspace}>
            <View  style={styles.buttonspace2}>
          
            </View>
              
            </View>
            <View style={styles.buttonspace3}>
              <TouchableOpacity onPress={() => navigation.navigate('DSPlayAnimation') + clickHanlder()}>
                <Image source={require('../images/PlayBtnNew.png')} style={styles.button} />
              </TouchableOpacity>
              </View>
            <View style={styles.buttonspace}>
              <TouchableOpacity onPress={() => navigation.navigate('DSHowToPlay')}>
               <Image source={require('../images/HowToBtnNew.png')} style={styles.buttonHow} />
              </TouchableOpacity>
            </View>
          </View>
    
      </ImageBackground>
      </View>
    );
  }
}

export default DSHome;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    borderWidth: 5,

  },
  container: {
    flex: 1,
    borderWidth: 5,
    backgroundColor: 'black'
  },
  container2: {
    flex: 2,
    borderWidth: 5,
   
  },
  container3: {
    flex: 1,
    borderWidth: 5,
    
  
  },
  title: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dslogo: {
    marginTop:'80%',
    height: hp('215%'),
    width: wp('215%'),
    marginLeft:'-13%',
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
    height: hp('18%'),
    width: wp('80%'),
    alignSelf: 'center',
    marginTop:'55%',  
   
  },
  buttonHow: {
    borderRadius: 2.5,
    resizeMode: 'contain',
    height: hp('100%'),
    width: wp('65%'),
    alignSelf: 'center',
    marginTop: '-60%',  

  },
  buttonBack: {
    borderRadius: 2.5,
    resizeMode: 'contain',
    height: hp('20%'),
    width: wp('40%'),
    marginHorizontal: -60,
    marginVertical: -57
    
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
