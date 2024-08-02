import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

const makeStyles = (theme: AppTheme, inset: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      marginTop: inset.top,
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
