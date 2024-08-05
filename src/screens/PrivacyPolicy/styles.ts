import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    headerText: {
      color: theme.colors.white,
      fontSize: 24,
      fontWeight: 'bold',
    },
    content: {
      padding: 20,
    },
    lastUpdate: {
      fontSize: 14,
      color: theme.colors.placeholder,
      marginBottom: 20,
    },
    paragraph: {
      fontSize: 16,
      color: theme.colors.black3,
      marginBottom: 20,
      lineHeight: 24,
    },
    sectionHeader: {
      fontSize: 20,
      color: theme.colors.gradient,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });

export default makeStyles;
