import {AppTheme} from '@lib/theme';
import {Platform, StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.white,
    },
    skipButton: {
      alignSelf: 'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
    },
    skipButtonText: {
      fontSize: 16,
      color: '#4C4C4C',
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 400,
      height: 400,
      ...(Platform.OS === 'android'
        ? {
            marginTop: 100,
          }
        : {}),
    },
    image: {
      width: 200,
      height: 200,
      position: 'absolute',
      top: 120,
    },
    title: {
      fontSize: 24,
      fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
      color: theme.colors.gradient,
      marginBottom: 10,
    },
    description: {
      fontSize: 14,
      color: theme.colors.gray,
      textAlign: 'center',
      marginHorizontal: 20,
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 20,
    },
    paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#E0E0E0',
      marginHorizontal: 4,
    },
    paginationDotActive: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.colors.gradient,
      marginHorizontal: 4,
    },
    nextButton: {
      borderRadius: 25,
      marginBottom: 20,
    },
    nextButtonText: {
      fontSize: 18,
      color: theme.colors.white,
    },
  });
export default makeStyles;
