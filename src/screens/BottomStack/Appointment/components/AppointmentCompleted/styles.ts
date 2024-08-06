import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {flex: 1, paddingHorizontal: 24},
    itemContainer: {
      padding: 10,
      marginVertical: 5,
      borderTopWidth: 1,
      borderColor: theme.colors.lighBlue,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    infoContainer: {
      flex: 1,
      gap: 15,
      flexDirection: 'row',
    },
    info: {gap: 5},
    name: {
      fontWeight: 'bold',
      color: theme.colors.gradient,
    },
    specialty: {
      color: 'gray',
    },
    icons: {flexDirection: 'row', gap: 10, alignItems: 'center'},
    iconLabel: {fontSize: 15},
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 10,
    },
    button: {
      flex: 1,
      padding: 10,
      borderWidth: 1,
      borderColor: theme.colors.gradient,
      borderRadius: 30,
      marginRight: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: theme.colors.black,
      fontWeight: 'bold',
    },
  });

export default makeStyles;
