import {useAppTheme} from '@hooks/theme';
import {DefaultTheme} from '@lib/theme';
import React, {FC} from 'react';
import {Path, StrokeProps, Svg} from 'react-native-svg';

type Props = {
  color?: keyof (typeof DefaultTheme)['colors'];
  size?: number;
};

export const MoreIcon: FC<Props> = ({color = 'honeydew', size = 43}) => {
  const theme = useAppTheme();

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Path
        d="M2 20.2H41M21.0667 41V2"
        stroke={theme.colors[color] as StrokeProps['stroke']}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default MoreIcon;
