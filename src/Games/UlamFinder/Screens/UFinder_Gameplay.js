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

export default class UFGameScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Coins Win:',
      urlFood1: require('../images/pot2.png'),
      urlFood2: require('../images/pot1.png'),
      urlFood3: require('../images/pot2.png'),
      urlFood4: require('../images/pot1.png'),
      urlFood5: require('../images/pot2.png'),
      urlFood6: require('../images/pot1.png'),
      disabled1: false,
      disabled2: false,
      disabled3: false,
      disabled4: false,
      disabled5: false,
      disabled6: false,
      foodCount: 0,
      riceCount: 0,
      count: 0,
      coins: 0,
      scoreBoard: false,
    };
  }

  getRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    return randomNumber;
  };

  getImage = (foodRandom) => {
    switch (foodRandom) {
      case 1:
      case 2:
      case 3:
        return require('../images/food.png');
        break;
      case 4:
        return require('../images/rice1.png');
        break;
      case 5:
        return require('../images/rice2.png');
        break;
      case 6:
        return require('../images/food1.png');
        break;
      case 7:
        return require('../images/food2.png');
        break;
      case 8:
        return require('../images/food3.png');
        break;
      case 9:
        return require('../images/food4.png');
        break;
      default:
        return require('../images/food0.png');
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
    if (this.state.riceCount == 3 && this.state.foodCount == 3) {
      this.setState({coins: this.state.coins + 1500});
    } else if (this.state.riceCount >= 2 && this.state.foodCount >= 2) {
      this.setState({coins: this.state.coins + 500});
    } else if (this.state.riceCount >= 1 && this.state.foodCount >= 1) {
      this.setState({coins: this.state.coins + 200});
    }
  };

  playAgain = () => {
    this.setState({
      message: 'Coins Win:',
      urlFood1: require('../images/pot2.png'),
      urlFood2: require('../images/pot1.png'),
      urlFood3: require('../images/pot2.png'),
      urlFood4: require('../images/pot1.png'),
      urlFood5: require('../images/pot2.png'),
      urlFood6: require('../images/pot1.png'),
      disabled1: false,
      disabled2: false,
      disabled3: false,
      disabled4: false,
      disabled5: false,
      disabled6: false,
      foodCount: 0,
      riceCount: 0,
      count: 0,
      scoreBoard: false,
    });
    this.coinsGained();
  };

  showFood1 = () => {
    let random1 = this.getRandomNumber();

    this.setState({
      urlFood1: this.getImage(random1),
      disabled1: true,
      count: this.state.count + 1,
    });
    this.showScore();

    if (random1 === 1 || random1 === 2 || random1 === 3) {
      this.setState({foodCount: this.state.foodCount + 0});
    } else if (random1 === 4 || random1 === 5) {
      this.setState({riceCount: this.state.riceCount + 1});
    } else {
      this.setState({foodCount: this.state.foodCount + 1});
    }
  };

  showFood2 = () => {
    let random2 = this.getRandomNumber();
    this.setState({
      urlFood2: this.getImage(random2),
      disabled2: true,
      count: this.state.count + 1,
    });
    this.showScore();

    if (random2 === 1 || random2 === 2 || random2 === 3) {
      this.setState({foodCount: this.state.foodCount + 0});
    } else if (random2 === 4 || random2 === 5) {
      this.setState({riceCount: this.state.riceCount + 1});
    } else {
      this.setState({foodCount: this.state.foodCount + 1});
    }
  };

  showFood3 = () => {
    let random3 = this.getRandomNumber();
    this.setState({
      urlFood3: this.getImage(random3),
      disabled3: true,
      count: this.state.count + 1,
    });
    this.showScore();
    if (random3 === 1 || random3 === 2 || random3 === 3) {
      this.setState({foodCount: this.state.foodCount + 0});
    } else if (random3 === 4 || random3 === 5) {
      this.setState({riceCount: this.state.riceCount + 1});
    } else {
      this.setState({foodCount: this.state.foodCount + 1});
    }
  };

  showFood4 = () => {
    let random4 = this.getRandomNumber();
    this.setState({
      urlFood4: this.getImage(random4),
      disabled4: true,
      count: this.state.count + 1,
    });
    this.showScore();
    if (random4 === 1 || random4 === 2 || random4 === 3) {
      this.setState({foodCount: this.state.foodCount + 0});
    } else if (random4 === 4 || random4 === 5) {
      this.setState({riceCount: this.state.riceCount + 1});
    } else {
      this.setState({foodCount: this.state.foodCount + 1});
    }
  };

  showFood5 = () => {
    let random5 = this.getRandomNumber();
    this.setState({
      urlFood5: this.getImage(random5),
      disabled5: true,
      count: this.state.count + 1,
    });
    this.showScore();
    if (random5 === 1 || random5 === 2 || random5 === 3) {
      this.setState({foodCount: this.state.foodCount + 0});
    } else if (random5 === 4 || random5 === 5) {
      this.setState({riceCount: this.state.riceCount + 1});
    } else {
      this.setState({foodCount: this.state.foodCount + 1});
    }
  };

  showFood6 = () => {
    let random6 = this.getRandomNumber();
    this.setState({
      urlFood6: this.getImage(random6),
      disabled6: true,
      count: this.state.count + 1,
    });
    this.showScore();
    if (random6 === 1 || random6 === 2 || random6 === 3) {
      this.setState({foodCount: this.state.foodCount + 0});
    } else if (random6 === 4 || random6 === 5) {
      this.setState({riceCount: this.state.riceCount + 1});
    } else {
      this.setState({foodCount: this.state.foodCount + 1});
    }
  };

  // -------------------------------------------------------------------------------
  render() {
    const {navigate} = this.props.navigation;

    let totalPoints = 0;
    if (this.state.riceCount == 3 && this.state.foodCount == 3) {
      totalPoints = 1500;
    } else if (this.state.riceCount >= 2 && this.state.foodCount >= 2) {
      totalPoints = 500;
    } else if (this.state.riceCount >= 1 && this.state.foodCount >= 1) {
      totalPoints = 200;
    } else {
      totalPoints = totalPoints;
    }
    return (
      <ImageBackground
        source={require('../images/bg5.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.topRightScore}>
          <Image
            style={styles.coinImage}
            source={require('../images/coin1.gif')}></Image>
          <Text style={styles.topRightScoreText}> {this.state.coins} </Text>
        </View>

        <View style={styles.container}>
          <Modal transparent={true} visible={this.state.scoreBoard}>
            <View style={styles.modalContainer}>
              <View
                style={{
                  backgroundColor: '#660000',
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

                <TouchableOpacity onPress={this.playAgain}>
                  <Text style={styles.playButton}>Play Again</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigate('UF_HomeScreen')}>
                  <Text style={styles.exitButton}>Exit Game</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={styles.boxesRow}>
            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled1}
                onPress={this.showFood1}>
                <Image style={styles.boxesImage} source={this.state.urlFood1} />
              </TouchableOpacity>
            </View>

            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled4}
                onPress={this.showFood4}>
                <Image style={styles.boxesImage} source={this.state.urlFood4} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.boxesRow}>
            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled2}
                onPress={this.showFood2}>
                <Image style={styles.boxesImage} source={this.state.urlFood2} />
              </TouchableOpacity>
            </View>

            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled5}
                onPress={this.showFood5}>
                <Image style={styles.boxesImage} source={this.state.urlFood5} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.boxesRow}>
            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled3}
                onPress={this.showFood3}>
                <Image style={styles.boxesImage} source={this.state.urlFood3} />
              </TouchableOpacity>
            </View>

            <View style={styles.boxesSpace}>
              <TouchableOpacity
                disabled={this.state.disabled6}
                onPress={this.showFood6}>
                <Image style={styles.boxesImage} source={this.state.urlFood6} />
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
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#000000aa',
    flex: 1,
    paddingVertical: hp('10%'),
  },
  boxesRow: {
    flexDirection: 'row',
  },
  boxesSpace: {
    padding: hp('2%'),
  },
  boxesImage: {
    width: wp('38%'),
    height: hp('25%'),
    resizeMode: 'contain',
  },
  playButton: {
    marginTop: hp('3%'),
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    borderRadius: hp('3%'),
    paddingVertical: hp('1%'),
  },
  exitButton: {
    marginTop: hp('3%'),
    fontSize: hp('3.5%'),
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    borderRadius: hp('3%'),
    paddingVertical: hp('1%'),
  },
  topText: {
    textAlign: 'center',
    color: 'white',
    marginTop: hp('0.1%'),
    marginBottom: hp('1%'),
    fontSize: hp('3%'),
    fontWeight: 'bold',
  },
  topRightScore: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: hp('0.5%'),
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
