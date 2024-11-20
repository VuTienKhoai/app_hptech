import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import AuthStack from '../screens/auth';
import useAppNavigation from '../hook/useAppNavigation';
import MainStackNavigation from './MainStackNavigation';

export function CreateAppContainer() {
  const {cookies} = useAppNavigation();

  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef} key="main">
        {!cookies ? <AuthStack /> : <MainStackNavigation />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default CreateAppContainer;
