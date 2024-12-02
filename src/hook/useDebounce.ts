import {useEffect, useState} from 'react';

/**
 * Custom hook: useDebounce
 * @param value Giá trị cần debounce
 * @param delay Độ trễ debounce (mặc định 500ms)
 * @param enableDebounce Trạng thái bật/tắt debounce
 * @returns Giá trị sau khi debounce
 */
const useDebounce = (
  value: string,
  delay: number = 500,
  enableDebounce: boolean = true,
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    if (!enableDebounce) {
      // Nếu debounce bị tắt, cập nhật giá trị ngay lập tức
      setDebouncedValue(value);
      return;
    }

    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Xóa timeout khi giá trị thay đổi trước khi delay kết thúc
    };
  }, [value, delay, enableDebounce]);

  return debouncedValue;
};

export default useDebounce;
