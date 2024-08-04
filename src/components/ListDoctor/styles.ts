import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
    },
    grid: {
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
    categoryButton: {
      width: '48%',
      aspectRatio: 1,
      backgroundColor: theme.colors.gradient,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    categoryIcon: {
      width: 54,
      height: 54,
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoryText: {
      color: theme.colors.white,
      marginTop: 8,
      textAlign: 'center',
      fontSize: 20,
    },
  });

export default makeStyles;
