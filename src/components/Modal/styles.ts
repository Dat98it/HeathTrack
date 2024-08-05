import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme, position?: 'bottom' | 'center') =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      backgroundColor: theme.colors.transparent,
      justifyContent: position === 'bottom' ? 'flex-end' : 'center',
      ...(position === 'center' && {alignItems: 'center'}),
    },
    modalView: {
      backgroundColor: theme.colors.white,
      padding: 20,
      width: position === 'bottom' ? '100%' : '90%',
      maxHeight: '80%',
      shadowColor: theme.colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      minHeight: 242,
    },
    content: {
      flex: 1,
    },
  });

export default makeStyles;
