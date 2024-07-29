import {useAppTheme} from '@hooks/theme';
import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import makeStyles from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  LeftIcon?: React.FC;
  rightIcon?: boolean;
  isPassword?: boolean;
  allowFocusStyle?: boolean;
  placeholderTextColor?: string;
  inputStyle?: TextStyle;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  LeftIcon,
  rightIcon,
  isPassword,
  allowFocusStyle,
  placeholderTextColor,
  inputStyle,
  error,
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
      <View
        style={[
          styles.inputContainer,
          isFocused && allowFocusStyle && styles.focused,
        ]}>
        {LeftIcon && (
          <View style={styles.icon}>
            <LeftIcon />
          </View>
        )}
        <TextInput
          style={[
            styles.input,
            inputStyle,
            isPassword &&
              secureTextEntry &&
              value !== undefined &&
              styles.paddingBottomPassword,
          ]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          {...(isPassword && {
            secureTextEntry,
          })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {rightIcon && (
          <TouchableOpacity onPress={toggleSecureTextEntry}>
            <View style={styles.eyeIcon}>
              <Feather
                size={20}
                name={secureTextEntry ? 'eye-off' : 'eye'}
                color={isFocused ? theme.colors.gradient : theme.colors.black}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
