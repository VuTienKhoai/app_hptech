import Toast from 'react-native-toast-message';

interface IShowToastCustom {
  text1?: string;
  text2?: string;
  typeStatus?: 'error' | 'success' | 'info';
  //   type: "customToast";
}

const ShowToastCustom = (props: IShowToastCustom) => {
  const {text1, text2, typeStatus} = props;
  Toast.show({
    type: 'ToastCustom',
    props: {text1, text2, typeStatus},
    position: 'top',
  });
};

export default ShowToastCustom;
