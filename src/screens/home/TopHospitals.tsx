import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import HeaderTopHospital from './components/HeaderTopHospital';
import {dataHospitalTop} from '../../data_fake/dataHospitalTop';
import ItemTopHospital from './components/ItemTopHospital';
interface IDataHospitalTop {
  id: string;
  name: string;
  address: string;
  quantityStar: number;
  image: string;
}
const TopHospitals = () => {
  const handleShowAllHospital = useCallback(() => {
    console.log('Hiển thị tất cả bệnh viện');
  }, []);
  const handleDetailHospital = useCallback((id: string) => {
    console.log(id);
  }, []);
  const renderItemHospital = useCallback(
    ({item, index}: {item: IDataHospitalTop; index: number}) => {
      return (
        <ItemTopHospital
          idHospital={item.id}
          title={item.name}
          address={item.address}
          starQuantity={item.quantityStar}
          onPress={handleDetailHospital.bind(null, item.id)}
          image={item.image}
        />
      );
    },
    [],
  );
  const keyExtractor = useCallback((item: IDataHospitalTop) => {
    return item.id;
  }, []);
  return (
    <View style={styles.containerTopHospital}>
      <HeaderTopHospital
        title="Cơ sở y tế"
        description="Đặt khám nhiều nhất"
        onPress={handleShowAllHospital}
      />
      <FlatList
        horizontal
        style={{flex: 1}}
        contentContainerStyle={styles.boxListHospitalTop}
        data={dataHospitalTop}
        keyExtractor={keyExtractor}
        renderItem={renderItemHospital}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(TopHospitals);

const styles = StyleSheet.create({
  boxListHospitalTop: {
    flexDirection: 'row',
    gap: 10,
  },
  containerTopHospital: {
    flex: 1,
    paddingBottom: 50,
  },
});
