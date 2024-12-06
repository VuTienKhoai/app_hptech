import {Dimensions, StyleSheet, View, ViewStyle} from 'react-native';
import React, {memo, useMemo} from 'react';
import LottieView from 'lottie-react-native';
const {width, height} = Dimensions.get('screen');
interface LoadingLottieProps {
  viewStyle?: ViewStyle;
}
const LoadingLottie = (props: LoadingLottieProps) => {
  const {viewStyle} = props;
  const styleAnimation = useMemo(() => {
    return {
      ...styles.animation,
      viewStyle,
    };
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/json/animationloading.json')}
        autoPlay
        loop
        style={styleAnimation}
      />
    </View>
  );
};

export default memo(LoadingLottie);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    height: height * 0.5,
    width: width * 0.5,
  },
});
