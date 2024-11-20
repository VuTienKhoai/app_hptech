import {Dimensions, StyleSheet} from 'react-native';
import {TEXT_COLORS_DARK} from '../../../constants/Color';
import {theme} from '../../../constants/Theme';
const {height, width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  boxContainerLogin: {
    flex: 1,
  },
  containerLogin: {
    height: height,
    paddingHorizontal: width * 0.1,
    paddingTop: height * 0.15,
  },
  titleLogin: {
    ...theme.fontConfig.Default.Title,
    color: TEXT_COLORS_DARK,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 30,
  },
  textLogo: {
    ...theme.fontConfig.Default.Title,
    fontSize: 40,
    lineHeight: 50,
  },
  contentLogin: {
    flex: 1,
  },
  descriptionLogin: {
    ...theme.fontConfig.Default.Title,
    fontSize: 16,
    color: TEXT_COLORS_DARK,
    textAlign: 'center',
  },
  boxToolsLogin: {
    width: '60%',
  },
  boxLayoutToolsLoign: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boxTitleLogin: {
    height: height * 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: height * 0.09,
  },
  footerLogin: {
    flex: 1,
    paddingTop: 30,
    flexDirection: 'column',
    gap: 30,
  },
  titleResgister: {
    ...theme.fontConfig.Default.Title,
    fontSize: 16,
  },
  BoxTextFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnFooter: {
    ...theme.fontConfig.Default.Title,
    fontSize: 15,
    color: '#FFC107',
  },
  BoxRegister: {
    flex: 1,
    paddingBottom: 60,
    justifyContent: 'flex-end',
  },
});
