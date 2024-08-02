import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const itemSize = 50,
  gapSize = 21;

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingVertical: 18,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
    },
    lisItem: {
      width: 4 * itemSize + gapSize * 3,
    },
    contentContainer: {gap: gapSize},
    itemContainer: {
      height: itemSize,
      width: itemSize,
      borderRadius: 10,
      backgroundColor: theme.colors.gradient,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default makeStyles;
