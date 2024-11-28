import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import HeaderInputSearch from '../../../components/layout/HeaderInputSearch';
import {
  dataPropose,
  dataProposeSpecialty,
  typeDataProposeSpecialty,
} from '../../../data_fake/dataPropose';
import {
  BACKGROUND,
  BACKGROUND_BLUE,
  BACKGROUND_WHITE,
  TEXT_COLORS_BLACK,
} from '../../../constants/Color';
import {theme} from '../../../constants/Theme';
import Loading from '../../../components/loading/Loading';
import {Skeleton, VStack} from 'native-base';
const {width, height} = Dimensions.get('screen');
export default function Specialty() {
  const [textSearch, setTextSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const handleSearchSpecialty = useCallback((value: string) => {
    console.log('🚀 ~ handleSearchSpecialty ~ value:', value);
  }, []);
  const handleGetPropose = useCallback((value: string) => {
    setTextSearch(value);
  }, []);
  const renderItem = useCallback(
    ({item, index}: {item: typeDataProposeSpecialty; index: number}) => {
      return (
        <TouchableOpacity
          style={styles.boxItemPropose}
          onPress={handleGetPropose.bind(null, item.name)}>
          <Image
            resizeMethod="resize"
            source={item?.image}
            style={styles.imageItemPropose}
          />
          <Text style={styles.textItemPropose}>{item?.name}</Text>
        </TouchableOpacity>
      );
    },
    [],
  );
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <View style={styles.containerSpecialty}>
      <View style={styles.boxHeaderSpecialty}>
        <HeaderInputSearch
          autoFocus={true}
          value={textSearch}
          onSearch={handleSearchSpecialty}
          placeholder="Nhập từ khóa tìm kiếm..."
          enableDebounce={true} // Trạng thái bật/tắt debounce
        />

        <View style={styles.listBoxPropose}>
          <Text>Phổ biến </Text>
          <View style={styles.listPropose}>
            {loading
              ? Array.from({length: 6}).map((_, index) => (
                  <Skeleton
                    key={index}
                    height="40px"
                    width={width * 0.2}
                    borderRadius="10px"
                    startColor="coolGray.100"
                    style={styles.skeleton}
                  />
                ))
              : dataPropose?.map(item => (
                  <TouchableOpacity
                    style={styles.btnPropose}
                    key={item.id}
                    onPress={handleGetPropose.bind(null, item.name)}>
                    <Text style={styles.titlePropose}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
          </View>
        </View>
      </View>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          ListHeaderComponent={
            <Text style={styles.titleListPropose}>
              Tìm bệnh viện, bác sĩ và gói dịch vụ theo chuyên khoa
            </Text>
          }
          data={dataProposeSpecialty}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          numColumns={3}
          style={styles.boxListPropose}
          contentContainerStyle={styles.listProposeFlastList}
          initialNumToRender={10}
          removeClippedSubviews={true}
          windowSize={5}
          getItemLayout={(data, index) => ({
            length: width * 0.2,
            offset: width * 0.2 * index,
            index,
          })}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerSpecialty: {
    flex: 1,
  },
  boxHeaderSpecialty: {
    flexDirection: 'column',
    backgroundColor: BACKGROUND,
  },
  listPropose: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
    paddingBottom: 10,
  },
  listBoxPropose: {
    paddingHorizontal: 14,
  },
  btnPropose: {
    backgroundColor: BACKGROUND_BLUE,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  titlePropose: {
    ...theme.fontConfig.Default.Header1,
    color: TEXT_COLORS_BLACK,
    fontSize: 14,
  },
  boxItemPropose: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  textItemPropose: {
    ...theme.fontConfig.Default.Header1,
    fontSize: 14,
    lineHeight: 14,
    color: TEXT_COLORS_BLACK,
    textAlign: 'center',
    marginTop: 10,
  },
  imageItemPropose: {
    width: width * 0.17,
    height: width * 0.17,
  },
  listProposeFlastList: {
    gap: 20,
    paddingTop: 20,
    paddingBottom: 50,
  },
  titleListPropose: {
    ...theme.fontConfig.Default.Title,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 25,
    color: TEXT_COLORS_BLACK,
  },
  boxContentListPropose: {
    paddingTop: 30,
    flex: 1,
  },
  boxListPropose: {
    flex: 1,
    paddingHorizontal: 14,
    backgroundColor: BACKGROUND_WHITE,
  },
  skeleton: {
    marginBottom: 10,
  },
});
