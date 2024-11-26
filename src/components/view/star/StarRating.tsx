import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  icon_emptyStar,
  icon_fullStar,
  icon_half,
} from '../../../assets/svg/home/iconStar';
import {Text} from 'native-base';
interface IStarRating {
  rating: number;
  quantityStar?: number;
}
const StarRating = (props: IStarRating) => {
  const {rating, quantityStar} = props;
  // Tính số sao đầy, nửa sao và sao rỗng
  const fullStars = Math.floor(rating); // Số sao đầy
  const halfStar = rating % 1 !== 0; // Kiểm tra có nửa sao không
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Số sao rỗng

  return (
    <View style={styles.container}>
      {quantityStar && (
        <Text style={styles.quantityStarText}>{`(${quantityStar})`}</Text>
      )}
      {/* Hiển thị sao đầy */}
      {Array(fullStars)
        .fill(true)
        .map((_, index) => (
          <SvgXml xml={icon_fullStar} />
        ))}

      {/* Hiển thị nửa sao */}
      {halfStar && <SvgXml xml={icon_half} />}

      {/* Hiển thị sao rỗng */}
      {Array(emptyStars)
        .fill(true)
        .map((_, index) => (
          <SvgXml xml={icon_emptyStar} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityStarText: {
    fontSize: 14,
    color: '#f1c40f',
  },
});

export default StarRating;
