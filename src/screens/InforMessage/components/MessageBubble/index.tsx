/* eslint-disable react-native/no-inline-styles */
import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {View} from 'react-native';
import makeStyles from '../../styles';

export const MessageBubble = ({text, isUser, time}: any) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <View
      style={[
        styles.messageBubble,
        isUser ? styles.userBubble : styles.doctorBubble,
      ]}>
      <Text style={styles.messageText}>{text}</Text>
      <Text
        style={{
          ...styles.timeText,
          alignSelf: isUser ? 'flex-start' : 'flex-end',
          position: 'absolute',
          bottom: -20,
          ...(isUser ? {right: 0} : {left: 0}),
        }}>
        {time}
      </Text>
    </View>
  );
};
