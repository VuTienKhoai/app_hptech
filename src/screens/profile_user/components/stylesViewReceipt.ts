import {StyleSheet} from 'react-native';
import {
  BACKGROUND_WHITE,
  TEXT_COLORS_BLACK,
  TEXT_COLORS_GRAY,
  TEXT_PRIMARY,
} from '../../../constants/Color';
import {theme} from '../../../constants/Theme';

export const stylesReceipt = StyleSheet.create({
  containerViewReceipt: {
    backgroundColor: BACKGROUND_WHITE,
    paddingHorizontal: 14,
    paddingTop: 30,
    paddingBottom: 20,
    borderRadius: 12,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1,
  },
  headerViewReceipt: {
    flexDirection: 'row',
  },
  boxHeaderLeft: {
    flexDirection: 'column',
    width: '70%',
  },
  boxHeaderRight: {
    flexDirection: 'row',
  },
  textHeaderTopLeft: {
    flexDirection: 'row',
  },
  textIDCard: {
    ...theme.fontConfig.Default.Header1,
    fontSize: 15,
    lineHeight: 15,
    color: TEXT_COLORS_GRAY,
  },
  textIdCardTopLeft: {
    ...theme.fontConfig.Default.Title,
    fontSize: 15,
    lineHeight: 15,
    color: TEXT_COLORS_BLACK,
    width: '60%',
  },
  nameHeaderTopLeft: {
    ...theme.fontConfig.Default.Title,
    fontSize: 17,
    lineHeight: 30,
    color: TEXT_COLORS_BLACK,
  },
  textBtnHeaderRight: {
    fontSize: 17,
    lineHeight: 30,
    color: TEXT_PRIMARY,
  },
  heightViewReceipt: {
    borderBottomColor: '#000',
    borderWidth: 1,
    marginVertical: 10,
    borderStyle: 'dashed',
  },
  contentViewRecipt: {
    flexDirection: 'column',
    gap: 10,
  },
  titleContentViewRecipt: {
    // ...theme.fontConfig.Default.BodyLarge,
    fontSize: 18,
    color: TEXT_PRIMARY,
    lineHeight: 23,
    textTransform: 'uppercase',
  },
  descriptionContentViewRecipt: {
    flexDirection: 'column',
    gap: 10,
  },
  itemContnetViewRecipt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionCard: {
    ...theme.fontConfig.Default.Header1,
    color: TEXT_PRIMARY,
    fontSize: 17,
    lineHeight: 17,
    textAlign: 'right',
  },
  statusCard: {
    ...theme.fontConfig.Default.Header1,
    color: 'green',
    fontSize: 17,
    lineHeight: 17,
    textAlign: 'right',
  },
});
