import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import MedicalReport from '../screens/medical_report';
import MainTabNavigation from './MainTabNavigation';
import Appointment_booking from '../screens/appointment_booking/Appointment_booking';
import {Specialty} from '../screens/home/specialty';
import {ProfileUser} from '../screens';
import {HomeTermOfService, PrivacyPolicy, UsageRules} from '../screens/user';

export type MainStackParams = {
  MainTabNavigation: undefined;
  Home: undefined;
  MedicalReport: undefined;
  ProfileUser: undefined;
  Appointment_booking: undefined;
  Specialty: undefined;
  ProfileUserStack: undefined;
  UsageRules: undefined;
  PrivacyPolicy: undefined;
  TermOfService: undefined;
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
            headerShown: false,
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
        <Stack.Screen
          name="UsageRules"
          component={UsageRules}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TermOfService"
          component={HomeTermOfService}
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
