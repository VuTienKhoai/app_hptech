import {
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {OtpInput} from 'react-native-otp-entry';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {icon_Back} from '../../../assets/svg/auth/iconBack';
import HeaderAuth from '../../../components/layout/HeaderAuth';
import Loading from '../../../components/loading/Loading';
import CountdownTimer from '../../../components/view/TimeOut/CountdownTimer';
import {useFillOTPAuth} from './hook/useFillOTPAuth';
import {stylesFillOTPAuth as styles} from './styleOTPAuth';
export default function OtpAuth() {
  const route = useRoute(); // Hook để lấy thông tin route
  const {otpToken}: any = route.params;
  const insets = useSafeAreaInsets();
  const {loading, handleActiveAccount, handleResendOTP} =
    useFillOTPAuth(otpToken);
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
              <TouchableOpacity
                onPress={handleResendOTP}
                style={styles.btnTimeOut}>
                <Text
                  style={[
                    styles.titleOtpAuth,
                    {textDecorationLine: 'underline'},
                  ]}>
                  Gửi lại mã
                </Text>
                <Text>
                  <CountdownTimer />
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
