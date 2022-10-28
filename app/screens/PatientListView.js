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

function PatientListView({navigation}) {
  const [patients, setPatients] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      loadPatients();
    }, []),
  );
  const loadPatients = async () => {
    setIsRefreshing(true);
    const response = await api.getPatientList();
    setPatients(response.data);
    setIsRefreshing(false);
  };

  const onView = item => {
    navigation.navigate(constants.patient_detail_view, item);
  };
  const onEdit = item => {
    navigation.navigate(constants.patient_add_view, {
      title: constants.patient_update_view,
      ...item,
      isEdit: true
    });
  };
  const onRemove = item => {
    Alert.alert('Delete Patient', 'Are You Sure?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <SafeAreaView style={styles.appBackground}>
      <FlatList
        data={patients}
        renderItem={({item}) => (
          <ListItem
            data={item}
            listtype="patients"
            onView={() => onView(item)}
            onEdit={() => onEdit(item)}
            onRemove={() => onRemove(item)}
          />
        )}
        refreshing={isRefreshing}
        onRefresh={() => {
          loadPatients;
        }}
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
          <Text style={styles.listHeader}>Patient List</Text>
        )}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.touchableOpacityStyle}
        onPress={() => navigation.navigate(constants.patient_add_view)}>
        <Image
          source={require('../assets/images/add-user.png')}
          style={styles.floatingButtonStyle}
        />
      </TouchableOpacity>

      <Footer></Footer>
    </SafeAreaView>
  );
}

export default PatientListView;
