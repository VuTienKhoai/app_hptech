import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderAuth from '../../../components/layout/HeaderAuth';
import {icon_Back} from '../../../assets/svg/auth/iconBack';
import {InputFormAuth} from '../../../components/input';
import {useForm} from 'react-hook-form';
import {
  EMAIL_RULES,
  PASSWORD_RULES,
  RE_PASSWORD_RULES,
  USERNAME,
} from '../../../constants/rules';
import {ButtonSubmit} from '../../../components/button';
import {styles} from './stylesRegister';
import {resgiter} from '../services/Auth.api';
import ShowToastCustom from '../../../components/notification/ShowToast';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from '../AuthStack';

type IformDataRegister = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export default function Register() {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const useMemoStyleContainer = useMemo(() => {
    return {
      ...styles.containerRegister,
      paddingTop: insets.top,
    };
  }, [insets]);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const handleNavigateFillOTP = useCallback(
    (otpToken: string) => {
      navigation.navigate('OtpAuth', {otpToken: otpToken});
    },
    [navigation],
  );
  const onSubmit = useCallback((data: IformDataRegister) => {
    const {confirmPassword, ...newObject} = data;
    setLoading(true);
    if (data) {
      resgiter(newObject)
        .then((res: any) => {
          if (res.err == 0 && res.otpToken) {
            ShowToastCustom({
              text1: 'Otp đã được gửi về Email của bạn',
              typeStatus: 'success',
            });
            handleNavigateFillOTP(res.otpToken);
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
    }
  }, []);
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
