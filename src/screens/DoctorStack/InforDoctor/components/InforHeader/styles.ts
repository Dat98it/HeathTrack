import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

const makeStyles = (theme: AppTheme, inset: EdgeInsets) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.gradient,
      padding: 16,
      minHeight: 245,
      marginTop: inset.top,
    },
    headerIcons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 23,
    },
    rightIcons: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
    },
    rightIconsItem: {
      flexDirection: 'row',
      gap: 5,
    },
    scheduleButton: {
      flexDirection: 'row',
      backgroundColor: theme.colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      borderRadius: 20,
      gap: 10,
    },
    scheduleButtonText: {
      fontWeight: 'bold',
      color: theme.colors.gradient,
      fontSize: 14,
    },
    iconsButton: {
      padding: 5,
      backgroundColor: theme.colors.white,
      borderRadius: 30,
    },
    iconsButtonOutline: {
      padding: 5,
      borderRadius: 30,
      borderColor: theme.colors.white,
      borderWidth: 1,
    },
    profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
      flex: 1,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    profileInfo: {
      marginLeft: 16,
    },
    name: {
      color: theme.colors.white,
      fontSize: 18,
      fontWeight: 'bold',
    },
    title: {
      color: theme.colors.white,
      fontSize: 14,
    },
    rating: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
      gap: 10,
    },
    ratingButton: {
      flexDirection: 'row',
      backgroundColor: theme.colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 7,
      paddingHorizontal: 10,
      borderRadius: 20,
    },
    ratingText: {
      marginLeft: 4,
      marginRight: 16,
      fontSize: 16,
    },
    additionalInfo: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 7,
    },
    infoBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 20,
      borderColor: theme.colors.gradient,
      backgroundColor: theme.colors.white,
    },
    infoText: {
      color: theme.colors.black,
      marginLeft: 8,
      fontSize: 15,
    },
  });

export default makeStyles;
