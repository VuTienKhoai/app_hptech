import {Text, TouchableOpacity, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {TEXT_PRIMARY} from '../../../constants/Color';
import {TypeAppointmentCard} from '../../../type/typeCard';
import Animated, {FadeInLeft} from 'react-native-reanimated';
import {RowItem} from '../../../components';
import {stylesReceipt as styles} from '../styles/stylesViewReceipt';
import {formatDateIso, formatTimeIso} from '../../../utils/format';
import {SvgXml} from 'react-native-svg';
import {
  icon_arrowRight,
  icon_ShowAll,
} from '../../../assets/svg/home/icon_arrowRight';
interface IViewReceipt {
  data?: TypeAppointmentCard;
  onPressDetail?: () => void;
}
const ViewReceipt = (props: IViewReceipt) => {
  const {data, onPressDetail} = props;
  const formatStatus = useCallback(
    (status: string | undefined): {label: string; color: string} => {
      switch (status) {
        case 'Unpaid':
          return {label: 'Chưa thanh toán', color: 'red'};
        case 'Paid':
          return {label: 'Đã khám', color: 'green'};
        case 'Cancelled':
          return {label: 'Đã hủy', color: 'gray'};
        case 'Completed':
          return {label: 'Đặt khám thành công', color: 'green'};
        default:
          return {label: 'Không xác định', color: 'black'};
      }
    },
    [],
  );
  const statusInfo = formatStatus(data?.status);
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
          <SvgXml xml={icon_ShowAll} />
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
          {data?.appointmentDate && (
            <RowItem
              title="Ngày khám:"
              description={formatDateIso(data?.appointmentDate) || 'No Date'}
              colorDescription={TEXT_PRIMARY}
            />
          )}
          {data?.appointmentTime && (
            <RowItem
              title="Thời gian dự kiến:"
              description={formatTimeIso(data?.appointmentTime || 'No time')}
              colorDescription={TEXT_PRIMARY}
            />
          )}

          <RowItem
            title="Trạng thái:"
            description={statusInfo?.label}
            colorDescription={statusInfo?.color}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default memo(ViewReceipt);
