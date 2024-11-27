import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React, {memo} from 'react';
import {SvgXml} from 'react-native-svg';
import {TEXT_COLORS_BLACK} from '../../../constants/Color';
interface IRowViewIcon {
  icon: string;
  title: string;
  numberOfLines?: number;
  styleText?: TextStyle;
  styleView?: ViewStyle;
}
const RowViewIcon = (props: IRowViewIcon) => {
  const {icon, title, numberOfLines = 2, styleText, styleView} = props;
  return (
    <View style={[styles.boxRowViewIcon, styleView]}>
      {icon && <SvgXml xml={icon} />}
      <Text
        style={[styles.textRowIcon, styleText]}
        numberOfLines={numberOfLines}>
        {title || ''}
      </Text>
    </View>
  );
};

export default memo(RowViewIcon);

const styles = StyleSheet.create({
  boxRowViewIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  textRowIcon: {
    fontSize: 14,
    width: '90%',
    color: TEXT_COLORS_BLACK,
  },
});
