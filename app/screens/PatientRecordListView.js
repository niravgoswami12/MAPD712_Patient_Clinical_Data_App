import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  Alert,
} from 'react-native';

import styles from '../config/styles';
import * as api from '../resource/api';
import {constants} from '../resource/constants';
import {ListItem} from './components/ListItem';
import Footer from './Footer';

function PatientRecordListView({route, navigation}) {
  const [records, setRecords] = useState([]);
  if (route && route.params) {
    isEdit = route.params.isEdit;
  }
  let patientData = (route.params && route.params.patient) || {};
  useFocusEffect(
    React.useCallback(() => {
      loadPatientRecords();
    }, []),
  );
  const loadPatientRecords = async () => {
    const response = await api.getPatientRecordList(patientData._id);
    if (response) {
      response.data = response.data.map(i => {
        switch (i.data_type) {
          case 'blood_pressure':
            i.image = require(`../assets/images/blood_pressure.png`);
            break;
          case 'respiratory_rate':
            i.image = require(`../assets/images/respiratory_rate.png`);
            break;
          case 'blood_oxygen_level':
            i.image = require(`../assets/images/blood_oxygen_level.png`);
            break;
          case 'heartbeat_rate':
            i.image = require(`../assets/images/heartbeat_rate.png`);
            break;
          default:
            i.image = require(`../assets/images/blood_pressure.png`);
            break;
        }
        return i;
      });
      setRecords(response.data);
    }
  };

  const removePatientRecord = async record_id => {
    let response = await api.deletePatientRecord(patientData._id, record_id);
    if (response) {
      const filteredData = records.filter(item => item._id !== record_id);
      setRecords(filteredData);
    }
  };

  const onEdit = item => {
    navigation.navigate(constants.patient_record_add_view, {
      title: constants.patient_record_update_view,
      patient: patientData,
      patientRecord: item,
      isEdit: true,
    });
  };
  const onRemove = item => {
    Alert.alert('Delete Patient Record', 'Are You Sure?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => removePatientRecord(item._id)},
    ]);
  };

  


  return (
    <SafeAreaView style={styles.appBackground}>
      <View>
        <FlatList
          data={records}
          renderItem={({item}) => (
            <ListItem
              data={item}
              listtype="records"
              // onView={() => onView(item)}
              onEdit={() => onEdit(item)}
              onRemove={() => onRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.listEmptyContainer}>
              <Image
                source={require('../assets/images/no-data-found.png')}
                style={styles.listEmptyImg}
              />
              <Text>No Data Found</Text>
            </View>
          )}
          ListHeaderComponent={() => (
            <Text style={styles.listHeader}>Patient Records</Text>
          )}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.touchableOpacityStyle}
        onPress={() =>
          navigation.navigate(constants.patient_record_add_view, {
            patient: patientData,
          })
        }>
        <Image
          source={require('../assets/images/add-record.png')}
          style={styles.floatingButtonStyle}
        />
      </TouchableOpacity>

      <Footer></Footer>
    </SafeAreaView>
  );
}

export default PatientRecordListView;
