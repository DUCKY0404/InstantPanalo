import React, {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  BackHandler,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class PDGamex extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Coins Win:',
      urlPearl1: require('../src/pearlc.png'),
      urlPearl2: require('../src/pearlc.png'),
      urlPearl3: require('../src/pearlc.png'),
      urlPearl4: require('../src/pearlc.png'),
      urlPearl5: require('../src/pearlc.png'),
      urlPearl6: require('../src/pearlc.png'),
      disabled1: false,
      disabled2: false,
      disabled3: false,
      disabled4: false,
      disabled5: false,
      disabled6: false,
      wpCount: 0,
      bpCount: 0,
      count: 0,
      coins: 0,
      scoreBoard: false,
    };
  }

  start = () => {
    this.setState({
      message: 'Coins Win:',
      urlPearl1: require('../src/pearlc.png'),
      urlPearl2: require('../src/pearlc.png'),
      urlPearl3: require('../src/pearlc.png'),
      urlPearl4: require('../src/pearlc.png'),
      urlPearl5: require('../src/pearlc.png'),
      urlPearl6: require('../src/pearlc.png'),
      disabled1: false,
      disabled2: false,
      disabled3: false,
      disabled4: false,
      disabled5: false,
      disabled6: false,
      wpCount: 0,
      bpCount: 0,
      count: 0,
      scoreBoard: false,
    });
    this.coinsGained();
  };

  getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    return randomNumber;
  };

  getDiceImage = (diceRandom) => {
    switch (diceRandom) {
      case 1:
      case 2:
      case 3:
        return require('../src/pearlw.png');
        break;
      case 4:
        return require('../src/pearlblack.png');
        break;
      case 5:
        return require('../src/pearlblack.png');
        break;
      case 6:
        return require('../src/pearlw.png');
        break;
      case 7:
        return require('../src/pearlw.png');
        break;
      case 8:
        return require('../src/pearlw.png');
        break;
      case 9:
        return require('../src/pearlw.png');
        break;
      default:
        return require('../src/pearlw.png');
        break;
    }
  };

  showScore = () => {
    if (this.state.count == 5) {
      setTimeout(() => {
        this.setState({scoreBoard: true});
      }, 500);
    }
  };

  coinsGained = () => {
    if (this.state.wpCount === 6 || this.state.bpCount === 0) {
      this.setState({coins: this.state.coins + 0});
    } else if (this.state.wpCount === 5 || this.state.bpCount === 1) {
      this.setState({coins: this.state.coins + 20});
    } else if (this.state.wpCount === 4 || this.state.bpCount === 2) {
      this.setState({coins: this.state.coins + 200});
    } else if (this.state.wpCount === 3 || this.state.bpCount === 3) {
      this.setState({coins: this.state.coins + 500});
    } else if (this.state.wpCount === 2 || this.state.bpCount >= 4) {
      this.setState({coins: this.state.coins + 2000});
    }
  };

  showPearl1 = () => {
    let random1 = this.getRandomNumber();

    this.setState({
      urlPearl1: this.getDiceImage(random1),
      disabled1: true,
      count: this.state.count + 1,
    });
    this.showScore();

    if (random1 === 1 || random1 === 2 || random1 === 3) {
      this.setState({wpCount: this.state.wpCount + 0});
    } else if (random1 === 4 || random1 === 5) {
      this.setState({bpCount: this.state.bpCount + 1});
    } else if (random1 === 6 || random1 === 7) {
      this.setState({wpCount: this.state.wpCount + 1});
    }
  };

  showPearl2 = () => {
    let random2 = this.getRandomNumber();
    this.setState({
      urlPearl2: this.getDiceImage(random2),
      disabled2: true,
      count: this.state.count + 1,
    });
    this.showScore();

    if (random2 === 1 || random2 === 2 || random2 === 3) {
      this.setState({wpCount: this.state.wpCount + 0});
    } else if (random2 === 4 || random2 === 5) {
      this.setState({bpCount: this.state.bpCount + 1});
    } else if (random2 === 6 || random2 === 7) {
      this.setState({wpCount: this.state.wpCount + 1});
    }
  };

  showPearl3 = () => {
    let random3 = this.getRandomNumber();
    this.setState({
      urlPearl3: this.getDiceImage(random3),
      disabled3: true,
      count: this.state.count + 1,
    });
    this.showScore();
    if (random3 === 1 || random3 === 2 || random3 === 3) {
      this.setState({wpCount: this.state.wpCount + 0});
    } else if (random3 === 4 || random3 === 5) {
      this.setState({bpCount: this.state.bpCount + 1});
    } else if (random3 === 6 || random3 === 7) {
      this.setState({wpCount: this.state.wpCount + 1});
    }
  };

  showPearl4 = () => {
    let random4 = this.getRandomNumber();
    this.setState({
      urlPearl4: this.getDiceImage(random4),
      disabled4: true,
      count: this.state.count + 1,
    });
    this.showScore();
    if (random4 === 1 || random4 === 2 || random4 === 3) {
      this.setState({wpCount: this.state.wpCount + 0});
    } else if (random4 === 4 || random4 === 5) {
      this.setState({bpCount: this.state.bpCount + 1});
    } else if (random4 === 6 || random4 === 7) {
      this.setState({wpCount: this.state.wpCount + 1});
    }
  };

  showPearl5 = () => {
    let random5 = this.getRandomNumber();
    this.setState({
      urlPearl5: this.getDiceImage(random5),
      disabled5: true,
      count: this.state.count + 1,
    });
    this.showScore();
    if (random5 === 1 || random5 === 2 || random5 === 3) {
      this.setState({wpCount: this.state.wpCount + 0});
    } else if (random5 === 4 || random5 === 5) {
      this.setState({bpCount: this.state.bpCount + 1});
    } else if (random5 === 6 || random5 === 7) {
      this.setState({wpCount: this.state.wpCount + 1});
    }
  };

  showPearl6 = () => {
    let random6 = this.getRandomNumber();
    this.setState({
      urlPearl6: this.getDiceImage(random6),
      disabled6: true,
      count: this.state.count + 1,
    });
    this.showScore();
    if (random6 === 1 || random6 === 2 || random6 === 3) {
      this.setState({wpCount: this.state.wpCount + 0});
    } else if (random6 === 4 || random6 === 5) {
      this.setState({bpCount: this.state.bpCount + 1});
    } else if (random6 === 6 || random6 === 7) {
      this.setState({wpCount: this.state.wpCount + 1});
    }
  };

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

  // -------------------------------------------------------------------------------
  render() {
    const {navigate} = this.props.navigation;
    let totalPoints = 0;
    if (this.state.wpCount === 6 || this.state.bpCount === 0) {
      totalPoints = 0;
    } else if (this.state.wpCount === 5 || this.state.bpCount === 1) {
      totalPoints = 20;
    } else if (this.state.wpCount === 4 || this.state.bpCount === 2) {
      totalPoints = 200;
    } else if (this.state.wpCount === 3 || this.state.bpCount === 3) {
      totalPoints = 500;
    } else if (this.state.wpCount === 2 || this.state.bpCount >= 4) {
      totalPoints = 2000;
    } else {
      totalPoints = totalPoints;
    }

    return (
      <ImageBackground
        source={require('../src/bg1.png')}
        style={styles.backgroundImage}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => navigate('PDHomeScreen')}>
            <Image
              source={require('../src/PearlDiverAssets-BackButton.png')} 
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <View style={styles.score}>
            {/* Coin GIF and Score */}
            <Image
              style={styles.coinImage}
              source={require('../images/coin1.gif')}></Image>
            <Text style={styles.topRightScoreText}> {this.state.coins} </Text>
          </View>
        </View>

        <View style={styles.container}>
          {/* Scoreboard after a session */}
          <Modal transparent={true} visible={this.state.scoreBoard}>
            <View style={styles.modalContainer}>
              <View
                style={{
                  backgroundColor: '#ebeaf5',
                  margin: 50,
                  padding: 40,
                  borderRadius: 20,
                  flex: 1,
                }}>
                <Text style={styles.topText}>
                  {this.state.message} {totalPoints}
                </Text>
                <Image
                  style={{height: 120, width: 120, alignSelf: 'center'}}
                  source={require('../images/coins.gif')}></Image>

                <TouchableOpacity onPress={this.start}>
                  <Text style={styles.playButton}>Play Again</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('PDHomeScreen')}>
                  <Text style={styles.exitButton}>Exit Game</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={styles.boxesRow}>
            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled1}
                onPress={this.showPearl1}>
                <Image
                  style={styles.boxesImage}
                  source={this.state.urlPearl1}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled4}
                onPress={this.showPearl4}>
                <Image
                  style={styles.boxesImage}
                  source={this.state.urlPearl4}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.boxesRow}>
            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled2}
                onPress={this.showPearl2}>
                <Image
                  style={styles.boxesImage}
                  source={this.state.urlPearl2}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled5}
                onPress={this.showPearl5}>
                <Image
                  style={styles.boxesImage}
                  source={this.state.urlPearl5}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.boxesRow}>
            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled3}
                onPress={this.showPearl3}>
                <Image
                  style={styles.boxesImage}
                  source={this.state.urlPearl3}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled6}
                onPress={this.showPearl6}>
                <Image
                  style={styles.boxesImage}
                  source={this.state.urlPearl6}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#000000aa',
    flex: 1,
    paddingVertical: hp('13%'),
  },
  boxesRow: {
    flexDirection: 'row',
  },
  boxesSpace: {
    padding: 15,
  },
  boxesImage: {
    width: wp('35%'),
    height: hp('20%'),
  },
  playButton: {
    marginTop: 30,
    fontSize: hp('3%'),
    fontWeight: 'bold',
    backgroundColor: '#3880FF',
    color: '#fff',
    textAlign: 'center',
    borderRadius: wp('6%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('2%'),
  },
  exitButton: {
    marginTop: 20,
    fontSize: hp('3%'),
    fontWeight: 'bold',
    backgroundColor: '#3880FF',
    color: '#fff',
    textAlign: 'center',
    borderRadius: wp('6%'),
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('2%'),
  },
  topText: {
    textAlign: 'center',
    marginTop: -10,
    marginBottom: 5,
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },

  topContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: wp('1%'),
  },
  topRightScoreText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: 'white',
  },
  coinImage: {
    marginTop: 4,
    width: wp('5%'),
    height: hp('3%'),
  },

  score: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  backIcon: {
    height: hp('7%'),
    width: hp('20%'),
    resizeMode: 'contain',
  },
});
