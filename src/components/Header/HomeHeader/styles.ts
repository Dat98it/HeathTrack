import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.colors.white,
      paddingHorizontal: 10,
      paddingVertical: 15,
    },
    iconsContainer: {
      flexDirection: 'row',
      gap: 5,
    },
    icon: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: theme.colors.lighBlue,
      justifyContent: 'center',
      alignItems: 'center',
    },
    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    userInfo: {
      alignItems: 'flex-end',
    },
    welcomeText: {
      fontSize: 18,
      color: theme.colors.gradient,
    },
    userName: {
      fontSize: 16,
      color: '#000',
      marginLeft: 8,
    },
    imageContainer: {
      marginLeft: 8,
      position: 'relative',
    },
    userImage: {
      width: 50,
      height: 50,
      borderRadius: 20,
    },
    cameraIcon: {
      position: 'absolute',
      bottom: -5,
      right: -5,
      backgroundColor: theme.colors.lighBlue,
      borderRadius: 20,
      width: 25,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default makeStyles;
