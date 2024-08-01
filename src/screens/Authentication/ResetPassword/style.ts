import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

export const makeStyles = (theme: AppTheme, inset: EdgeInsets) =>
  StyleSheet.create({
    loginPage: {
      flex: 1,
      paddingTop: inset.top,
      backgroundColor: theme.colors.white,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    input: {
      color: theme.colors.gradient,
      fontSize: 20,
    },
    button: {
      marginTop: 20,
    },
    signInLink: {
      flexDirection: 'row',
      marginTop: 20,
    },
    signIn: {
      color: theme.colors.gradient,
      fontSize: 17,
    },
    label: {fontSize: 17},
  });
