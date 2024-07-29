import React from 'react';
import {StyleSheet, Text as RNText, TextStyle} from 'react-native';

type Props = {
  style?: TextStyle;
  children: React.ReactNode;
};
export const Text = ({style, children}: Props) => {
  const styles = makeStyles();
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

const makeStyles = () =>
  StyleSheet.create({
    text: {
      fontFamily: 'League Spartan',
    },
  });
