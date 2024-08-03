import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 31,
      flex: 1,
    },
    serviceContainer: {
      marginBottom: 10,
    },
    serviceHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.gradient,
      padding: 15,
      borderRadius: 25,
    },
    serviceName: {
      color: theme.colors.white,
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10,
      flex: 1,
    },
    serviceDescriptionContainer: {
      backgroundColor: '#e0f7fa',
      padding: 15,
      borderRadius: 10,
      marginTop: 5,
    },
    serviceDescription: {
      color: '#333',
      fontSize: 14,
    },
    footer: {
      backgroundColor: '#e0f7fa',
      padding: 10,
      borderRadius: 25,
      alignItems: 'center',
      marginTop: 20,
    },
    footerText: {
      color: '#333',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default makeStyles;
