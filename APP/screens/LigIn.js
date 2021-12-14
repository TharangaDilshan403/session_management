import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CheckBox, Icon} from 'react-native-elements';

import Colors from '../constants/Colors';

export default LigIn = ({navigation}) => {
  const [passwordShow, setPasswordShow] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isSave, setIsSave] = useState(false);

  // const logInHandle = () => {

  //   console.log(userName + '  ' + password);
  //   if (userName === '' && password === '') {
  //     alert('Enter email and password');
  //   } else {
  //     setIsSave(true);
  //     fetch('https://reqres.in/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({email: userName, password: password}),
  //     })
  //       .then(e => {
  //         return e.json();
  //       })
  //       .then(e => {
  //         if (e.error) {
  //           setIsSave(false);
  //           alert('dscs ' + e.error);
  //         } else {
  //           setIsSave(false);
  //           if (isChecked) {
  //             dispatch(loginUser(e.token));
  //         }
  //           navigation.navigate('MainStackNavigation', {screen: 'Home'});
  //         }
  //         console.log(e);
  //       })
  //       .catch(err => {
  //         setIsSave(false);
  //         alert('Invalid user name or password');
  //       });
  //   }
  // };

  const logInHandle = () => {
    console.log(userName, 'U');
    console.log(password, 'P');
    if (password != '' && userName != '') {
      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userName,
          password: password,
        }),
      })
        .then(e => {
          return e.json();
        })
        .then(e => {
          const {error, token} = e;
          console.log(error, 'error');
          console.log(token, 'toekn');
          if (token === undefined) {
          } else {
            navigation.navigate('MainStackNavigation', {screen: 'Home'});
          }
          // if (error === undefined) {
          //
          // }
          // if (error == 'user not found') {
          //   console.log(true);
          // }

          //
          // }
        });
    } else {
      alert('Invalid user name or password...');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.background}}>
      <StatusBar backgroundColor={Colors.blue} barStyle="light-content" />

      {/* blue area */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topContainer} />

        {/* content area */}
        <KeyboardAvoidingView>
          <Text style={styles.logInText}>Login</Text>

          <View style={styles.inputContainer}>
            <MaterialIcons name="person-outline" size={28} color="gray" />
            <TextInput
              style={[styles.Input]}
              placeholder="Username"
              placeholderTextColor="gray"
              selectionColor="gray"
              defaultValue={userName}
              onChangeText={value => setUserName(value)}
            />
          </View>

          <View style={[styles.inputContainer, {marginTop: 30}]}>
            <Ionicons name="key-outline" size={25} color="gray" />

            <TextInput
              style={[styles.Input, {width: (width * 65) / 100}]}
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry={passwordShow}
              selectionColor="gray"
              defaultValue={password}
              onChangeText={password => setPassword(password)}
            />

            <TouchableOpacity onPress={() => setPasswordShow(!passwordShow)}>
              <Ionicons
                name={!passwordShow ? 'eye-outline' : 'eye-off-outline'}
                size={25}
                color={!passwordShow ? Colors.blue : 'gray'}
              />
            </TouchableOpacity>
          </View>

          {/* check box */}
          <View style={styles.checkBoxSection}>
            <CheckBox
              textStyle={styles.checkBoxText}
              title="Remember Me"
              checked={isChecked}
              onPress={() => setChecked(!isChecked)}
              uncheckedColor={'gray'}
              checkedColor={Colors.blue}
              containerStyle={{
                borderWidth: 0,
                //padding: 0,
              }}
            />
            <TouchableOpacity onPress={() => alert('Fogot Password')}>
              <Text style={styles.fogotPasswordText}>Fogot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.logInBtn}
            onPress={() => logInHandle()}>
            {/* navigation.navigate('MainStackNavigation',{screen:"Home"}) */}
            <Text style={styles.logInBtnText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.registerNowContainer}>
            <Text style={[styles.registerNowText]}>
              Don't have and account ?
            </Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text
                style={[
                  styles.registerNowText,
                  {
                    marginLeft: 5,
                    color: Colors.blue,
                    textDecorationLine: 'underline',
                    fontWeight: 'bold',
                  },
                ]}>
                Register Now
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: Colors.blue,
    height: (height * 40) / 100,
  },
  logInText: {
    color: Colors.blue,
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 20,
    fontWeight: '600',
  },
  inputContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EDEFF0',
    borderWidth: 2,
    borderRadius: 5,
    width: (width * 90) / 100,
  },
  Input: {
    width: '80%',
    height: 50,
    paddingHorizontal: 20,
    fontSize: 16,
    color: 'gray',
  },
  checkBoxSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: (width * 90) / 100,
    alignSelf: 'center',
    marginVertical: 20,
    // backgroundColor : Colors.blue,
  },
  checkBoxText: {
    color: 'gray',
    fontSize: 14,
  },
  fogotPasswordText: {
    color: 'gray',
    marginRight: 20,
    textDecorationLine: 'underline',
  },

  logInBtn: {
    backgroundColor: Colors.blue,
    width: (width * 85) / 100,
    height: 50,
    alignSelf: 'center',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInBtnText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.white,
  },
  registerNowContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  registerNowText: {
    color: 'gray',
    textAlign: 'center',
    alignSelf: 'center',
  },
});
