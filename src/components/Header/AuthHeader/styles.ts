import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) => {
  return StyleSheet.create({
    header: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      marginBottom: 10,
    },
    backButton: {position: 'absolute', left: 15},
    title: {
      fontSize: 27,
      fontWeight: 'bold',
      color: theme.colors.white,
      marginTop: 4,
    },
  });
};

export default makeStyles;
