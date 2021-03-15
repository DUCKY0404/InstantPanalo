import React, { Component, useState } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    FlatList,
    BackHandler,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Game from '../screens/Game';
import Orientation from 'react-native-orientation-locker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class choose extends Component{

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

    constructor(props) {
        super(props)
    }


    render() {
        Orientation.lockToLandscape();
        let horse1 = 1;
        let horse2 = 2;
        let horse3 = 3;
        let horse4 = 4;
        let horse5 = 5;
        return(
            <View style={styles.container}>
                <Image
                    style={styles.chooseTitle}
                    source={require('../PNG/title-choose.png')}>
                </Image>
            <View style={styles.allHorses}>
                <View style = {styles.horseRow}> 
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Game', horse1)}>
                        {<Image style={styles.imageStyle} source={require('../PNG/black.gif')}></Image>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Game', horse2)}>
                        {<Image style={styles.imageStyle} source={require('../PNG/Brown.gif')}></Image>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Game', horse3)}>
                        {<Image style={styles.imageStyle} source={require('../PNG/red.gif')}></Image>}
                    </TouchableOpacity>
                </View>

                <View style = {styles.horseRow}>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Game', horse4)}>
                        {<Image style={styles.imageStyle} source={require('../PNG/white.gif')}></Image>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Game', horse5)}>
                        {<Image style={styles.imageStyle} source={require('../PNG/yellow.gif')}></Image>}
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FDA50F',
    },
    allHorses: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    horseRow: {
        flexDirection: 'row',
    },
    imageStyle:{
        resizeMode: 'contain',
        width: wp('45%'),
        height: hp('20%'),
        alignSelf: 'center',
    },
    horseStyle:{
        padding: hp('4%'),
    },
    chooseTitle:{
        resizeMode: 'contain',
        alignSelf: 'center',
        height: hp('20%'),
        marginTop: hp('-3%'),
        marginBottom: hp('-12%')
    },
})