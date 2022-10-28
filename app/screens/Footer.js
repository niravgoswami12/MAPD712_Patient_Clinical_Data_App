import { useNavigation } from '@react-navigation/native';
import React , {useEffect, useState} from 'react';
import { SafeAreaView, View , TouchableOpacity, Text, FlatList, Image} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import styles from '../config/styles'

function Footer() {
    const navigation = useNavigation();
  return (
    <View style={styles.footer}>
        <TouchableHighlight style={styles.bottomButtons} activeOpacity={0.7} onPress={() => navigation.navigate("Home")}>
            <Image
            source={require('../assets/images/home.png')} 
            style={styles.floatingButtonStyle}
          />
        </TouchableHighlight>
    </View>
    );
}

export default Footer;