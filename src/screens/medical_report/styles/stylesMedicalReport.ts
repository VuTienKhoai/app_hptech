import {StyleSheet} from 'react-native';

import {BACKGROUND} from '../../../constants/Color';
import {theme} from '../../../constants/Theme';

export const stylesMedicalReport = StyleSheet.create({
  containerProfileUser: {
    flex: 1,
  },
  boxTitleHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND,
    paddingBottom: 20,
  },
  contentProfileUser: {},
  textHeaderUser: {
    ...theme.fontConfig.Default.Title,
    fontSize: 21,
    textTransform: 'capitalize',
  },
  listBillUser: {
    paddingHorizontal: 14,
    // marginVertical: 20,
    flexDirection: 'column',
    gap: 20,
    paddingBottom: 100,
  },
  contentListBillUser: {
    flex: 1,
    paddingTop: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
