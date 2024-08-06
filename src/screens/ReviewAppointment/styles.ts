import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    contentContainer: {
      padding: 20,
    },
    description: {
      textAlign: 'center',
      color: theme.colors.placeholder,
      marginVertical: 10,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      alignSelf: 'center',
    },
    doctorName: {
      textAlign: 'center',
      color: theme.colors.gradient,
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    doctorTitle: {
      textAlign: 'center',
      color: theme.colors.placeholder,
      fontSize: 14,
    },
    ratingContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
      gap: 5,
    },

    stars: {
      flexDirection: 'row',
      padding: 5,
      borderWidth: 1,
      borderColor: theme.colors.gradient,
      borderRadius: 20,
    },
    commentInput: {
      borderWidth: 1,
      borderColor: theme.colors.gray,
      borderRadius: 10,
      padding: 10,
      textAlignVertical: 'top',
      height: 100,
      marginBottom: 20,
    },
    button: {
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      width: '100%',
    },
    buttonText: {
      color: theme.colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default makeStyles;
