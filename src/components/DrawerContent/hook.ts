import {auth, userSelector} from '@redux/reducer/auth';
import {useDispatch, useSelector} from 'react-redux';

export const useCustomDrawerContent = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSelector);

  const onLogout = () => {
    dispatch(auth({user: null, token: ''}));
  };

  return {onLogout, user};
};
