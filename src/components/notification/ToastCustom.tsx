import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../../constants/Theme';
import {
  ERROR_DEFAULT,
  SUCCESS_DEFAULT,
  WARNING_DEFAULT,
} from '../../constants/Color';

interface IToastCustom {
  text1?: string;
  text2?: string;
  typeStatus?: 'error' | 'success' | 'info';
}

const ToastCustom = (props: IToastCustom) => {
  const {text1, text2, typeStatus} = props;
  const color = useMemo(() => {
    switch (typeStatus) {
      case 'error':
        return ERROR_DEFAULT;
      case 'success':
        return SUCCESS_DEFAULT;
      case 'info':
        return WARNING_DEFAULT;
      default:
        return WARNING_DEFAULT;
    }
  }, [typeStatus]);

  return (
    <View style={[styles.toastContainer, {borderLeftColor: color}]}>
      <View></View>
      <View style={styles.textContainer}>
        {text1 ? <Text style={styles.text}>{text1}</Text> : null}
        {text2 ? <Text style={styles.text}>{text2}</Text> : null}
      </View>
      <View></View>
    </View>
  );
};

export default ToastCustom;

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderLeftWidth: 15,
    minHeight: 55,
  },
  colorType: {
    width: 20,
    minHeight: 55,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    ...theme.fontConfig.Default.Title,
    fontSize: 17,
    lineHeight: 20,
    color: '#000',
    textAlign: 'left',
    flexWrap: 'wrap',
  },
});
