import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {iconArrowRight} from '../../assets/svg';
import {SvgXml} from 'react-native-svg';
import {TEXT_COLORS_BLACK} from '../../constants/Color';
import {theme} from '../../constants/Theme';
interface IButtonNavigate {
  title?: string;
  iconLeft?: ImageProps;
  iconRight?: string;
  onPress?: () => void;
}
const ButtonNavigate = (props: IButtonNavigate) => {
  const {title, onPress, iconLeft, iconRight} = props;
  return (
    <TouchableOpacity style={styles.containerBtnNavigate} onPress={onPress}>
      <View style={styles.boxRightNavigate}>
        {iconLeft && <Image source={iconLeft} style={styles.imageNavigate} />}
        <Text style={styles.textNavigate}>{title || 'No title'}</Text>
      </View>
      <SvgXml xml={iconRight || iconArrowRight('#AAAAAA')} />
    </TouchableOpacity>
  );
};

export default memo(ButtonNavigate);

const styles = StyleSheet.create({
  containerBtnNavigate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  imageNavigate: {
    width: 40,
    height: 45,
  },
  boxRightNavigate: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  textNavigate: {
    color: TEXT_COLORS_BLACK,
    fontSize: 16,
  },
});
