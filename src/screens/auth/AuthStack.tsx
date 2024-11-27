import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './login';
import Register from './register';
import ForgotPassword from './forgot_password';
import {OtpAuth} from './fillOtpScreen';
import OtpForgotPassword from './fillOtpScreen/OtpForgotPassword';

export type AuthStackParams = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  OtpAuth: {
    otpToken: string;
  };
  OtpForgotPassword: {
    otpToken: string;
  };
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
      <Stack.Screen name="OtpAuth" component={OtpAuth} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OtpForgotPassword" component={OtpForgotPassword} />
    </Stack.Navigator>
  );
}
