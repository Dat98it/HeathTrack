import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      padding: 20,
      paddingTop: 40,
    },
    backButton: {
      position: 'absolute',
      left: 20,
      top: 40,
      zIndex: 1,
    },
    title: {
      fontSize: 32,
      color: theme.colors.white,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 17,
      color: theme.colors.white,
      textAlign: 'center',
      marginVertical: 10,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.white,
      borderRadius: 25,
      paddingHorizontal: 20,
      marginTop: 10,
    },
    searchIcon: {
      marginRight: 10,
    },
    searchInput: {
      flex: 1,
      height: 50,
      color: theme.colors.gradient,
      fontSize: 17,
    },
  });

export default makeStyles;
