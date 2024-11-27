import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import ButtonAction from '../../components/button/ButtonAction';
import {QueryLogOut} from './services/user.query';
import {useDispatch} from 'react-redux';
import {resetLogin, setLogout} from '../../redux/slide/app.slice';

export default function HomeUser() {
  const {data, isLoading, refetch, isRefetching} = QueryLogOut();
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => {
    refetch();
    dispatch(resetLogin());
    dispatch(setLogout());
  }, [dispatch]);
  return (
    <View>
      <ButtonAction
        title="Đăng xuất"
        onPress={handleLogout}
        isLoading={isRefetching}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
