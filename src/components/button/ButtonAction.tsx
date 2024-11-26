import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {memo} from 'react';
interface IButtonAction {
  title: string;
  onPress?: () => void;
  backgroundColor?: string;
  style?: ViewStyle;
  styleText?: TextStyle;
}
const ButtonAction = (props: IButtonAction) => {
  const {title, onPress, backgroundColor = '#01B5F2', style, styleText} = props;
  return (
    <TouchableOpacity
      style={[styles.btn_action, {backgroundColor: backgroundColor}, style]}
      onPress={onPress}>
      <Text style={[styles.text_action, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(ButtonAction);

const styles = StyleSheet.create({
  btn_action: {
    paddingVertical: 10,
    borderRadius: 10,
  },
  text_action: {
    textAlign: 'center',
  },
});
