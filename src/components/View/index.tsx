import {useAppTheme} from '@hooks/theme';
import {DefaultTheme} from '@lib/theme';
import React, {ReactNode} from 'react';
import {View as RNView, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type ViewProps = ViewStyle & {
  children?: ReactNode;
  allowInset?: boolean;
  backgroundColor?: keyof (typeof DefaultTheme)['colors'];
};

export const View: React.FC<ViewProps> = ({
  children,
  allowInset,
  backgroundColor,
  ...props
}) => {
  const insset = useSafeAreaInsets();
  const theme = useAppTheme();

  return (
    <RNView
      style={{
        ...(backgroundColor && {
          backgroundColor: theme.colors[
            backgroundColor
          ] as ViewStyle['backgroundColor'],
        }),
        ...(allowInset && {
          paddingTop: insset.top,
        }),
        ...props,
      }}>
      {children}
    </RNView>
  );
};
