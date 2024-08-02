import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

const makeStyles = (theme: AppTheme, inset: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      paddingTop: inset.top,
      gap: 19,
    },
    buttons: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 5,
      paddingHorizontal: 31,
    },
    activeButton: {
      flex: 1,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.gradient,
    },
    activeButtonText: {
      color: theme.colors.white,
      fontSize: 20,
      fontWeight: 'bold',
    },
    inActiveButton: {
      flex: 1,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: theme.colors.gradient,
    },
    inActiveButtonText: {
      color: theme.colors.gradient,
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

export default makeStyles;
