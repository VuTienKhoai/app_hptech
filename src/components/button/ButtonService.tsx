import {
  DimensionValue,
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useMemo} from 'react';
import {theme} from '../../constants/Theme';
import {TEXT_COLORS_BLACK} from '../../constants/Color';
interface IButtonService {
  title: string;
  image: ImageProps;
  onPress?: () => void;
  widthImage?: DimensionValue;
  heightImage?: DimensionValue;
}
const ButtonService = (props: IButtonService) => {
  const {title, image, onPress, widthImage, heightImage} = props;
  const sytleImageMemo = useMemo(() => {
    return {
      width: widthImage || 40,
      height: heightImage || 40,
    };
  }, [widthImage, heightImage]);
  return (
    <TouchableOpacity onPress={onPress} style={styles.boxBtnService}>
      {image && <Image source={image} style={sytleImageMemo} />}
      <Text style={styles.titlteButtonService} numberOfLines={2}>
        {title || 'No title'}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(ButtonService);

const styles = StyleSheet.create({
  boxBtnService: {
    flexDirection: 'column',
    // gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  titlteButtonService: {
    // ...theme.fontConfig.Default.Header1,
    fontSize: 13,
    marginTop: 5,
    lineHeight: 13,
    color: TEXT_COLORS_BLACK,
    textAlign: 'center',
  },
  imageBtnService: {
    width: 40,
    height: 40,
  },
});
