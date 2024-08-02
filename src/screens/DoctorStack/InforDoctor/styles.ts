import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (_: AppTheme) =>
  StyleSheet.create({
    container: {
      gap: 40,
    },
  });

export default makeStyles;
