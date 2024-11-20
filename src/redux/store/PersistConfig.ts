import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'app',
  storage: AsyncStorage,
  blacklist: ['value'],
};

const persistUserConfig = {
  key: 'user',
  storage: AsyncStorage,
  blacklist: ['value'],
};

export {persistConfig, persistUserConfig};
