import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import styles from '../config/styles';
import {constants} from '../resource/constants';
import Footer from './Footer';

function PatientDetailView({route, navigation}) {
  const {first_name, last_name, age, gender, address, email, mobile} =
    route.params;

  const showPatientRecords = item => {
    navigation.navigate(constants.patient_record_list_view, item);
  };

  return (
    <SafeAreaView style={styles.appBackground}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>First name </Text>
        <Text style={styles.itemValue}>{first_name} </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Last name </Text>
        <Text style={styles.itemValue}>{last_name} </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Age </Text>
        <Text style={styles.itemValue}>{age} </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Gender </Text>
        <Text style={styles.itemValue} textTransform="capitalize">
          {gender}{' '}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Address </Text>
        <Text style={styles.itemValue}>{address} </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email </Text>
        <Text style={styles.itemValue}>{email} </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Mobile </Text>
        <Text style={styles.itemValue}>{mobile} </Text>
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => showPatientRecords()}>
        <Text style={styles.buttonText}> View Patient Records </Text>
      </TouchableOpacity>
      <Footer></Footer>
    </SafeAreaView>
  );
}

export default PatientDetailView;
