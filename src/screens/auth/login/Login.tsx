import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Login() {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.xtmobile.vn/vnt_upload/news/06_2024/Hinh-nen-gau-dau-phat-sang-cho-dien-thoai-1-xrmobile.jpg',
      }}
      resizeMode={'cover'}
      style={{flex: 1, backgroundColor: 'red', paddingTop: insets.top}}>
      <Text>Login</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
