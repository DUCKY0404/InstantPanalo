import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  BackHandler,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class PDHowToPlay extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    {
      this.props.navigation.navigate('PDHomeScreen');
    }
    return true;
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      // Background Image
      <ImageBackground
        style={styles.backgroundImage}
        //Background Image Blur
        blurRadius={Platform.OS == 'ios' ? 10 : 5}
        source={require('../src/bg3.png')}>
        <View style={styles.container}>
          <View style={styles.card}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => navigate('PDHomeScreen')}>
              <Image
                source={require('../images/closebutton.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity>

            <Text style={styles.header}>How to Play:</Text>

            <View style={styles.tutorialContent}>
              <Image
                style={styles.tutorialPic}
                source={require('../src/bullet.png')}></Image>
              <Text style={styles.tutorialFont}>Choose Arbitiary Divesite</Text>
            </View>

            <View style={styles.tutorialContent}>
              <Image
                style={styles.tutorialPic}
                source={require('../src/bullet.png')}></Image>
              <Text style={styles.tutorialFont}>
                Click on clams to find pearls
              </Text>
            </View>

            <View style={styles.tutorialContent}>
              <Image
                style={styles.tutorialPic}
                source={require('../src/bullet.png')}></Image>
              <Text style={styles.tutorialFont}>Pearls will give prizes</Text>
            </View>

            <View style={styles.tutorialContent}>
              <Image
                style={styles.tutorialPic}
                source={require('../src/bullet.png')}></Image>
              <Text style={styles.tutorialFont}>
                Black pearl gives bonus prize
              </Text>
            </View>

            <Text style={styles.header}>Pay Table:</Text>

            <View style={styles.paytablelayout}>
              <Image
                style={styles.paytablepic}
                source={require('../src/pearl1.png')}></Image>
              <Text style={styles.paytableFont}>P20</Text>
            </View>

            <View style={styles.paytablelayout}>
              <Image
                style={styles.paytablepic}
                source={require('../src/pearl2.png')}></Image>
              <Text style={styles.paytableFont}>P200</Text>
            </View>

            <View style={styles.paytablelayout}>
              <Image
                style={styles.paytablepic}
                source={require('../src/pearl3.png')}></Image>
              <Text style={styles.paytableFont}>P500</Text>
            </View>

            <View style={styles.paytablelayout}>
              <Image
                style={styles.paytablepic}
                source={require('../src/pearl4.png')}></Image>
              <Text style={styles.paytableFont}>P2000</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 45,
  },

  card: {
    backgroundColor: 'rgba(60, 60, 60, 0.4)',
    borderRadius: hp('6%'),
    padding: 20,
  },

  header: {
    fontFamily: 'Bangers-Regular',
    fontSize: hp('3%'),
    color: '#fff',
  },

  // Styles: Paytable
  paytablelayout: {
    flexDirection: 'row',
  },

  paytableFont: {
    fontFamily: 'AkayaTelivigala-Regular',
    fontSize: hp('3.5%'),
    color: '#fff',
    marginLeft: 15,
  },

  paytablepic: {
    height: hp('5%'),
    width: wp('40%'),
  },

  // Styles: Tutorial

  tutorialContent: {
    flexDirection: 'row',
  },

  tutorialFont: {
    fontFamily: 'AkayaTelivigala-Regular',
    fontSize: hp('2.5%'),
    color: '#fff',
    lineHeight: 25,
    paddingHorizontal: 20,
  },

  tutorialPic: {
    height: hp('3%'),
    width: wp('5%'),
    marginRight: 10,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  backIcon: {
    height: hp('3%'),
    width: hp('3%'),
    resizeMode: 'contain',
  },
});
