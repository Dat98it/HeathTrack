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
      justifyContent: 'space-between',
      backgroundColor: theme.colors.gradient,
      paddingVertical: 23,
      paddingHorizontal: 16,
    },
    headerText: {
      color: '#fff',
      fontSize: 27,
      fontWeight: 'bold',
    },
    headerIcons: {flexDirection: 'row', gap: 6},
    headerIcon: {
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
    messageList: {
      flex: 1,
      paddingHorizontal: 31.5,
    },
    messageBubble: {
      padding: 19,
      borderRadius: 10,
      marginVertical: 24,
      maxWidth: '80%',
    },
    userBubble: {
      backgroundColor: theme.colors.lighBlue,
      alignSelf: 'flex-end',
    },
    doctorBubble: {
      borderWidth: 1,
      borderColor: theme.colors.gradient,
      alignSelf: 'flex-start',
    },
    messageText: {
      fontSize: 16,
    },
    timeText: {
      fontSize: 14,
      color: '#888',
    },
    avatar: {
      width: 30,
      height: 30,
      borderRadius: 15,
    },
    typingIndicator: {
      padding: 10,
      color: theme.colors.gradient,
    },
    inputContainer: {
      flexDirection: 'row',
      paddingVertical: 17,
      paddingHorizontal: 31,
      backgroundColor: theme.colors.gradient,
      gap: 8,
    },
    input: {
      flex: 1,
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: theme.colors.white,
    },
    InpuIcon: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: theme.colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default makeStyles;
