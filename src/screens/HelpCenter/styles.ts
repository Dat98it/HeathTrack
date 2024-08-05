import {AppTheme} from '@lib/theme';
import {StyleSheet} from 'react-native';

const makeStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    tabsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10,
      gap: 10,
    },
    tabButton: {
      paddingVertical: 11,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.gradient,
      width: '40%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedTab: {
      backgroundColor: theme.colors.gradient,
    },
    tabText: {
      color: theme.colors.gradient,
      fontSize: 20,
    },
    selectedTabText: {
      color: theme.colors.white,
    },
    categoriesContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10,
      paddingHorizontal: 30,
    },
    categoryButton: {
      paddingVertical: 8,
      paddingHorizontal: 5,
      borderRadius: 20,
      marginHorizontal: 5,
      borderWidth: 1,
      borderColor: theme.colors.gradient,
      width: '30%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedCategory: {
      backgroundColor: theme.colors.gradient,
    },
    categoryText: {
      color: theme.colors.gradient,
      fontSize: 18,
    },
    selectedCategoryText: {
      color: theme.colors.white,
    },
    faqItem: {
      marginHorizontal: 16,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    faqQuestionSelected: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.colors.gradient,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
    },
    faqQuestionSelectedText: {
      color: theme.colors.white,
      fontSize: 18,
    },
    faqQuestion: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: theme.colors.gradient,
      borderWidth: 1,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
    },
    faqQuestionText: {
      color: theme.colors.gradient,
      fontSize: 18,
      fontWeight: 'bold',
    },
    faqAnswerContainer: {paddingHorizontal: 20},
    faqAnswer: {
      marginTop: 10,
      color: theme.colors.black3,
      fontSize: 14,
    },

    list: {
      paddingHorizontal: 32,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      gap: 21,
    },
    iconContainer: {
      width: 50,
      height: 50,
      marginRight: 16,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      flex: 1,
      fontSize: 20,
      color: theme.colors.black3,
    },
  });

export default makeStyles;
