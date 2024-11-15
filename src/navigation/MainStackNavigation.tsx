import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import MedicalReport from '../screens/medical_report';
import ProfileUser from '../screens/profile_user';

export type MainStackParams = {
  Home: undefined;
  MedicalReport: undefined;
  ProfileUser: undefined;
};
const Stack = createNativeStackNavigator<MainStackParams>();
export default function MainStackNavigation() {
  return (
    <View style={styles.containerAuthStack}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
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
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAuthStack: {
    flex: 1,
  },
});
