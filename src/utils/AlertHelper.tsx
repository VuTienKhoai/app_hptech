import {Alert} from 'react-native';
import {IAlert} from './type';

export const AlertHelper = ({
  title,
  message,
  negativeButton,
  positiveButton,
  confirmCallback,
}: IAlert) => {
  Alert.alert(title, message, [
    {
      text: negativeButton,
      style: 'cancel',
    },
    {text: positiveButton, onPress: confirmCallback},
  ]);
};
