import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      paddingVertical: 15,
      alignItems: 'center',
      marginVertical: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 10,
    },
    buttonText: {
      color: theme.colors.primary,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
};

export default makeStyles;
