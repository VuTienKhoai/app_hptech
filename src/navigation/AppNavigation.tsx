import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import AuthStack from '../screens/auth';
import useAppNavigation from '../hook/useAppNavigation';
import MainStackNavigation from './MainStackNavigation';
import {useCallback, useEffect} from 'react';
import {RequestPermission} from '../hook/RequestPermission';
import DeviceInfo from 'react-native-device-info';
import {useDispatch} from 'react-redux';
import {setPhoneNumber} from '../redux/slide/user.slice';

export function CreateAppContainer() {
  const {cookies} = useAppNavigation();
  // const cookies = '41414124';
  // const dispatch = useDispatch();
  // const getPhoneNumber = useCallback(async () => {
  //   await RequestPermission();
  //   try {
  //     const phoneNumber = await DeviceInfo.getSerialNumber();
  //     console.log('Số điện thoại:', phoneNumber);
  //     if (phoneNumber !== 'unknown' && phoneNumber) {
  //       dispatch(setPhoneNumber(phoneNumber));
  //     }
  //     return phoneNumber;
  //   } catch (error) {
  //     console.error('Không thể lấy số điện thoại:', error);
  //     return null;
  //   }
  // }, []);
  // useEffect(() => {
  //   getPhoneNumber();
  // }, []);
  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef} key="main">
        {!cookies ? <AuthStack /> : <MainStackNavigation />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default CreateAppContainer;
