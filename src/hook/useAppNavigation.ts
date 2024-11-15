import {useSelector} from 'react-redux';
import {getTokenState} from '../redux/slide/app.slice';

const useAppNavigation = () => {
  const isToken = useSelector(getTokenState);

  return {
    isToken,
  };
};

export default useAppNavigation;
