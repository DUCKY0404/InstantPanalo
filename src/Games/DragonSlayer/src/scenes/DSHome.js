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

class DSHome extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    {
      this.props.navigation.navigate('HomeScreen');
    }
    return true;
  };
  render() {
    const navigation = this.props.navigation;

    return (
      <ImageBackground
        source={require('../images/bgplay.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.container2} />
          <View style={styles.title}>
            <Image
              style={styles.dslogo}
              source={require('../images/dragonslayer_logo.png')}
            />
          </View>
          <View style={styles.menu}>
            <View style={styles.buttonspace}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DSPlayGame')}>
                <Image
                  source={require('../images/playgamebutton.png')}
                  style={styles.button}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonspace}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DSHowToPlay')}>
                <Image
                  source={require('../images/howbutton.png')}
                  style={styles.button}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonspace}>
              <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}>
                <Image
                  source={require('../images/quitgamebutton.png')}
                  style={styles.button}
                />
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
  title: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dslogo: {
    height: '135%',
    width: '125%',
    resizeMode: 'contain',
  },
  menu: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonspace: {
    padding: '1%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 2.5,
    resizeMode: 'contain',
    height: hp('8.5%'),
    width: wp('70%'),
    alignSelf: 'center',
  },
  scoreSpace: {
    flexDirection: 'row',
  },
  upperScoreText: {
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
