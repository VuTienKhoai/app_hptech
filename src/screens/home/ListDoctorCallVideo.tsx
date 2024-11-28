import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import Animated, {FadeInRight} from 'react-native-reanimated';
import HeaderTopHospital from './components/HeaderTopHospital';
import {dataListDoctorCallVideo} from '../../data_fake/dataDoctor';
import ItemDoctorCallVideo from './components/ItemDoctorCallVideo';
export interface IDataDoctor {
  id: string;
  name: string;
  speciality: string;
  price: string;
  role: string;
  rating: number;
  consultations: number;
  avatar: string;
}
const ListDoctorCallVideo = () => {
  const handleShowListDoctor = useCallback(() => {
    console.log('Hiển thị tẩt cả bác sĩ');
  }, []);
  const keyExtractor = useCallback((item: IDataDoctor) => {
    return item.id;
  }, []);
  const handleAdviseDoctor = useCallback((id: string) => {
    console.log('Id bác sĩ tư vấn', id);
  }, []);
  const handleDetailDoctor = useCallback((id: string) => {
    console.log('Lấy chi tiết bác sĩ', id);
  }, []);
  const renderItemDoctor = useCallback(
    ({item, index}: {item: IDataDoctor; index: number}) => {
      return (
        <ItemDoctorCallVideo
          data={item}
          onPresDoctor={handleAdviseDoctor}
          onPressDetailDoctor={handleDetailDoctor}
        />
      );
    },
    [],
  );
  return (
    <Animated.View
      entering={FadeInRight}
      style={styles.containerListDoctorCallVideo}>
      <HeaderTopHospital
        title="Bác sĩ tư vấn"
        description="Khám bệnh qua video"
        onPress={handleShowListDoctor}
      />
      <FlatList
        horizontal
        style={styles.listTopHospital}
        contentContainerStyle={styles.boxListHospitalTop}
        data={dataListDoctorCallVideo}
        keyExtractor={item => item.id}
        renderItem={renderItemDoctor}
        showsHorizontalScrollIndicator={false}
      />
    </Animated.View>
  );
};

export default memo(ListDoctorCallVideo);

const styles = StyleSheet.create({
  containerListDoctorCallVideo: {
    flex: 1,
  },
  listTopHospital: {
    flex: 1,
  },
  boxListHospitalTop: {
    flexDirection: 'row',
    gap: 10,
  },
});
