import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    innerContainer: {
      paddingHorizontal: 16,
      gap: 5,
    },
    time: {
      fontSize: 14,
      color: theme.colors.placeholder,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    description: {
      fontSize: 14,
      color: theme.colors.placeholder,
    },
  });

export default makeStyles;
