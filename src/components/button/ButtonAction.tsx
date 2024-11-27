import React, {memo} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';

interface IButtonAction {
  title: string;
  onPress?: () => void;
  backgroundColor?: string;
  noBackground?: boolean; // Thêm thuộc tính để loại bỏ nền
  style?: ViewStyle;
  styleText?: TextStyle;
  isLoading?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const ButtonAction = (props: IButtonAction) => {
  const {
    title,
    onPress,
    backgroundColor = '#01B5F2',
    noBackground = false,
    style,
    styleText,
    isLoading = false,
    disabled = false,
    size = 'medium',
    iconLeft,
    iconRight,
  } = props;

  // Kích thước nút dựa vào `size`
  const sizeStyles = {
    small: {
      paddingVertical: 6,
      paddingHorizontal: 10,
    },
    medium: {
      paddingVertical: 10,
      paddingHorizontal: 14,
    },
    large: {
      paddingVertical: 14,
      paddingHorizontal: 18,
    },
  };

  return (
    <TouchableOpacity
      style={[
        styles.btn_action,
        sizeStyles[size],
        noBackground
          ? null // Không có nền khi `noBackground = true`
          : {backgroundColor: disabled ? '#d3d3d3' : backgroundColor},
        style,
      ]}
      onPress={!disabled && !isLoading ? onPress : undefined}
      disabled={disabled || isLoading}>
      <View style={styles.content}>
        {/* Icon bên trái */}
        {iconLeft && <View style={styles.iconLeft}>{iconLeft}</View>}
        {/* Nội dung nút */}
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={noBackground ? '#000' : '#fff'}
          />
        ) : (
          <Text
            style={[
              styles.text_action,
              noBackground ? {color: backgroundColor} : null,
              styleText,
            ]}>
            {title}
          </Text>
        )}
        {/* Icon bên phải */}
        {iconRight && <View style={styles.iconRight}>{iconRight}</View>}
      </View>
    </TouchableOpacity>
  );
};

export default memo(ButtonAction);

const styles = StyleSheet.create({
  btn_action: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  text_action: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
});
