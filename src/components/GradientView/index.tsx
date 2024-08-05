import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {StyleSheet, ViewProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = ViewProps & {onPress?: () => void};

export const GradientView = ({style, children, ...props}: Props) => {
  const theme = useAppTheme();
  const styles = StyleSheet.create({
    linearGradient: {
      minHeight: 30,
    },
  });

  return (
    <LinearGradient
      onTouchStart={props.onPress}
      colors={[theme.colors.startGradient, theme.colors.endGradient]}
      style={[styles.linearGradient, style]}
      {...props}>
      {children}
    </LinearGradient>
  );
};
