import {FlatList, View} from 'react-native';
import React, {useCallback} from 'react';
import TextHeader from '../../components/text/TextHeader';
import {Medical_reportTool} from './components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TypeAppointmentCard} from '../../type/typeCard';
import ViewReceipt from './components/ViewReceipt';
import {LoadingLottie} from '../../components/loading';
import {stylesMedicalReport as styles} from './styles/stylesMedicalReport';
import {STATUS_DATA_MAP, useMedicalReport} from './hook/useMedical_report';

export type StatusType = keyof typeof STATUS_DATA_MAP;
export default function MedicalReport() {
  const insets = useSafeAreaInsets();
  const {handleFocusScreen, isLoading, dataBill, focusScreen} =
    useMedicalReport();

  const renderItemBill = useCallback(({item}: {item: TypeAppointmentCard}) => {
    return <ViewReceipt data={item} />;
  }, []);

  return (
    <View style={[styles.containerProfileUser]}>
      <View style={[styles.boxTitleHeader, {paddingTop: insets.top + 10}]}>
        <TextHeader
          title="Danh sách phiếu khám"
          styleText={styles.textHeaderUser}
        />
      </View>
      <View style={styles.contentProfileUser}>
        <Medical_reportTool
          handlefocusScreen={handleFocusScreen}
          nameScreen={
            focusScreen as 'Unpaid' | 'Cancelled' | 'Paid' | 'Completed'
          }
        />
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <LoadingLottie />
        </View>
      ) : (
        <FlatList
          data={dataBill}
          keyExtractor={item => item.id}
          renderItem={renderItemBill}
          initialNumToRender={10} // Giới hạn số item render ban đầu
          maxToRenderPerBatch={10} // Giới hạn số item render mỗi batch
          windowSize={5} // Giới hạn window size
          removeClippedSubviews // Gỡ bỏ views không visible
          contentContainerStyle={styles.listBillUser}
          showsVerticalScrollIndicator={false}
          style={styles.contentListBillUser}
          extraData={focusScreen} // Thêm extraData để theo dõi trạng thái focusScreen
        />
      )}
    </View>
  );
}
