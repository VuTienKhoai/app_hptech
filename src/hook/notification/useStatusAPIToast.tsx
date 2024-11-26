import ShowToastCustom from '../../components/notification/ShowToast';

export const useStatusAPIToast = () => {
  // Hàm chung để xử lý lỗi
  const handleError = (error: any, defaultMessage: string) => {
    console.log('Lỗi API:', error);
    ShowToastCustom({text1: defaultMessage, typeStatus: 'error'});
  };
  return {handleError};
};
