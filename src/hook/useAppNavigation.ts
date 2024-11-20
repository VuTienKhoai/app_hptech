import {useSelector} from 'react-redux';
import {getCookiesState, getTokenState} from '../redux/slide/app.slice';

const useAppNavigation = () => {
  const cookies = useSelector(getCookiesState);
  return {
    cookies,
  };
};

export default useAppNavigation;
