import React, {useState, useEffect, useCallback, memo} from 'react';
import {Text, StyleSheet} from 'react-native';
import {TEXT_COLORS_GRAY} from '../../constants/Color';

interface TypingEffectTextProps {
  text: string; // Chuỗi text cần gõ
  speed: number; // Tốc độ gõ chữ (ms)
  delay: number; // Thời gian chờ trước khi bắt đầu lại
}

const TypingEffectText = ({
  text,
  speed = 100,
  delay = 1000,
}: TypingEffectTextProps) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false); // Trạng thái xóa chữ
  const [currentIndex, setCurrentIndex] = useState(0); // Sử dụng state để theo dõi index
  const typeEffect = useCallback(() => {
    if (!isDeleting) {
      // Gõ chữ
      if (currentIndex < text.length) {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsDeleting(true); // Khi gõ xong, chuyển sang chế độ xóa
      }
    } else {
      // Xóa chữ
      if (currentIndex > 0) {
        setCurrentText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      } else {
        setIsDeleting(false); // Khi xóa hết, chuyển lại trạng thái gõ
      }
    }
  }, [currentIndex, isDeleting, text]);

  useEffect(() => {
    const intervalId = setInterval(typeEffect, speed); // Thiết lập interval

    return () => {
      clearInterval(intervalId); // Dọn dẹp interval khi component unmount
    };
  }, [typeEffect, speed]); // Phụ thuộc vào typeEffect và speed

  useEffect(() => {
    if (currentIndex === text.length && !isDeleting) {
      // Khi gõ xong tất cả chữ, đợi một thời gian rồi xóa
      const timeoutId = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex(0); // Reset lại từ đầu
        setIsDeleting(false); // Chuyển về chế độ gõ lại
      }, delay);

      return () => clearTimeout(timeoutId); // Dọn dẹp timeout
    }
  }, [currentIndex, isDeleting, text.length, delay]);

  return <Text style={styles.text}>{currentText}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: TEXT_COLORS_GRAY,
    lineHeight: 25,
  },
});

export default memo(TypingEffectText);
