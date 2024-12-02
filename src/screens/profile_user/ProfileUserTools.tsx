import {ScrollView, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import {
  BACKGROUND_GRAY,
  BACKGROUND_WHITE,
  TEXT_COLORS_BLACK,
  TEXT_COLORS_DARK,
} from '../../constants/Color';
import ButtonAction from '../../components/button/ButtonAction';

interface IProfileUserTools {
  nameScreen: 'Unpaid' | 'Cancelled' | 'Paid' | 'FullyPaid';
  handlefocusScreen: (value: string) => void;
}

const ProfileUserTools = ({
  handlefocusScreen,
  nameScreen,
}: IProfileUserTools) => {
  const screens = [
    {title: 'Đã thanh toán', value: 'FullyPaid'},
    {title: 'Chưa thanh toán', value: 'Unpaid'},
    {title: 'Đã khám', value: 'Paid'},
    {title: 'Đã hủy', value: 'Cancelled'},
  ];

  return (
    <ScrollView
      horizontal
      style={styles.containerUserTools}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      {screens.map(screen => (
        <ButtonAction
          key={screen.value}
          title={screen.title}
          backgroundColor={
            nameScreen !== screen.value ? BACKGROUND_GRAY : undefined
          }
          styleText={{
            color:
              nameScreen !== screen.value
                ? TEXT_COLORS_BLACK
                : TEXT_COLORS_DARK,
          }}
          style={{borderRadius: 15}}
          onPress={handlefocusScreen.bind(null, screen.value)}
        />
      ))}
    </ScrollView>
  );
};

export default memo(ProfileUserTools);

const styles = StyleSheet.create({
  containerUserTools: {
    paddingVertical: 15,
    paddingHorizontal: 14,
    backgroundColor: BACKGROUND_WHITE,
  },
  contentContainer: {
    gap: 20,
    paddingRight: 30,
  },
});
