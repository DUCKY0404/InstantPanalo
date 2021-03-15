import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class UFInstructionScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={styles.background} source={require('./images/bg2.jpg')}>
        
        <View style={styles.container}>
        <Text style={styles.headerText}>How To Play Ulam Finder!</Text>
        <Text style={styles.headerText2}>Pick 1 pot at a time and find rice and ulam to win the following</Text>
        <Text style={styles.headerText2}> ○ 1 pair  200 coins</Text>
        <Text style={styles.headerText2}> ○ 2 pair  500 coins</Text>
        <Text style={styles.headerText2}> ○ 3 pair  1500 coins</Text>
            <Image style={styles.logo2} source={require('./images/ulamFinder.gif')}>
          </Image>
        </View>
     
        <View style = {styles.exitSpace}>
        <TouchableOpacity onPress={() =>navigate('UFHomeScreen')}>
                <Text style={styles.exitButton} >Go Back</Text>
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
    container: {
        width: wp('90%'),
        height: hp('50%'),
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: hp('3%'),
        marginBottom: hp('3%'),
        borderRadius: hp('3%'),
    },
    headerText: {
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
        textAlign: 'center',
    },
    headerText2: {
      fontSize: hp('3%'),
      marginLeft: hp('3%'),
      marginTop: hp('1%'),
      textAlign: 'left',
  },
    logo2:{
      width: wp('90%'),
      height: hp('50%'),
      marginTop: hp('35%'),
      alignSelf: 'center',
      resizeMode: "contain",
      position: "absolute",
    },
    exitSpace: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: hp('16%'),
    },
    exitButton: {
      width: wp('35%'),
      height: hp('7%'),
      fontSize: hp('3%'),
      alignSelf: 'center',
      fontWeight: 'bold',
      backgroundColor: 'white',
      color: 'black',
      textAlign: 'center',
      borderRadius: hp('3%'),
      paddingVertical: hp('1.5%'),
      
    },
    
});