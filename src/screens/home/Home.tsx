import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCookiesState, resetLogin} from '../../redux/slide/app.slice';
import {QueryGetUserinfo, QueryLogOut} from './services/home.query';
import Loading from '../../components/loading/Loading';
import ShowToastCustom from '../../components/notification/ShowToast';
import {ButtonSubmit} from '../../components/button';

export default function Home() {
  const {data, isLoading} = QueryGetUserinfo();
  const {
    data: dataLogout,
    isFetching: isFetchingLogout,
    refetch,
  } = QueryLogOut();
  console.log('🚀 ~ Home ~ dataLogout:', dataLogout);

  const dispatch = useDispatch();
  const handleLogOut = useCallback(() => {
    refetch();
    dispatch(resetLogin());
    ShowToastCustom({text1: 'Đã đăng xuất thành công', typeStatus: 'success'});
  }, []);

  return (
    <View>
      {isLoading ? (
        <Loading />
      ) : (
        <View>
          <ButtonSubmit
            title="Đăng Xuất"
            onLoading={isFetchingLogout}
            onPress={handleLogOut}
          />
          {/* <TouchableOpacity onPress={handleLogOut}>
            <Text>Đăng xuất</Text>
          </TouchableOpacity> */}
          <Text>Home</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
