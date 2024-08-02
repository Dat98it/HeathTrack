import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeInnerStyles = (theme: AppTheme) =>
  StyleSheet.create({
    innerContainer: {
      paddingHorizontal: 10,
    },
    time: {
      fontSize: 14,
      color: theme.colors.placeholder,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      color: theme.colors.placeholder,
    },
  });

export default makeInnerStyles;
