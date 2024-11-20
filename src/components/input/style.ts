import {Dimensions, StyleSheet} from 'react-native';
import {
  BACKGROUND_WHITE,
  ERROR_DEFAULT,
  TEXT_COLORS_BLACK,
  TEXT_COLORS_DARK,
} from '../../constants/Color';
import {theme} from '../../constants/Theme';
const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  InputFormTextView: {
    ...theme.fontConfig.Default.Body,

    color: TEXT_COLORS_DARK,
    fontSize: 15,
  },
  InputFormTextErrorView: {
    ...theme.fontConfig.Default.Body,
    color: TEXT_COLORS_DARK,
    fontSize: 15,
    height: 53,
  },
  FormViewAuth: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderColor: BACKGROUND_WHITE,
  },
  InputFormView: {
    flexDirection: 'column',
    gap: 10,
  },
  InputFormTLabel: {
    ...theme.fontConfig.Default.Title,
    fontSize: 21,
    color: TEXT_COLORS_BLACK,
  },
  gap2: {
    gap: 2,
  },
  inputError: {
    ...theme.fontConfig.Default.Header1,
    fontSize: 14,
    lineHeight: 20,
    // fontWeight: '100',
    color: ERROR_DEFAULT,
    paddingLeft: 5,
    maxWidth: width - 48,
  },
  AuthInput: {
    ...theme.fontConfig.Default.Body,
    color: TEXT_COLORS_DARK,
    fontSize: 15,
    flex: 1,
    paddingLeft: 10,
  },
});
