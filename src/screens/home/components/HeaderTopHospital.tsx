import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {icon_ShowAll} from '../../../assets/svg/home/icon_arrowRight';
import {SvgXml} from 'react-native-svg';
import {theme} from '../../../constants/Theme';
import {TEXT_COLORS_BLACK, TEXT_PRIMARY} from '../../../constants/Color';
import Animated from 'react-native-reanimated';
interface IHeaderTopHospital {
  title: string;
  description: string;
  textBtn?: string;
  onPress: () => void;
  iconBtn?: string;
}
const HeaderTopHospital = (props: IHeaderTopHospital) => {
  const {title, description, textBtn, onPress, iconBtn} = props;
  return (
    <Animated.View style={styles.containerHeaderTopHospital}>
      <View style={styles.box_TextHeaderHospital}>
        <Text style={styles.titleTextHeader}>{title}</Text>
        <Text style={styles.descriptionHeader}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.boxShowAll} onPress={onPress}>
        <Text style={[styles.descriptionHeader, styles.textBtnShowAll]}>
          {textBtn || 'Xem tất cả'}
        </Text>
        <SvgXml xml={iconBtn || icon_ShowAll} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default memo(HeaderTopHospital);

const styles = StyleSheet.create({
  containerHeaderTopHospital: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box_TextHeaderHospital: {
    flexDirection: 'column',
  },
  boxShowAll: {
    flexDirection: 'row',
  },
  titleTextHeader: {
    ...theme.fontConfig.Default.Title,
    color: TEXT_COLORS_BLACK,
    textTransform: 'uppercase',
    fontSize: 22,
  },
  descriptionHeader: {
    ...theme.fontConfig.Default.Title2,

    color: TEXT_COLORS_BLACK,
    lineHeight: 25,
    fontSize: 15,
  },
  textBtnShowAll: {
    color: TEXT_PRIMARY,
  },
});
