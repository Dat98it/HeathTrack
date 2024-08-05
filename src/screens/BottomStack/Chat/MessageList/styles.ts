import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    messageContainer: {
      flexDirection: 'row',
      paddingVertical: 16,
      paddingHorizontal: 24,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    textContainer: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    header: {},
    name: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    time: {
      color: theme.colors.placeholder,
      fontSize: 14,
    },
    message: {
      color: theme.colors.placeholder,
      fontSize: 16,
      marginTop: 4,
    },
  });

export default makeStyles;
