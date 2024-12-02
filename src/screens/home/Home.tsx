import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {QueryGetUserinfo} from './services/home.query';
import Loading from '../../components/loading/Loading';
import {getUserInfoState, setUser} from '../../redux/slide/user.slice';
import HeaderAvatar from '../../components/layout/HeaderAvatar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ContentHome from './ContentHome';
import {BACKGROUND_BLUE} from '../../constants/Color';
import {useQueryClient} from 'react-query';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParams} from '../../navigation/MainStackNavigation';

export default function Home() {
  const {
    data: dataInfoUser,
    isLoading,
    isRefetching,
    refetch: refetchUserInfo,
  } = QueryGetUserinfo();
  const queryClient: any = useQueryClient();
  const insets = useSafeAreaInsets();
  const infoUser = useSelector(getUserInfoState);
  const dispatch = useDispatch();
  const handleRefresh = useCallback(() => {
    queryClient.removeQueries(['getUserInfo']);
    refetchUserInfo();
  }, []);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParams>>();
  const handleSpecialty = useCallback(() => {
    navigation.navigate('Specialty');
  }, []);
  useEffect(() => {
    if (dataInfoUser?.user && dataInfoUser?.err == 0) {
      dispatch(setUser(dataInfoUser?.user));
    }
  }, [dataInfoUser]);
  return (
    <View style={[styles.containerHome]}>
      <HeaderAvatar
        avatar={infoUser.avatar}
        paddingTop={insets.top}
        nameUser={infoUser?.name}
        handleSpecialty={handleSpecialty}
        isLoading={isLoading}
      />
      {isLoading || isRefetching ? (
        <Loading />
      ) : (
        <ScrollView
          style={styles.contentHome}
          refreshControl={
            <RefreshControl
              refreshing={isRefetching}
              onRefresh={handleRefresh}
            />
          }>
          <ContentHome />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: BACKGROUND_BLUE,
  },
  contentHome: {
    flex: 1,
  },
});
