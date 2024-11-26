import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useCallback, useState} from 'react';
import {AuthStackParams} from '../../AuthStack';
import {useSelector} from 'react-redux';
import {getUserEmail} from '../../../../redux/slide/user.slice';
import {useStatusAPIToast} from '../../../../hook/notification/useStatusAPIToast';
import {activeResgiter, resendOTP} from '../../services/Auth.api';
import ShowToastCustom from '../../../../components/notification/ShowToast';

export const useFillOTPAuth = (otpToken: string) => {
  const [OtpToken, setOtpToken] = useState<string>(otpToken);
  console.log('🚀 ~ OtpAuth ~ OtpToken:', OtpToken);
  const [loading, setLoading] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const handleLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);
  const getEmail = useSelector(getUserEmail);
  const {handleError} = useStatusAPIToast();
  const handleActiveAccount = useCallback(
    (value: string) => {
      const body = {
        otp: value,
        otpToken: OtpToken,
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
            handleError(res.mess, `${res.mess}`);
          }
        })
        .catch(error => {
          handleError(error, 'Đã có lỗi xảy ra, vui lòng thử lại.');
        })
        .finally(() => {
          setLoading(false); // Dừng loading
        });
    },
    [OtpToken],
  );
  const handleResendOTP = useCallback(() => {
    if (getEmail) {
      const body = {
        email: getEmail,
      };
      setLoading(true);
      resendOTP(body)
        .then((res: any) => {
          if (res?.err === 0) {
            setOtpToken(res?.otpToken);
            ShowToastCustom({
              text1: 'OTP đã được gửi về gmail',
              typeStatus: 'success',
            });
          } else {
            handleError(res.mess, `${res.mess}`);
          }
        })
        .catch(error => {
          console.log('Lỗi API:', error);
          handleError(error, 'Đã có lỗi xảy ra, vui lòng thử lại.');
        })
        .finally(() => {
          setLoading(false); // Dừng loading
        });
    } else {
      handleError(
        'Không lấy được email bên đăng ký',
        'Không lấy được email bên đăng ký',
      );
    }
  }, [getEmail]);
  return {loading, handleActiveAccount, handleResendOTP};
};
