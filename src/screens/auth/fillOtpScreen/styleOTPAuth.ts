import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../constants/Theme';
import {TEXT_COLORS_DARK} from '../../../constants/Color';
const {height, width} = Dimensions.get('screen');
export const stylesFillOTPAuth = StyleSheet.create({
  boxContainerLogin: {
    flex: 1,
  },
  containerOtpAuth: {
    flex: 1,
    backgroundColor: 'red',
    paddingHorizontal: 14,
  },
  containerLogin: {
    height: height,
  },
  titleOtpAuth: {
    ...theme.fontConfig.Default.Title,
    fontSize: 18,
    marginTop: 10,
  },
  titleFillOtp: {
    ...theme.fontConfig.Default.Title,
    fontSize: 40,
    lineHeight: 40,
  },
  topContentFillOtp: {
    // paddingTop: height * 0.2,
  },
  boxTitleFillOtp: {
    height: height * 0.25,
    flexDirection: 'row',
    paddingTop: '30%',
    justifyContent: 'center',
  },
  pinCodeText: {
    color: TEXT_COLORS_DARK,
  },
  pinCodeContainer: {
    borderBottomWidth: 1,
  },
  btnTimeOut: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
