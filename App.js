import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Orientation from 'react-native-orientation-locker';
import StartScreen from './src/StartScreen';
import HomeScreen from './src/HomeScreen';

// Dragon Slayer Imports
import DS_LoadingScreen from './src/Games/DragonSlayer/Screens/DragonSlayer_Loadingscreen';
import DS_Homescreen from './src/Games/DragonSlayer/Screens/DragonSlayer_Homescreen';
import DS_GameplayTransition from './src/Games/DragonSlayer/Screens/DragonSlayer_GameplayTransition';
import DS_Tutorial from './src/Games/DragonSlayer/Screens/DragonSlayer_Tutorial';
import DS_Gameplay from './src/Games/DragonSlayer/Screens/DragonSlayer_Gameplay';

// Karera Imports
import KR_Homescreen from './src/Games/Karera/Screens/Karera_Homescreen';
import KR_Gameplay from './src/Games/Karera/Screens/Karera_Gameplay';
import KR_Selection from './src/Games/Karera/Screens/Karera_Selection';
import KR_Tutorial from './src/Games/Karera/Screens/Karera_Tutorial';
import KR_GameplayTransition from './src/Games/Karera/Screens/Karera_GameplayTransition';
import KR_LoadingScreen from './src/Games/Karera/Screens/Karera_Loadingscreen';

// Pearl Diver Imports
import PDHomeScreen from './src/Games/PearlDiver/screen/homescreen';
import PDHowToPlay from './src/Games/PearlDiver/screen/howtoplay';
import PDGamex from './src/Games/PearlDiver/screen/play';

// Ulam Finder Imports
import UF_HomeScreen from './src/Games/UlamFinder/Screens/UFinder_Homescreen';
import UF_Gameplay from './src/Games/UlamFinder/Screens/UFinder_Gameplay';
import UF_Tutorial from './src/Games/UlamFinder/Screens/UFinder_Tutorial';
import UF_GameplayTransition from './src/Games/UlamFinder/Screens/UFinder_GameplayTransition';
import UF_LoadingScreen from './src/Games/UlamFinder/Screens/UFinder_LoadingScreen';

// Jose Rizal Imports
import JRHomeScreen from './src/Games/JoseRizal/HomeScreen';
import JRGameScreen from './src/Games/JoseRizal/GameScreen';
import JRInstructionScreen from './src/Games/JoseRizal/Instruction';
import PDLoadingScreen from './src/Games/PearlDiver/screen/PDLoadingScreen';
import JRLoadingScreen from './src/Games/JoseRizal/LoadingScreen';

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
          <Stack.Screen name="DS_LoadingScreen" component={DS_LoadingScreen} />
          <Stack.Screen name="DS_Homescreen" component={DS_Homescreen} />
          <Stack.Screen name="DS_Tutorial" component={DS_Tutorial} />
          <Stack.Screen name="DS_Gameplay" component={DS_Gameplay} />
          <Stack.Screen
            name="DS_GameplayTransition"
            component={DS_GameplayTransition}
          />

          {/* KARERA ROUTER*/}

          <Stack.Screen name="KR_HomeScreen" component={KR_Homescreen} />
          <Stack.Screen name="KR_Gameplay" component={KR_Gameplay} />
          <Stack.Screen
            name="KR_GameplayTransition"
            component={KR_GameplayTransition}
          />
          <Stack.Screen name="KR_Selection" component={KR_Selection} />
          <Stack.Screen name="KR_Tutorial" component={KR_Tutorial} />
          <Stack.Screen name="KR_LoadingScreen" component={KR_LoadingScreen} />

          {/* PEARL DIVER ROUTER*/}

          <Stack.Screen name="PDLoadingScreen" component={PDLoadingScreen} />
          <Stack.Screen name="PDHomeScreen" component={PDHomeScreen} />
          <Stack.Screen name="PDHowToPlay" component={PDHowToPlay} />
          <Stack.Screen name="PDGamex" component={PDGamex} />

          {/* ULAM FINDER ROUTER*/}

          <Stack.Screen name="UF_HomeScreen" component={UF_HomeScreen} />
          <Stack.Screen name="UF_Gameplay" component={UF_Gameplay} />
          <Stack.Screen name="UF_Tutorial" component={UF_Tutorial} />
          <Stack.Screen name="UF_LoadingScreen" component={UF_LoadingScreen} />
          <Stack.Screen
            name="UF_GameplayTransition"
            component={UF_GameplayTransition}
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
