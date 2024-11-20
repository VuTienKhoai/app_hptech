import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {theme} from '../../constants/Theme';
import {
  BACKGROUND,
  BACKGROUND_WHITE,
  TEXT_COLORS_BLACK,
} from '../../constants/Color';

export type ButtonSubmitProps = {
  onPress: () => void;
  title: string;
  styleView?: ViewStyle; // Ép kiểu thành ViewStyle
  styleText?: React.CSSProperties;
  onLoading?: boolean; // đang load hay không
};

const ButtonSubmit = (props: ButtonSubmitProps) => {
  const {onPress, title, styleView, styleText, onLoading} = props;

  const onPressHandle = useCallback(() => {
    !onLoading && onPress();
  }, [onLoading, onPress]);
  const styleMemoText = useMemo(() => {
    return {
      ...styles.TextbtnLogin,
      styleText,
    };
  }, [styleText]);
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, styleView]}
      onPress={onPressHandle}>
      {onLoading ? (
        <ActivityIndicator color={BACKGROUND} size={26} />
      ) : (
        <Text style={styleMemoText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonSubmit;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: BACKGROUND_WHITE,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
    minHeight: 50,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  TextbtnLogin: {
    ...theme.fontConfig.Default.Header1,
    textAlign: 'center',
    fontSize: 16,
    color: TEXT_COLORS_BLACK,
  },
});
