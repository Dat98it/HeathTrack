import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {makeStyles} from './styles';

type GradientButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
};

export const GradientButton = ({
  label,
  onPress,
  disabled,
  style,
}: GradientButtonProps) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <LinearGradient
        colors={[theme.colors.startGradient, theme.colors.endGradient]}
        style={[styles.linearGradient, style]}>
        <Text style={styles.buttonText}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
