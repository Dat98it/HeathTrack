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
      padding: 15,
    },
    headerTitle: {
      color: theme.colors.white,
      fontSize: 18,
      marginLeft: 10,
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      marginHorizontal: 32,
      marginVertical: 14,
      backgroundColor: theme.colors.white,
      borderRadius: 17,
    },
    profileImage: {
      width: 68,
      height: 68,
      borderRadius: 50,
    },
    profileDetails: {
      marginLeft: 15,
      justifyContent: 'space-between',
      gap: 2,
    },
    profileName: {
      color: theme.colors.gradient,
      fontSize: 18,
      fontWeight: 'bold',
    },
    profileSpecialty: {
      color: theme.colors.black3,
      fontSize: 14,
    },
    profileStats: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    profileStatText: {
      color: theme.colors.black3,
      marginLeft: 5,
      marginRight: 15,
    },
    appointmentDetails: {
      paddingVertical: 15,
      marginHorizontal: 32,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.lighBlue,
    },
    appointmentDate: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    appointmentDateGradient: {
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      paddingVertical: 6,
      paddingHorizontal: 15,
      borderRadius: 20,
    },
    appointmentDateText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.white,
    },
    appointmentActions: {
      flexDirection: 'row',
      gap: 5,
    },
    appointmentIconButton: {
      backgroundColor: theme.colors.gradient,
      width: 35,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    appointmentTime: {
      fontSize: 14,
      color: theme.colors.gray,
      marginTop: 5,
      marginLeft: 15,
    },
    infoSection: {
      paddingVertical: 15,
      marginHorizontal: 32,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.lighBlue,
    },
    infoSectionItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    infoLabel: {
      fontSize: 14,
      color: theme.colors.black3,
    },
    infoValue: {
      fontSize: 16,
      marginBottom: 10,
    },
    problemSection: {
      paddingVertical: 15,
      marginHorizontal: 32,
    },
    problemLabel: {
      fontSize: 14,
      color: theme.colors.gray,
    },
    problemText: {
      fontSize: 14,
      color: theme.colors.black3,
      marginTop: 5,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 15,
      marginHorizontal: 32,
    },
    paymentButton: {
      borderColor: theme.colors.gradient,
      borderWidth: 1,
      width: '45%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    cancelButton: {
      backgroundColor: theme.colors.gradient,
      width: '45%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    cancelButtonText: {
      color: theme.colors.white,
    },
  });

export default makeStyles;
