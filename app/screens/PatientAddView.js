import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from '../config/styles';
import colors from '../config/colors';
import * as api from '../resource/api';
import Footer from './Footer';
import {constants} from '../resource/constants';
import {showToast} from '../resource/common';

function PatientAddView({route, navigation}) {
  let isEdit = false;
  if (route && route.params) {
    isEdit = route.params.isEdit;
  }
  let patientData = route.params || {};

  let genderOption = ['female', 'male', 'other'];
  let genderItemIdx = genderOption.findIndex(i => i == patientData.gender);
  genderItemIdx = genderItemIdx === -1 ? 0 : genderItemIdx;
  const [checked, setChecked] = useState(genderItemIdx);
  const [gender, setGender] = React.useState(
    isEdit ? patientData.gender : 'female',
  );

  const patient = {
    firstName: '',
    lastName: '',
    age: '',
    address: '',
    mobile: '',
    email: '',
  };

  if (isEdit) {
    patient.firstName = patientData.first_name;
    patient.lastName = patientData.last_name;
    patient.age = patientData.age.toString();
    patient.address = patientData.address;
    patient.mobile = patientData.mobile;
    patient.email = patientData.email;
  }

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const patientFormSchema = yup.object().shape({
    firstName: yup
      .string()
      .required('First Name is required')
      .max(25, 'First Name must be at most 25 characters'),
    lastName: yup
      .string()
      .required('Last Name is required')
      .max(25, 'Last Name must be at most 25 characters'),
    age: yup
      .number()
      .typeError('Age must be a number')
      .positive('Age must be greater than zero')
      .required('Age is required'),
    address: yup
      .string()
      .required('Address is required')
      .max(25, 'Address must be at most 25 characters'),
    mobile: yup
      .string()
      .required('Mobile is required')
      .matches(phoneRegExp, 'Mobile is not valid')
      .min(10, 'Mobile is not valid')
      .max(10, 'Mobile is not valid'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is not valid'),
  });

  const onSubmit = async ({
    firstName,
    lastName,
    age,
    address,
    mobile,
    email,
  }) => {
    let patient = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile: mobile,
      gender: gender,
      age: age,
      address: address,
    };
    let response = true;
    if (isEdit) {
      const patientId = patientData._id || null;
      if (patientId) {
        response = await api.updatePatient(patientId, patient);
      } else {
        response = false;
        let message = constants.messages.error;
        showToast(
          'error',
          `${constants.messages.update_patient.failed}`,
          message,
        );
      }
    } else {
      response = await api.addPatient(patient);
    }
    if (response) {
      navigation.navigate(constants.home);
    }
  };
  return (
    <SafeAreaView style={styles.appBackground}>
      <Formik
        validateOnMount={true}
        validationSchema={patientFormSchema}
        initialValues={patient}
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
              <Text style={styles.inputLabel}>First name </Text>
              <View style={styles.inputItemWrapper}>
                <TextInput
                  style={styles.inputItem}
                  keyboardType="name-phone-pad"
                  placeholder="First Name"
                  placeholderTextColor={colors.light}
                  onChangeText={handleChange('firstName')}
                  value={values.firstName}
                  onBlur={handleBlur('firstName')}
                />
                {errors.firstName && touched.firstName && (
                  <Text style={styles.inputItemError}>{errors.firstName}</Text>
                )}
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Last name </Text>
              <View style={styles.inputItemWrapper}>
                <TextInput
                  style={styles.inputItem}
                  keyboardType="name-phone-pad"
                  placeholder="Last Name"
                  placeholderTextColor={colors.light}
                  onChangeText={handleChange('lastName')}
                  value={values.lastName}
                  onBlur={handleBlur('lastName')}
                />
                {errors.lastName && touched.lastName && (
                  <Text style={styles.inputItemError}>{errors.lastName}</Text>
                )}
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Age </Text>
              <View style={styles.inputItemWrapper}>
                <TextInput
                  style={styles.inputItem}
                  placeholder="Age"
                  placeholderTextColor={colors.light}
                  onChangeText={handleChange('age')}
                  value={values.age}
                  onBlur={handleBlur('age')}
                />
                {errors.age && touched.age && (
                  <Text style={styles.inputItemError}>{errors.age}</Text>
                )}
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Gender </Text>
              <View style={styles.radioGroup}>
                {genderOption.map((genderOption, key) => {
                  return (
                    <View
                      key={genderOption}
                      style={styles.radioButtoncontainer}>
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
              <View style={styles.inputItemWrapper}>
                <TextInput
                  style={styles.inputItem}
                  placeholder="Address"
                  placeholderTextColor={colors.light}
                  onChangeText={handleChange('address')}
                  value={values.address}
                  onBlur={handleBlur('address')}
                />
                {errors.address && touched.address && (
                  <Text style={styles.inputItemError}>{errors.address}</Text>
                )}
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Mobile </Text>
              <View style={styles.inputItemWrapper}>
                <TextInput
                  style={styles.inputItem}
                  keyboardType="phone-pad"
                  placeholder="Mobile"
                  onChangeText={handleChange('mobile')}
                  value={values.mobile}
                  onBlur={handleBlur('mobile')}
                />
                {errors.mobile && touched.mobile && (
                  <Text style={styles.inputItemError}>{errors.mobile}</Text>
                )}
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email </Text>
              <View style={styles.inputItemWrapper}>
                <TextInput
                  style={styles.inputItem}
                  keyboardType="email-address"
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  onBlur={handleBlur('email')}
                />
                {errors.email && touched.email && (
                  <Text style={styles.inputItemError}>{errors.email}</Text>
                )}
              </View>
            </View>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}> Submit </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <Footer></Footer>
    </SafeAreaView>
  );
}

export default PatientAddView;
