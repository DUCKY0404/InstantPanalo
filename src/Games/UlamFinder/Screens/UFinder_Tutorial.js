import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Directions} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class UFInstructionScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground
        blurRadius={2}
        style={styles.background}
        source={require('../images/UF_Background6.png')}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigate('UF_HomeScreen')}>
            <View style={styles.exitButton}>
              <Text style={styles.exitText}>X</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.headerText}>How To Play Ulam Finder!</Text>
          <Text style={styles.headerText2}>
            Pick 1 pot at a time and find rice and ulam to win the following
          </Text>
          <Text style={styles.headerText2}> ○ 1 pair 200 coins</Text>
          <Text style={styles.headerText2}> ○ 2 pair 500 coins</Text>
          <Text style={styles.headerText2}> ○ 3 pair 1500 coins</Text>
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
    width: wp('80%'),
    height: hp('45%'),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: hp('25%'),
    marginBottom: hp('50%'),
    borderRadius: hp('3%'),
  },
  headerText: {
    fontFamily: 'VarelaRound-Regular',
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    marginTop: hp('2%'),
    marginBottom: hp('2%'),
    textAlign: 'center',
  },
  headerText2: {
    fontSize: hp('3%'),
    marginLeft: hp('3%'),
    marginTop: hp('1.5%'),
    textAlign: 'left',
  },
  exitSpace: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
  },
  exitButton: {
    height: 55,
    width: 55,
    borderRadius: 1000,
    backgroundColor: '#7CACDC',
    marginTop: '-7%',
    marginLeft: '80%',
    alignItems: 'center',
  },
  exitText: {
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    marginTop: hp('1.5%'),
    marginBottom: hp('2%'),
    textAlign: 'center',
    color: '#ffffff',
  },
});
