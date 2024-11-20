import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCookiesState, resetLogin} from '../../redux/slide/app.slice';
import {QueryGetUserinfo} from './services/home.query';
import Loading from '../../components/loading/Loading';

export default function Home() {
  const {data, isLoading} = QueryGetUserinfo();
  console.log('🚀 ~ Home ~ data:', data);

  const dispatch = useDispatch();
  const handleLogOut = useCallback(() => {
    dispatch(resetLogin());
  }, []);
  return (
    <View>
      {isLoading ? (
        <Loading />
      ) : (
        <View>
          <TouchableOpacity onPress={handleLogOut}>
            <Text>Đăng xuất</Text>
          </TouchableOpacity>
          <Text>Home</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
