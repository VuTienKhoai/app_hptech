import {StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {BACKGROUND} from '../../constants/Color';
import TextHeader from '../../components/text/TextHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ProfileUserTools from './ProfileUserTools';
import {PaidMedicalInvoice} from './components';
import {theme} from '../../constants/Theme';

export default function ProfileUser() {
  const insets = useSafeAreaInsets();
  const [focusScreen, setFocusScreen] = useState<string>('Unpaid');
  console.log('🚀 ~ ProfileUser ~ focusScreen:', focusScreen);
  const handleFocusScreen = useCallback((value: string) => {
    setFocusScreen(value);
  }, []);
  return (
    <View style={[styles.containerProfileUser]}>
      <View style={[styles.boxTitleHeader, {paddingTop: insets.top + 10}]}>
        <TextHeader
          title="Danh sách phiếu khám"
          styleText={styles.textHeaderUser}
        />
      </View>
      <View style={styles.contentProfileUser}>
        <ProfileUserTools
          handlefocusScreen={handleFocusScreen}
          nameScreen={
            focusScreen as 'Unpaid' | 'Cancelled' | 'Paid' | 'FullyPaid'
          }
        />
      </View>
      <PaidMedicalInvoice />
    </View>
  );
}

const styles = StyleSheet.create({
  containerProfileUser: {
    flex: 1,
  },
  boxTitleHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND,
    paddingBottom: 20,
  },
  contentProfileUser: {
    // flex: 1,
  },
  textHeaderUser: {
    ...theme.fontConfig.Default.Title,
    fontSize: 22,
    textTransform: 'capitalize',
  },
});
