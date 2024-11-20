import {extendTheme} from 'native-base';
import * as color from './Color';

export const theme = extendTheme({
  fontConfig: {
    colors: {
      primary: {
        50: color.PRIMARY,
        100: color.PRIMARY,
        200: color.PRIMARY,
        300: color.PRIMARY,
        400: color.PRIMARY,
        500: color.PRIMARY,
        600: color.PRIMARY,
        700: color.PRIMARY,
        800: color.PRIMARY,
        900: color.PRIMARY,
      },
      success: {
        50: color.SUCCESS_LIGHT_95,
        100: color.SUCCESS_LIGHT_90,
        200: color.SUCCESS_LIGHT_75,
        300: color.SUCCESS_LIGHT_50,
        400: color.SUCCESS_DEFAULT,
        500: color.SUCCESS_DEFAULT,
        600: color.SUCCESS_DEFAULT,
        700: color.SUCCESS_DEFAULT,
        800: color.SUCCESS_DARK_25,
        900: color.SUCCESS_DARK_50,
      },
      black: {
        50: color.BLACK_5,
        100: color.BLACK_10,
        200: color.BLACK_25,
        300: color.BLACK_50,
        400: color.BLACK_75,
        500: color.BLACK_75,
        600: color.BLACK_75,
        700: color.BLACK_DEFAULT,
        800: color.BLACK_DEFAULT,
        900: color.BLACK_DEFAULT,
      },
      error: {
        50: color.ERROR_LIGHT_95,
        100: color.ERROR_LIGHT_90,
        200: color.ERROR_LIGHT_75,
        300: color.ERROR_LIGHT_50,
        400: color.ERROR_DEFAULT,
        500: color.ERROR_DEFAULT,
        600: color.ERROR_DEFAULT,
        700: color.ERROR_DEFAULT,
        800: color.ERROR_DARK_25,
        900: color.ERROR_DARK_50,
      },
    },
    // default là font UTM-Duepuntozero
    Default: {
      Title: {
        fontFamily: 'roboto_bold', // Đặt font Roboto Bold cho Title
        fontSize: 25,

        color: color.TEXT_COLORS_DARK,
        lineHeight: 34,
      },
      Title1: {
        fontFamily: 'roboto_light', // Đặt font Roboto Light cho Title2
        fontSize: 25,
        fontWeight: '300', // Roboto Light có trọng lượng nhẹ hơn Regular, nên fontWeight là 300
        color: color.TEXT_COLORS_DARK,
        lineHeight: 34,
      },
      Header1: {
        fontFamily: 'roboto_medium', // Đặt font Roboto Medium cho Header1
        fontSize: 25,
        fontWeight: '500', // Trọng lượng Medium tương ứng với 500
        color: color.TEXT_COLORS_DARK,
        lineHeight: 34,
      },
      BodyLarge: {
        fontFamily: 'roboto_medium', // Đặt font Roboto Medium cho BodyLarge
        fontWeight: '500', // Trọng lượng Medium
        fontSize: 20,
        color: color.TEXT_COLORS_DARK,
      },
      Body: {
        fontFamily: 'roboto_light', // Đặt font Roboto Light cho Body
        fontWeight: '300', // Trọng lượng nhẹ
        fontSize: 15,
        color: color.TEXT_COLORS_DARK,
      },
    },
  },
});

// export const CustomTheme = {
//   ...DarkTheme,
//   dark: true,
//   colors: {
//     primary: color.BACKGROUND,
//     background: color.BACKGROUND,
//     card: color.BACKGROUND,
//     text: color.TEXT_COLORS_DARK,
//     border: color.PRIMARY,
//     notification: 'rgb(255, 69, 58)',
//   },
// };
