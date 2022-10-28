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
  input: {
    margin: 10,
    height: 45,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  //   Submit Button Start
  submitButton: {
    backgroundColor: colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  inputLabel: {
    width: '25%',
    color: colors.primaryText,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  inputItem: {
    height: 45,
    width: '75%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  itemValue: {
    height: 45,
    width: '75%',
    // borderWidth: 1,
    // borderRadius:5,
    padding: 10,
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
    fontSize: 18,
  },
  // Footer End
});

export default styles;
