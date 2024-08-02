import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 15,
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
