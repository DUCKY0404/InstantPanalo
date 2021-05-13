import React, {Component} from 'react';
import {ImageBackground, View, Image, StyleSheet, Animated} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class UFPlayLoading extends Component {
  state = {
    LogoAnimate: new Animated.Value(0),
    LogoText: new Animated.Value(0),
  };

  componentDidMount() {
    const {LogoAnimate, LogoText} = this.state;
    const navigation = this.props.navigation;
    Animated.parallel([]).start(() => {
      setTimeout(() => navigation.navigate('UF_Gameplay'), 4000);
    });
  }

  render() {
    return (
      <ImageBackground
        source={require('../images/BGLoadingPlay.png')}
        blurRadius={0.5}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Image
            style={styles.UFanimation}
            source={require('../images/LoadingPlayAnim.gif')}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default UFPlayLoading;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  UFanimation: {
    marginTop: hp('10%'),
    height: hp('80%'),
    width: hp('80%'),
    resizeMode: 'contain',
  },
  logoText: {
    color: 'white',
    fontSize: hp('3%'),
    fontFamily: 'TitanOne-Regular',
    marginTop: hp('-10%'),
    fontWeight: '200',
  },
});
