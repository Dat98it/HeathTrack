import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: theme.colors.gradient,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      borderBottomWidth: 1,
      borderColor: theme.colors.white,
      paddingVertical: 7,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: theme.colors.white,
    },
    month: {
      fontSize: 20,
      color: theme.colors.white,
    },
    datesContainer: {
      marginBottom: 20,
    },
    dateItem: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 60,
      height: 80,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: theme.colors.white,
      marginHorizontal: 6,
    },
    dateNumber: {
      fontSize: 24,
      color: theme.colors.white,
    },
    dateText: {
      fontSize: 19,
      color: theme.colors.white,
    },
    selectedDateItem: {
      backgroundColor: theme.colors.white,
    },
    selectedDateItemLabel: {
      color: theme.colors.gradient,
    },
    selectedDateNumber: {
      color: theme.colors.gradient,
    },
    selectedDateText: {
      color: theme.colors.gradient,
    },
    scheduleContainer: {
      padding: 19,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.white,
      justifyContent: 'center',
      gap: 10,
    },
    scheduleHeader: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    scheduleTitle: {
      fontSize: 16,
      color: theme.colors.white,
    },
    scheduleItem: {
      borderTopWidth: 1,
      borderColor: theme.colors.white,
      justifyContent: 'center',
      paddingVertical: 10,
      gap: 5,
    },
    scheduleTime: {flexDirection: 'row', alignItems: 'center', gap: 8},
    scheduleTimeLabel: {
      fontSize: 20,
      color: theme.colors.white,
    },
    scheduleDetails: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.white,
      marginLeft: 15,
    },
  });

export default makeStyles;
