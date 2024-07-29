import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

export const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    linearGradient: {
      minHeight: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
      color: theme.colors.white,
      fontFamily: 'League Spartan',
      lineHeight: 24,
    },
  });
