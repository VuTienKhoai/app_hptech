import {useCallback, useEffect, useState} from 'react';
import {dataHealthy, IDataHealthy} from '../../../data_fake/dataHealthy';
import {CareCategory} from '../../../constants/DataCategory';

export const useListHealthy = () => {
  const [selected, setSelected] = useState<string>(CareCategory[0].value);
  const [filteredData, setFilteredData] = useState<IDataHealthy[]>(dataHealthy); // Lưu dữ liệu đã lọc
  const handleShowListHealthy = useCallback(() => {
    console.log('Hiển thị tất cả danh sách sức khỏe');
  }, []);
  const handleSelectedCategory = useCallback((category: string) => {
    setSelected(category);
  }, []);

  const handleDetailHealthy = useCallback((id: string) => {
    console.log('Mã gói sức khỏe', id);
  }, []);
  const handleHeathyOrder = useCallback((id: string) => {
    console.log('Mã gói sức khỏe đặt khám', id);
  }, []);

  const keyExtractorCategory = useCallback((item: CareCategory) => {
    return item.id;
  }, []);
  useEffect(() => {
    const filterData = dataHealthy.filter(prev => prev.category === selected);
    setFilteredData(filterData); // Cập nhật dữ liệu đã lọc vào state
  }, [selected]);
  return {
    selected,
    filteredData,
    setFilteredData,
    handleShowListHealthy,
    handleSelectedCategory,
    handleDetailHealthy,
    handleHeathyOrder,
    keyExtractorCategory,
  };
};
