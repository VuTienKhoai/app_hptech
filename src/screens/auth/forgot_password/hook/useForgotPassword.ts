import {useForm} from 'react-hook-form';
import {AuthStackParams} from '../../AuthStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {forgotPassword} from '../../services/Auth.api';
import ShowToastCustom from '../../../../components/notification/ShowToast';
import {useDispatch} from 'react-redux';
import {setEmail} from '../../../../redux/slide/user.slice';
type dataForgotPassword = {
  email: string;
};
export const useForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const handleForgotPassword = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);
  const onSubmit = useCallback((data: dataForgotPassword) => {
    setLoading(true);
    if (data) {
      forgotPassword(data)
        .then((res: any) => {
          if (res.err == 1) {
            ShowToastCustom({
              text1: 'Otp đã được gửi về Email của bạn',
              typeStatus: 'success',
            });
            dispatch(setEmail(data.email));
            handleForgotPassword();
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
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
    },
  });
  return {
    onSubmit,
    control,
    handleSubmit,
    errors,
    setLoading,
    loading,
  };
};
