import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {StyleSheet, ViewProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const GradientView = ({style, children, ...props}: ViewProps) => {
  const theme = useAppTheme();
  const styles = StyleSheet.create({
    linearGradient: {
      minHeight: 30,
    },
  });

  return (
    <LinearGradient
      colors={[theme.colors.startGradient, theme.colors.endGradient]}
      style={[styles.linearGradient, style]}
      {...props}>
      {children}
    </LinearGradient>
  );
};
