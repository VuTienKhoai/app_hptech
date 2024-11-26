import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback, useRef} from 'react';
import {BACKGROUND_WHITE} from '../../constants/Color';
import {ButtonService} from '../../components/button';
import {useNavigation} from '@react-navigation/native';
import {MainStackParams} from '../../navigation/MainStackNavigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const {height, width} = Dimensions.get('screen');
const ListContentHome = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParams>>();
  const handleAppointmentBooking = useCallback(() => {
    navigation.navigate('Appointment_booking');
  }, [navigation]);
  const scrollRef = useRef<ScrollView>(null); // Dùng để tham chiếu đến ScrollView
  const scrollPosition = useRef(0);

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      scrollEventThrottle={16}
      style={styles.boxToolsService}>
      <View style={styles.box_listService}>
        <View style={styles.boxListItemService}>
          <View style={styles.boxItemService}>
            <ButtonService
              title="Đặt khám tại cở sở"
              onPress={handleAppointmentBooking}
              image={require('../../assets/images/icon_services/icon_dat_lich.webp')}
            />
          </View>
          <View style={styles.boxItemService}>
            <ButtonService
              title="Tư vấn khám bệnh qua video"
              onPress={handleAppointmentBooking}
              image={require('../../assets/images/icon_services/icon_tuvanxa.webp')}
            />
          </View>
          <View style={styles.boxItemService}>
            <ButtonService
              title="Đặt lịch khám xét nghiệm"
              onPress={handleAppointmentBooking}
              image={require('../../assets/images/icon_services/icon_xetnghiem.webp')}
            />
          </View>
          <View style={styles.boxItemService}>
            <ButtonService
              title="Thanh toán viện phí"
              onPress={handleAppointmentBooking}
              image={require('../../assets/images/icon_services/icon_thanhtoan.webp')}
            />
          </View>
        </View>
        <View style={styles.boxListItemService}>
          <View style={styles.boxItemService}>
            <ButtonService
              title="Gói sức khỏe toàn diện"
              onPress={handleAppointmentBooking}
              image={require('../../assets/images/icon_services/icon_thanhtoan.webp')}
            />
          </View>
          <View style={styles.boxItemService}>
            <ButtonService
              title="Đặt lịch tiêm chủng"
              onPress={handleAppointmentBooking}
              image={require('../../assets/images/icon_services/icon_tiemchung.webp')}
            />
          </View>
          <View style={styles.boxItemService}>
            <ButtonService
              title="Y tế tại nhà"
              onPress={handleAppointmentBooking}
              image={require('../../assets/images/icon_services/icon_tainha.webp')}
            />
          </View>
          <View style={styles.boxItemService}>
            <ButtonService
              title="Đặt khám bác sĩ"
              onPress={handleAppointmentBooking}
              image={require('../../assets/images/icon_services/icon_dat_bacsi.webp')}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(ListContentHome);

const styles = StyleSheet.create({
  boxToolsService: {
    gap: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    elevation: 10,
    backgroundColor: BACKGROUND_WHITE,
    flex: 1,
  },
  box_listService: {
    flexDirection: 'column',
    gap: 20,
  },
  boxItemService: {
    width: width * 0.3,
    padding: 10,
    // backgroundColor: 'red',
  },
  boxListItemService: {
    flexDirection: 'row',
  },
});
