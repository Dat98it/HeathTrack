import {AppTheme} from '@lib/theme';
import {Platform, StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme, focused: boolean) =>
  StyleSheet.create({
    container: {
      height: 50,
      width: 50,
      ...(focused && {
        backgroundColor: focused ? theme.colors.gradient : theme.colors.white,
      }),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 17,
      ...(Platform.OS === 'ios' && {marginBottom: 1}),
    },
  });

export default makeStyles;
