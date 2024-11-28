import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import MedicalReport from '../screens/medical_report';
import ProfileUser from '../screens/profile_user';
import MainTabNavigation from './MainTabNavigation';
import Appointment_booking from '../screens/appointment_booking/Appointment_booking';
import {Specialty} from '../screens/home/specialty';

export type MainStackParams = {
  MainTabNavigation: undefined;
  Home: undefined;
  MedicalReport: undefined;
  ProfileUser: undefined;
  Appointment_booking: undefined;
  Specialty: undefined;
};
const Stack = createNativeStackNavigator<MainStackParams>();

export default function MainStackNavigation() {
  return (
    <View style={styles.containerAuthStack}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="MedicalReport"
          component={MedicalReport}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfileUser"
          component={ProfileUser}
          options={{
            headerTitle: '', // Tắt title của header
            headerTitleAlign: 'center',
            headerShown: false,
            headerTintColor: '#FFFFFF', // Màu của nút back
          }}
        />
        <Stack.Screen
          name="Appointment_booking"
          component={Appointment_booking}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Specialty"
          component={Specialty}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAuthStack: {
    flex: 1,
  },
});
