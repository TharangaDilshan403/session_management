import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import Colors from '../constants/Colors';
export default LigIn = () => {
  return (
    <SafeAreaView style={{flex : 1,backgroundColor : Colors.white}}>
      <StatusBar backgroundColor={Colors.blue} barStyle='light-content'/>
      <Text>LogIn</Text>
    </SafeAreaView>
  );
};
