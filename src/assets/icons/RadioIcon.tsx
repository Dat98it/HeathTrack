import {TouchableOpacity} from '@components/TouchableOpacity';
import {useAppTheme} from '@hooks/theme';
import {DefaultTheme} from '@lib/theme';
import React, {FC} from 'react';
import {
  Circle,
  Defs,
  G,
  Rect,
  StrokeProps,
  Svg,
  ClipPath,
  FillProps,
} from 'react-native-svg';

type Props = {
  color?: keyof (typeof DefaultTheme)['colors'];
  size?: number;
  onPress?: () => void;
  checked?: boolean;
};

const RadioIcon: FC<Props> = ({
  color = 'caribbeanGreen',
  size = 20,
  onPress,
  checked,
}) => {
  const theme = useAppTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      {checked ? (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <Circle
            cx="10"
            cy="10"
            r="9.5"
            stroke={theme.colors[color] as StrokeProps['stroke']}
          />
          <Circle
            cx="10"
            cy="10"
            r="5.5"
            fill={theme.colors[color] as FillProps['fill']}
            stroke={theme.colors[color] as StrokeProps['stroke']}
          />
        </Svg>
      ) : (
        <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          <G clip-path="url(#clip0_7043_3189)">
            <Circle
              cx="10"
              cy="10"
              r="9.5"
              stroke={theme.colors[color] as StrokeProps['stroke']}
            />
            <Circle
              cx="10"
              cy="10"
              r="5.5"
              stroke={theme.colors[color] as StrokeProps['stroke']}
            />
          </G>
          <Defs>
            <ClipPath id="clip0_7043_3189">
              <Rect width={size} height={size} fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      )}
    </TouchableOpacity>
  );
};

export default RadioIcon;
