import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import DictionaryScreen from './screens/DictionaryScreen';
import CurrencyConversionScreen from './screens/CurrencyConversionScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  HomeScreen: {screen: HomeScreen},
  DictionaryScreen: {screen: DictionaryScreen},
  CurrencyConversionScreen: {screen: CurrencyConversionScreen}
});

const AppContainer = createAppContainer(switchNavigator);

