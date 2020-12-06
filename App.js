import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import ChooseScreen from './screens/ChooseScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ArgentinaScreen from './screens/ArgentinaScreen';
import ChinaScreen from './screens/ChinaScreen';
import IndiaScreen from './screens/IndiaScreen';
import JapanScreen from './screens/JapanScreen';
import SpainScreen from './screens/SpainScreen';
import UsaScreen from './screens/UsaScreen';

export default function App() {
  return (
    <View>
      <AppContainer/>
  </View>
  );
}

var AppNavigator = createSwitchNavigator({
  WelcomeScreen:WelcomeScreen,
  ChooseScreen : ChooseScreen,
  ArgentinaScreen: ArgentinaScreen,
  ChinaScreen: ChinaScreen,
  IndiaScreen: IndiaScreen,
  JapanScreen: JapanScreen,
  SpainScreen: SpainScreen,
  UsaScreen: UsaScreen
})

const styles = StyleSheet.create({
  
})

const AppContainer = createAppContainer(AppNavigator)