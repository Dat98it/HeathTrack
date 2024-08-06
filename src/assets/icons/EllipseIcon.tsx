import {useAppTheme} from '@hooks/theme';
import React, {FC} from 'react';
import {Circle, Svg} from 'react-native-svg';

type Props = {color?: string; size?: number; active?: boolean};

const EllipseIcon: FC<Props> = ({color, size = 13, active}) => {
  const theme = useAppTheme();

  return active ? (
    <Svg width={size} height={size} viewBox="0 0 13 13" fill="none">
      <Circle
        cx="6.5"
        cy="6.5"
        r="6.5"
        fill={color ?? theme.colors.caribbeanGreen}
      />
    </Svg>
  ) : (
    <Svg width={size} height={size} viewBox="0 0 13 13" fill="none">
      <Circle
        cx="6.5"
        cy="6.5"
        r="5.5"
        stroke={theme.colors.cyprus}
        strokeWidth="2"
      />
    </Svg>
  );
};

export default EllipseIcon;
