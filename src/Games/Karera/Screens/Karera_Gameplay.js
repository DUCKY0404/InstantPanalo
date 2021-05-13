import React, {Component} from 'react';
import Orientation from 'react-native-orientation-locker';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Alert,
  ImageBackground,
  Modal,
  TouchableOpacity,
  Dimensions,
  BackHandler,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class KR_Gameplay extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    moveAnimation1: new Animated.Value(0),
    moveAnimation2: new Animated.Value(0),
    moveAnimation3: new Animated.Value(0),
    moveAnimation4: new Animated.Value(0),
    moveAnimation5: new Animated.Value(0),
    moveCount1: 0,
    moveCount2: 0,
    moveCount3: 0,
    moveCount4: 0,
    moveCount5: 0,
    finishLine: 0,
  };

  start = () => {
    this.setState({
      moveCount1: 0,
      moveCount2: 0,
      moveCount3: 0,
      moveCount4: 0,
      moveCount5: 0,
      show: false,
    });
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    {
      this.props.navigation.navigate('KR_Selection');
    }
    return true;
  };

  getRandomNumber1 = () => {
    let randomNumber1 = Math.floor(Math.random() * 50) + 1;
    return randomNumber1;
  };
  getRandomNumber2 = () => {
    let randomNumber2 = Math.floor(Math.random() * 50) + 1;
    return randomNumber2;
  };
  getRandomNumber3 = () => {
    let randomNumber3 = Math.floor(Math.random() * 50) + 1;
    return randomNumber3;
  };
  getRandomNumber4 = () => {
    let randomNumber4 = Math.floor(Math.random() * 50) + 1;
    return randomNumber4;
  };
  getRandomNumber5 = () => {
    let randomNumber5 = Math.floor(Math.random() * 50) + 1;
    return randomNumber5;
  };

  move = () => {
    let random1 = this.getRandomNumber1();
    let movement1 = random1 + this.state.moveCount1;
    Animated.timing(this.state.moveAnimation1, {
      toValue: movement1,
      timing: 1000,
      useNativeDriver: false,
    }).start();
    this.setState({moveCount1: random1 + this.state.moveCount1});

    let random2 = this.getRandomNumber2();
    let movement2 = random2 + this.state.moveCount2;
    Animated.timing(this.state.moveAnimation2, {
      toValue: movement2,
      timing: 1000,
      useNativeDriver: false,
    }).start();
    this.setState({moveCount2: random2 + this.state.moveCount2});

    let random3 = this.getRandomNumber3();
    let movement3 = random3 + this.state.moveCount3;
    Animated.timing(this.state.moveAnimation3, {
      toValue: movement3,
      timing: 1000,
      useNativeDriver: false,
    }).start();
    this.setState({moveCount3: random3 + this.state.moveCount3});

    let random4 = this.getRandomNumber4();
    let movement4 = random4 + this.state.moveCount4;
    Animated.timing(this.state.moveAnimation4, {
      toValue: movement4,
      timing: 1000,
      useNativeDriver: false,
    }).start();
    this.setState({moveCount4: random4 + this.state.moveCount4});

    let random5 = this.getRandomNumber5();
    let movement5 = random5 + this.state.moveCount5;
    Animated.timing(this.state.moveAnimation5, {
      toValue: movement5,
      timing: 1000,
      useNativeDriver: false,
    }).start();
    this.setState({moveCount5: random5 + this.state.moveCount5});
  };

  Reset = () => {
    RNRestart.Restart();
  };

  render() {
    Orientation.lockToLandscape();
    let finishLine = Dimensions.get('window').width - 120;
    if (this.state.moveCount1 >= finishLine) {
      Alert.alert('GAME IS SET', 'Black horse WON!', [
        {
          text: 'Ok',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (this.state.moveCount2 >= finishLine) {
      Alert.alert('GAME IS SET', 'Brown Horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (this.state.moveCount3 >= finishLine) {
      Alert.alert('GAME IS SET', 'Red horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (this.state.moveCount4 >= finishLine) {
      Alert.alert('GAME IS SET', 'White horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (this.state.moveCount5 >= finishLine) {
      Alert.alert('GAME IS SET', 'Yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount2 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Black and brown horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount3 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Black and red horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount4 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Black and white horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Black and yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Black and yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount2 >= finishLine &&
      this.state.moveCount3 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Brown and red horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount2 >= finishLine &&
      this.state.moveCount4 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Brown and white horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount2 >= finishLine &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Brown and yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount3 >= finishLine &&
      this.state.moveCount4 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Red and white horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount3 >= finishLine &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Red and yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount4 >= finishLine &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'White and yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount2 >= finishLine &&
      this.state.moveCount3 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Black, brown and red horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount2 >= finishLine &&
      this.state.moveCount4 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Black, brown and white horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount2 >= finishLine &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Black, brown and yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount3 >= finishLine &&
      this.state.moveCount4 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Black, red and white horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount3 >= finishLine &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Black, red and yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount4 >= finishLine &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Black, white and yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount2 >= finishLine &&
      this.state.moveCount3 >= finishLine &&
      this.state.moveCount4 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Brown, red and white horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount2 >= finishLine &&
      this.state.moveCount3 >= finishLine &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Brown, red and yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount3 >= finishLine &&
      this.state.moveCount4 >= finishLine &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Red, white and yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount2 >= finishLine &&
      this.state.moveCount4 >= finishLine &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Brown, white and yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount2 >= finishLine &&
      this.state.moveCount3 &&
      this.state.moveCount4 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Black, brown, red and white horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount2 >= finishLine &&
      this.state.moveCount3 &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Black, brown, red and yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount2 >= finishLine &&
      this.state.moveCount3 >= finishLine &&
      this.state.moveCount4 &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Brown, red, white and yellow horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount3 >= finishLine &&
      this.state.moveCount4 >= finishLine &&
      this.state.moveCount5 &&
      this.state.moveCount1 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'Red, white, yellow and black horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount4 >= finishLine &&
      this.state.moveCount5 >= finishLine &&
      this.state.moveCount2 &&
      this.state.moveCount1 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'White, yellow, brown and black horse WON!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    } else if (
      this.state.moveCount1 >= finishLine &&
      this.state.moveCount2 >= finishLine &&
      this.state.moveCount3 &&
      this.state.moveCount4 >= finishLine &&
      this.state.moveCount5 >= finishLine
    ) {
      Alert.alert('GAME IS SET', 'TIE!', [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigation.navigate('KR_HomeScreen');
          },
        },
        {
          text: 'Exit Game',
          onPress: () => {
            this.props.navigation.navigate('HomeScreen');
            Orientation.lockToPortrait();
          },
        },
      ]);
    }

    moveAnimationStyle1 = {
      transform: [
        {
          translateX: this.state.moveAnimation1,
        },
      ],
    };
    moveAnimationStyle2 = {
      transform: [
        {
          translateX: this.state.moveAnimation2,
        },
      ],
    };
    moveAnimationStyle3 = {
      transform: [
        {
          translateX: this.state.moveAnimation3,
        },
      ],
    };
    moveAnimationStyle4 = {
      transform: [
        {
          translateX: this.state.moveAnimation4,
        },
      ],
    };
    moveAnimationStyle5 = {
      transform: [
        {
          translateX: this.state.moveAnimation5,
        },
      ],
    };
    return (
      <TouchableWithoutFeedback onPress={this.move}>
        <ImageBackground
          source={require('../PNG/FINISH_LINE.jpg')}
          resizeMode="stretch"
          style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
          }}>
          <View style={styles.container}>
            <View style={styles.space} />
            <View style={styles.horseSpace}>
              <Animated.View style={moveAnimationStyle1}>
                {
                  <Image
                    source={require('../PNG/black.gif')}
                    style={styles.imageStyle}></Image>
                }
              </Animated.View>

              <Animated.View style={moveAnimationStyle2}>
                {
                  <Image
                    source={require('../PNG/Brown.gif')}
                    style={styles.imageStyle}></Image>
                }
              </Animated.View>

              <Animated.View style={moveAnimationStyle3}>
                {
                  <Image
                    source={require('../PNG/red.gif')}
                    style={styles.imageStyle}></Image>
                }
              </Animated.View>

              <Animated.View style={moveAnimationStyle4}>
                {
                  <Image
                    source={require('../PNG/white.gif')}
                    style={styles.imageStyle}></Image>
                }
              </Animated.View>

              <Animated.View style={moveAnimationStyle5}>
                {
                  <Image
                    source={require('../PNG/yellow.gif')}
                    style={styles.imageStyle}></Image>
                }
              </Animated.View>
            </View>
            <View style={styles.botSpace} />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  space: {
    flex: 1,
  },
  botSpace: {
    flex: 0.5,
    marginTop: hp('3.5%'),
  },
  imageStyle: {
    resizeMode: 'contain',
    height: hp('7%'),
    width: wp('25%'),
  },
  horseSpace: {
    flex: 2.2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
