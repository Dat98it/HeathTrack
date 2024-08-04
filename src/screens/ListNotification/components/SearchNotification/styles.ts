import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
      marginBottom: 10,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: theme.colors.gradient,
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 5,
      flex: 1,
      marginHorizontal: 10,
    },
    searchInput: {
      flex: 1,
      marginLeft: 5,
      color: theme.colors.gradient,
      height: 35,
    },
    markAllText: {
      color: theme.colors.gradient,
      fontWeight: 'bold',
    },
  });

export default makeStyles;
