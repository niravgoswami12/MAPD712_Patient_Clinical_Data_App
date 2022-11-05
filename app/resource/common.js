import Toast from 'react-native-toast-message';

export function showToast(type, text1, text2) {
  Toast.show({
    position: 'bottom',
    type: type || 'info',
    text1: text1,
    text2: text2,
  });
}

export function dateFormatter(dt) {
  try {
    if (typeof dt == 'string') {
      dt = new Date(dt);
    }
  } catch (error) {}
  const padL = (nr, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

  const dateStr = `${padL(dt.getMonth() + 1)}/${padL(
    dt.getDate(),
  )}/${dt.getFullYear()} ${padL(dt.getHours())}:${padL(dt.getMinutes())}`;
  return dateStr;
}

export function getDataType(datatype) {
  let dataTypeObj = {
    blood_pressure: 'Blood Pressure',
    respiratory_rate: 'Respiratory Rate',
    blood_oxygen_level: 'Blood Oxygen Level',
    heartbeat_rate: 'Heartbeat Rate',
  };
  return dataTypeObj[datatype];
}

export function getDataTypeUnit(datatype, reading) {
  let formattedValue = reading
  switch (datatype) {
    case 'blood_pressure':
      formattedValue = `${reading} mmHg`
      break;
    case 'respiratory_rate':
      formattedValue = `${reading}/min`
      break;
    case 'blood_oxygen_level':
      formattedValue = `${reading}%`
      break;
    case 'heartbeat_rate':
      formattedValue = `${reading}/min`
      break;
    default:
      
      break;
  }
  return formattedValue;
}
