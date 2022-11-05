import React from 'react';
import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  loginViewContainer:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appAlignCenter: {
    alignItems: 'center',
  },
  appBackground: {
    flex: 1,
    backgroundColor: colors.appBackground,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:colors.primary
},
  input: {
    margin: 10,
    height: 45,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  //   Submit Button Start
  submitButton: {
    backgroundColor: colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: colors.lightText,
    fontWeight: 'bold',
    fontSize: 18,
  },
  //   Submit Button End

  inputContainer: {
    margin: 10,
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  inputLabel: {
    marginTop:15,
    width: '25%',
    color: colors.primaryText,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  inputItemWrapper:{
    flexDirection: 'column',
    width: '75%'
  },
  inputItem: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  inputItemError:{
    marginTop:10,
    fontSize: 10,
    color: 'red',
  },

  datePicketBtn: {
    backgroundColor: colors.primary,
    opacity:0.8,
    padding: 10,
    // margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  datePicketBtnText: {
    textAlign: 'center',
    color: colors.lightText,
    // fontWeight: 'bold',
    // fontSize: 18,
  },

  datePicketBtnImg: {
    alignself: 'center',
    height: 30,
    width: 30,
    marginRight: 10
  },
  itemContainer: {
    marginVertical: 2,
    marginHorizontal:10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  itemLabel: {
    // marginTop:15,
    width: '25%',
    color: colors.primaryText,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  itemValue: {
    height: 45,
    width: '75%',
    padding: 14,

  },
  readingUnitText:{
    margin: 5, 
    color: colors.primaryText
  },
  //   Radio Button Start
  radioButtoncontainer: {
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  radioGroupTitle: {
    color: colors.primaryText,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  radioGroup: {
    flexDirection: 'row',
  },
  radioGroupVertical: {
    flexDirection: 'column',
  },
  radioText: {
    margin: 5,
    color: colors.primaryText,
    textTransform: 'capitalize',
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: colors.primary,
  },

  //   Radio Button End

  // List Item Start
  listItemContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  listItemName: {
    flex: 1,
    fontsize: 16,
    marginLeft: 16,
    color: colors.darkText,
    fontWeight: 'bold',
  },

  listItemButtonText: {
    color: colors.lightText,
  },

  listItemButton: {
    margin: 5,
    width: 40,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  listEmptyContainer: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listEmptyImg: {
    alignself: 'center',
    height: 150,
    width: 150,
  },


  recordLlistItemContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    margin: 5,
    // padding: 5
  },
  listItemChildVerticalIcon:{
    margin: 5,
    height: 40,
    width: 40,
    alignContent:'center',
    justifyContent:'center'
  },
  listItemChildVerticalContainer: {
    flexDirection: 'column',
    margin: 5,
    alignContent:'flex-start',
    width:"60%"
  },
  listItemChildVerticalLabel1:{
    color: colors.darkText,
    fontsize: 14,
    fontWeight: 'bold',
    textTransform:'uppercase',
    paddingBottom: 5,
  },
  listItemChildVerticalLabel2:{
    fontSize:12,
    color:colors.darkText,
    opacity:0.8,
    paddingBottom: 5,
    
  },
  listItemChildVerticalLabel3:{
    fontSize:10,
    color:colors.primaryText,
    
  },
  listItemChildVerticalButton: {
    // padding: 5,
    width: 40,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf:'flex-end'
  },

  btnImg: {
    alignself: 'center',
    height: 30,
    width: 30,
  },

  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  // List Item End
  listHeader: {
    fontSize: 30,
    color: colors.primaryText,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  selectDateLabel:{
    color:'black'
  },

  // Floating Button

  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    top: 5,
    backgroundColor: colors.primary,
    borderRadius: 50,
    shadowColor: colors.primary,
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 8,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  // Floating Button
  // Footer Start
  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
    height: 60,
    alignItems: 'center',
  },
  bottomButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  footerText: {
    color: colors.lightText,
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 16,
  },
  // Footer End

  toggleButton: {
    backgroundColor: colors.secondary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 35,
  },
  toggleButtonActive: {
    backgroundColor: colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 35,
    borderBottomWidth: 5,
    borderBottomColor: colors.primaryText
  },
  toggleButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default styles;
