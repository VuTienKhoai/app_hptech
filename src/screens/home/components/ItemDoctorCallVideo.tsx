import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {IDataDoctor} from '../ListDoctorCallVideo';
import {
  BACKGROUND_WHITE,
  TEXT_COLOR_ACTIVE,
  TEXT_COLORS_BLACK,
  TEXT_COLORS_DARK,
} from '../../../constants/Color';
import {SvgXml} from 'react-native-svg';
import {icon_fullStar} from '../../../assets/svg/home/iconStar';
import {icon_user} from '../../../assets/svg/home/icon_user';
import {theme} from '../../../constants/Theme';
import {RowViewIcon} from '../../../components';
import {icon_earphone} from '../../../assets/svg/home/icon_earphone';
import {icon_coin} from '../../../assets/svg/home/icon_coin';
import {icon_hospital} from '../../../assets/svg/home/icon_hospital';
import ButtonAction from '../../../components/button/ButtonAction';

interface IItemDoctorCallVideo {
  data: IDataDoctor;
  onPresDoctor: (id: string) => void;
  onPressDetailDoctor: (id: string) => void;
}
const {width} = Dimensions.get('screen');
const ItemDoctorCallVideo = (props: IItemDoctorCallVideo) => {
  const {id, consultations, name, price, rating, role, speciality, avatar} =
    props.data;
  const {onPresDoctor, onPressDetailDoctor} = props;
  return (
    <TouchableOpacity
      style={styles.containerDoctor}
      onPress={onPressDetailDoctor.bind(null, id)}>
      <View style={styles.boxImageDoctor}>
        <Image source={{uri: avatar}} style={styles.imageDoctor} />
      </View>
      <View style={styles.boxStarDoctor}>
        <View style={styles.leftStarDoctor}>
          <SvgXml xml={icon_fullStar} />
          <Text style={styles.textStarDoctor}>({rating})</Text>
        </View>
        <View style={styles.rightStarDoctor}>
          <Text style={styles.textRightStarDoctor}>{consultations}</Text>
          <SvgXml xml={icon_user} />
        </View>
      </View>
      <View style={styles.contentDoctor}>
        <Text style={styles.titleDoctorContent}>BS CKI.</Text>
        <Text style={styles.nameDoctorContent}>{name}</Text>
        <RowViewIcon icon={icon_earphone} title={speciality} />
        <RowViewIcon icon={icon_coin} title={price} />
        <RowViewIcon icon={icon_hospital} title={role} />
        <View style={styles.btnItemDoctor}>
          <ButtonAction
            title="Tư vấn ngay"
            styleText={{color: TEXT_COLORS_DARK}}
            onPress={onPresDoctor.bind(null, id)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ItemDoctorCallVideo);

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
    padding: 10,
    marginBottom: 30,
  },
  imageDoctor: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  boxImageDoctor: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boxStarDoctor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  textStarDoctor: {
    color: '#f1c40f',
  },
  leftStarDoctor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightStarDoctor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRightStarDoctor: {
    color: TEXT_COLOR_ACTIVE,
  },
  contentDoctor: {
    flexDirection: 'column',
    gap: 6,
  },
  titleDoctorContent: {
    ...theme.fontConfig.Default.Title2,
    color: TEXT_COLORS_BLACK,
    fontSize: 16,
  },
  nameDoctorContent: {
    ...theme.fontConfig.Default.Header1,
    fontSize: 16,
    color: TEXT_COLORS_BLACK,
    lineHeight: 19,
  },
  btnItemDoctor: {
    marginTop: 15,
  },
});
