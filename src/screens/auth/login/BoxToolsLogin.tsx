import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';

const BoxToolsLogin = () => {
  return (
    <View style={styles.toolsBoxLogin}>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/icon_anh/facebook.png')}
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/icon_anh/google.png')}
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/icon_anh/icon_zalo.png')}
          style={{width: 40, height: 40}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(BoxToolsLogin);

const styles = StyleSheet.create({
  toolsBoxLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: 20,
  },
});
