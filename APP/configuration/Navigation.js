import React, {useState, useMemo} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../screens/Home';
import AuthStackNavigation from './AuthStackNavigation';
import MainStackNavigation from './MainStackNavigation';
import {AuthContext} from '../util/AuthContext';
// modal stack
const ModalStack = createStackNavigator();

const ModalStackScreen = () => (
  <ModalStack.Navigator>

    <ModalStack.Screen
      name="AuthStackNavigation"
      component={AuthStackNavigation}
      options={{headerShown: false, ...TransitionPresets.SlideFromRightIOS}}
    />

    <ModalStack.Screen
      name="MainStackNavigation"
      component={MainStackNavigation}
      options={{headerShown: false, ...TransitionPresets.SlideFromRightIOS}}
    />
  </ModalStack.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <ModalStackScreen />
    </NavigationContainer>
  );
};

export default Navigation;
