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
  Switch,
} from 'react-native';

import styles from '../config/styles';
import * as api from '../resource/api';
import {constants} from '../resource/constants';
import {ListItem} from './components/ListItem';
import Footer from './Footer';

function PatientListView({navigation}) {
  const [patients, setPatients] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const [pageCurrent, setpageCurrent] = useState(1)
  const [totalPage, setTotalPage] = useState(1);
  const limit = 5

  const [showAll, setShowAll] = useState('all');
  const toggleSwitch = (status) => {
    console.log('status', status)
    setShowAll(status)
    if(status == 'all'){
      //Show all patient
      loadPatients(false);
    }else{
      //Show only critical patient
      loadPatients(true);
    }
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setpageCurrent(1)
      setShowAll('all')
      console.log('useEffect', showAll)
      if(showAll == 'all'){
        //Show all patient
        loadPatients(false);
      }else{
        //Show only critical patient
        loadPatients(true);
      }
    });
    return unsubscribe;
  }, [navigation]);
 
  const loadPatients = async (onlyCritical = false) => {
    console.log('loadPatients', onlyCritical)
    setIsRefreshing(true);
    // const response = await api.getPatientList({page: pageCurrent, limit});
    const response = await api.getPatientList({onlyCritical});
    if(response){
      setPatients(response.data.data);
      setTotalPage(response.data.totalPage)
    }
    setIsRefreshing(false);
  };

  const removePatient = async (id) => {
    let response = await api.deletePatient(id);
    if (response) {
      const filteredData = patients.filter(item => item._id !== id);
      setPatients(filteredData);
    }
  };

  const onView = item => {
    navigation.navigate(constants.patient_detail_view, {patient: item});
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
      {text: 'Yes', onPress: () => removePatient(item._id)},
    ]);
  };

  
  
  const handlePreviousPage = () => {
    if(pageCurrent != 1){
      setpageCurrent(pageCurrent - 1 < 1 ? 1 : pageCurrent - 1)
      loadPatients() 
    }
}

const handleNextPage = () => {
    if(pageCurrent < totalPage){
      setpageCurrent(pageCurrent < totalPage ? pageCurrent + 1 : pageCurrent)
      loadPatients()
    }

    
}

const ListFooter = () => {
    //View to set in Header
    return (
        
      <View style={styles.headerStyle}>
        <View></View>
        <Text style={{}}>{pageCurrent} of {totalPage}</Text>
        <TouchableOpacity onPress={() => handlePreviousPage()}>
            <Image source={require('../assets/images/left.png')} style={{width: 14, height: 25, marginTop: 2}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNextPage()}>
        <Image source={require('../assets/images/right.png')} style={{width: 14, height: 25}}/>
        </TouchableOpacity>
      </View>
    );
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
        keyExtractor={ (item, index) => index }
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
          <View>
            <Text style={styles.listHeader}>Patient List</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
          <TouchableOpacity style={showAll == 'all' ? styles.toggleButtonActive : styles.toggleButton} onPress={() => toggleSwitch('all')}>
            <Text style={styles.toggleButtonText}>
              All 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={showAll == 'critical' ? styles.toggleButtonActive : styles.toggleButton} onPress={() => toggleSwitch('critical')}>
            <Text style={styles.toggleButtonText}>
              Critical
            </Text>
          </TouchableOpacity>
        </View>
            {/* <TouchableOpacity onPress={() => showCritical()}> */}
            {/* <View style={{flexDirection:'row'}}>
              <Text style={{...styles.listHeader, fontSize: 20}}>Show Only Critical</Text>
            </View> */}
            {/* </TouchableOpacity> */}
          </View>
        )}
        // ListFooterComponent={ListFooter}
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
