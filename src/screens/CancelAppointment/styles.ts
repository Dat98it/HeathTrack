import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: theme.colors.white,
    },
    scrollView: {
      padding: 20,
    },
    description: {
      marginVertical: 10,
      fontSize: 14,
      color: theme.colors.black3,
      textAlign: 'center',
    },
    reasonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    reasonText: {
      marginLeft: 10,
      fontSize: 16,
      color: theme.colors.black3,
    },
    additionalInfo: {
      marginVertical: 10,
      fontSize: 14,
      color: theme.colors.gradient,
      textAlign: 'center',
    },
    textInput: {
      height: 100,
      borderRadius: 10,
      padding: 15,
      backgroundColor: theme.colors.lighBlue,
      textAlignVertical: 'top',
    },
    cancelButton: {
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
    },
    cancelButtonText: {
      color: theme.colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default makeStyles;
