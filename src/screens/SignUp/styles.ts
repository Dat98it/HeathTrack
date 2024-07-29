import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

export const makeStyles = (theme: AppTheme, inset: EdgeInsets) =>
  StyleSheet.create({
    signUpPage: {
      flex: 1,
      paddingTop: inset.top,
      backgroundColor: theme.colors.white,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
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
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    passwordIcon: {
      position: 'absolute',
      right: 10,
    },
    terms: {
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
    },
    termsLink: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
    },
    link: {
      color: theme.colors.gradient,
    },
    signUpButton: {
      minWidth: 190,
      borderRadius: 25,
      backgroundColor: theme.colors.gradient,
      maxHeight: 50,
      marginTop: 8,
    },
    signUpButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    orText: {
      fontSize: 16,
      color: '#000',
      textAlign: 'center',
      marginVertical: 12,
    },
    fingerprintButton: {
      marginBottom: 20,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    signInLink: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    signIn: {
      color: theme.colors.gradient,
    },
  });
