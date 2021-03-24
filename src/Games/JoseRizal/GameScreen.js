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
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class JRGameScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Coins Win:',
      urlBook1: require('./assets/book.png'),
      urlBook2: require('./assets/book.png'),
      urlBook3: require('./assets/book.png'),
      urlBook4: require('./assets/book.png'),
      urlBook5: require('./assets/book.png'),
      urlBook6: require('./assets/book.png'),
      urlShelf1: require('./assets/shelf.png'),
      disabled1: false,
      disabled2: false,
      disabled3: false,
      disabled4: false,
      disabled5: false,
      disabled6: false,
      featherCount: 0,
      count: 0,
      coins: 0,
      scoreBoard: false,
    };
  }

  getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    return randomNumber;
  };

  getImage = (bookRandom) => {
    switch (bookRandom) {
      case 1:
      case 2:
      case 3:
        return require('./assets/open.png');
        break;
      case 4:
        return require('./assets/book2.png');
        break;
      case 5:
        return require('./assets/book2.png');
        break;
      case 6:
        return require('./assets/open.png');
        break;
      case 7:
        return require('./assets/book2.png');
        break;
      case 8:
        return require('./assets/book2.png');
        break;
      case 9:
        return require('./assets/open.png');
        break;
      default:
        return require('./assets/book2.png');
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
    if (this.state.featherCount == 6) {
      this.setState({coins: this.state.coins + 2000});
    } else if (this.state.featherCount == 5) {
      this.setState({coins: this.state.coins + 1000});
    } else if (this.state.featherCount == 4) {
      this.setState({coins: this.state.coins + 500});
    } else if (this.state.featherCount == 3) {
      this.setState({coins: this.state.coins + 200});
    } else if (this.state.featherCountCount == 2) {
      this.setState({coins: this.state.coins + 20});
    }
  };

  playAgain = () => {
    this.setState({
      message: 'Coins Win:',
      urlBook1: require('./assets/book.png'),
      urlBook2: require('./assets/book.png'),
      urlBook3: require('./assets/book.png'),
      urlBook4: require('./assets/book.png'),
      urlBook5: require('./assets/book.png'),
      urlBook6: require('./assets/book.png'),
      urlShelf1: require('./assets/shelf.png'),
      disabled1: false,
      disabled2: false,
      disabled3: false,
      disabled4: false,
      disabled5: false,
      disabled6: false,
      featherCount: 0,
      count: 0,
      scoreBoard: false,
    });
    this.coinsGained();
  };

  showBook1 = () => {
    let random1 = this.getRandomNumber();

    this.setState({
      urlBook1: this.getImage(random1),
      disabled1: true,
      count: this.state.count + 1,
    });
    this.showScore();

    if (
      random1 === 1 ||
      random1 === 2 ||
      random1 === 3 ||
      random1 === 6 ||
      random1 === 9
    ) {
      this.setState({featherCount: this.state.featherCount + 0});
    } else {
      this.setState({featherCount: this.state.featherCount + 1});
    }
  };

  showBook2 = () => {
    let random2 = this.getRandomNumber();
    this.setState({
      urlBook2: this.getImage(random2),
      disabled2: true,
      count: this.state.count + 1,
    });
    this.showScore();

    if (
      random2 === 1 ||
      random2 === 2 ||
      random2 === 3 ||
      random2 === 6 ||
      random2 === 9
    ) {
      this.setState({featherCount: this.state.featherCount + 0});
    } else {
      this.setState({featherCount: this.state.featherCount + 1});
    }
  };

  showBook3 = () => {
    let random3 = this.getRandomNumber();
    this.setState({
      urlBook3: this.getImage(random3),
      disabled3: true,
      count: this.state.count + 1,
    });
    this.showScore();

    if (
      random3 === 1 ||
      random3 === 2 ||
      random3 === 3 ||
      random3 === 6 ||
      random3 === 9
    ) {
      this.setState({featherCount: this.state.featherCount + 0});
    } else {
      this.setState({featherCount: this.state.featherCount + 1});
    }
  };

  showBook4 = () => {
    let random4 = this.getRandomNumber();
    this.setState({
      urlBook4: this.getImage(random4),
      disabled4: true,
      count: this.state.count + 1,
    });
    this.showScore();

    if (
      random4 === 1 ||
      random4 === 2 ||
      random4 === 3 ||
      random4 === 6 ||
      random4 === 9
    ) {
      this.setState({featherCount: this.state.featherCount + 0});
    } else {
      this.setState({featherCount: this.state.featherCount + 1});
    }
  };

  showBook5 = () => {
    let random5 = this.getRandomNumber();
    this.setState({
      urlBook5: this.getImage(random5),
      disabled5: true,
      count: this.state.count + 1,
    });
    this.showScore();

    if (
      random5 === 1 ||
      random5 === 2 ||
      random5 === 3 ||
      random5 === 6 ||
      random5 === 9
    ) {
      this.setState({featherCount: this.state.featherCount + 0});
    } else {
      this.setState({featherCount: this.state.featherCount + 1});
    }
  };

  showBook6 = () => {
    let random6 = this.getRandomNumber();
    this.setState({
      urlBook6: this.getImage(random6),
      disabled6: true,
      count: this.state.count + 1,
    });
    this.showScore();

    if (
      random6 === 1 ||
      random6 === 2 ||
      random6 === 3 ||
      random6 === 6 ||
      random6 === 9
    ) {
      this.setState({featherCount: this.state.featherCount + 0});
    } else {
      this.setState({featherCount: this.state.featherCount + 1});
    }
  };

  // -------------------------------------------------------------------------------
  render() {
    const {navigate} = this.props.navigation;
    let totalPoints = 0;
    if (this.state.featherCount == 6) {
      totalPoints = 2000;
    } else if (this.state.featherCount == 5) {
      totalPoints = 1000;
    } else if (this.state.featherCount == 4) {
      totalPoints = 500;
    } else if (this.state.featherCount == 3) {
      totalPoints = 200;
    } else if (this.state.featherCount == 2) {
      totalPoints = 20;
    } else {
      totalPoints = totalPoints;
    }
    return (
      <ImageBackground
        source={require('./assets/bgred.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.topRightScore}>
          <Image
            style={styles.coinImage}
            source={require('./assets/coin1.gif')}></Image>
          <Text style={styles.topRightScoreText}> {this.state.coins} </Text>
        </View>

        <View style={styles.container}>
          <Modal transparent={true} visible={this.state.scoreBoard}>
            <View style={styles.modalContainer}>
              <ImageBackground
                source={require('./assets/victory.png')}
                style={styles.backgroundImage}>
                <View>
                  <Text style={styles.topText}>
                    {this.state.message} {totalPoints}
                  </Text>

                  <View style={styles.boxesRow}>
                    <TouchableOpacity onPress={this.playAgain}>
                      <Image
                        source={require('./assets/again.png')}
                        style={styles.exitButton}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigate('JRHomeScreen')}>
                      <Image
                        source={require('./assets/menu.png')}
                        style={styles.exitButton}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </Modal>

          <View style={styles.boxesRow}>
            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled1}
                onPress={this.showBook1}>
                <Image style={styles.boxesImage} source={this.state.urlBook1} />
              </TouchableOpacity>
            </View>

            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled4}
                onPress={this.showBook4}>
                <Image style={styles.boxesImage} source={this.state.urlBook4} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Image
              style={styles.shelfImage}
              source={this.state.urlShelf1}></Image>
          </View>

          <View style={styles.boxesRow}>
            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled2}
                onPress={this.showBook2}>
                <Image style={styles.boxesImage} source={this.state.urlBook2} />
              </TouchableOpacity>
            </View>

            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled5}
                onPress={this.showBook5}>
                <Image style={styles.boxesImage} source={this.state.urlBook5} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Image
              style={styles.shelfImage}
              source={this.state.urlShelf1}></Image>
          </View>

          <View style={styles.boxesRow}>
            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled3}
                onPress={this.showBook3}>
                <Image style={styles.boxesImage} source={this.state.urlBook3} />
              </TouchableOpacity>
            </View>

            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled6}
                onPress={this.showBook6}>
                <Image style={styles.boxesImage} source={this.state.urlBook6} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Image
              style={styles.shelfImage}
              source={this.state.urlShelf1}></Image>
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
  shelfImage: {
    width: wp('100%'),
    height: hp('15%'),
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#000000aa',
    flex: 1,
    paddingVertical: hp('15%'),
  },
  boxesRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  boxesSpace: {
    padding: wp('4%'),
    marginBottom: hp('-13%'),
  },
  boxesImage: {
    width: wp('40%'),
    height: hp('23%'),
  },
  exitButton: {
    width: wp('35%'),
    height: hp('8%'),
    resizeMode: 'contain',
  },
  topText: {
    textAlign: 'center',
    fontFamily: 'Back to Black Demo',
    color: 'black',
    marginTop: hp('25%'),
    marginBottom: hp('7%'),
    fontSize: hp('5%'),
  },
  topRightScore: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: hp('1%'),
  },
  topRightScoreText: {
    fontSize: hp('3%'),
    fontWeight: 'bold',
    color: 'white',
  },
  coinImage: {
    marginTop: hp('0.7%'),
    width: wp('5%'),
    height: hp('3%'),
  },
});
