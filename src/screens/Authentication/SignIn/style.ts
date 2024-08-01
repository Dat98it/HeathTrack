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
      width: '100%',
    },
    input: {
      color: theme.colors.gradient,
      fontSize: 20,
    },
    forgotPassword: {
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '100%',
      marginBottom: 33,
    },
    forgotPasswordLabel: {
      color: theme.colors.gradient,
      fontSize: 17,
    },
    or: {
      textAlign: 'center',
      marginVertical: 20,
      fontSize: 16,
      color: theme.colors.gray,
    },
    fingerprintButton: {
      marginBottom: 20,
    },
    signUpLink: {
      marginTop: 20,
      flexDirection: 'row',
    },
    signUp: {
      color: theme.colors.gradient,
      fontSize: 17,
    },
    label: {fontSize: 17},
  });
