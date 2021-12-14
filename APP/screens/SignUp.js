import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

export default SignUp=()=>{
  return (
    <SafeAreaView style={styles.container}>
      <Text>SignUp</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
