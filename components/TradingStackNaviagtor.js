import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import AppTabNavigator  from './AppTabNavigator';

export const AppStackNavigator = createStackNavigator({
  Home : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  TradingTab : {
    screen : AppTabNavigator,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'Home'
  }
);
