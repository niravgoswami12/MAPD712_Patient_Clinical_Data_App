import axios from 'axios';
import {Alert} from 'react-native';

var url = 'http://localhost:3000/api/';
var patientPath = 'patient';
var recordPath = 'record';

export async function addPatient(patient) {
  return await axios
    .post(`${url}${patientPath}`, patient)
    .then(res => {
      Alert.alert('Patient Added', 'success!!!', 'Ok', {
        cancelable: false,
      });
      return true;
    })
    .catch(res => {
      Alert.alert('Add Patient', 'Failed! Please fill all information', 'Ok', {
        cancelable: false,
      });
      return false;
    });
}

export async function getPatientList() {
  try {
    const response = await axios.get(`${url}${patientPath}?${Date.now()}`);
    return response.data;
  } catch (error) {
    // Alert.alert('Get Patient List', 'Failed!', 'Ok', {cancelable: false});
  }
}

export async function updatePatient(patientId, patient) {
  return await axios
    .put(`${url}${patientPath}/${patientId}`, patient)
    .then(res => {
      Alert.alert('Patient Updated', 'success!!!', 'Ok', {
        cancelable: false,
      });
      return true;
    })
    .catch(res => {
      Alert.alert('Update Patient', 'Failed! Please fill all information', 'Ok', {
        cancelable: false,
      });
      return false;
    });
}

export async function deletePatient(patientId) {
  return await axios
    .delete(`${url}${patientPath}/${patientId}`)
    .then(res => {
      Alert.alert('Patient Deleted', 'success!!!', 'Ok', {
        cancelable: false,
      });
      return true;
    })
    .catch(res => {
      Alert.alert('Delete Patient', 'Failed! Please fill all information', 'Ok', {
        cancelable: false,
      });
      return false;
    });
}

export async function addPatientRecord(record) {
  return await axios
    .post(`${url}${patientPath}/${patientId}/${recordPath}`, record)
    .then(res => {
      Alert.alert('Patient Record Added', 'success!!!', 'Ok', {
        cancelable: false,
      });
      return true;
    })
    .catch(res => {
      Alert.alert('Add Patient Record', 'Failed! Please fill all information', 'Ok', {
        cancelable: false,
      });
      return false;
    });
}

export async function getPatientRecordList(patientId) {
  try {
    const response = await axios.get(`${url}${patientPath}/${patientId}/${recordPath}}`);
    return response.data;
  } catch (error) {
    // Alert.alert('Get Patient Record List', 'Failed!', 'Ok', {cancelable: false});
  }
}

export async function updatePatientRecord(patientId, recordId, record) {
  return await axios
    .put(`${url}${patientPath}/${patientId}/${recordPath}/${recordId}`, record)
    .then(res => {
      Alert.alert('Patient Record Updated', 'success!!!', 'Ok', {
        cancelable: false,
      });
      return true;
    })
    .catch(res => {
      Alert.alert('Update Patient Record', 'Failed! Please fill all information', 'Ok', {
        cancelable: false,
      });
      return false;
    });
}

export async function deletePatientRecord(patientId, recordId) {
  return await axios
    .delete(`${url}${patientPath}/${patientId}/${recordPath}/${recordId}`)
    .then(res => {
      Alert.alert('Patient Record Deleted', 'success!!!', 'Ok', {
        cancelable: false,
      });
      return true;
    })
    .catch(res => {
      Alert.alert('Delete Patient Record', 'Failed! Please fill all information', 'Ok', {
        cancelable: false,
      });
      return false;
    });
}
