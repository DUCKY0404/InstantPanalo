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

export default class JRInstructionScreen extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        style={styles.background}
        source={require('./assets/defaultbackground.jpg')}>
        {/* Back button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('JRHomeScreen')}
          style={{alignSelf: 'flex-end'}}>
          <Image
            source={require('./assets/button_close.png')}
            style={styles.exitButton}></Image>
        </TouchableOpacity>

        <ImageBackground
          style={styles.logo}
          source={require('./assets/how2.png')}></ImageBackground>
        <Text style={styles.headerText}>
          {' '}
          1. Press any book and locate feather{' '}
        </Text>
        <Text style={styles.headerText2}> 2. Win Prizes: </Text>
        <View style={styles.imageRow}>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Text style={styles.headerText3}> 2000 Coins</Text>
        </View>
        <View style={styles.imageRow}>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Text style={styles.headerText3}> 1000 Coins</Text>
        </View>
        <View style={styles.imageRow}>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>

          <Text style={styles.headerText3}> 500 Coins</Text>
        </View>
        <View style={styles.imageRow}>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>

          <Text style={styles.headerText3}> 200 Coins</Text>
        </View>

        <View style={styles.imageRow}>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Image
            style={styles.imageFeather}
            source={require('./assets/feather.png')}></Image>
          <Text style={styles.headerText3}> 20 Coins</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: wp('100%'),
    height: hp('78%'),
    marginTop: hp('7%'),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  imageFeather: {
    width: wp('7.5%'),
    height: hp('5%'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    marginLeft: hp('5%'),
  },

  background: {
    flex: 1,
  },
  headerText: {
    fontSize: hp('3.2%'),
    fontFamily: 'Back to Black Demo',
    marginTop: hp('-57.5%'),
    textAlign: 'center',
  },
  headerText2: {
    fontSize: hp('3.2%'),
    fontFamily: 'Back to Black Demo',
    marginLeft: hp('6.5%'),
    marginTop: hp('0.5%'),
    textAlign: 'left',
  },
  headerText3: {
    fontSize: hp('3.2%'),
    fontFamily: 'Back to Black Demo',
    marginLeft: hp('4%'),
  },
  bottomSpace: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: hp('1%'),
  },
  exitButton: {
    width: wp('20%'),
    height: hp('8%'),
    resizeMode: 'contain',
    

  },
});
