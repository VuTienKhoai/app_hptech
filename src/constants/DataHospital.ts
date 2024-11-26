import {ImageSourcePropType} from 'react-native';

export interface IDatahospital {
  id: string;
  name: string;
  image: ImageSourcePropType;
}
export const dataHospital: IDatahospital[] = [
  {
    id: '1',
    name: 'Bệnh viện Chợ Rẫy',
    image: require('../assets/images/img_hospital/bv_choray.webp'),
  },
  {
    id: '2',
    name: 'Bệnh viện Bình Thuận',
    image: require('../assets/images/img_hospital/bv_binhthuan.webp'),
  },
  {
    id: '3',
    name: 'Bệnh viện Da Liễu Hồ Chí Minh',
    image: require('../assets/images/img_hospital/bv_dalieuHCM.webp'),
  },
  {
    id: '4',
    name: 'Bệnh viện Vũng Tàu',
    image: require('../assets/images/img_hospital/bv_vungtau.webp'),
  },
  {
    id: '5',
    name: 'Bệnh viện Nhi Đồng',
    image: require('../assets/images/img_hospital/bv_nhidong.webp'),
  },
];
