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
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    input: {
      color: theme.colors.gradient,
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
      fontSize: 17,
    },
    signUpButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    signInLink: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    signIn: {
      color: theme.colors.gradient,
      fontSize: 17,
    },
    label: {fontSize: 17},
  });
