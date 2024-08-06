import {useAppTheme} from '@hooks/theme';
import {DefaultTheme} from '@lib/theme';
import React, {ReactNode} from 'react';
import {TouchableOpacity as RNTouchableOpacity, ViewStyle} from 'react-native';

type ViewProps = ViewStyle & {
  children?: ReactNode;
  backgroundColor?: keyof (typeof DefaultTheme)['colors'];
  borderColor?: keyof (typeof DefaultTheme)['colors'];
};

export const TouchableOpacity: React.FC<ViewProps> = ({
  children,
  backgroundColor,
  borderColor,
  ...props
}) => {
  const theme = useAppTheme();

  return (
    <RNTouchableOpacity
      style={{
        ...(backgroundColor && {
          backgroundColor: theme.colors[
            backgroundColor
          ] as ViewStyle['backgroundColor'],
        }),
        ...(borderColor && {
          borderColor: theme.colors[borderColor] as ViewStyle['borderColor'],
        }),
        ...props,
      }}>
      {children}
    </RNTouchableOpacity>
  );
};
