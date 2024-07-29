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
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: theme.colors.gradient2,
    },
    welcome: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 40,
      color: theme.colors.gradient2,
    },
    forgotPassword: {
      color: theme.colors.gradient2,
      textAlign: 'right',
      alignSelf: 'flex-end',
      marginVertical: 20,
    },
    button: {
      width: '100%',
      borderRadius: 25,
      backgroundColor: theme.colors.gradient2,
    },
    buttonContent: {
      height: 50,
    },
    buttonLabel: {
      fontSize: 18,
      color: theme.colors.white,
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
    signUp: {
      textAlign: 'center',
      color: theme.colors.gradient2,
      marginTop: 20,
    },
  });
