import React, {memo, useRef, useEffect, useState, useCallback} from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SvgXml} from 'react-native-svg';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

// Constants
import {
  BACKGROUND,
  BACKGROUND_WHITE,
  TEXT_COLORS_BLACK,
  TEXT_COLORS_GRAY,
} from '../../constants/Color';

// Icons
import {icon_Back} from '../../assets/svg/auth/iconBack';
import {icon_search} from '../../assets/svg/home/icon_search';
import useDebounce from '../../hook/useDebounce';

// Props Interface
interface IHeaderInputSearch {
  onPressLeft?: () => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  enableDebounce?: boolean;
  value?: string;
}

const {width} = Dimensions.get('screen');

const HeaderInputSearch = ({
  onPressLeft,
  onSearch,
  placeholder = 'Tìm CSYT/bác sĩ/chuyên khoa',
  autoFocus = false,
  enableDebounce = true,
  value = '',
}: IHeaderInputSearch) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const inputRef = useRef<TextInput>(null);

  const [inputValue, setInputValue] = useState(value);
  const debouncedValue = useDebounce(inputValue, 500, enableDebounce);

  // Cập nhật `onSearch` khi `debouncedValue` thay đổi
  useEffect(() => {
    if (onSearch) onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  // Đồng bộ `value` từ props vào state
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Hàm xử lý khi nhấn nút Back
  const handleOnPressLeft = useCallback(() => {
    if (onPressLeft) {
      onPressLeft();
    } else {
      navigation.goBack();
    }
  }, [onPressLeft]);

  // Auto-focus TextInput nếu prop `autoFocus` bật
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.content}>
        {/* Nút Back */}
        <TouchableOpacity style={styles.backButton} onPress={handleOnPressLeft}>
          <SvgXml xml={icon_Back} />
        </TouchableOpacity>

        {/* Input Search */}
        <Animated.View
          entering={FadeInDown.duration(500)}
          style={styles.searchBox}>
          <TextInput
            ref={inputRef}
            placeholder={placeholder}
            placeholderTextColor={TEXT_COLORS_GRAY}
            style={styles.textInput}
            value={inputValue}
            onChangeText={setInputValue} // Ghi nhận giá trị nhập
          />
          <View style={styles.iconSearch}>
            <SvgXml xml={icon_search} />
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

export default memo(HeaderInputSearch);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginTop: 10,
    paddingHorizontal: width * 0.03,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BACKGROUND_WHITE,
    paddingHorizontal: 14,
    marginTop: 10,
    borderRadius: 30,
    justifyContent: 'space-between',
    flex: 1,
  },
  textInput: {
    height: 45,
    color: BACKGROUND,
    fontSize: 15,
    flex: 1,
  },
  iconSearch: {
    marginLeft: 10,
  },
});
