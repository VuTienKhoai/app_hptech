import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {TEXT_PRIMARY} from '../../../constants/Color';
import {TypeAppointmentCard} from '../../../type/typeCard';
import Animated, {FadeInLeft} from 'react-native-reanimated';
import {RowItem} from '../../../components';
import {stylesReceipt as styles} from './stylesViewReceipt';
import {formatDateIso} from '../../../utils/format';
interface IViewReceipt {
  data?: TypeAppointmentCard;
  onPressDetail?: () => void;
}
const ViewReceipt = (props: IViewReceipt) => {
  const {data, onPressDetail} = props;
  return (
    <Animated.View entering={FadeInLeft} style={styles.containerViewReceipt}>
      <View style={styles.headerViewReceipt}>
        <View style={styles.boxHeaderLeft}>
          <View style={styles.textHeaderTopLeft}>
            <Text style={styles.textIDCard}>Mã phiếu: </Text>
            <Text style={styles.textIdCardTopLeft} numberOfLines={1}>
              {data?.id || 'Không có id'}
            </Text>
          </View>
          <Text style={styles.nameHeaderTopLeft}>
            {data?.name || 'Không có tên'}
          </Text>
        </View>
        <TouchableOpacity style={styles.boxHeaderRight} onPress={onPressDetail}>
          <Text style={styles.textBtnHeaderRight}>Xem chi tiết</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.heightViewReceipt} />
      <View style={styles.contentViewRecipt}>
        <Text style={styles.titleContentViewRecipt}>
          {`${data?.clinic?.name} - ${data?.clinic?.location}`}
        </Text>
        <View style={styles.descriptionContentViewRecipt}>
          <RowItem
            title="Dịch vụ:"
            description={data?.service || 'Không có dịch vụ'}
          />
          <RowItem
            title="Chuyên khoa:"
            description={data?.department || 'Không có chuyên khoa'}
          />
          <RowItem
            title="Ngày khám:"
            description={formatDateIso(data?.appointmentDate) || 'No Date'}
            colorDescription={TEXT_PRIMARY}
          />
          <RowItem
            title="Thời gian dự kiến:"
            description={formatDateIso(data?.appointmentTime || 'No time')}
            colorDescription={TEXT_PRIMARY}
          />
          <RowItem
            title="Trạng thái:"
            description="Đặt khám thành công"
            colorDescription="green"
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default memo(ViewReceipt);
