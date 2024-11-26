import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderAuth from '../../../components/layout/HeaderAuth';
import {icon_Back} from '../../../assets/svg/auth/iconBack';
import {InputFormAuth} from '../../../components/input';
import {
  EMAIL_RULES,
  PASSWORD_RULES,
  RE_PASSWORD_RULES,
  USERNAME,
} from '../../../constants/rules';
import {ButtonSubmit} from '../../../components/button';
import {styles} from './stylesRegister';
import {useRegister} from './hook/useRegister';

export default function Register() {
  const insets = useSafeAreaInsets();
  const {onSubmit, control, handleSubmit, errors, loading} = useRegister();
  const useMemoStyleContainer = useMemo(() => {
    return {
      ...styles.containerRegister,
      paddingTop: insets.top,
    };
  }, [insets]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.boxContainerLogin}>
      <ImageBackground
        source={require('../../../assets/images/image_background/background_loading.png')}
        resizeMode={'stretch'}
        style={useMemoStyleContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.contentRegister}>
          <HeaderAuth iconLeft={icon_Back} />
          <View style={styles.boxTopRegister}>
            <Text style={styles.titleRegister}>Đăng Ký</Text>
          </View>
          <View style={styles.formCenterRegister}>
            <InputFormAuth
              name="email"
              control={control}
              placeholder={'Nhập vào địa chỉ email'}
              rules={EMAIL_RULES}
              errors={errors.email}
            />
            <InputFormAuth
              name="name"
              control={control}
              placeholder={'Nhập tên người dùng'}
              errors={errors.name}
              rules={USERNAME}
              keyBoardType="default"
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
            <InputFormAuth
              name="confirmPassword"
              control={control}
              placeholder={'Nhập lại mật khẩu'}
              rules={RE_PASSWORD_RULES}
              errors={errors.confirmPassword}
              secureTextEntry={true}
              keyBoardType="default"
            />
            <View style={styles.footerFormRegister}>
              <ButtonSubmit
                title="Tạo tài khoản"
                onLoading={loading}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
