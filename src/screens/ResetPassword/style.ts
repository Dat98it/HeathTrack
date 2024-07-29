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
      marginTop: 30,
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: theme.colors.white,
    },
    input: {
      color: theme.colors.gradient,
      fontWeight: '400',
      fontSize: 20,
    },
    button: {
      minWidth: 190,
      borderRadius: 25,
      backgroundColor: theme.colors.gradient,
      maxHeight: 50,
      paddingHorizontal: 23.5,
      marginTop: 20,
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
    signInLink: {
      marginTop: 20,
      flexDirection: 'row',
    },
    signIn: {
      color: theme.colors.gradient,
    },
  });
