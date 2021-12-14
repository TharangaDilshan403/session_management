import React,{useState} from 'react';
import {View, Text} from 'react-native';

import LogIn from '../screens/LigIn';
import SignUp from '../screens/SignUp';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthStackNavigation = () => {

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="LogIn"
        component={LogIn}
        options={{headerShown: false}}
      />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;
