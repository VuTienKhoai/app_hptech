import {ActivityIndicator} from 'react-native';
import React, {memo} from 'react';
import {BACKGROUND} from '../../constants/Color';

type LoadingProps = {
  color?: string;
  size?: number | 'large' | 'small' | undefined;
};

const Loading = (props: LoadingProps) => {
  const {color, size = 'large'} = props;
  return <ActivityIndicator size={size} color={color || BACKGROUND} />;
};

export default memo(Loading);
