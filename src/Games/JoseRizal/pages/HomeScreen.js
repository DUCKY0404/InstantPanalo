import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class JRHomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={styles.background} resizeMode="cover" source={require('./images/bplain.jpg')}>
        <Image style={styles.logo} source={require('./images/logo1.png')}></Image>
       

        <View style= {styles.boxesRow}>
        <TouchableOpacity onPress={() =>navigate('JRGameScreen')} >
            <Image style={styles.playButton} source={require('./images/play.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() =>navigate('JRInstructionScreen')}>
            <Image style={styles.howButton} source={require('./images/how.png')}></Image>
        </TouchableOpacity>
        </View>

     </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
    logo:{
      width: wp('100%'),
      height: hp('55%'),
      marginTop: hp('7%'),
      alignSelf: 'center',
    },
    boxesRow: {
      flexDirection: 'row',
      marginTop: hp('7%'),
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