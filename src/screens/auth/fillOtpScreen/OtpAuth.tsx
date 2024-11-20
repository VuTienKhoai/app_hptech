import {
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {OtpInput} from 'react-native-otp-entry';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {theme} from '../../../constants/Theme';
import {icon_Back} from '../../../assets/svg/auth/iconBack';
import HeaderAuth from '../../../components/layout/HeaderAuth';
import {TEXT_COLORS_DARK} from '../../../constants/Color';
import {activeResgiter} from '../services/Auth.api';
import Loading from '../../../components/loading/Loading';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from '../AuthStack';
import ShowToastCustom from '../../../components/notification/ShowToast';
const {height} = Dimensions.get('screen');
export default function OtpAuth() {
  const route = useRoute(); // Hook để lấy thông tin route
  const {otpToken}: any = route.params;
  const [loading, setLoading] = useState(false);
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const handleLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);
  const handleActiveAccount = useCallback(
    (value: string) => {
      const body = {
        otp: value,
        otpToken: otpToken,
      };
      setLoading(true);
      activeResgiter(body)
        .then((res: any) => {
          if (res?.err === 0) {
            ShowToastCustom({
              text1: 'Kích hoạt thành công',
              text2: 'Vui lòng đăng nhập',
              typeStatus: 'success',
            });
            handleLogin();
          } else {
            ShowToastCustom({text1: res.mess, typeStatus: 'error'});
          }
        })
        .catch(error => {
          console.log('Lỗi API:', error);
          ShowToastCustom({
            text1: 'Đã có lỗi xảy ra, vui lòng thử lại.',
            typeStatus: 'error',
          });
        })
        .finally(() => {
          setLoading(false); // Dừng loading
        });
    },
    [otpToken],
  );
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      style={styles.boxContainerLogin}>
      <TouchableWithoutFeedback
        style={styles.containerLogin}
        onPress={Keyboard.dismiss}
        accessible={false}>
        <ImageBackground
          source={require('../../../assets/images/image_background/background_loading.png')}
          resizeMode={'stretch'}
          style={[styles.containerOtpAuth, {paddingTop: insets.top}]}>
          <HeaderAuth iconLeft={icon_Back} />
          <View style={styles.boxTitleFillOtp}>
            <Text style={styles.titleFillOtp}>Nhập OTP</Text>
          </View>
          {loading ? (
            <Loading />
          ) : (
            <View style={styles.topContentFillOtp}>
              <OtpInput
                numberOfDigits={6}
                onFilled={handleActiveAccount}
                focusColor="red"
                textInputProps={{
                  accessibilityLabel: 'One-Time Password',
                }}
                theme={{
                  pinCodeContainerStyle: styles.pinCodeContainer,
                  pinCodeTextStyle: styles.pinCodeText,
                }}
              />
              <Text style={styles.titleOtpAuth}>
                Nhập mã otp để kích hoạt tài khoản
              </Text>
            </View>
          )}
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  boxContainerLogin: {
    flex: 1,
  },
  containerOtpAuth: {
    flex: 1,
    backgroundColor: 'red',
    paddingHorizontal: 14,
  },
  containerLogin: {
    height: height,
  },
  titleOtpAuth: {
    ...theme.fontConfig.Default.Title,
    fontSize: 18,
    marginTop: 10,
  },
  titleFillOtp: {
    ...theme.fontConfig.Default.Title,
    fontSize: 40,
    lineHeight: 40,
  },
  topContentFillOtp: {
    // paddingTop: height * 0.2,
  },
  boxTitleFillOtp: {
    height: height * 0.25,
    flexDirection: 'row',
    paddingTop: '30%',
    justifyContent: 'center',
  },
  pinCodeText: {
    color: TEXT_COLORS_DARK,
  },
  pinCodeContainer: {
    borderBottomWidth: 1,
  },
});
