import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: theme.colors.white,
      paddingHorizontal: 24,
    },
    focusContainer: {
      backgroundColor: theme.colors.lighBlue,
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 25,
      marginBottom: 16,
      minHeight: 80,
    },
    focusText: {
      fontSize: 15,
    },
    boldText: {
      fontWeight: 'bold',
    },
    section: {
      marginBottom: 16,
    },
    sectionTitle: {
      paddingVertical: 10,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: theme.colors.lighBlue,
      marginBottom: 11,
    },
    sectionTitleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.gradient,
    },
    sectionContent: {
      fontSize: 16,
      lineHeight: 24,
    },
  });

export default makeStyles;
