import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetLogin, setLogout} from '../../redux/slide/app.slice';
import {getUserInfoState} from '../../redux/slide/user.slice';
import {LogOut} from './services/user.api';
import ShowToastCustom from '../../components/notification/ShowToast';
import HeaderUser from './components/HeaderUser';
import ContentUser from './ContentUser';
export default function HomeUser() {
  const infoUser = useSelector(getUserInfoState);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = useCallback(() => {
    setIsLoading(true);
    LogOut()
      .then((res: any) => {
        if (res?.err) {
          dispatch(resetLogin());
          dispatch(setLogout());
          ShowToastCustom({
            text1: 'Đăng xuất thành công',
            typeStatus: 'success',
          });
        } else {
          ShowToastCustom({text1: 'Đã có lỗi xảy ra', typeStatus: 'error'});
          console.log(res?.mess);
        }
      })
      .catch(error => {
        ShowToastCustom({text1: 'Đã có lỗi xảy ra', typeStatus: 'error'});
        console.log('🚀 ~ handleLogout ~ error:', error);
      })
      .finally(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <View style={styles.containerHomeUser}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.contentHomeUser}>
        <HeaderUser
          avatarUser={infoUser?.avatar}
          nameUser={infoUser?.name}
          handleLogout={handleLogout}
          isLoading={isLoading}
        />
        <ContentUser />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHomeUser: {
    flex: 1,
  },
  contentHomeUser: {
    flex: 1,
    // backgroundColor: BACKGROUND_WHITE,
  },
});
