import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
    },
    buttonLabel: {
      color: theme.colors.white,
    },
    button: {
      minWidth: 150,
    },
    userWrapper: {
      gap: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    userInfo: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    appVersion: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    appVersionText: {
      fontSize: 12,
    },
  });
};

export default makeStyles;
