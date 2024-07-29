import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

export const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    linearGradient: {
      minHeight: 40,
    },
    buttonText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
      color: theme.colors.white,
    },
  });
