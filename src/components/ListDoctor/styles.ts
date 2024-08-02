import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

const makeStyles = (theme: AppTheme, inset: EdgeInsets) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      marginBottom: inset.bottom,
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
