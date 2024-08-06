import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 16,
    },
    filterButton: {
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: theme.colors.gradient,
      borderRadius: 20,
      marginHorizontal: 3,
    },
    filterButtonActive: {
      paddingVertical: 8,
      paddingHorizontal: 15,
      backgroundColor: theme.colors.gradient,
      borderRadius: 20,
      marginHorizontal: 3,
    },
    filterText: {
      color: theme.colors.black3,
      fontWeight: 'bold',
      fontSize: 16,
    },
    filterTextActive: {
      color: theme.colors.white,
      fontWeight: 'bold',
      fontSize: 16,
    },
  });

export default makeStyles;
