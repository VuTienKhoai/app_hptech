import {Alert, Linking, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {ButtonNavigate} from '../../components/button';
import {BACKGROUND_WHITE, TEXT_COLORS_BLACK} from '../../constants/Color';
import {theme} from '../../constants/Theme';

const ContentUser = () => {
  const phoneNumber = '0342286474';

  const handlePressCall = () => {
    Linking.openURL(`tel:${phoneNumber}`).catch(err =>
      Alert.alert('Error', 'Unable to open dialer'),
    );
  };
  return (
    <View style={styles.containerContentUser}>
      <View style={styles.BoxPolicyContentUser}>
        <Text style={styles.titleNavigateContentUser}>
          Điều khoản và quy định
        </Text>
        <ButtonNavigate
          title="Quy định sử dụng"
          iconLeft={require('../../assets/images/screen_user/icon_term.png')}
        />
        <ButtonNavigate
          title="Chính sách bảo mật"
          iconLeft={require('../../assets/images/screen_user/icon_security.png')}
        />
        <ButtonNavigate
          title="Điều khoản dịch vụ"
          iconLeft={require('../../assets/images/screen_user/icon_termsOfService.png')}
        />
      </View>
      <View style={styles.boxBtnNavigate}>
        <ButtonNavigate
          onPress={handlePressCall}
          title="Thông tin CSKH: 0342286474"
          iconLeft={require('../../assets/images/screen_user/icon_numberPhone.png')}
        />
      </View>
      <View style={styles.boxBtnNavigate}>
        <ButtonNavigate
          title="Ngôn ngữ"
          iconLeft={require('../../assets/images/screen_user/icon_language.png')}
        />
      </View>
    </View>
  );
};

export default memo(ContentUser);

const styles = StyleSheet.create({
  containerContentUser: {
    flex: 1,
  },
  BoxPolicyContentUser: {
    flexDirection: 'column',
    gap: 10,
    backgroundColor: BACKGROUND_WHITE,
    paddingHorizontal: 14,
    paddingVertical: 15,
  },
  titleNavigateContentUser: {
    ...theme.fontConfig.Default.Header1,
    color: TEXT_COLORS_BLACK,
    fontSize: 17,
  },
  boxBtnNavigate: {
    paddingHorizontal: 14,
    marginTop: 6,
    paddingVertical: 5,
    backgroundColor: BACKGROUND_WHITE,
  },
});
