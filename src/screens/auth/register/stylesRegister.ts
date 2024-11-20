import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../constants/Theme';
const {height, width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  boxContainerLogin: {
    flex: 1,
  },
  containerRegister: {
    flex: 1,
    paddingHorizontal: width * 0.05,
  },
  titleRegister: {
    ...theme.fontConfig.Default.Title,
    fontSize: 35,
  },
  contentRegister: {
    flex: 1,
  },
  boxTopRegister: {
    height: height * 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: height * 0.09,
  },
  formCenterRegister: {
    flex: 1,

    flexDirection: 'column',
    gap: 5,
    paddingHorizontal: 14,
  },
  footerFormRegister: {
    marginTop: 30,
  },
});
