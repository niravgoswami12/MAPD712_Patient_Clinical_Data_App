import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from 'react-native';
import styles from '../config/styles';
import Footer from './Footer';

function PatientRecordDetailView({route, navigation}) {
  const { date_time,data_type,  reading} = route.params;
  return (
    <SafeAreaView style={styles.appBackground}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Date/Time </Text>
        <Text style={styles.itemValue}>{date_time} </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Type of data </Text>
        <Text style={styles.itemValue}>{data_type} </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Reading/Value </Text>
        <Text style={styles.itemValue}>{reading} </Text>
      </View>

      
      <Footer></Footer>
    </SafeAreaView>
  );
}

export default PatientRecordDetailView;
