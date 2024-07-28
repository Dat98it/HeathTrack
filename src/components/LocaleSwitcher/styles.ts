import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      maxHeight: 50,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    menuButton: {
      width: 50,
      height: 30,
      backgroundColor: theme.colors.primary,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    menuButtonLabel: {
      color: theme.colors.white,
      fontSize: 15,
    },
    menuContentStyle: {marginTop: -5},
    menuSelected: {
      backgroundColor: theme.colors.primary,
    },
  });
};

export default makeStyles;
