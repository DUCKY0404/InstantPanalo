import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    BackHandler
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Orientation from 'react-native-orientation-locker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class How extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
      }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
      }
    
    onBackPress = () => {
        {this.props.navigation.navigate('MainScreen')}
        return true;
      }
    render() {
        Orientation.lockToLandscape();
        return(
            <View style={{flex: 1, backgroundColor: '#FDA50F', justifyContent: 'center'}}>
                <Text style={styles.textStyle}> Tap the screen to start the race, the first one to reach the finish line, WINS! </Text>
                <TouchableOpacity
                     onPress = {() => this.props.navigation.navigate("MainScreen")}
                >
                <Image
                    style={styles.button}
                    source={require('../PNG/wood-back.png')}></Image>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        resizeMode: 'contain',
        marginTop: hp('2%'),
        height: hp('7.5%'),
        width: wp('35%'),
        alignSelf: 'center',
    },
    textStyle:{
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
        alignSelf: 'center',
    },
});