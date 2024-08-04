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
      paddingHorizontal: 16,
      minHeight: 100,
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
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 16,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    editButton: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      backgroundColor: theme.colors.white,
      padding: 5,
      borderRadius: 20,
    },
    formContainer: {
      marginTop: 20,
    },
    inputContainer: {
      marginHorizontal: 20,
      marginVertical: 10,
    },
    label: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.black3,
      marginBottom: 5,
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
    },
    button: {
      borderRadius: 25,
      paddingVertical: 15,
      marginHorizontal: 20,
      marginTop: 20,
      alignItems: 'center',
      width: 200,
    },
    buttonText: {
      color: theme.colors.white,
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

export default makeStyles;
