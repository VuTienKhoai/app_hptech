import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {IDataHealthy} from '../../../data_fake/dataHealthy';
import {
  BACKGROUND,
  BACKGROUND_BLUE,
  BACKGROUND_WHITE,
  TEXT_COLOR_ACTIVE,
  TEXT_COLORS_BLACK,
} from '../../../constants/Color';
import Animated, {FlipInEasyY} from 'react-native-reanimated';
import {theme} from '../../../constants/Theme';
import {RowViewIcon} from '../../../components';
import {icon_hospital1} from '../../../assets/svg/home/icon_hospital';
import ButtonAction from '../../../components/button/ButtonAction';
import {SvgXml} from 'react-native-svg';
import {icon_coin} from '../../../assets/svg/home/icon_coin';
import {formatPrice} from './../../../utils/format/FormatPrice';
interface IItemHealthy {
  data: IDataHealthy;
  onPressHealthy: (id: string) => void;
  onPressDetailHealthy: (id: string) => void;
}
const {width} = Dimensions.get('screen');
const ItemHealthy = (props: IItemHealthy) => {
  const {id, category, imageBanner, name, organization, original_price, price} =
    props.data;
  const {onPressHealthy, onPressDetailHealthy} = props;
  return (
    <Animated.View entering={FlipInEasyY}>
      <TouchableOpacity
        style={styles.containerDoctor}
        onPress={onPressDetailHealthy.bind(null, id)}>
        <Image
          source={{uri: imageBanner}}
          style={styles.imageHealthy}
          resizeMode="cover"
        />
        <View style={styles.contentHealthy}>
          <Text style={styles.nameHealthy} numberOfLines={2}>
            {name}
          </Text>
          <RowViewIcon
            icon={icon_hospital1}
            title={organization}
            styleView={{minHeight: 50}}
          />
          <View style={styles.box_coinHospital}>
            <View style={styles.boxIconHospital}>
              <SvgXml xml={icon_coin} />
            </View>
            <Text style={styles.priceHealthy}>{formatPrice(price)}</Text>
            <Text style={styles.textOriginal_price}>
              {formatPrice(original_price)}
            </Text>
          </View>
          <View style={styles.box_Healthy}>
            <ButtonAction
              title="Đặt khám ngay"
              backgroundColor={BACKGROUND}
              onPress={onPressHealthy.bind(null, id)}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default memo(ItemHealthy);

const styles = StyleSheet.create({
  containerDoctor: {
    backgroundColor: BACKGROUND_WHITE,
    width: width * 0.5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginBottom: 30,
  },
  imageHealthy: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  contentHealthy: {
    // backgroundColor:
    padding: 10,
  },
  nameHealthy: {
    ...theme.fontConfig.Default.Title,
    fontSize: 16,
    color: TEXT_COLORS_BLACK,
    lineHeight: 20,
  },
  boxHealthy: {
    flexDirection: 'row',
  },
  box_coinHospital: {
    flexDirection: 'row',
  },
  priceHealthy: {
    color: TEXT_COLOR_ACTIVE,
  },
  textOriginal_price: {
    color: TEXT_COLORS_BLACK,
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  box_Healthy: {
    marginTop: 20,
  },
  boxIconHospital: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    marginLeft: -3,
    paddingRight: 1,
  },
});
