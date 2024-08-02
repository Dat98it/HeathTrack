import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 24,
    },
    header: {
      padding: 10,
    },
    headerButton: {
      borderWidth: 1,
      width: 100,
      height: 33,
      borderColor: theme.colors.gradient,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default makeStyles;
