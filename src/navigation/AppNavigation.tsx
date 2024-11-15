import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NativeBaseProvider} from 'native-base';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import AuthStack from '../screens/auth';
import useAppNavigation from '../hook/useAppNavigation';
import MainStackNavigation from './MainStackNavigation';
import {View} from 'react-native';

export function CreateAppContainer() {
  const {isToken} = useAppNavigation();

  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef} key="main">
        {!isToken ? <AuthStack /> : <MainStackNavigation />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default CreateAppContainer;
