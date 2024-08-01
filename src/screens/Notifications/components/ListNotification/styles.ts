import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 24,
    },
    header: {
      padding: 10,
    },
    headerButton: {
      borderWidth: 1,
      width: 100,
      height: 33,
      borderColor: theme.colors.gradient,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,
      backgroundColor: theme.colors.white,
    },
    highlightedItem: {
      backgroundColor: theme.colors.lighBlue,
    },
    icon: {
      width: 46,
      height: 46,
      borderRadius: 10,
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      color: theme.colors.placeholder,
    },
    time: {
      fontSize: 14,
      color: theme.colors.placeholder,
      marginLeft: 10,
    },
  });

export default makeStyles;
