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
import React, {useMemo} from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {ButtonSubmit} from '../../../components/button';
import {InputFormAuth} from '../../../components/input';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {EMAIL_RULES} from '../../../constants/rules';
import {theme} from '../../../constants/Theme';
import {TEXT_COLORS_DARK} from '../../../constants/Color';
import HeaderAuth from '../../../components/layout/HeaderAuth';
import {icon_Back} from '../../../assets/svg/auth/iconBack';
import {useForgotPassword} from './hook/useForgotPassword';
const {width, height} = Dimensions.get('screen');
export default function ForgotPassword() {
  const insets = useSafeAreaInsets();
  const {onSubmit, control, handleSubmit, errors, loading, setLoading} =
    useForgotPassword();
  const useMemoStyleContainer = useMemo(() => {
    return {
      ...styles.containerLogin,
      paddingTop: insets.top,
    };
  }, [insets]);
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      style={styles.boxContainerLogin}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ImageBackground
          source={require('../../../assets/images/image_background/background_loading.png')}
          resizeMode={'cover'}
          style={useMemoStyleContainer}>
          <View style={styles.contentLogin}>
            <HeaderAuth iconLeft={icon_Back} />
            <View style={styles.boxTextForgotpassword}>
              <Text style={styles.titleLogin}>Quên mật khẩu</Text>
            </View>
            <InputFormAuth
              name="email"
              control={control}
              placeholder={'Nhập vào địa chỉ email'}
              rules={EMAIL_RULES}
              errors={errors.email}
              autoFocus={true}
            />
            <View style={styles.footerLogin}>
              <ButtonSubmit
                title={'Xác nhận'}
                onPress={handleSubmit(onSubmit)}
                onLoading={loading}
                styleText={{fontSize: 1}}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  boxContainerLogin: {
    flex: 1,
  },
  containerLogin: {
    height: height,
    paddingHorizontal: width * 0.1,
    paddingTop: height * 0.15,
  },
  contentLogin: {
    flex: 1,
  },
  titleLogin: {
    ...theme.fontConfig.Default.Title,
    color: TEXT_COLORS_DARK,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 35,
    lineHegiht: 35,
  },
  footerLogin: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
    gap: 30,
  },
  boxTextForgotpassword: {
    height: height * 0.28,
    paddingTop: height * 0.1,
  },
});
