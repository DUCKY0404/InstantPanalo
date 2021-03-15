import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    BackHandler,
} from 'react-native';
import Game from '../screens/Game';
import choose from '../screens/choose';
import How from '../screens/How';
import Orientation from 'react-native-orientation-locker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class MainScreen extends Component{
     componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
      }
    
      onBackPress = () => {
        {this.props.navigation.navigate('HomeScreen'); Orientation.lockToPortrait();}
        return true;
      }
    render(){
        Orientation.lockToLandscape();
        return(

            <View style={styles.container}>
                <View style={styles.space}/>
                <View style={styles.title}>
                    <Image
                        style={styles.logo}
                        source={require('../PNG/KARERA-LOGO.gif')}
                    />
                </View>
                <View style={styles.buttonSpace}>
                <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate("choose")}
                >
                    <Image
                        style={styles.button1}
                        source={require('../PNG/wood-play.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate("How")}>
                    <Image
                        style={styles.button}
                        source={require('../PNG/wood-how.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.space}/>
                 <StatusBar hidden = {true}></StatusBar>
            </View>

        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: '#FDA50F'
    },
    title:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        resizeMode: 'contain',
        height: hp('50%'),
        width: wp('170%'),
    },
    buttonSpace:{
        flex:1,
        justifyContent: 'center'
    },
    button:{
        resizeMode: 'contain',
        height: hp('8%'),
        width: wp('35%'),
        marginTop: hp('1%'),
        alignSelf: 'center',
    },
    button1:{
        resizeMode: 'contain',
        height: hp('10%'),
        width: wp('45%'),
        marginTop: hp('2.5%'),
        alignSelf: 'center',
    },
    space: {
        flex: 0.5,
    },
});

