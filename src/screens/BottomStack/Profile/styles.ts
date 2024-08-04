import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    backButton: {
      position: 'absolute',
      left: 25,
    },
    headerText: {
      color: theme.colors.white,
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: 16,
      marginTop: 2,
    },
    profileInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      gap: 10,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    profileDetails: {
      marginTop: 8,
    },
    profileName: {
      color: theme.colors.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
    profilePhone: {
      color: theme.colors.white,
      fontSize: 14,
      marginTop: 4,
    },
    profileEmail: {
      color: theme.colors.white,
      fontSize: 14,
      marginTop: 4,
    },
  });

export default makeStyles;
