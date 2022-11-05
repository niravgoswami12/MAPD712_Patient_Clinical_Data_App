import axios from 'axios';
import {Alert} from 'react-native';
import { showToast } from './common';
import { constants } from './constants';

var url = 'http://localhost:3000/api/';
var patientPath = 'patient';
var recordPath = 'record';

export async function addPatient(patient) {
  return await axios
    .post(`${url}${patientPath}`, patient)
    .then(res => {
      showToast('success', `${constants.messages.add_patient.succes}`, '')
      return true;
    })
    .catch(error => {
      let message = error?.response?.data?.message || constants.messages.error;
      showToast('error', `${constants.messages.add_patient.failed}`, message)
      return false;
    });
}

export async function getPatientList(params = {}) {
  try {
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    const response = await axios.get(`${url}${patientPath}?${queryString}`);
    return response.data;
  } catch (error) {
    return false
  }
}

export async function updatePatient(patientId, patient) {
  return await axios
    .put(`${url}${patientPath}/${patientId}`, patient)
    .then(res => {
      showToast('success', `${constants.messages.update_patient.succes}`, '')
      return true;
    })
    .catch(res => {
      let message = error?.response?.data?.message || constants.messages.error;
      showToast('error', `${constants.messages.update_patient.failed}`, message)
      return false;
    });
}

export async function deletePatient(patientId) {
  return await axios
    .delete(`${url}${patientPath}/${patientId}`)
    .then(res => {
      showToast('success', `${constants.messages.delete_patient.succes}`, '')
      return true;
    })
    .catch(res => {
      let message = error?.response?.data?.message || constants.messages.error;
      showToast('error', `${constants.messages.delete_patient.failed}`, message)
      return false;
    });
}

export async function addPatientRecord(patientId,record) {
  return await axios
    .post(`${url}${patientPath}/${patientId}/${recordPath}`, record)
    .then(res => {
      showToast('success', `${constants.messages.add_patient_record.succes}`, '')
      return true;
    })
    .catch(error => {
      let message = error?.response?.data?.message || constants.messages.error;
      showToast('error', `${constants.messages.add_patient_record.failed}`, message)
      return false;
    });
}

export async function getPatientRecordList(patientId) {
  try {
    const response = await axios.get(`${url}${patientPath}/${patientId}/${recordPath}`);
    return response.data;
  } catch (error) {
    return false
  }
}

export async function updatePatientRecord(patientId, recordId, record) {
  return await axios
    .put(`${url}${patientPath}/${patientId}/${recordPath}/${recordId}`, record)
    .then(res => {
      showToast('success', `${constants.messages.update_patient_record.succes}`, '')
      return true;
    })
    .catch(res => {
      let message = error?.response?.data?.message || constants.messages.error;
      showToast('error', `${constants.messages.update_patient_record.failed}`, message)
      return false;
    });
}

export async function deletePatientRecord(patientId, recordId) {
  return await axios
    .delete(`${url}${patientPath}/${patientId}/${recordPath}/${recordId}`)
    .then(res => {
      showToast('success', `${constants.messages.delete_patient_record.succes}`, '')
      
      return true;
    })
    .catch(res => {
      let message = error?.response?.data?.message || constants.messages.error;
      showToast('error', `${constants.messages.delete_patient_record.failed}`, message)
      return false;
    });
}
