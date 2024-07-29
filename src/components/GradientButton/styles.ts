import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

export const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {width: '100%'},
    linearGradient: {
      minHeight: 53,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      borderRadius: 16,
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
