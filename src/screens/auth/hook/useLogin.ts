import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {
  getSaveLoginInfo,
  setActiveModal,
  setSaveLogin,
  setToken,
} from '../../../redux/slide/app.slice';
import {useCallback, useEffect, useState} from 'react';
import {useSigning} from '../services/Auth.query';
import {AuthStackParams} from '../AuthStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {Ilogin} from '../services/AuthType';
import {AlertHelper} from '../../../utils/AlertHelper';
import {setEmail} from '../../../redux/slide/user.slice';
import ShowToastCustom from '../../../components/notification/ShowToast';

export const useLogin = () => {
  const dispatch = useDispatch();
  const saveLoginInfo = useSelector(getSaveLoginInfo);
  const [body, setBody] = useState<Ilogin>();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const goToForgotPassword = useCallback(() => {
    navigation.navigate('ForgotPassword');
  }, [navigation]);

  const handleRegister = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);
  const {data, isFetching, refetch, count, setCount} = useSigning({
    body: body,
    options: {staleTime: 0, queryKey: ['login', body]},
  });

  const onSubmit = (values: any) => {
    const loginData = {
      email: values?.email,
      password: values?.password,
    };
    setBody(loginData);
    return;
  };
  useEffect(() => {
    if (!data) return;
    if (data?.err == 1 && !data?.access_token) {
      AlertHelper({
        title: 'Thông báo',
        message: data.mess,
        positiveButton: 'Quên mật khẩu',
        negativeButton: 'Đóng',
        confirmCallback: goToForgotPassword,
      });
      dispatch(setActiveModal(false));
      return;
    }
    if (data?.err == 0 && data?.access_token) {
      dispatch(setToken(data?.access_token));
      dispatch(setEmail(body?.email || ''));
      dispatch(setActiveModal(false));
      ShowToastCustom({text1: 'Đăng nhập thành công', typeStatus: 'success'});
    }
  }, [data, count]);
  useEffect(() => {
    if (body && body?.email && body?.password) {
      dispatch(
        setSaveLogin({
          saveLoginInfo: {
            email: body.email,
            password: body.password,
          },
        }),
      );
    } else {
      dispatch(
        setSaveLogin({
          saveLoginInfo: null,
        }),
      );
    }
  }, [body]);
  useEffect(() => {
    body && refetch();
    // && registerAndLoginToolAI();
    setCount(count + 1);
  }, [body]);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: saveLoginInfo?.email,
      password: saveLoginInfo?.password,
    },
  });
  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isFetching,
    goToForgotPassword,
    handleRegister,
  };
};
