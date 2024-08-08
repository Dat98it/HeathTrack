/* eslint-disable react-native/no-inline-styles */
import {View} from '@components/View';
import {useAppTheme} from '@hooks/theme';
import {DefaultTheme} from '@lib/theme';
import React, {useState} from 'react';
import {
  KeyboardType,
  TextInput,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = ViewStyle &
  TextStyle & {
    backgroundColor?: keyof (typeof DefaultTheme)['colors'];
    placeholderTextColor?: keyof (typeof DefaultTheme)['colors'];
    color?: keyof (typeof DefaultTheme)['colors'];
    placeholder?: string;
    value?: string;
    secureTextEntry?: boolean;
    editable?: boolean;
    initialPadding?: boolean;
    maxLength?: number;
    keyboardType?: KeyboardType;
    onChangeText?: (text: string) => void;
  };

export const Input: React.FC<Props> = ({
  backgroundColor,
  placeholderTextColor,
  value,
  placeholder,
  secureTextEntry,
  editable,
  initialPadding = true,
  maxLength,
  color,
  keyboardType,
  onChangeText,
  ...props
}) => {
  const theme = useAppTheme();

  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

  return (
    <View>
      <TextInput
        keyboardType={keyboardType}
        value={value}
        maxLength={maxLength}
        secureTextEntry={!secureTextEntry ? false : isSecureTextEntry}
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
        style={{
          width: '100%',
          height: 50,
          borderRadius: 20,
          ...(initialPadding && {paddingHorizontal: 24}),
          fontSize: 16,
          ...(backgroundColor && {
            backgroundColor: theme.colors[
              backgroundColor
            ] as ViewStyle['backgroundColor'],
          }),
          ...(color && {
            color: theme.colors[color] as TextStyle['color'],
          }),
          ...(secureTextEntry && {paddingRight: 40}),
          ...props,
        }}
      />

      {secureTextEntry && (
        <View
          position="absolute"
          right={12}
          top={15}
          justifyContent="center"
          alignItems="center">
          <TouchableOpacity
            onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}>
            <Ionicons
              name={isSecureTextEntry ? 'eye-off' : 'eye'}
              size={20}
              color={theme.colors.cyprus}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
