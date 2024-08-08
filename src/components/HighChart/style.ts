import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (_: AppTheme) => {
  return StyleSheet.create({
    full: {
      flex: 1,
      backgroundColor: 'transparent',
    },
  });
};

export default makeStyles;
