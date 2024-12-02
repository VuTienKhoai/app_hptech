import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React, {memo, ReactNode} from 'react';
import {theme} from '../../../constants/Theme';
import {TEXT_COLORS_BLACK, TEXT_COLORS_GRAY} from '../../../constants/Color';
interface IRowItem {
  title: string;
  description: string | undefined;
  styleTitle?: TextStyle;
  styleContainer?: ViewStyle;
  styleRightBox?: ViewStyle;
  styleDescription?: TextStyle;
  colorDescription?: string;
}
const RowItem = (props: IRowItem) => {
  const {
    title,
    styleTitle = styles.titleRowItem,
    description,
    styleContainer = styles.containerRowItem,
    styleRightBox = styles.rightRowItem,
    styleDescription = styles.descriptionRowItem,
    colorDescription = TEXT_COLORS_BLACK,
  } = props;
  return (
    <View style={styleContainer}>
      <Text style={styleTitle}>{title}</Text>
      <View style={styleRightBox}>
        <Text style={[styleDescription, {color: colorDescription}]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default memo(RowItem);

const styles = StyleSheet.create({
  containerRowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleRowItem: {
    ...theme.fontConfig.Default.Header1,
    fontSize: 18,
    lineHeight: 18,
    color: TEXT_COLORS_GRAY,
  },
  rightRowItem: {
    flexDirection: 'column',
    gap: 5,
    width: '50%',
  },
  descriptionRowItem: {
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'right',
  },
});
