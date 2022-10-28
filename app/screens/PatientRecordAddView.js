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
import DatePicker from 'react-native-date-picker';
import { constants } from '../resource/constants';

function PatientRecordAddView({route, navigation}) {

  let isEdit = false;
  if(route && route.params){
    isEdit = route.params.isEdit;
  }
  let patientRecordData = route.params || {}

  const [reading, setReading] = React.useState('');

  const [open, setOpen] = useState(false)
  const [dateTime, setDateTime] = React.useState(new Date());

  var conditionOption = ['normal', 'critical'];
  const [checked, setChecked] = useState(0);
  const [patientCondition, setPatientCondition] = React.useState('');
  
  var dataTypeOption = ['Blood Pressure', 'Respiratory Rate', 'Blood Oxygen Level', 'Heartbeat Rate'];
  const [dataTypeChecked, setDataTypeChecked] = useState(0);
  const [dataType, setDataType] = React.useState();
  
  const onSubmit = async () => {
    // let record = {
    //   dateTime: dateTime,
    //   dataType: dataType,
    //   reading: reading,
    //   patientCondition:patientCondition
    // };
    Alert.alert('Patient Record Added', 'success!!!', 'Ok', {
      cancelable: false,
    });
    navigation.navigate(constants.patient_record_list_view);
    // const response = await api.addPatientRecord(record);
    // if (response) {
    //   navigation.navigate(constants.patient_record_list_view);
    // }
  };
  return (
    <SafeAreaView style={styles.appBackground}>
      
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Type of data </Text>
        <View style={styles.radioGroupVertical}>
          {dataTypeOption.map((option, key) => {
            return (
              <View key={option} style={styles.radioButtoncontainer}>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => {
                    setDataTypeChecked(key);
                    setDataType(option);
                  }}>
                  {dataTypeChecked == key && <View style={styles.selectedRb} />}
                </TouchableOpacity>
                <Text style={styles.radioText}>{option}</Text>
              </View>
            );
          })}
        </View>
      </View>
  
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Reading/Value </Text>
        <TextInput
          style={styles.inputItem}
          placeholder="Reading/ Vlaue"
          placeholderTextColor={colors.light}
          onChangeText={reading => setReading(reading)}
          value={reading}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Date/Time </Text>
        <TouchableOpacity style={styles.inputItem} onPress={() => setOpen(true)}><Text>Select Date/Time</Text></TouchableOpacity>
        <DatePicker
          modal
          open={open}
          date={dateTime}
          onConfirm={(date) => {
            setOpen(false)
            setDateTime(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>How's Patient Condition? </Text>
        <View style={styles.radioGroup}>
          {conditionOption.map((option, key) => {
            return (
              <View key={option} style={styles.radioButtoncontainer}>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => {
                    setChecked(key);
                    setPatientCondition(option);
                  }}>
                  {checked == key && <View style={styles.selectedRb} />}
                </TouchableOpacity>
                <Text style={styles.radioText}>{option}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={() => onSubmit()}>
        <Text style={styles.buttonText}> Submit </Text>
      </TouchableOpacity>
      <Footer></Footer>
    </SafeAreaView>
  );
}

export default PatientRecordAddView;
