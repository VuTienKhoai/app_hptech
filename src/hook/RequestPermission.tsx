import React from 'react';
import {Alert, Platform} from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

export const RequestPermission = async () => {
  const permission =
    Platform.OS === 'android' ? PERMISSIONS.ANDROID.READ_PHONE_NUMBERS : null; // Quyền tương ứng với Android

  if (!permission) return;

  // Kiểm tra trạng thái quyền
  const status = await check(permission);

  if (status === RESULTS.DENIED || status === RESULTS.BLOCKED) {
    // Nếu quyền bị từ chối hoặc chặn
    const result = await request(permission);

    if (result === RESULTS.GRANTED) {
      console.log('Đã cấp quyền truy cập số điện thoại.');
    } else if (result === RESULTS.BLOCKED) {
      console.log('Quyền bị từ chối và chặn trong cài đặt.');
      Alert.alert(
        'Quyền bị từ chối',
        'Bạn cần vào Cài đặt để cấp quyền truy cập số điện thoại.',
        [
          {text: 'Hủy', style: 'cancel'},
          {
            text: 'Cài đặt',
            onPress: () => {
              openSettings()
                .then(() => console.log('Đã mở trang cài đặt'))
                .catch(() => console.log('Không thể mở trang cài đặt'));
            },
          },
        ],
      );
    } else {
      console.log('Người dùng chưa cấp quyền truy cập số điện thoại.');
    }
  } else if (status === RESULTS.GRANTED) {
    // Quyền đã được cấp
    console.log('Đã cho phép truy cập số điện thoại.');
  }
};
