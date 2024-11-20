import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  BACKGROUND_WHITE,
  TEXT_COLORS_DARK,
  TEXT_COLORS_GREEN,
} from '../../../constants/Color';
import {theme} from '../../../constants/Theme';

import {useLogin} from '../hook/useLogin';
import {InputFormAuth} from '../../../components/input';
import {EMAIL_RULES, PASSWORD_RULES} from '../../../constants/rules';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {ButtonSubmit} from '../../../components/button';
import BoxToolsLogin from './BoxToolsLogin';
const {height, width} = Dimensions.get('screen');
export default function Login() {
  const insets = useSafeAreaInsets();
  const [checked, setChecked] = useState<boolean>(false);
  const {
    onSubmit,
    control,
    handleSubmit,
    errors,
    isFetching,

    goToForgotPassword,
    handleRegister,
  } = useLogin(checked);
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
            <View style={styles.boxTitleLogin}>
              <Text style={styles.textLogo}>HopiTech</Text>
            </View>
            <Text style={styles.titleLogin}>Đăng Nhập</Text>
            <InputFormAuth
              name="email"
              control={control}
              placeholder={'Nhập vào địa chỉ email'}
              rules={EMAIL_RULES}
              errors={errors.email}
            />
            <InputFormAuth
              name="password"
              control={control}
              placeholder={'Nhập vào mật khẩu'}
              rules={PASSWORD_RULES}
              errors={errors.password}
              secureTextEntry={true}
              keyBoardType="default"
            />
            <View style={styles.footerLogin}>
              <ButtonSubmit
                title={'Đăng Nhập'}
                onPress={handleSubmit(onSubmit)}
                onLoading={isFetching}
                styleText={{fontSize: 1}}
              />
              <Text style={styles.descriptionLogin}>Hoặc đăng nhập bằng</Text>
              <View style={styles.boxLayoutToolsLoign}>
                <View style={styles.boxToolsLogin}>
                  <BoxToolsLogin />
                </View>
              </View>
              <View style={styles.BoxRegister}>
                <View style={styles.BoxTextFooter}>
                  <Text style={styles.titleResgister}>
                    Bạn chưa có tài khoản?{' '}
                  </Text>
                  <TouchableOpacity onPress={handleRegister}>
                    <Text style={styles.textBtnFooter}>Đăng ký</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
  titleLogin: {
    ...theme.fontConfig.Default.Title,
    color: TEXT_COLORS_DARK,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 30,
  },
  textLogo: {
    ...theme.fontConfig.Default.Title,
    fontSize: 40,
    lineHeight: 50,
  },
  contentLogin: {
    flex: 1,
  },
  descriptionLogin: {
    ...theme.fontConfig.Default.Title,
    fontSize: 16,
    color: TEXT_COLORS_DARK,
    textAlign: 'center',
  },
  boxToolsLogin: {
    // backgroundColor: 'red',
    width: '60%',
    // paddingHorizontal: '30%',
  },
  boxLayoutToolsLoign: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boxTitleLogin: {
    // flex: 1,
    height: height * 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: height * 0.09,
  },
  footerLogin: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
    gap: 30,
  },
  titleResgister: {
    ...theme.fontConfig.Default.Title,
    fontSize: 16,
  },
  BoxTextFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnFooter: {
    ...theme.fontConfig.Default.Title,
    fontSize: 15,
    color: '#FFC107',
  },
  BoxRegister: {
    flex: 1,
    paddingBottom: 60,
    justifyContent: 'flex-end',
  },
});
