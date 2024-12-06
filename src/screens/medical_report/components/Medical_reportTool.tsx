import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {
  BACKGROUND_GRAY,
  TEXT_COLORS_BLACK,
  TEXT_COLORS_DARK,
} from '../../../constants/Color';
import {BACKGROUND_WHITE} from '../../../constants/Color';
import ButtonAction from '../../../components/button/ButtonAction';
import {StatusType} from '../MedicalReport';

interface IMedical_reportTool {
  nameScreen: 'Unpaid' | 'Cancelled' | 'Paid' | 'Completed';
  handlefocusScreen: (value: StatusType) => void;
}
const Medical_reportTool = ({
  handlefocusScreen,
  nameScreen,
}: IMedical_reportTool) => {
  const screens: {title: string; value: StatusType}[] = [
    {title: 'Đã thanh toán', value: 'Completed'},
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

export default memo(Medical_reportTool);

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
