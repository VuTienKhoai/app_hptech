import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetLogin} from '../../redux/slide/app.slice';
import {QueryGetUserinfo, QueryLogOut} from './services/home.query';
import Loading from '../../components/loading/Loading';
import {getUserInfoState, setUser} from '../../redux/slide/user.slice';
import HeaderAvatar from '../../components/layout/HeaderAvatar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ContentHome from './ContentHome';
import {BACKGROUND_BLUE} from '../../constants/Color';

export default function Home() {
  const {data: dataInfoUser, isLoading, isFetching} = QueryGetUserinfo();
  const insets = useSafeAreaInsets();
  const infoUser = useSelector(getUserInfoState);
  const dispatch = useDispatch();

  const {
    data: dataLogout,
    isFetching: isFetchingLogout,
    refetch,
  } = QueryLogOut();
  const handleLogout = () => {
    dispatch(resetLogin());
  };
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
      />
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <ScrollView style={styles.contentHome}>
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
