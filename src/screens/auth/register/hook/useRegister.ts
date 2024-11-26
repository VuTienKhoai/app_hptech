import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from '../../AuthStack';
import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {resgiter} from '../../services/Auth.api';
import ShowToastCustom from '../../../../components/notification/ShowToast';
import {useDispatch} from 'react-redux';
import {setEmail} from '../../../../redux/slide/user.slice';
type IformDataRegister = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export const useRegister = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

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
            dispatch(setEmail(data.email));
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
  return {
    onSubmit,
    control,
    handleSubmit,
    errors,
    loading,
  };
};
