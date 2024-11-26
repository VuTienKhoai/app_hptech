import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useCallback} from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import useRefreshControl from '../hook/useRefreshControl';
import MyTabBar from '../components/tabbar/MyTabbar';
import {dontShowHeader} from '../constants';
import Home from '../screens/home';
import {tabBarVisible} from '../screens/StackOptions';
import MedicalReport from '../screens/medical_report';
import ProfileUser from '../screens/profile_user';
import HomeUser from '../screens/user';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
export const RefreshContext = createContext<any>({
  isRefresh: false,
  setIsRefresh: null,
});

export default function MainTabNavigation() {
  const TabNavigator = createBottomTabNavigator();

  // refresh control
  const {refreshValue} = useRefreshControl();
  const renderTabBar = useCallback(
    (props: BottomTabBarProps) => <MyTabBar {...props} />,
    [],
  );
  return (
    <RefreshContext.Provider value={refreshValue}>
      <TabNavigator.Navigator
        key="tabNavigator"
        tabBar={renderTabBar}
        screenOptions={dontShowHeader}
        backBehavior="none">
        <TabNavigator.Screen
          key={'Home'}
          name="Home"
          component={Home}
          options={({route}) => ({
            tabBarLabel: 'Trang chủ',
            tabBarVisible: tabBarVisible(route),
          })}
        />
        <TabNavigator.Screen
          key={'ProfileUser'}
          name="ProfileUser"
          component={ProfileUser}
          options={({route}) => ({
            tabBarLabel: 'Hồ sơ',
            tabBarVisible: tabBarVisible(route),
          })}
        />

        <TabNavigator.Screen
          key={'Medicalreport'}
          name="Medicalreport"
          component={MedicalReport}
          options={({route}) => ({
            tabBarLabel: 'Phiếu khám',
            tabBarVisible: tabBarVisible(route),
          })}
        />
        <TabNavigator.Screen
          key={'User'}
          name="User"
          component={HomeUser}
          options={({route}) => ({
            tabBarLabel: 'Tài khoản',
            tabBarVisible: tabBarVisible(route),
          })}
        />
      </TabNavigator.Navigator>
    </RefreshContext.Provider>
  );
}

const styles = StyleSheet.create({});
