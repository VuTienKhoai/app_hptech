import {useCallback, useState} from 'react';
import {StatusType} from '../MedicalReport';
import {
  cancelledData,
  Completed,
  paidData,
  unpaidData,
} from '../../../data_fake/data_bill';
export const STATUS_DATA_MAP = {
  Unpaid: unpaidData,
  Paid: paidData,
  Cancelled: cancelledData,
  Completed: Completed,
} as const;
export const useMedicalReport = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [focusScreen, setFocusScreen] = useState<StatusType>('Unpaid');
  const [dataBill, setDataBill] = useState(STATUS_DATA_MAP[focusScreen]);

  const handleFocusScreen = useCallback(
    (value: StatusType) => {
      if (value === focusScreen) return;
      setIsLoading(true);
      setFocusScreen(value);
      requestAnimationFrame(() => {
        setDataBill(STATUS_DATA_MAP[value]);
        setIsLoading(false);
      });
    },
    [focusScreen],
  );
  return {
    handleFocusScreen,
    isLoading,
    dataBill,
    focusScreen,
  };
};
