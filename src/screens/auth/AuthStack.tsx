import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './login';
import Register from './register';
import ForgotPassword from './forgot_password';

export type AuthStackParams = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};
const Stack = createNativeStackNavigator<AuthStackParams>();
export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerTitle: '', // Tắt title của header
          headerTitleAlign: 'center',
          headerShown: false,
          headerTintColor: '#FFFFFF', // Màu của nút back
        }}
      />
    </Stack.Navigator>
  );
}
