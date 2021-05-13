import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class KR_GameplayTransition extends Component {
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
      setTimeout(() => navigation.navigate('KR_Selection'), 5000);
    });
  }

  render() {
    return (
      <ImageBackground
        source={require('../PNG/loadPlay.gif')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Animated.View
            style={{
              opacity: this.state.LogoAnimate,
              top: this.state.LogoAnimate.interpolate({
                inputRange: [0, 1],
                outputRange: [80, 0],
              }),
            }}></Animated.View>
        </View>
      </ImageBackground>
    );
  }
}

export default KR_GameplayTransition;

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
    marginTop: hp('-3%'),
    height: hp('100%'),
    width: hp('200%'),
    resizeMode: 'contain',
  },
  logoText: {
    color: '#884C2B',
    fontSize: hp('3%'),
    fontFamily: 'TitanOne-Regular',
    marginTop: hp('-10%'),
    fontWeight: '200',
  },
});
