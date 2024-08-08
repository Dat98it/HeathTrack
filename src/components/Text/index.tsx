/* eslint-disable react-native/no-inline-styles */
import {useAppTheme} from '@hooks/theme';
import {DefaultTheme} from '@lib/theme';
import React, {ReactNode} from 'react';
import {Text as RNText, TextProps, TextStyle} from 'react-native';

type Props = TextStyle & {
  children: ReactNode;
  color?: keyof (typeof DefaultTheme)['colors'];
  numberOfLines?: number;
  ellipsizeMode?: TextProps['ellipsizeMode'];
};

export const Text: React.FC<Props> = ({
  numberOfLines,
  children,
  color = 'void',
  ellipsizeMode,
  ...props
}) => {
  const theme = useAppTheme();

  return (
    <RNText
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={{
        fontFamily: 'Poppins-Regular',
        ...(color && {
          color: theme.colors[color] as TextStyle['color'],
        }),
        ...props,
      }}>
      {children}
    </RNText>
  );
};
