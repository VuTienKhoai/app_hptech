import {useCallback, useEffect, useMemo, useState} from 'react';
import {DeviceEventEmitter} from 'react-native';
import {REFRESH_ACTIVE} from '../constants';

const useRefreshControl = () => {
  const [isRefresh, setIsRefresh] = useState(false);
  const refreshCallback = useCallback((callBack: any) => {
    callBack && callBack();
  }, []);

  useEffect(() => {
    DeviceEventEmitter.addListener(REFRESH_ACTIVE, refreshCallback);
    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  const refreshValueMemo = useMemo(() => {
    return {isRefresh, setIsRefresh};
  }, [isRefresh, setIsRefresh]);
  return {refreshValue: refreshValueMemo};
};

export default useRefreshControl;
