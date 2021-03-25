import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Orientation from 'react-native-orientation-locker';
import StartScreen from './src/StartScreen';
import HomeScreen from './src/HomeScreen';

import DSLoadingScene from './src/Games/DragonSlayer/src/scenes/DSLoadingScene';
import DSHome from './src/Games/DragonSlayer/src/scenes/DSHome';
import DSPlayGame from './src/Games/DragonSlayer/src/scenes/DSPlayGame';
import DSHowToPlay from './src/Games/DragonSlayer/src/scenes/DSHowToPlay';

import MainScreen from './src/Games/Karera/screens/MainScreen';
import Game from './src/Games/Karera/screens/Game';
import choose from './src/Games/Karera/screens/choose';
import How from './src/Games/Karera/screens/How';

import PDHomeScreen from './src/Games/PearlDiver/screen/homescreen';
import PDHowToPlay from './src/Games/PearlDiver/screen/howtoplay';
import PDGamex from './src/Games/PearlDiver/screen/play';

import UFHomeScreen from './src/Games/UlamFinder/pages/HomeScreen';
import UFGameScreen from './src/Games/UlamFinder/pages/GameScreen';
import UFInstructionScreen from './src/Games/UlamFinder/pages/Instruction';

import JRHomeScreen from './src/Games/JoseRizal/HomeScreen';
import JRGameScreen from './src/Games/JoseRizal/GameScreen';
import JRInstructionScreen from './src/Games/JoseRizal/Instruction';
import PDLoadingScreen from './src/Games/PearlDiver/screen/PDLoadingScreen';
import JRLoadingScreen from './src/Games/JoseRizal/LoadingScreen';
import DSPlayAnimation from './src/Games/DragonSlayer/src/scenes/DSPlayAnimation';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    Orientation.lockToPortrait();
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, animationEnabled: false}}
          initialRouteName="StartScreen">
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />

          {/* DRAGON SLAYER ROUTER*/}

          <Stack.Screen name="DSLoadingScene" component={DSLoadingScene} />
          <Stack.Screen name="DSHome" component={DSHome} />
          <Stack.Screen name="DSPlayGame" component={DSPlayGame} />
          <Stack.Screen name="DSHowToPlay" component={DSHowToPlay} />
          <Stack.Screen name="DSPlayAnimation" component={DSPlayAnimation} />

          {/* KARERA ROUTER*/}

          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="choose" component={choose} />
          <Stack.Screen name="How" component={How} />

          {/* PEARL DIVER ROUTER*/}

          <Stack.Screen name="PDLoadingScreen" component={PDLoadingScreen} />
          <Stack.Screen name="PDHomeScreen" component={PDHomeScreen} />
          <Stack.Screen name="PDHowToPlay" component={PDHowToPlay} />
          <Stack.Screen name="PDGamex" component={PDGamex} />

          {/* ULAM FINDER ROUTER*/}

          <Stack.Screen name="UFHomeScreen" component={UFHomeScreen} />
          <Stack.Screen name="UFGameScreen" component={UFGameScreen} />
          <Stack.Screen
            name="UFInstructionScreen"
            component={UFInstructionScreen}
          />

          {/* JOSE RIZAL ROUTER*/}
          <Stack.Screen name="JRLoadingScreen" component={JRLoadingScreen} />
          <Stack.Screen name="JRHomeScreen" component={JRHomeScreen} />
          <Stack.Screen name="JRGameScreen" component={JRGameScreen} />
          <Stack.Screen
            name="JRInstructionScreen"
            component={JRInstructionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
