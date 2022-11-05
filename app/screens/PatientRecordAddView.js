import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import styles from '../config/styles';
import colors from '../config/colors';
import * as api from '../resource/api';
import Footer from './Footer';
import DatePicker from 'react-native-date-picker';
import { constants } from '../resource/constants';
import { dateFormatter } from '../resource/common';

function PatientRecordAddView({route, navigation}) {

  let isEdit = false;
  if(route && route.params){
    isEdit = route.params.isEdit;
  }
  let patientData = (route.params && route.params.patient) || {}
  let patientRecordData = (route.params && route.params.patientRecord) || {}

  const [open, setOpen] = useState(false)
  const [dateTime, setDateTime] = React.useState(isEdit ? new Date(patientRecordData.date_time) : new Date());

  var conditionOption = ['normal', 'critical'];
  const [checked, setChecked] = useState(0);
  const [patientCondition, setPatientCondition] = React.useState('normal');
  var dataTypeOption = [
    {
      key:'blood_pressure',
      value:'Blood Pressure'
    },
    {
      key:'respiratory_rate',
      value:'Respiratory Rate'
    },
    {
      key:'blood_oxygen_level',
      value:'Blood Oxygen Level'
    },
    {
      key:'heartbeat_rate',
      value:'Heartbeat Rate'
    }
    ];
  let dataTypeItemIdx = dataTypeOption.findIndex(i => i.key == patientRecordData.data_type);
  dataTypeItemIdx = dataTypeItemIdx === -1 ? 0 : dataTypeItemIdx;
  let [dataTypeChecked, setDataTypeChecked] = useState(dataTypeItemIdx);
  let [dataType, setDataType] = React.useState(
    isEdit ? patientRecordData.data_type : 'blood_pressure',
  );
  let [readingPlaceHolder, setReadingPlaceHolder] = useState(getReadingPlaceHolder(dataType, 'placeholder'));
  let [readingUnit, setReadingUnit] = useState(getReadingPlaceHolder(dataType, 'unit'));

  function getReadingPlaceHolder(datatype, type = 'unit') {
    let formattedValue = ''
    switch (datatype) {
      case 'blood_pressure':
        formattedValue = type == 'unit' ? `mmHg` : 'X/Y'
        break;
      case 'respiratory_rate':
        formattedValue = type == 'unit' ? `/min` : 'X'
        break;
      case 'blood_oxygen_level':
        formattedValue = type == 'unit' ? `%` : 'X'
        break;
      case 'heartbeat_rate':
        formattedValue = type == 'unit' ? `/min` : 'X'
        break;
      default:
        
        break;
    }
    return formattedValue;
  }
  const patientRecord = {
    reading: ''
  };

  if (isEdit) {
    patientRecord.reading = patientRecordData.reading.value
  }

  const patientRecordFormSchema = yup.object().shape({
    reading: yup
      .string()
      .required('Reading is required')
      .matches(
        /^[0-9\/]+$/,
        "Reading value can be X/Y or X, where X,Y is number"
      )
  });

  const onSubmit = async ({
    reading
  }) => {
    let patientRecord = {
      reading,
      data_type: dataType,
      date_time: dateTime,
      patient_condition: patientCondition
     
    };
    let response = true;
    if (isEdit) {
      const patientId = patientData._id || null;
      const patientRecordId = patientRecordData._id || null;
      if (patientId && patientRecordId) {
        response = await api.updatePatientRecord(patientId, patientRecordId,patientRecord);
      } else {
        response = false;
        let message = constants.messages.error;
        showToast(
          'error',
          `${constants.messages.update_patient_record.failed}`,
          message,
        );
      }
    } else {
      response = await api.addPatientRecord(patientData._id, patientRecord);
    }
    if (response) {
      navigation.navigate(constants.patient_record_list_view, {patient: patientData});
    }
  };
  return (
    <SafeAreaView style={styles.appBackground}>
       <Formik
        validateOnMount={true}
        validationSchema={patientRecordFormSchema}
        initialValues={patientRecord}
        onSubmit={onSubmit}
        validator={() => ({})}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
          
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Type of data </Text>
        <View style={styles.radioGroupVertical}>
          {dataTypeOption.map((option, key) => {
            return (
              <View key={option.key} style={styles.radioButtoncontainer}>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => {
                    setDataTypeChecked(key);
                    setDataType(option.key);
                    values.reading = ''
                    setReadingPlaceHolder(getReadingPlaceHolder(option.key, 'placeholder'))
                    setReadingUnit(getReadingPlaceHolder(option.key, 'unit'))
                  }}>
                  {dataTypeChecked == key && <View style={styles.selectedRb} />}
                </TouchableOpacity>
                <Text style={styles.radioText}>{option.value}</Text>
              </View>
            );
          })}
        </View>
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Reading </Text>
        <View style={styles.inputItemWrapper}>
          <View style={{flexDirection: 'row', alignItems:'center'}}>

          <TextInput
            style={{...styles.inputItem, width:200}}
            placeholder={readingPlaceHolder}
            placeholderTextColor={colors.light}
            onChangeText={handleChange('reading')}
            value={values.reading}
            onBlur={handleBlur('reading')}
          />
          <Text style={styles.readingUnitText}>{readingUnit}</Text>
          </View>
          {errors.reading && touched.reading && (
            <Text style={styles.inputItemError}>{errors.reading}</Text>
          )}
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Date/Time </Text>
        <View style={styles.inputItemWrapper}>
          <TouchableOpacity
          style={styles.datePicketBtn}
          onPress={() => setOpen(true)}>
            <Image
                source={require('../assets/images/calendar.png')}
                style={styles.datePicketBtnImg}
              />
          <Text style={styles.datePicketBtnText}>{dateFormatter(dateTime)} </Text>
          </TouchableOpacity>
        </View>
        <DatePicker
          modal
          open={open}
          date={dateTime}
          maximumDate={new Date()}
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
      <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}> Submit </Text>
      </TouchableOpacity>
      </>
        )}
      </Formik>
      <Footer></Footer>
    </SafeAreaView>
  );
}

export default PatientRecordAddView;
