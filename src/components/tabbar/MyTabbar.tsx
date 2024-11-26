import React, {useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  TEXT_PRIMARY,
  TEXT_COLORS_GRAY,
  BACKGROUND_WHITE,
} from '../../constants/Color';
import TabbarIcon from './TabbarIcon';

const {width} = Dimensions.get('screen');

interface IMyTabbar {
  state: any;
  descriptors: any;
  navigation: any;
}

function MyTabBar({state, descriptors, navigation}: IMyTabbar) {
  const insets = useSafeAreaInsets();
  const tabWidth = width / state.routes.length; // Chiều rộng của từng tab
  const translateX = useSharedValue(0); // Vị trí của thanh trượt

  useEffect(() => {
    translateX.value = withTiming(state.index * tabWidth, {duration: 300}); // Cập nhật vị trí của thanh trượt khi tab thay đổi
  }, [state.index]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <View style={[styles.containerMytabBar]}>
      {/* Thanh trượt Animated */}
      <Animated.View
        style={[
          styles.indicator,
          animatedStyle,
          {width: tabWidth}, // Thanh trượt có chiều rộng bằng 1 tab
        ]}
      />
      {/* Danh sách các tab */}

      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={1}
            style={styles.btnNavigationTab}>
            <View style={styles.box_iconMytabBar}>
              <TabbarIcon focused={isFocused} name={route.name} />
            </View>
            <Text
              style={[
                styles.textTabNavigation,
                {color: isFocused ? TEXT_PRIMARY : TEXT_COLORS_GRAY},
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;

const styles = StyleSheet.create({
  containerMytabBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 60,
    backgroundColor: BACKGROUND_WHITE,
  },
  textTabNavigation: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 15,
  },
  btnNavigationTab: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
    height: '100%',
  },
  indicator: {
    position: 'absolute',
    top: 0, // Vị trí của thanh trượt
    height: 2, // Độ dày của thanh trượt
    backgroundColor: TEXT_PRIMARY, // Màu sắc của thanh trượt
  },
  box_iconMytabBar: {
    width: 30,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
