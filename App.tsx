import React, {useEffect, useMemo} from 'react';
import type {PropsWithChildren} from 'react';
import {Dimensions, StatusBar, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {QueryClient, QueryClientProvider} from 'react-query';
import {
  QueryClient as TanstackQueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CreateAppContainer from './src/navigation/AppNavigation';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import Toast, {ToastConfigParams} from 'react-native-toast-message';
import ToastCustom from './src/components/notification/ToastCustom';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const queryClient = new QueryClient();
const tanstackQueryClient = new TanstackQueryClient();
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const configToastMemo = useMemo(() => {
    return {
      ToastCustom: (internalState: ToastConfigParams<any>) => (
        <ToastCustom {...internalState.props} />
      ),
    };
  }, []);
  useEffect(() => {
    SystemNavigationBar.fullScreen(true);
    StatusBar.setHidden(true);
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <TanstackQueryClientProvider client={tanstackQueryClient}>
            <GestureHandlerRootView>
              <CreateAppContainer />
              <Toast config={configToastMemo} position="top" />
            </GestureHandlerRootView>
          </TanstackQueryClientProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
