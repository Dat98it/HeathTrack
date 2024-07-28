import {AppTheme} from '@lib/theme';
import {Platform, StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme, focused: boolean) =>
  StyleSheet.create({
    container: {
      height: 50,
      width: 50,
      ...(focused && {
        backgroundColor: theme.colors.white,
      }),
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 17,
      ...(Platform.OS === 'ios' && {marginTop: 30}),
      paddingTop: 10,
    },
    lineBottom: {
      height: 5,
      width: 25,
      backgroundColor: theme.colors.primary,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
  });

export default makeStyles;
