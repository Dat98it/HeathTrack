import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    contentWrapper: {
      paddingVertical: 20,
      paddingHorizontal: 31,
      flex: 1,
      justifyContent: 'space-between',
    },
    inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.lighBlue,
      borderRadius: 15,
      paddingHorizontal: 10,
    },
    input: {
      flex: 1,
      height: 52,
      fontSize: 16,
    },
    icon: {
      marginLeft: 10,
    },
    forgotPassword: {
      color: theme.colors.gradient,
      marginTop: 5,
      textAlign: 'right',
      fontSize: 18,
    },
    changePasswordButton: {
      backgroundColor: theme.colors.gradient,
      borderRadius: 25,
      paddingVertical: 15,
      alignItems: 'center',
      marginTop: 20,
    },
    changePasswordButtonText: {
      color: theme.colors.white,
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

export default makeStyles;
