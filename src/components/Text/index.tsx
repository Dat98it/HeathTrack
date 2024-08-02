import React from 'react';
import {StyleSheet, Text as RNText, TextStyle, Platform} from 'react-native';

type Props = {
  style?: TextStyle;
  children: React.ReactNode;
  numberOfLines?: number;
};
export const Text = ({style, children, ...props}: Props) => {
  const styles = makeStyles();
  return (
    <RNText {...props} style={[styles.text, style]}>
      {children}
    </RNText>
  );
};

const makeStyles = () =>
  StyleSheet.create({
    text: {
      fontFamily: 'League Spartan',
      fontWeight: Platform.OS === 'ios' ? '400' : 'bold',
      color: 'black',
    },
  });
