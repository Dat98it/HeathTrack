import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.gradient,
    },
    seeAll: {
      fontSize: 16,
      color: theme.colors.gradient,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    gridItem: {
      width: '30%',
      height: 94,
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      backgroundColor: theme.colors.gradient,
      borderRadius: 18,
    },
    gridIcon: {
      height: 45,
      width: 45,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gridText: {
      marginTop: 10,
      fontSize: 17,
      color: theme.colors.white,
      textAlign: 'center',
    },
  });

export default makeStyles;
