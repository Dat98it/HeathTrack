import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      padding: 20,
      gap: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      paddingVertical: 11,
      borderBottomWidth: 2,
      borderColor: theme.colors.lighBlue,
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
    menu: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    category: {width: 23, height: 23},
    menuItem: {
      alignItems: 'center',
    },
    menuText: {
      marginTop: 5,
      fontSize: 14,
      color: theme.colors.gradient,
    },
  });

export default makeStyles;
