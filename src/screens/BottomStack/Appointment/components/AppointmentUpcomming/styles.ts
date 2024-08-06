import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
    },
    itemContainer: {
      padding: 10,
      marginVertical: 5,
      borderTopWidth: 1,
      borderColor: theme.colors.lighBlue,
      gap: 5,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    infoContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    info: {gap: 3},
    name: {
      fontWeight: 'bold',
      fontSize: 16,
      color: theme.colors.gradient,
    },
    specialty: {
      color: theme.colors.gray,
    },
    detailsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
      gap: 10,
    },
    detailsContainerButton: {
      flex: 1,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: theme.colors.gradient,
      paddingHorizontal: 10,
      paddingVertical: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dateTime: {
      color: theme.colors.black3,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    detailButton: {
      flex: 1,
      borderWidth: 1,
      borderRadius: 20,
      borderColor: theme.colors.gradient,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    detailButtonLabel: {
      fontSize: 20,
    },
    icons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 5,
    },
    iconButton: {
      borderWidth: 1,
      width: 40,
      borderRadius: 20,
      height: 40,
      borderColor: theme.colors.gradient,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default makeStyles;
