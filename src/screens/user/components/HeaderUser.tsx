import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {Loading} from '../../../components/loading';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  BACKGROUND,
  BACKGROUND_WHITE,
  TEXT_COLORS_DARK,
} from '../../../constants/Color';
import {theme} from '../../../constants/Theme';
interface IHeaderUser {
  avatarUser: string;
  nameUser: string;
  handleLogout: () => void;
  isLoading: boolean;
}
const {height, width} = Dimensions.get('screen');
const HeaderUser = (props: IHeaderUser) => {
  const {nameUser, handleLogout, isLoading, avatarUser} = props;
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.containerHeaderUser}>
      <View style={[styles.boxHeaderHomeUser, {paddingTop: insets.top}]}>
        <View style={styles.headerContennHomeUser}>
          <Image source={{uri: avatarUser}} style={styles.avatarHomeUser} />
          <Text style={styles.nameHomeUser}>
            {nameUser || 'Người dùng Hospitech'}
          </Text>
          <TouchableOpacity
            style={styles.btnLogOut}
            onPress={!isLoading ? handleLogout : undefined}>
            {isLoading ? (
              <Loading color="#fff" />
            ) : (
              <Text style={styles.textLogOut}>Đăng xuất</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(HeaderUser);

const styles = StyleSheet.create({
  containerHeaderUser: {
    backgroundColor: BACKGROUND_WHITE,
  },
  boxHeaderHomeUser: {
    backgroundColor: BACKGROUND,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    minHeight: height * 0.35,
    alignItems: 'center',
  },
  headerContennHomeUser: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    // paddingTop: 20,
  },
  avatarHomeUser: {
    height: width * 0.25,
    width: width * 0.25,
    borderRadius: 100,
  },
  nameHomeUser: {
    // ...theme.fontConfig.Default.Header1,
    color: TEXT_COLORS_DARK,
    fontSize: 22,
  },
  btnLogOut: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textLogOut: {
    color: TEXT_COLORS_DARK,
    fontSize: 13,
  },
});
