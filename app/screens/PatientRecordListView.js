import { useFocusEffect } from '@react-navigation/native';
import React , {useState} from 'react';
import { SafeAreaView, View , TouchableOpacity, Text, FlatList, Image, Alert} from 'react-native';

import styles from '../config/styles'
import * as api from '../resource/api'
import { constants } from '../resource/constants';
import { ListItem } from './components/ListItem';
import Footer from './Footer';

function PatientRecordListView({navigation}) {
  const [records, setRecords] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      loadPatientRecords();
    }, [])
  );
  const loadPatientRecords = async () => {
    // const response = await api.getPatientRecordList();
    const response = {
      // ['Blood Pressure', 'Respiratory Rate', 'Blood Oxygen Level', 'Heartbeat Rate'];
      data: [
        {
          date_time: new Date().toLocaleString(),
          data_type: 'Blood Pressure',
          reading:"100/70 mmHg"
        },
        {
          date_time: new Date().toLocaleString(),
          data_type: 'Respiratory Rate',
          reading:"15/min"
        },
        {
          date_time: new Date().toLocaleString(),
          data_type: 'Blood Oxygen Level',
          reading:"97%"
        },
        {
          date_time: new Date().toLocaleString(),
          data_type: 'Heartbeat Rate',
          reading:"75/min"
        }
      ]
    }
    setRecords(response.data);
  }

  const onView = (item) => {
    navigation.navigate(constants.patient_record_detail_view, item);
  }
  const onEdit = (item) => {
    navigation.navigate(constants.patient_record_add_view, {title: constants.patient_record_update_view,...item,});
  }
  const onRemove = (item) => {
    Alert.alert(
      'Delete Patient Record', 
      'Are You Sure?',
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  return (
    <SafeAreaView style={styles.appBackground} >
      <View>
      <FlatList 
        data={records}
        renderItem={({ item }) => (
          <ListItem 
            data={item}
            listtype="records"
            onView={() => onView(item)} 
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
          <Text style={styles.listHeader}>
          Patient Records
          </Text>
      )}
        />
      </View>
      <TouchableOpacity
          activeOpacity={0.7}
          style={styles.touchableOpacityStyle}
          onPress={() => navigation.navigate(constants.patient_record_add_view)}>
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