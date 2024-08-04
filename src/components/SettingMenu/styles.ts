import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    list: {
      marginTop: 16,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    itemIcon: {
      backgroundColor: theme.colors.gradient,
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemText: {
      flex: 1,
      marginLeft: 21,
      fontSize: 20,
    },
  });

export default makeStyles;
