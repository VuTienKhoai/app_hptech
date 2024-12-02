import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React, {memo} from 'react';
import {theme} from '../../constants/Theme';
import {TEXT_COLORS_DARK} from '../../constants/Color';
interface ITextHeader {
  title: string;
  styleText?: TextStyle;
}
const TextHeader = (props: ITextHeader) => {
  const {title, styleText} = props;
  return (
    <Text style={[styles.textHeader, styleText]}>{title || 'No title'}</Text>
  );
};

export default memo(TextHeader);

const styles = StyleSheet.create({
  textHeader: {
    // ...theme.fontConfig.Default.Body,
    color: TEXT_COLORS_DARK,
    fontSize: 20,
  },
});
