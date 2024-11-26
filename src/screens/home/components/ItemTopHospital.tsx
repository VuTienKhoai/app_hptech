import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import Animated, {BounceInLeft} from 'react-native-reanimated';
import {StarRating} from '../../../components/view/star';
import ButtonAction from '../../../components/button/ButtonAction';
import {theme} from '../../../constants/Theme';
import {
  BACKGROUND_WHITE,
  TEXT_COLORS_BLACK,
  TEXT_COLORS_DARK,
} from '../../../constants/Color';
import {SvgXml} from 'react-native-svg';
import {icon_location} from '../../../assets/svg/home/icon_location';
import {Dimensions} from 'react-native';

interface IItemTopHospital {
  idHospital: string;
  title: string;
  address: string;
  starQuantity: number;
  onPress: (id: string) => void;
  image: string;
}
const {width} = Dimensions.get('screen');
const ItemTopHospital = (props: IItemTopHospital) => {
  const {title, address, starQuantity, onPress, idHospital, image} = props;
  const handleDetailHospital = useCallback(() => {
    onPress && onPress(idHospital);
  }, [idHospital]);
  return (
    <Animated.View
      style={styles.containerItemTopHospital}
      entering={BounceInLeft}>
      <TouchableOpacity>
        <View style={styles.AvatarHospital}>
          <Image source={{uri: image}} style={styles.avatarHospital} />
        </View>
        <View style={styles.titleItemTopsHospital}>
          <Text style={styles.titleTopHospital} numberOfLines={2}>
            {title}
          </Text>
        </View>
        <View style={styles.box_textLocation}>
          <SvgXml xml={icon_location} />
          <Text style={styles.addressTopHospital} numberOfLines={2}>
            {address}
          </Text>
        </View>
        <StarRating quantityStar={starQuantity} rating={starQuantity || 5} />
        <View style={styles.box_btnHospitalTop}>
          <ButtonAction
            title="Đặt khám ngay"
            onPress={handleDetailHospital}
            styleText={{color: TEXT_COLORS_DARK}}
          />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default memo(ItemTopHospital);

const styles = StyleSheet.create({
  containerItemTopHospital: {
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
    padding: 10,
    marginBottom: 30,
  },
  titleTopHospital: {
    ...theme.fontConfig.Default.Header1,
    fontSize: 17,
    lineHeight: 20,
    color: TEXT_COLORS_BLACK,
    textTransform: 'capitalize',
  },
  AvatarHospital: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatarHospital: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  addressTopHospital: {
    color: TEXT_COLORS_BLACK,
    width: '90%',
  },
  box_textLocation: {
    flexDirection: 'row',
    marginBottom: 5,
    minHeight: 40,
    // gap: 5,
  },
  titleItemTopsHospital: {
    minHeight: 50,
  },
  box_btnHospitalTop: {
    marginTop: 15,
  },
  textBtnOrder: {
    color: TEXT_COLORS_DARK,
  },
});
