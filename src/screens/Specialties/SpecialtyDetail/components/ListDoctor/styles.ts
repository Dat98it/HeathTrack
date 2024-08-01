import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

const makeStyles = (theme: AppTheme, inset: EdgeInsets) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      marginBottom: inset.bottom,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    sortBy: {
      marginRight: 8,
      fontSize: 17,
    },
    sortButton: {
      borderRadius: 20,
      marginRight: 8,
      height: 35,
      width: 70,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 5,
    },
    sortButtonText: {
      color: theme.colors.white,
      fontSize: 17,
    },
    filterButton: {
      borderRadius: 20,
      marginRight: 8,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      width: 70,
      borderColor: theme.colors.gradient,
      borderWidth: 1,
    },
    filterButtonText: {
      color: theme.colors.gradient,
      fontSize: 17,
    },
    doctors: {
      marginLeft: 'auto',
      flexDirection: 'row',
      alignItems: 'center',
    },
    doctorsLabel: {
      fontSize: 20,
      color: theme.colors.gradient,
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
