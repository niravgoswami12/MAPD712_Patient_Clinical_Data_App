import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../../config/styles';

export function ListItem({listtype, data, onEdit, onRemove, onView}) {
  return (
    <View style={styles.listItemContainer}>
      {/* {listtype === 'records' && (
        <Text style={styles.listItemName}>{data.date_time}</Text>
      )} */}
      {listtype === 'records' && (
        <Text style={styles.listItemName}>{data.data_type}</Text>
      )}
      {listtype === 'records' && (
        <Text style={styles.listItemName}>{data.reading}</Text>
      )}
      {listtype === 'patients' && (
        <Text style={styles.listItemName}>
          {data.first_name} {data.last_name}
        </Text>
      )}

      <TouchableOpacity style={styles.listItemButton} onPress={onView}>
        <Image
          source={require('../../assets/images/show-details.png')}
          style={styles.buttonImageIconStyle}
        />
      </TouchableOpacity>
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
    </View>
  );
}
