import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    doctorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderColor: theme.colors.lighBlue,
      marginHorizontal: 27,
      gap: 13,
    },
    doctorImage: {
      width: 107,
      height: 107,
      borderRadius: 30,
    },
    doctorDetails: {
      flex: 1,
      gap: 15,
    },
    doctorNameContainer: {gap: 6},
    doctorName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.gradient,
    },
    doctorSpecialization: {
      fontSize: 16,
      color: theme.colors.gray,
    },
    infoButton: {
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.gradient,
      paddingVertical: 5,
      minWidth: 55,
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoButtonText: {
      fontSize: 16,
      color: theme.colors.gradient,
    },
    iconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    iconList: {
      flexDirection: 'row',
      gap: 15,
    },
  });

export default makeStyles;
