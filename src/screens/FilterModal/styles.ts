import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const itemSize = 50,
  gapSize = 18;

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.transparent,
    },
    modalContent: {
      width: '90%',
      paddingHorizontal: 16,
      paddingVertical: 24,
      backgroundColor: theme.colors.white,
      borderRadius: 10,
      gap: 15,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.colors.gradient,
      textAlign: 'center',
    },
    resetButton: {
      alignSelf: 'flex-end',
    },
    resetText: {
      color: theme.colors.gradient,
      fontWeight: 'bold',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 8,
    },
    colum: {
      flexDirection: 'column',
      gap: 10,
    },
    label: {
      fontSize: 16,
      color: theme.colors.black,
    },
    genderContainer: {
      flexDirection: 'row',
    },
    genderButton: {
      padding: 8,
      borderWidth: 1,
      borderColor: theme.colors.gray,
      borderRadius: 8,
      marginHorizontal: 4,
      minWidth: 83,
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedButton: {
      backgroundColor: theme.colors.gradient,
      borderWidth: 0,
    },
    unselectedText: {
      color: theme.colors.black,
    },
    selectedText: {
      color: theme.colors.white,
    },
    ratingContainer: {
      flexDirection: 'row',
    },
    experienceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    experienceButton: {
      padding: 8,
      borderWidth: 1,
      borderColor: theme.colors.gray,
      borderRadius: 8,
      width: '30%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    specialtyContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    specialtyButton: {
      height: itemSize,
      width: itemSize,
      borderRadius: 10,
      backgroundColor: theme.colors.gradient,
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedSpecialtyButton: {
      backgroundColor: theme.colors.gradient,
    },
    lisItem: {
      width: 4 * itemSize + gapSize * 3,
    },
    contentContainer: {gap: gapSize},
    itemContainer: {
      height: itemSize,
      width: itemSize,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: theme.colors.gradient,
      borderWidth: 1,
    },
    selectedItemContainer: {
      backgroundColor: theme.colors.gradient,
    },
    ageText: {
      fontSize: 16,
      color: theme.colors.black,
    },
    slider: {width: '100%', height: 40},
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    },
    cancelButton: {
      width: '45%',
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 20,
      borderColor: theme.colors.gradient,
    },
    submitButton: {
      width: '45%',
      height: 42,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.gradient,
    },
    cancelButtonLabel: {
      color: theme.colors.gradient,
      fontSize: 20,
    },
    submitButtonLabel: {
      color: theme.colors.white,
      fontSize: 20,
    },
  });

export default makeStyles;
