import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text, Image} from 'react-native';
import styles from '../config/styles';
import {constants} from '../resource/constants';
import Footer from './Footer';

function PatientDetailView({route, navigation}) {
  // const {first_name, last_name, age, gender, address, email, mobile} =
  //   route.params;
    let patientData = (route.params && route.params.patient) || {}

  const showPatientRecords = () => {
    navigation.navigate(constants.patient_record_list_view, {patient: patientData});
  };

  return (
    <SafeAreaView style={styles.appBackground}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>First name </Text>
        <Text style={styles.itemValue}>{patientData.first_name} </Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>Last name </Text>
        <Text style={styles.itemValue}>{patientData.last_name} </Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>Age </Text>
        <Text style={styles.itemValue}>{patientData.age} </Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>Gender </Text>
        <Text style={styles.itemValue} textTransform="capitalize">
          {patientData.gender}{' '}
        </Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>Address </Text>
        <Text style={styles.itemValue}>{patientData.address} </Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>Email </Text>
        <Text style={styles.itemValue}>{patientData.email} </Text>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>Mobile </Text>
        <Text style={styles.itemValue}>{patientData.mobile} </Text>
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => showPatientRecords()}>
          <Image
              source={require('../assets/images/show-details.png')}
              style={styles.btnImg}
            />
        <Text style={styles.buttonText}> View Patient Records </Text>
      </TouchableOpacity>
      <Footer></Footer>
    </SafeAreaView>
  );
}

export default PatientDetailView;
