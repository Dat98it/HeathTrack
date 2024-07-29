import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '100%',
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.gray,
      marginBottom: 5,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.lighBlue,
      borderRadius: 16,
      paddingHorizontal: 10,
      minHeight: 53,
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: 50,
      fontFamily: 'League Spartan',
    },
    eyeIcon: {
      width: 24,
      height: 24,
      marginLeft: 10,
    },
    focused: {
      borderWidth: 2,
      borderColor: theme.colors.gradient,
    },
    paddingBottomPassword: {
      paddingBottom: 7,
    },
  });

export default makeStyles;
