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
      gap: 10,
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
    info: {
      gap: 3,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
      color: theme.colors.gradient,
    },
    specialty: {
      color: theme.colors.gray,
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
  });

export default makeStyles;
