import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Directions } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class UFInstructionScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground blurRadius={2} style={styles.background} source={require('../PNG/k_bgHow.png')}>

        <View style={styles.container}>

            
            
            <ImageBackground style={styles.container} source={require('../PNG/k_bgHowCont.png')}>
                
                <TouchableOpacity onPress={() =>navigate('MainScreen')}>
                    <View style={styles.exitButton}>
                     <Text style={styles.exitText} >X</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.headerText}>How To Play Karera</Text>
                <Text style={styles.headerText2}>Tap the screen to start the race, {'\n'} the first one
                to reach  the finish line, WINS! </Text>

            </ImageBackground>
      
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
        resizeMode: 'cover',
        width: wp('85%'),
        height: hp('50%'),
        alignSelf: 'center',
        marginTop: hp('10%'),
    },
    headerText: {
      fontFamily:'VarelaRound-Regular',
        fontSize: hp('3.5%'),
        fontWeight: 'bold',
        marginTop: hp('5%'),
        marginBottom: hp('2%'),
        textAlign: 'center',
        
    },
    headerText2: {
      fontSize: hp('3%'),
      marginLeft: hp('3%'),
      marginTop: hp('1.5%'),
      textAlign: 'center',

  },

    exitButton: {
      height : 50 ,
      width :50,
      borderRadius: 1000,
      backgroundColor:'#884C2B',
      marginTop:'-5%',
      marginLeft:'89%',
      alignItems:'center'
   
    },
    exitText:{
      fontSize: hp('3.5%'),
      fontWeight: 'bold',
      marginTop: hp('1.5%'),
      marginBottom: hp('2%'),
      textAlign: 'center',
      color:'#ffffff',
    }
    
});