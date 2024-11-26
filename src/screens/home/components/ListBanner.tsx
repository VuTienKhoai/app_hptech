import {Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import Swiper from 'react-native-swiper';
import {dataNews} from '../../../data_fake/dataNews';
import Animated, {
  BounceIn,
  BounceOut,
  FadeInRight,
} from 'react-native-reanimated';
interface DataNews {
  id: string;
  image: string;
}
const {width} = Dimensions.get('screen');
const ListBanner = () => {
  return (
    <Animated.View
      entering={FadeInRight.duration(2000)}
      style={styles.containerListBanner}>
      <Swiper
        style={styles.wrapper}
        loop={true}
        autoplay={true}
        autoplayTimeout={3}>
        {dataNews?.map((item: DataNews, index: number) => (
          <Animated.View key={item.id}>
            <TouchableOpacity>
              <Image
                source={{uri: item.image}}
                style={styles.imageBanner}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </Animated.View>
        ))}
      </Swiper>
    </Animated.View>
  );
};

export default memo(ListBanner);

const styles = StyleSheet.create({
  containerListBanner: {
    flex: 1,
    paddingTop: 30,
  },
  wrapper: {height: 250},
  imageBanner: {
    width: width - 14,
    height: 200,
    borderRadius: 20,
  },
});
