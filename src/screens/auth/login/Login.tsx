import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useLogin} from '../hook/useLogin';
import {InputFormAuth} from '../../../components/input';
import {EMAIL_RULES, PASSWORD_RULES} from '../../../constants/rules';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {ButtonSubmit} from '../../../components/button';
import BoxToolsLogin from './BoxToolsLogin';
import {styles} from './styleLogin';

export default function Login() {
  const insets = useSafeAreaInsets();
  const {onSubmit, control, handleSubmit, errors, isFetching, handleRegister} =
    useLogin();
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
