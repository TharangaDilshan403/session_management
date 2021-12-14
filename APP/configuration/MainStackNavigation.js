import React,{useState} from 'react'
import { View, Text } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';


const MainStack = createStackNavigator();

const MainStackNavigation = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen component={Home} name="Home"/>
        </MainStack.Navigator>
    )
}

export default MainStackNavigation
