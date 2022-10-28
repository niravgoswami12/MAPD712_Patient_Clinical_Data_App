import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import PatientAddView from "./app/screens/PatientAddView";
import PatientListView from "./app/screens/PatientListView";
import PatientDetailView from './app/screens/PatientDetailView';
import PatientRecordListView from './app/screens/PatientRecordListView';
import PatientRecordAddView from './app/screens/PatientRecordAddView';
import PatientRecordDetailView from './app/screens/PatientRecordDetailView';
import colors from './app/config/colors';
import { constants } from './app/resource/constants';
import LoginView from './app/screens/LoginView';

const option = ({ route }) => ({ title: route.params?.title })
const Stack = createStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.lightText,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle:false,
    }}>
      {/* <Stack.Screen name ={constants.app_name} component={LoginView} options={option}/>  */}
      <Stack.Screen name={constants.home} component={PatientListView} options={{headerLeft: ()=> null, gestureEnabled: false}}/>
      <Stack.Screen name={constants.patient_add_view}  component={PatientAddView} options={option}/>
      <Stack.Screen name={constants.patient_detail_view} component={PatientDetailView} options={option}/>
      <Stack.Screen name={constants.patient_record_list_view} component={PatientRecordListView} options={option}/>
      <Stack.Screen name={constants.patient_record_add_view} component={PatientRecordAddView} options={option}/>
      <Stack.Screen name={constants.patient_record_detail_view} component={PatientRecordDetailView} options={option}/>
  </Stack.Navigator>
)

export default function App(){
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
   
  )
}


