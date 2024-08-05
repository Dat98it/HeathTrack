import {Text} from '@components/Text';
import {useAppTheme} from '@hooks/theme';
import React from 'react';
import makeStyles from '../../styles';

export const TypingIndicator = () => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return <Text style={styles.typingIndicator}>Dr. Emma is typing...</Text>;
};
