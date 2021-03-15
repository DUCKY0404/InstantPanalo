import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Logo from '../images/dragonlogo.png';

class DSLoadingScene extends Component {
  state = {
    LogoAnimate: new Animated.Value(0),
    LogoText: new Animated.Value(0),
  };

  componentDidMount() {
    const {LogoAnimate, LogoText} = this.state;
    const navigation = this.props.navigation;
    Animated.parallel([
      Animated.spring(LogoAnimate, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 500,
        useNativeDriver: false,
      }).start(),

      Animated.timing(LogoText, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => navigation.navigate('DSHome'), 500);
    });
  }

  render() {
    
    return (
      <ImageBackground source={require("../images/bgload.png")} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.LogoAnimate,
            top: this.state.LogoAnimate.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
          }}>
          <Image style={styles.dragonlogo} source={Logo} />
        </Animated.View>
        <Animated.View style={{opacity: this.state.LogoText}}>
          <Text style={styles.logoText}> Loading . . . </Text>
        </Animated.View>
      </View>
      </ImageBackground>
    );
  }
}

export default DSLoadingScene;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragonlogo: {
    height: hp('18%'),
    width: hp('18%'),
    resizeMode: 'contain',
  },
  logoText: {
    color: 'white',
    fontSize: hp('5%'),
    fontFamily: 'TitanOne-Regular',
    marginTop: hp('2%'),
    fontWeight: '300',
  },
});
