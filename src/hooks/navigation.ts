import {AppRootStackParams} from '@lib/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp<AppRootStackParams>>();

  return navigation;
};
