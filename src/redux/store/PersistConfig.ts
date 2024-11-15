import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'app',
  storage: AsyncStorage,
  blacklist: ['value'],
};

export {persistConfig};
