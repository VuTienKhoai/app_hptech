import {useCallback} from 'react';

export const useTopHospital = () => {
  const handleShowAllHospital = useCallback(() => {
    console.log('Hiển thị tất cả bệnh viện');
  }, []);
  const handleDetailHospital = useCallback((id: string) => {
    console.log(id);
  }, []);
  return {
    handleShowAllHospital,
    handleDetailHospital,
  };
};
