import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import styles from '../config/styles';
import colors from '../config/colors';
import * as api from '../resource/api';
import Footer from './Footer';
import {constants} from '../resource/constants';

function PatientAddView({route, navigation}) {
  let isEdit = false;
  if(route && route.params){
    isEdit = route.params.isEdit;
  }
  let patientData = route.params || {}
  console.log("---patientData---",patientData, '---', patientData.age)
  const [firstName, setFirstName] = React.useState(isEdit ? patientData.first_name : '');
  const [lastName, setLastName] = React.useState(isEdit ? patientData.last_name : '');
  const [age, setAge] = React.useState(isEdit ? patientData.age.toString() : null);
  const [address, setAddress] = React.useState(isEdit ? patientData.address : '');
  const [mobile, setMobile] = React.useState(isEdit ? patientData.mobile : '');
  const [email, setEmail] = React.useState(isEdit ? patientData.email : '');

  let genderOption = ['female', 'male', 'other'];
  const genderItemIdx = genderOption.findIndex((i) => i == patientData.gender)
  const [checked, setChecked] = useState(genderItemIdx);
  const [gender, setGender] = React.useState(isEdit ? patientData.gender : '');
  
  
  const onSubmit = async () => {
    let patient = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile: mobile,
      gender: gender,
      age: age,
      address: address,
    };
    let response = true
    if(isEdit){
      Alert.alert('Patient Record Updated', 'success!!!', 'Ok', {
        cancelable: false,
      });
    }else{
      response = await api.addPatient(patient);
    }
    if (response) {
      navigation.navigate(constants.home);
    }
  };
  return (
    <SafeAreaView style={styles.appBackground}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>First name </Text>
        <TextInput
          style={styles.inputItem}
          keyboardType="name-phone-pad"
          placeholder="First Name"
          placeholderTextColor={colors.light}
          onChangeText={firstName => setFirstName(firstName)}
          value={firstName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Last name </Text>
        <TextInput
          style={styles.inputItem}
          keyboardType="name-phone-pad"
          placeholder="Last Name"
          placeholderTextColor={colors.light}
          onChangeText={lastName => setLastName(lastName)}
          value={lastName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Age </Text>
        <TextInput
          style={styles.inputItem}
          placeholder="Age"
          placeholderTextColor={colors.light}
          onChangeText={age => setAge(age)}
          value={age}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Gender </Text>
        <View style={styles.radioGroup}>
          {genderOption.map((genderOption, key) => {
            return (
              <View key={genderOption} style={styles.radioButtoncontainer}>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => {
                    setChecked(key);
                    setGender(genderOption);
                  }}>
                  {checked == key && <View style={styles.selectedRb} />}
                </TouchableOpacity>
                <Text style={styles.radioText}>{genderOption}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Address </Text>
        <TextInput
          style={styles.inputItem}
          placeholder="Address"
          placeholderTextColor={colors.light}
          onChangeText={address => setAddress(address)}
          value={address}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Mobile </Text>
        <TextInput
          style={styles.inputItem}
          keyboardType="phone-pad"
          placeholder="Mobile"
          placeholderTextColor={colors.light}
          onChangeText={mobile => setMobile(mobile)}
          value={mobile}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email </Text>
        <TextInput
          style={styles.inputItem}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={colors.light}
          onChangeText={email => setEmail(email)}
          value={email}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => onSubmit()}>
        <Text style={styles.buttonText}> Submit </Text>
      </TouchableOpacity>
      <Footer></Footer>
    </SafeAreaView>
  );
}

export default PatientAddView;
