import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParams} from '../../../navigation/MainStackNavigation';
import {PathServices} from '../services/typeHome';
const navigation = useNavigation<NativeStackNavigationProp<MainStackParams>>();
export const pathNameServices: PathServices[] = [
  {
    id: 1,
    title: 'Đặt khám tại cơ sở',
    image: require('../../../assets/images/icon_services/icon_dat_lich.webp'),
    onPress: () => navigation.navigate('Appointment_booking'),
  },
  {
    id: 2,
    title: 'Tư vấn khám bệnh qua video',
    image: require('../../../assets/images/icon_services/icon_tuvanxa.webp'),
    onPress: () => navigation.navigate('Appointment_booking'),
  },
  {
    id: 3,
    title: 'Đặt lịch khám xét nghiệm',
    image: require('../../../assets/images/icon_services/icon_xetnghiem.webp'),
    onPress: () => navigation.navigate('Appointment_booking'),
  },
  {
    id: 4,
    title: 'Thanh toán viện phí',
    image: require('../../../assets/images/icon_services/icon_thanhtoan.webp'),
    onPress: () => navigation.navigate('Appointment_booking'),
  },
  {
    id: 5,
    title: 'Đặt khám bác sĩ',
    image: require('../../../assets/images/icon_services/icon_dat_bacsi.webp'),
    onPress: () => navigation.navigate('Appointment_booking'),
  },
  {
    id: 6,
    title: 'Đặt lịch tiêm chủng',
    image: require('../../../assets/images/icon_services/icon_tiemchung.webp'),
    onPress: () => navigation.navigate('Appointment_booking'),
  },
  {
    id: 7,
    title: 'Y tế tại nhà',
    image: require('../../../assets/images/icon_services/icon_tainha.webp'),
    onPress: () => navigation.navigate('Appointment_booking'),
  },
];
