import React, { Component } from 'react'
import { ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity, Modal, ViewComponent } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export class DSHowToPlay extends Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ImageBackground source = {require("../images/bgplay.png")} style = {styles.backgroundImage}>
            <View style = {styles.container}>
                <Modal transparent = {true}>
                    <View style = {styles.container}>
                    <View style = {styles.modalBgContainer}>
                        <ImageBackground source = {require("../images/bgmodal2.png")} style = {styles.modalBackgroundImage}>
                            <View style = {styles.modalInside}>
                                <View style = {styles.stepSpace}>
                                    <View style = {styles.step}>
                                        <Text style = {styles.stepStyle}>1) Press</Text>
                                        <Image source = {require('../images/attackbutton.png')} style = {styles.attackButton}/>
                                    </View>
                                    <View style = {styles.step}>
                                        <Text style = {styles.stepStyle}>2) Watch the Dice! </Text>
                                    </View>
                                    <View style = {styles.step}>
                                        <Text style = {styles.stepStyle}>3) See Your Score </Text>
                                    </View>
                                    <View style = {styles.step}>
                                        <Text style = {styles.stepStyle}>4) Play Again! </Text>
                                    </View>
                                </View>
                                

                                <View style = {styles.modalExitSpace}>
                                    <TouchableOpacity onPress={() => navigation.navigate('DSHome')} style={styles.exitBorder}>
                                        <Text style = {[styles.stepStyle, styles.exitStyle]}>x</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    </View>
                </Modal>
            </View>
            </ImageBackground>
        )
    }
}

export default DSHowToPlay;

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
    modalBackgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },
    modalBgContainer: {
        flex: 1,
        margin: wp('10%'),
    },
    modalInside: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: hp('5%'),
    },
    stepSpace: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        marginTop: hp('20%'),
    },
    step: {
        flexDirection: 'row',
    },
    stepStyle: {
        fontSize: hp('4%'),
        fontFamily: 'Bombardment',
        textShadowColor: 'rgb(191,104,80)',
        textShadowOffset: {width: hp('-0.3%'), height: hp('0.4%')},
        textShadowRadius:hp('0.2%'),
        color: '#f0a66e',
    },
    stepOneStyle: {
        color: '#fbb11b',
    },
    attackButton: {
        height: hp('3%'),
        width: hp('20%'),
    },
    modalExitSpace: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    exitBorder: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('8%'),
        width: wp('13%'),
        backgroundColor: '#58467f',
        borderColor: '#ffc90e',
        borderWidth: hp('0.2%'),
        borderRadius: hp('100%'),
    },
    exitStyle: {
        fontSize: hp('6%'),
        color: '#ffc90e'
    },
});