import {useAppTheme} from '@hooks/theme';
import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {makeStyles} from './styles';
import Octicons from 'react-native-vector-icons/Octicons';

type GradientButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  rightIcon?: boolean;
};

export const GradientButton = ({
  label,
  onPress,
  disabled,
  style,
  rightIcon,
}: GradientButtonProps) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}>
      <LinearGradient
        colors={[theme.colors.startGradient, theme.colors.endGradient]}
        style={[styles.linearGradient, style]}>
        <Text style={styles.buttonText}>{label}</Text>
        {rightIcon && (
          <Octicons name="arrow-right" size={30} color={theme.colors.white} />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};
