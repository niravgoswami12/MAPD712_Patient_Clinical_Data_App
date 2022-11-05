import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../../config/styles';
import { dateFormatter, getDataType, getDataTypeUnit, getImgPath } from '../../resource/common';

export function ListItem({listtype, data, onEdit, onRemove, onView}) {
  return (
    <>
      {listtype === 'records' && (
        <View
          style={styles.recordLlistItemContainer}>
        <Image
              source={data.image}
              style={styles.listItemChildVerticalIcon}
            />
          <View style={styles.listItemChildVerticalContainer}>
            <Text style={styles.listItemChildVerticalLabel1}>{getDataType(data.data_type)}</Text>
            <Text style={styles.listItemChildVerticalLabel2}>{getDataTypeUnit(data.data_type, data.reading.value) }</Text>
            <Text style={styles.listItemChildVerticalLabel3}>{dateFormatter(data.date_time)}</Text>
          </View>
          <TouchableOpacity style={styles.listItemChildVerticalButton} onPress={onEdit}>
            <Image
              source={require('../../assets/images/edit.png')}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItemChildVerticalButton} onPress={onRemove}>
            <Image
              source={require('../../assets/images/delete.png')}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
        </View>

      )}

      {listtype === 'patients' && (
        <View
          style={styles.listItemContainer}>
          <Text style={styles.listItemName}>
            {data.first_name} {data.last_name}
          </Text>
          <TouchableOpacity style={styles.listItemButton} onPress={onEdit}>
            <Image
              source={require('../../assets/images/edit.png')}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItemButton} onPress={onRemove}>
            <Image
              source={require('../../assets/images/delete.png')}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItemButton} onPress={onView}>
            <Image
              source={require('../../assets/images/right.png')}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
          
        </View>
      )}
    </>
  );
}
