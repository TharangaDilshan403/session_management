import React from 'react';
import {View, Text} from 'react-native';

import LogIn from '../screens/LigIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      component={LogIn}
      options={{headerShown: false}}
      name="LogIn"
    />
    <AuthStack.Screen component={SignUp} name="SignUp" />
    {/* tepm */}
    <AuthStack.Screen component={Home} name="Home" />
  </AuthStack.Navigator>
);
const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStackScreen />
    </NavigationContainer>
  );
};

export default Navigation;
