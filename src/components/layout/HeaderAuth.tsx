import {
  Dimensions,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useCallback, useMemo} from 'react';
import {SvgXml} from 'react-native-svg';
import {theme} from '../../constants/Theme';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

interface IHeaderAuth {
  title?: string;
  iconRight?: string;
  iconLeft?: string;
  onPressRight?: () => void;
  onPressLeft?: () => void;
  styleTitle?: TextStyle;
}
const HeaderAuth = (props: IHeaderAuth) => {
  const {title, iconRight, iconLeft, onPressRight, onPressLeft, styleTitle} =
    props;
  const navigation: any = useNavigation();
  const handleNavigation = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const titleStyle = useMemo(
    () => [styles.titleHeader, styleTitle],
    [styleTitle],
  );
  return (
    <View style={styles.containerHeader}>
      <View style={styles.boxIconLeft}>
        {(onPressLeft || iconLeft) && (
          <TouchableOpacity
            onPress={onPressLeft ? onPressLeft : handleNavigation}>
            {iconLeft && <SvgXml xml={iconLeft} />}
          </TouchableOpacity>
        )}
      </View>
      <Text style={titleStyle} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.boxIconRight}>
        {onPressRight && (
          <TouchableOpacity onPress={onPressRight}>
            {iconRight && <SvgXml xml={iconRight} />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default memo(HeaderAuth);

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    padding: 14,
    alignItems: 'center',
  },
  boxIconRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  boxIconLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  titleHeader: {
    ...theme.fontConfig.Default.Title,
    textAlign: 'center',
    maxWidth: windowWidth * 0.8,
  },
});
