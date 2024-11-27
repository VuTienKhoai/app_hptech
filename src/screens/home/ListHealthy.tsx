import {FlatList, StyleSheet, Text} from 'react-native';
import React, {memo, useCallback} from 'react';
import Animated, {FadeInLeft} from 'react-native-reanimated';
import HeaderTopHospital from './components/HeaderTopHospital';
import {CareCategory} from '../../constants/DataCategory';
import ButtonAction from '../../components/button/ButtonAction';
import {IDataHealthy} from '../../data_fake/dataHealthy';
import ItemHealthy from './components/ItemHealthy';
import {TEXT_COLORS_BLACK} from '../../constants/Color';
import {useListHealthy} from './hook/useListHealthy';
const ListHealthy = () => {
  const {
    selected,
    filteredData,
    handleShowListHealthy,
    handleSelectedCategory,
    handleDetailHealthy,
    handleHeathyOrder,
    keyExtractorCategory,
  } = useListHealthy();
  const renderItemCategory = useCallback(
    ({item, index}: {item: CareCategory; index: number}) => {
      return (
        <ButtonAction
          noBackground={item.value != selected}
          title={item.name}
          onPress={handleSelectedCategory.bind(null, item.value)}
        />
      );
    },
    [selected],
  );
  const renderItemHealthy = useCallback(
    ({item, index}: {item: IDataHealthy; index: number}) => {
      return (
        <ItemHealthy
          data={item}
          onPressDetailHealthy={handleDetailHealthy}
          onPressHealthy={handleHeathyOrder}
        />
      );
    },
    [filteredData],
  );

  return (
    <Animated.View entering={FadeInLeft}>
      <HeaderTopHospital
        title="Chăm sóc"
        description="Sức khỏe toàn diện"
        onPress={handleShowListHealthy}
      />
      <FlatList
        horizontal
        data={CareCategory}
        keyExtractor={keyExtractorCategory}
        renderItem={renderItemCategory}
      />

      <FlatList
        horizontal
        style={styles.listTopHospital}
        contentContainerStyle={styles.boxListHospitalTop}
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderItemHealthy}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={5}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={{color: TEXT_COLORS_BLACK}}>Không có dữ liệu</Text>
        }
      />
    </Animated.View>
  );
};

export default memo(ListHealthy);

const styles = StyleSheet.create({
  listTopHospital: {
    flex: 1,
    marginTop: 20,
  },
  boxListHospitalTop: {
    flexDirection: 'row',
    gap: 10,
  },
});
