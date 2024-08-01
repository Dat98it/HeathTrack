import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: theme.colors.white,
    },
    logo: {
      width: 150,
      height: 150,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.gradient,
      marginTop: 10,
      marginBottom: 80,
    },
    subtitle: {
      fontSize: 14,
      textAlign: 'center',
      color: '#7e7e7e',
      paddingHorizontal: 20,
      marginBottom: 30,
    },
    groupButton: {gap: 20},
    button: {
      width: 207,
      height: 45,
      borderRadius: 30,
    },
    buttonText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
    },
    signupButton: {
      backgroundColor: '#e0f7fa',
      justifyContent: 'center',
      alignItems: 'center',
      height: 53,
    },
    signupButtonText: {
      color: theme.colors.gradient,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default makeStyles;
