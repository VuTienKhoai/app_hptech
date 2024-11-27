import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {BACKGROUND_BLUE} from '../../constants/Color';
import ListContentHome from './ListContentHome';
import ListHospital from './components/ListHospital';
import ListBanner from './components/ListBanner';
import TopHospitals from './TopHospitals';
import ListDoctorCallVideo from './ListDoctorCallVideo';
import ListHealthy from './ListHealthy';
const {width} = Dimensions.get('screen');
const ContentHome = () => {
  return (
    <View style={styles.containerContnetHome}>
      <ImageBackground
        source={require('../../assets/images/image_background/background_home.png')}
        resizeMode="cover">
        <View style={styles.box_contentHome}>
          <ListContentHome />
          <ListHospital />
          <ListBanner />
          <TopHospitals />
          <ListDoctorCallVideo />
          <ListHealthy />
        </View>
      </ImageBackground>
    </View>
  );
};

export default memo(ContentHome);

const styles = StyleSheet.create({
  containerContnetHome: {
    flex: 1,
    backgroundColor: BACKGROUND_BLUE,
  },

  box_contentHome: {
    flex: 1,
    paddingHorizontal: 14,
    paddingBottom: 100,
  },
  boxItemService: {
    width: width * 0.3,
    padding: 10,
  },
});
