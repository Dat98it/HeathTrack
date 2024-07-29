import {EyeIcon} from '@assets/index';
import {useAppTheme} from '@hooks/theme';
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import makeStyles from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  LeftIcon?: React.FC;
  RightIcon?: React.FC;
  isPassword?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  LeftIcon,
  RightIcon,
  isPassword,
}) => {
  const theme = useAppTheme();
  const styles = makeStyles(theme);

  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, isFocused && styles.focused]}>
        {LeftIcon && (
          <View style={styles.icon}>
            <LeftIcon />
          </View>
        )}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          {...(isPassword && {
            secureTextEntry,
          })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {RightIcon && (
          <TouchableOpacity onPress={toggleSecureTextEntry}>
            <View style={styles.eyeIcon}>
              <EyeIcon
                color={isFocused ? theme.colors.gradient : theme.colors.black}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
