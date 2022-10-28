import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import * as Users from '../resource/users';
import colors from '../config/colors';
import styles from '../config/styles';
import { constants } from '../resource/constants';

function LoginView({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateLogin = () => {
    var user = Users.userList.find(function (item, i) {
      return item.email === email.toLowerCase() && item.password === password;
    });
    if (user) {
      navigation.navigate(constants.home);
    } else {
      Alert.alert('Login', 'Invalid Login Details, Please try again', 'Ok', {
        cancelable: false,
      });
    }
  }

  return (
    <SafeAreaView style={styles.appBackground}>
      <View style={styles.loginViewContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputItem}
            keyboardType="email-address"
            placeholder="Your email"
            placeholderTextColor={colors.light}
            onChangeText={email => setEmail(email)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputItem}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)} />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.5}
            onPress={() => validateLogin({navigation})}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginView;
