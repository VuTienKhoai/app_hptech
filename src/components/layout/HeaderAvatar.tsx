import {
  Dimensions,
  DimensionValue,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useMemo} from 'react';
import {theme} from '../../constants/Theme';
import {
  BACKGROUND_BLUE,
  BACKGROUND_WHITE,
  TEXT_COLORS_BLACK,
  TEXT_COLORS_GRAY,
} from '../../constants/Color';
import {SvgXml} from 'react-native-svg';
import {icon_search} from '../../assets/svg/home/icon_search';
import {TypingEffectText} from '../animation';
import {Skeleton} from 'native-base';
const {width} = Dimensions.get('screen');
interface IHeaderAvatar {
  avatar: string;
  nameUser: string;
  paddingTop?: DimensionValue | undefined;
  handleSpecialty: () => void;
  isLoading?: boolean;
}
const HeaderAvatar = (props: IHeaderAvatar) => {
  const {nameUser, avatar, paddingTop, handleSpecialty, isLoading} = props;

  const styleMemoHeader = useMemo(() => {
    return {
      ...styles.headerAvatar,
      paddingTop: paddingTop || 0,
    };
  }, []);
  return (
    <View style={styleMemoHeader}>
      <View style={styles.topHeaderAvatar}>
        <View style={styles.box_avatarHeader}>
          <Image source={{uri: avatar}} width={50} height={50} />
        </View>
        <View style={styles.boxTextHeader}>
          <Text style={styles.titleHeader}>Xin chào,</Text>
          <Text style={styles.titleHeader}>{nameUser}</Text>
        </View>
      </View>
      {isLoading ? (
        <Skeleton
          height="50px"
          borderRadius="10px"
          startColor="coolGray.100"
          style={styles.skecetonTextInput}
        />
      ) : (
        <TouchableOpacity
          style={styles.boxInputHeader}
          onPress={handleSpecialty}>
          <TypingEffectText
            text=" Tìm CSYT/bác sĩ/chuyên khoa/dịch vụ"
            speed={100}
            delay={1500}
          />
          <SvgXml xml={icon_search} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(HeaderAvatar);

const styles = StyleSheet.create({
  headerAvatar: {
    backgroundColor: BACKGROUND_BLUE,
    paddingHorizontal: 14,
    paddingBottom: 10,
  },
  titleHeader: {
    ...theme.fontConfig.Default.Header1,
    lineHeight: 22,
    fontSize: 20,
    color: TEXT_COLORS_BLACK,
  },
  boxTextHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  box_avatarHeader: {
    paddingRight: 16,
  },
  boxInputHeader: {
    backgroundColor: BACKGROUND_WHITE,
    paddingVertical: 10,
    minHeight: 50,
    paddingHorizontal: 14,
    marginTop: 10,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInputHeader: {
    ...theme.fontConfig.Default.title,
    color: TEXT_COLORS_GRAY,
    lineHeight: 25,
  },
  topHeaderAvatar: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  skecetonTextInput: {
    marginTop: 10,
    // flex: 1,
  },
});
