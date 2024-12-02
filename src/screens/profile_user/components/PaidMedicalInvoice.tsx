import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import ViewReceipt from './ViewReceipt';

const PaidMedicalInvoice = () => {
  return (
    <View style={styles.containerPaid}>
      <ViewReceipt />
    </View>
  );
};

export default memo(PaidMedicalInvoice);

const styles = StyleSheet.create({
  containerPaid: {
    flex: 1,
    // backgroundColor: 'red',
    paddingHorizontal: 14,
    paddingTop: 20,
  },
});
