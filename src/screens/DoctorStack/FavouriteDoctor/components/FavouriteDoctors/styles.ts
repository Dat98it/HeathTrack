import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 31,
      padding: 16,
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderRadius: 8,
      borderTopWidth: 1,
      borderColor: theme.colors.lighBlue,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 16,
    },
    info: {
      flex: 1,
    },
    professional: {
      color: theme.colors.gradient,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    specialization: {
      color: theme.colors.placeholder,
      marginBottom: 8,
    },
    button: {
      backgroundColor: theme.colors.gradient,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 20,
    },
    buttonText: {
      color: theme.colors.white,
      fontWeight: 'bold',
    },
    icon: {
      marginLeft: 16,
    },
  });

export default makeStyles;
