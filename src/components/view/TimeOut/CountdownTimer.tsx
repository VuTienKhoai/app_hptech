import {StyleSheet, Text, View} from 'react-native';
import React, {memo, useEffect, useRef, useState} from 'react';
import {theme} from '../../../constants/Theme';
interface ResendOtpButtonProps {
  initialTime?: number; // Thời gian đếm ngược mặc định (giây
}
const CountdownTimer = ({initialTime = 180}: ResendOtpButtonProps) => {
  const [timer, setTimer] = useState(initialTime); // Hiển thị thời gian
  const timerRef = useRef(initialTime); // Lưu giá trị thời gian mà không trigger re-render

  const startTimer = () => {
    timerRef.current = initialTime;
    setTimer(timerRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (timerRef.current > 0) {
        timerRef.current -= 1;
        setTimer(timerRef.current); // Cập nhật hiển thị
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    startTimer(); // Bắt đầu đếm ngược khi component mount

    return () => {
      // Xóa interval khi component unmount
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <View>
      <Text style={styles.titleTimer}>
        {timer > 0 ? `(${formatTime(timer)})` : 'Gửi lại mã'}
      </Text>
    </View>
  );
};

export default memo(CountdownTimer);

const styles = StyleSheet.create({
  titleTimer: {
    ...theme.fontConfig.Default.Title,
    fontSize: 18,
    marginTop: 10,
  },
});
