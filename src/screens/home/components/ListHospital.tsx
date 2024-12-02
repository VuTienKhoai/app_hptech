import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo, useCallback} from 'react';
import {theme} from '../../../constants/Theme';
import {TEXT_COLORS_BLACK} from '../../../constants/Color';
import {dataHospital, IDatahospital} from '../../../constants/DataHospital';
import Animated, {FadeInLeft, FadeOutRight} from 'react-native-reanimated';
const {width} = Dimensions.get('screen');

const ListHospital = () => {
  const renderItem = useCallback(
    ({item, index}: {item: IDatahospital; index: number}) => {
      return (
        <View style={styles.boxItemHospital}>
          <Image
            source={item?.image}
            style={styles.imageItemHospital}
            resizeMode="contain"
          />
          <Text style={styles.nameHospital}>{item?.name}</Text>
        </View>
      );
    },
    [],
  );
  return (
    <Animated.View
      entering={FadeInLeft.duration(1000)}
      exiting={FadeOutRight}
      style={styles.containerListHospital}>
      <View style={styles.boxTitleHospital}>
        <Text style={styles.titleListHospital}>
          Được tin tưởng hợp tác và đồng hành
        </Text>
      </View>
      <View style={styles.box_flastList}>
        <FlatList
          keyExtractor={item => item?.id}
          showsHorizontalScrollIndicator={false}
          style={styles.box_ListHospital}
          horizontal
          data={dataHospital}
          renderItem={renderItem}
        />
      </View>
    </Animated.View>
  );
};

export default memo(ListHospital);

const styles = StyleSheet.create({
  containerListHospital: {
    flex: 1,
  },
  titleListHospital: {
    ...theme.fontConfig.Default.Title,
    fontSize: 20,
    lineHeight: 28,
    color: TEXT_COLORS_BLACK,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: 30,
    width: '80%',
  },
  boxTitleHospital: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nameHospital: {
    ...theme.fontConfig.Default.Header1,
    fontSize: 13,
    lineHeight: 16,
    color: TEXT_COLORS_BLACK,
    textAlign: 'center',
  },
  imageItemHospital: {
    width: 60,
    height: 60,
  },
  boxItemHospital: {
    flexDirection: 'column',
    alignItems: 'center',
    width: width * 0.3,
    gap: 5,
    paddingBottom: 10,
  },
  box_ListHospital: {
    paddingTop: 20,
  },
  box_flastList: {
    position: 'relative',
  },
  iconArrowRight: {
    position: 'absolute',
    zIndex: 1,
    top: '30%',
    backgroundColor: '#fff',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
  },
});
