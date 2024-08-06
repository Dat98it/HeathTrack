/* eslint-disable react-native/no-inline-styles */
import {View} from '@components/View';
import {useAppTheme} from '@hooks/theme';
import {DefaultTheme} from '@lib/theme';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity, ViewStyle} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = ViewStyle & {
  backgroundColor?: keyof (typeof DefaultTheme)['colors'];
  placeholderTextColor?: keyof (typeof DefaultTheme)['colors'];
  placeholder?: string;
  value?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
};

export const Input: React.FC<Props> = ({
  backgroundColor,
  placeholderTextColor,
  value,
  placeholder,
  secureTextEntry,
  editable,
  ...props
}) => {
  const theme = useAppTheme();

  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

  return (
    <View>
      <TextInput
        value={value}
        secureTextEntry={!secureTextEntry ? false : isSecureTextEntry}
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={{
          width: '100%',
          minHeight: 50,
          borderRadius: 20,
          paddingHorizontal: 24,
          fontSize: 16,
          ...(backgroundColor && {
            backgroundColor: theme.colors[
              backgroundColor
            ] as ViewStyle['backgroundColor'],
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
